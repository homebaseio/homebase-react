goog.provide('devcards.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$highlight_DOT_js$lib$index=shadow.js.require("module$node_modules$highlight_DOT_js$lib$index", {});
/**
 * @define {boolean}
 */
devcards.core.active = goog.define("devcards.core.active",false);
/**
 * @define {number}
 */
devcards.core.card_buffer_size = goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_();
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4126__auto__ = (((typeof Symbol !== 'undefined'))?((cljs.core.fn_QMARK_(Symbol))?(function (){var and__4115__auto__ = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__18128 = goog.object.get(Symbol,"for");
return (fexpr__18128.cljs$core$IFn$_invoke$arity$1 ? fexpr__18128.cljs$core$IFn$_invoke$arity$1("react.element") : fexpr__18128.call(null,"react.element"));
} else {
return and__4115__auto__;
}
})():false):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__18129_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__18129_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_(m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__18131 = arguments.length;
switch (G__18131) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1);

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
if(cljs.core.map_QMARK_(c)){
var map__18134 = c;
var map__18134__$1 = (((((!((map__18134 == null))))?(((((map__18134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18134):map__18134);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18134__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18134__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return false;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_(c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return module$node_modules$react$index.createElement("div",({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
if(cljs.core.truth_(goog.labs.userAgent.device.isMobile())){
return null;
} else {
var temp__5735__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return DevcardsSyntaxHighlighter.highlightBlock(node);
} else {
return null;
}
}
});
devcards.core.CodeHighlight = (function (){var ctor__17006__auto__ = (function (props__17003__auto__){
var this__17004__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17004__auto__,props__17003__auto__);

return this__17004__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18138_18991 = ctor__17006__auto__.prototype;
(x18138_18991.componentDidMount = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x18138_18991.componentDidUpdate = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x18138_18991.render = (function (){
var this$ = this;
var G__18139 = "pre";
var G__18140 = ({"className": ((cljs.core.not(goog.labs.userAgent.device.isMobile()))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"code","code",1586293142)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142))))});
var G__18141 = (function (){var G__18142 = "code";
var G__18143 = ({"className": (function (){var or__4126__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"lang","lang",-1819677104)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__18144 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"code","code",1586293142)) : devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142))));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18142,G__18143,G__18144) : sablono.core.create_element.call(null,G__18142,G__18143,G__18144));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18139,G__18140,G__18141) : sablono.core.create_element.call(null,G__18139,G__18140,G__18141));
}));


return ctor__17006__auto__;
})();

(devcards.core.CodeHighlight.displayName = cljs.core.name(new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null)));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18145 = cljs.core.get_global_hierarchy;
return (fexpr__18145.cljs$core$IFn$_invoke$arity$0 ? fexpr__18145.cljs$core$IFn$_invoke$arity$0() : fexpr__18145.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__18146){
var map__18147 = p__18146;
var map__18147__$1 = (((((!((map__18147 == null))))?(((((map__18147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18147):map__18147);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18147__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__18149){
var map__18150 = p__18149;
var map__18150__$1 = (((((!((map__18150 == null))))?(((((map__18150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18150):map__18150);
var block = map__18150__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18150__$1,new cljs.core.Keyword(null,"content","content",15833224));
return module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18992 = arguments.length;
var i__4737__auto___18993 = (0);
while(true){
if((i__4737__auto___18993 < len__4736__auto___18992)){
args__4742__auto__.push((arguments[i__4737__auto___18993]));

var G__18994 = (i__4737__auto___18993 + (1));
i__4737__auto___18993 = G__18994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strs__$1], 0));
var G__18153 = "div";
var G__18154 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__18155 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
var G__18156 = "div";
var G__18157 = ({"key": i});
var G__18158 = sablono.interpreter.interpret(devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18156,G__18157,G__18158) : sablono.core.create_element.call(null,G__18156,G__18157,G__18158));
}),blocks));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18153,G__18154,G__18155) : sablono.core.create_element.call(null,G__18153,G__18154,G__18155));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__18159 = "div";
var G__18160 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__18161 = sablono.interpreter.interpret(message);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18159,G__18160,G__18161) : sablono.core.create_element.call(null,G__18159,G__18160,G__18161));
}
}));

(devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq18152){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18152));
}));

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
var G__18162 = "div";
var G__18163 = ({"key": "devcards_naked-card", "className": (function (){var G__18165 = devcards.system.devcards_rendered_card_class;
var G__18165__$1 = (cljs.core.truth_(padding_QMARK_)?[G__18165," com-rigsomelight-devcards-devcard-padding"].join(''):G__18165);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [G__18165__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__18165__$1;
}
})()});
var G__18164 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18162,G__18163,G__18164) : sablono.core.create_element.call(null,G__18162,G__18163,G__18164));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__18167 = arguments.length;
switch (G__18167) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__18175 = card;
var map__18175__$1 = (((((!((map__18175 == null))))?(((((map__18175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18175):map__18175);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18175__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18175__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
var G__18180 = "div";
var G__18181 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))});
var G__18182 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18180,G__18181,G__18182) : sablono.core.create_element.call(null,G__18180,G__18181,G__18182));
} else {
var G__18183 = "div";
var G__18184 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__18185 = (function (){var G__18187 = "div";
var G__18188 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__18189 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__18190 = "a";
var G__18191 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__18192 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__18193 = " ";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18190,G__18191,G__18192,G__18193) : sablono.core.create_element.call(null,G__18190,G__18191,G__18192,G__18193));
})()):sablono.interpreter.interpret((function (){var attrs18194 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs18194))?sablono.interpreter.attributes(attrs18194):null),((cljs.core.map_QMARK_(attrs18194))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18194)], null)));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18187,G__18188,G__18189) : sablono.core.create_element.call(null,G__18187,G__18188,G__18189));
})();
var G__18186 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18183,G__18184,G__18185,G__18186) : sablono.core.create_element.call(null,G__18183,G__18184,G__18185,G__18186));
}
} else {
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2("span",null) : sablono.core.create_element.call(null,"span",null));
}
}));

(devcards.core.frame.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

var devcards$core$IDevcardOptions$_devcard_options$dyn_18996 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard_options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4429__auto__.call(null,this$,devcard_opts));
} else {
var m__4426__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4426__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
});
devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcardOptions$_devcard_options$dyn_18996(this$,devcard_opts);
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

var devcards$core$IDevcard$_devcard$dyn_18997 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4429__auto__.call(null,this$,devcard_opts));
} else {
var m__4426__auto__ = (devcards.core._devcard["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4426__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
});
devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcard$_devcard$dyn_18997(this$,devcard_opts);
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5735__auto__ = goog.object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
return module$node_modules$react_dom$index.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return goog.object.get(this$.props,cljs.core.name(k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return goog.object.get(this$.state,cljs.core.name(k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__17006__auto__ = (function (props__17003__auto__){
var this__17004__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17004__auto__,props__17003__auto__);

return this__17004__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18220_18998 = ctor__17006__auto__.prototype;
(x18220_18998.shouldComponentUpdate = (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(next_props,"change_count"),devcards.core.get_props(this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}));

(x18220_18998.render = (function (){
var this$ = this;
var attrs18225 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18225))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs18225], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs18225))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18225)], null)));
}));


return ctor__17006__auto__;
})();

(devcards.core.DontUpdate.displayName = cljs.core.name(new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null)));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return module$node_modules$react$index.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5735__auto__)){
var docu = temp__5735__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((function (){var G__18227 = cljs.core.deref(data_atom);
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__18227) : project.call(null,G__18227));
})()):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = (function (){var G__18229 = "div";
var G__18230 = ({"key": "devcards-main-section"});
var G__18231 = sablono.interpreter.interpret(main);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18229,G__18230,G__18231) : sablono.core.create_element.call(null,G__18229,G__18230,G__18231));
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,document,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__18233 = "div";
var G__18234 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__18235 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18233,G__18234,G__18235) : sablono.core.create_element.call(null,G__18233,G__18234,G__18235));
}
});
devcards.core.DevcardBase = (function (){var ctor__17006__auto__ = (function (props__17001__auto__){
var this__17002__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17002__auto__,props__17001__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)}));
}).call(this__17002__auto__,props__17001__auto__);

return this__17002__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18237_18999 = ctor__17006__auto__.prototype;
(x18237_18999.componentDidUpdate = (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?cljs.core.deref(initial_data):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atom),data)){
return cljs.core.reset_BANG_(atom,data);
} else {
return null;
}
} else {
return null;
}
}));

(x18237_18999.componentWillMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return this$.setState((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__4115__auto__)){
return this$.state;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
} else {
return null;
}
}));

(x18237_18999.componentWillUnmount = (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}));

(x18237_18999.componentDidMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
var temp__5735__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5735__auto__)){
var data_atom = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5735__auto____$1)){
var id = temp__5735__auto____$1;
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(x18237_18999.render = (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom(this$);
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
}));


return ctor__17006__auto__;
})();

(devcards.core.DevcardBase.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null)));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__5735__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5735__auto__)){
var node_fn = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
var G__18238 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var G__18239 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__18238,G__18239) : node_fn.call(null,G__18238,G__18239));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__17006__auto__ = (function (props__17001__auto__){
var this__17002__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17002__auto__,props__17001__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))}));
}).call(this__17002__auto__,props__17001__auto__);

return this__17002__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18240_19000 = ctor__17006__auto__.prototype;
(x18240_19000.componentDidUpdate = (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),goog.object.get(prevP,"node_fn"));
} else {
return and__4115__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}));

(x18240_19000.componentWillUnmount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return module$node_modules$react_dom$index.unmountComponentAtNode(node);
} else {
return null;
}
}));

(x18240_19000.componentDidMount = (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}));

(x18240_19000.render = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return module$node_modules$react$index.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return module$node_modules$react$index.createElement("div",null,"Card has not mounted DOM node.");
}
}));


return ctor__17006__auto__;
})();

(devcards.core.DomComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null)));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4126__auto__ = x === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = x === false;
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (x == null);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4126__auto__ = typeof x === 'string';
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (x == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4126__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18241_SHARP_){
return (!(p1__18241_SHARP_ === true));
}),(function (){var map__18243 = opts;
var map__18243__$1 = (((((!((map__18243 == null))))?(((((map__18243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18243):map__18243);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18243__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18243__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18243__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.map_QMARK_(options);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (options == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__4126__auto__ = (initial_data == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4126__auto____$3){
return or__4126__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__18242_SHARP_){
return devcards.core.booler_QMARK_(p1__18242_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__18250 = "div";
var G__18251 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__18252 = sablono.interpreter.interpret((function (){var G__18255 = "code";
var G__18256 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__18257 = (cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)], 0))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18255,G__18256,G__18257) : sablono.core.create_element.call(null,G__18255,G__18256,G__18257));
})());
var G__18253 = (function (){var G__18260 = "span";
var G__18261 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__18262 = sablono.interpreter.interpret(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18260,G__18261,G__18262) : sablono.core.create_element.call(null,G__18260,G__18261,G__18262));
})();
var G__18254 = (function (){var G__18264 = "span";
var G__18265 = ({"style": ({"flex": "1 100px"})});
var G__18266 = " Received: ";
var G__18267 = (function (){var attrs18263 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs18263))?sablono.interpreter.attributes(attrs18263):null),((cljs.core.map_QMARK_(attrs18263))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18263)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18264,G__18265,G__18266,G__18267) : sablono.core.create_element.call(null,G__18264,G__18265,G__18266,G__18267));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__18250,G__18251,G__18252,G__18253,G__18254) : sablono.core.create_element.call(null,G__18250,G__18251,G__18252,G__18253,G__18254));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__18275 = "div";
var G__18276 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__18277 = (function (){var attrs18274 = [((((cljs.core.map_QMARK_(opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18274))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs18274], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs18274))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18274)], null)));
})();
var G__18278 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__18280 = "div";
var G__18281 = null;
var G__18282 = (function (){var attrs18279 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18279))?sablono.interpreter.attributes(attrs18279):null),((cljs.core.map_QMARK_(attrs18279))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18279)], null)));
})();
var G__18283 = ((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs18284 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18284))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18284], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs18284))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18284)], null)));
})()):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18280,G__18281,G__18282,G__18283) : sablono.core.create_element.call(null,G__18280,G__18281,G__18282,G__18283));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18275,G__18276,G__18277,G__18278) : sablono.core.create_element.call(null,G__18275,G__18276,G__18277,G__18278));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__18293_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state)),p1__18293_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
return module$node_modules$react$index.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults(card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18299,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18312 = k18299;
var G__18312__$1 = (((G__18312 instanceof cljs.core.Keyword))?G__18312.fqn:null);
switch (G__18312__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18299,else__4383__auto__);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18340){
var vec__18341 = p__18340;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18298){
var self__ = this;
var G__18298__$1 = this;
return (new cljs.core.RecordIter((0),G__18298__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18300,other18301){
var self__ = this;
var this18300__$1 = this;
return (((!((other18301 == null)))) && ((this18300__$1.constructor === other18301.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18300__$1.obj,other18301.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18300__$1.__extmap,other18301.__extmap)));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18298){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18356 = cljs.core.keyword_identical_QMARK_;
var expr__18357 = k__4388__auto__;
if(cljs.core.truth_((pred__18356.cljs$core$IFn$_invoke$arity$2 ? pred__18356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__18357) : pred__18356.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__18357)))){
return (new devcards.core.IdentityOptions(G__18298,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18298),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18298){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__18298,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.IdentityOptions.cljs$lang$type = true);

(devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
}));

(devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/IdentityOptions");
}));

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__18304){
var extmap__4419__auto__ = (function (){var G__18371 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18304,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__18304)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18371);
} else {
return G__18371;
}
})();
return (new devcards.core.IdentityOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__18304),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__18378){
var map__18380 = p__18378;
var map__18380__$1 = (((((!((map__18380 == null))))?(((((map__18380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18380):map__18380);
var devcard_opts = map__18380__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18380__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return devcards.util.edn_renderer.html_edn(cljs.core.deref(data_atom));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18387,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18446 = k18387;
var G__18446__$1 = (((G__18446 instanceof cljs.core.Keyword))?G__18446.fqn:null);
switch (G__18446__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18387,else__4383__auto__);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18447){
var vec__18448 = p__18447;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18448,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18448,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18386){
var self__ = this;
var G__18386__$1 = this;
return (new cljs.core.RecordIter((0),G__18386__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18388,other18389){
var self__ = this;
var this18388__$1 = this;
return (((!((other18389 == null)))) && ((this18388__$1.constructor === other18389.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18388__$1.obj,other18389.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18388__$1.__extmap,other18389.__extmap)));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18386){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18453 = cljs.core.keyword_identical_QMARK_;
var expr__18454 = k__4388__auto__;
if(cljs.core.truth_((pred__18453.cljs$core$IFn$_invoke$arity$2 ? pred__18453.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__18454) : pred__18453.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__18454)))){
return (new devcards.core.AtomLikeOptions(G__18386,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18386),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18386){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__18386,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.AtomLikeOptions.cljs$lang$type = true);

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
}));

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/AtomLikeOptions");
}));

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__18445){
var extmap__4419__auto__ = (function (){var G__18456 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18445,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__18445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18456);
} else {
return G__18456;
}
})();
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__18445),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn((((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?cljs.core.deref(main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18463,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18473 = k18463;
var G__18473__$1 = (((G__18473 instanceof cljs.core.Keyword))?G__18473.fqn:null);
switch (G__18473__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18463,else__4383__auto__);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18474){
var vec__18475 = p__18474;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18475,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18475,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18462){
var self__ = this;
var G__18462__$1 = this;
return (new cljs.core.RecordIter((0),G__18462__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18464,other18465){
var self__ = this;
var this18464__$1 = this;
return (((!((other18465 == null)))) && ((this18464__$1.constructor === other18465.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18464__$1.obj,other18465.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18464__$1.__extmap,other18465.__extmap)));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18462){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18503 = cljs.core.keyword_identical_QMARK_;
var expr__18504 = k__4388__auto__;
if(cljs.core.truth_((pred__18503.cljs$core$IFn$_invoke$arity$2 ? pred__18503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__18504) : pred__18503.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__18504)))){
return (new devcards.core.EdnLikeOptions(G__18462,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18462),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18462){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__18462,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.EdnLikeOptions.cljs$lang$type = true);

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
}));

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/EdnLikeOptions");
}));

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__18472){
var extmap__4419__auto__ = (function (){var G__18511 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18472,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__18472)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18511);
} else {
return G__18511;
}
})();
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__18472),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x))){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return false;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_(main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_(main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__18523 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__18523 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__18523.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__18523.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18523);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18523);
}
})()){
return devcards.core._devcard(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return module$node_modules$react$index.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

goog.object.set(devcards.core._devcard_options,"string",(function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
}));
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__18524 = cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__18524__$1 = (((((!((map__18524 == null))))?(((((map__18524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18524):map__18524);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18524__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18524__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__18530 = cljs.core.deref(history_atom);
var map__18530__$1 = (((((!((map__18530 == null))))?(((((map__18530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18530):map__18530);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18530__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18530__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_back(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__18534 = cljs.core.deref(history_atom);
var map__18534__$1 = (((((!((map__18534 == null))))?(((((map__18534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18534):map__18534);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18534__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18534__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__18536 = cljs.core.deref(history_atom);
var map__18536__$1 = (((((!((map__18536 == null))))?(((((map__18536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18536):map__18536);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18536__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first(history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__17006__auto__ = (function (props__17001__auto__){
var this__17002__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17002__auto__,props__17001__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null))), "history_atom": cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))}));
}).call(this__17002__auto__,props__17001__auto__);

return this__17002__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18538_19014 = ctor__17006__auto__.prototype;
(x18538_19014.componentWillMount = (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(new cljs.core.List(null,cljs.core.deref(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504))),null,(1),null)));
}));

(x18538_19014.componentDidMount = (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_(this$)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,(function (p__18541){
var map__18542 = p__18541;
var map__18542__$1 = (((((!((map__18542 == null))))?(((((map__18542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18542):map__18542);
var ha = map__18542__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18542__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18542__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18542__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], 0));
}
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(history_atom));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false], 0));
}
}));
} else {
return null;
}
}));

(x18538_19014.render = (function (){
var this$ = this;
if(((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$)))){
var G__18546 = "div";
var G__18547 = ({"style": ({"display": ((((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__18548 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__18554 = "button";
var G__18555 = ({"style": ({"visibility": ((devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__18556 = (function (){var G__18557 = "span";
var G__18558 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__18559 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18557,G__18558,G__18559) : sablono.core.create_element.call(null,G__18557,G__18558,G__18559));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18554,G__18555,G__18556) : sablono.core.create_element.call(null,G__18554,G__18555,G__18556));
})());
})();
var G__18549 = (function (){var action = (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_(data_atom,cljs.core.deref(data_atom));
});
return sablono.interpreter.interpret((function (){var G__18562 = "button";
var G__18563 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__18564 = (function (){var G__18565 = "span";
var G__18566 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__18567 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18565,G__18566,G__18567) : sablono.core.create_element.call(null,G__18565,G__18566,G__18567));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18562,G__18563,G__18564) : sablono.core.create_element.call(null,G__18562,G__18563,G__18564));
})());
})();
var G__18550 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__18570 = "button";
var G__18571 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__18572 = (function (){var G__18573 = "span";
var G__18574 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__18575 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18573,G__18574,G__18575) : sablono.core.create_element.call(null,G__18573,G__18574,G__18575));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18570,G__18571,G__18572) : sablono.core.create_element.call(null,G__18570,G__18571,G__18572));
})());
})();
var G__18551 = (function (){var listener = (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__18582 = "button";
var G__18583 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__18584 = (function (){var G__18589 = "span";
var G__18590 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__18589,G__18590) : sablono.core.create_element.call(null,G__18589,G__18590));
})();
var G__18585 = (function (){var G__18591 = "span";
var G__18592 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__18591,G__18592) : sablono.core.create_element.call(null,G__18591,G__18592));
})();
var G__18586 = (function (){var G__18593 = "span";
var G__18594 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__18593,G__18594) : sablono.core.create_element.call(null,G__18593,G__18594));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__18582,G__18583,G__18584,G__18585,G__18586) : sablono.core.create_element.call(null,G__18582,G__18583,G__18584,G__18585,G__18586));
})());
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__18546,G__18547,G__18548,G__18549,G__18550,G__18551) : sablono.core.create_element.call(null,G__18546,G__18547,G__18548,G__18549,G__18550,G__18551));
} else {
return null;
}
}));


return ctor__17006__auto__;
})();

(devcards.core.HistoryComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null)));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return module$node_modules$react$index.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__18599 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__18600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__18600);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__18599);
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18601 = cljs.core.get_global_hierarchy;
return (fexpr__18601.cljs$core$IFn$_invoke$arity$0 ? fexpr__18601.cljs$core$IFn$_invoke$arity$0() : fexpr__18601.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs18604 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18604))?sablono.interpreter.attributes(attrs18604):null),((cljs.core.map_QMARK_(attrs18604))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18604)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__18605,body){
var map__18606 = p__18605;
var map__18606__$1 = (((((!((map__18606 == null))))?(((((map__18606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18606):map__18606);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
var G__18611 = "div";
var G__18612 = null;
var G__18613 = (function (){var attrs18610 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs18610))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs18610], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs18610))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18610)], null)));
})();
var G__18614 = sablono.interpreter.interpret(body);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18611,G__18612,G__18613,G__18614) : sablono.core.create_element.call(null,G__18611,G__18612,G__18613,G__18614));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__18615){
var map__18616 = p__18615;
var map__18616__$1 = (((((!((map__18616 == null))))?(((((map__18616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18616):map__18616);
var m = map__18616__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message(m,(function (){var attrs18618 = module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"}));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18618))?sablono.interpreter.attributes(attrs18618):null),((cljs.core.map_QMARK_(attrs18618))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret((function (){var G__18621 = "div";
var G__18622 = ({"style": ({"marginTop": "5px"})});
var G__18623 = (function (){var G__18625 = "div";
var G__18626 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__18627 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18625,G__18626,G__18627) : sablono.core.create_element.call(null,G__18625,G__18626,G__18627));
})();
var G__18624 = (function (){var G__18628 = "div";
var G__18629 = ({"style": ({"marginLeft": "20px"})});
var G__18630 = sablono.interpreter.interpret(module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18628,G__18629,G__18630) : sablono.core.create_element.call(null,G__18628,G__18629,G__18630));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18621,G__18622,G__18623,G__18624) : sablono.core.create_element.call(null,G__18621,G__18622,G__18623,G__18624));
})()):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18618),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret((function (){var G__18633 = "div";
var G__18634 = ({"style": ({"marginTop": "5px"})});
var G__18635 = (function (){var G__18637 = "div";
var G__18638 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__18639 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18637,G__18638,G__18639) : sablono.core.create_element.call(null,G__18637,G__18638,G__18639));
})();
var G__18636 = (function (){var G__18640 = "div";
var G__18641 = ({"style": ({"marginLeft": "20px"})});
var G__18642 = sablono.interpreter.interpret(module$node_modules$react$index.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18640,G__18641,G__18642) : sablono.core.create_element.call(null,G__18640,G__18641,G__18642));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18633,G__18634,G__18635,G__18636) : sablono.core.create_element.call(null,G__18633,G__18634,G__18635,G__18636));
})()):null)], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message(m,(function (){var G__18648 = "div";
var G__18649 = null;
var G__18650 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("strong",null,"Error: ") : sablono.core.create_element.call(null,"strong",null,"Error: "));
var G__18651 = (function (){var attrs18647 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs18647))?sablono.interpreter.attributes(attrs18647):null),((cljs.core.map_QMARK_(attrs18647))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18647)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18648,G__18649,G__18650,G__18651) : sablono.core.create_element.call(null,G__18648,G__18649,G__18650,G__18651));
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs18652 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18652))?sablono.interpreter.attributes(attrs18652):null),((cljs.core.map_QMARK_(attrs18652))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18652)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__18655){
var map__18656 = p__18655;
var map__18656__$1 = (((((!((map__18656 == null))))?(((((map__18656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18656):map__18656);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs18658 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
}),cljs.core.reverse(cljs.core.rest(testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first(testing_contexts)], null),null,(1),null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18658))?sablono.interpreter.attributes(attrs18658):null),((cljs.core.map_QMARK_(attrs18658))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18658)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,i], 0)),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))].join('')], null),devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs18659 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18660,p__18661){
var map__18662 = p__18660;
var map__18662__$1 = (((((!((map__18662 == null))))?(((((map__18662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18662):map__18662);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18662__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18662__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__18663 = p__18661;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer(t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18659))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs18659], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs18659))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18659)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__18668){
var map__18669 = p__18668;
var map__18669__$1 = (((((!((map__18669 == null))))?(((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
}),new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__18667 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__18667__$1 = (((((!((map__18667 == null))))?(((((map__18667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18667):map__18667);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__18672 = "div";
var G__18673 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__18674 = (function (){var G__18678 = "div";
var G__18679 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__18680 = (function (){var G__18684 = "a";
var G__18685 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__18686 = (cljs.core.truth_(path)?sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18684,G__18685,G__18686) : sablono.core.create_element.call(null,G__18684,G__18685,G__18686));
})();
var G__18681 = (function (){var G__18687 = "button";
var G__18688 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": cljs.core.identity}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__18689 = sablono.interpreter.interpret(total_tests);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18687,G__18688,G__18689) : sablono.core.create_element.call(null,G__18687,G__18688,G__18689));
})();
var G__18682 = ((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret((function (){var G__18690 = "button";
var G__18691 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__18695){
var map__18696 = p__18695;
var map__18696__$1 = (((((!((map__18696 == null))))?(((((map__18696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18696):map__18696);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fexpr__18698 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__18698.cljs$core$IFn$_invoke$arity$1 ? fexpr__18698.cljs$core$IFn$_invoke$arity$1(type) : fexpr__18698.call(null,type));
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__18692 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18690,G__18691,G__18692) : sablono.core.create_element.call(null,G__18690,G__18691,G__18692));
})()));
var G__18683 = (((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret((function (){var G__18699 = "button";
var G__18700 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__18704){
var map__18705 = p__18704;
var map__18705__$1 = (((((!((map__18705 == null))))?(((((map__18705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18705):map__18705);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"pass","pass",1574159993));
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__18701 = sablono.interpreter.interpret(pass);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18699,G__18700,G__18701) : sablono.core.create_element.call(null,G__18699,G__18700,G__18701));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__18678,G__18679,G__18680,G__18681,G__18682,G__18683) : sablono.core.create_element.call(null,G__18678,G__18679,G__18680,G__18681,G__18682,G__18683));
})();
var G__18675 = (function (){var G__18707 = "div";
var G__18708 = ({"className": devcards.system.devcards_rendered_card_class});
var G__18709 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__18707,G__18708,G__18709) : sablono.core.create_element.call(null,G__18707,G__18708,G__18709));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__18672,G__18673,G__18674,G__18675) : sablono.core.create_element.call(null,G__18672,G__18673,G__18674,G__18675));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
})], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_18822){
var state_val_18823 = (state_18822[(1)]);
if((state_val_18823 === (7))){
var state_18822__$1 = state_18822;
var statearr_18826_19034 = state_18822__$1;
(statearr_18826_19034[(2)] = false);

(statearr_18826_19034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (20))){
var inst_18750 = (state_18822[(7)]);
var inst_18770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18750);
var state_18822__$1 = state_18822;
var statearr_18827_19035 = state_18822__$1;
(statearr_18827_19035[(2)] = inst_18770);

(statearr_18827_19035[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (27))){
var inst_18789 = (state_18822[(8)]);
var inst_18775 = (state_18822[(9)]);
var inst_18793 = (inst_18775.cljs$core$IFn$_invoke$arity$1 ? inst_18775.cljs$core$IFn$_invoke$arity$1(inst_18789) : inst_18775.call(null,inst_18789));
var state_18822__$1 = state_18822;
var statearr_18830_19036 = state_18822__$1;
(statearr_18830_19036[(2)] = inst_18793);

(statearr_18830_19036[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (1))){
var state_18822__$1 = state_18822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18822__$1,(2),devcards.core.test_channel);
} else {
if((state_val_18823 === (24))){
var state_18822__$1 = state_18822;
var statearr_18831_19037 = state_18822__$1;
(statearr_18831_19037[(2)] = null);

(statearr_18831_19037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (4))){
var state_18822__$1 = state_18822;
var statearr_18832_19038 = state_18822__$1;
(statearr_18832_19038[(2)] = false);

(statearr_18832_19038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (15))){
var state_18822__$1 = state_18822;
var statearr_18833_19039 = state_18822__$1;
(statearr_18833_19039[(2)] = false);

(statearr_18833_19039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (21))){
var inst_18750 = (state_18822[(7)]);
var state_18822__$1 = state_18822;
var statearr_18834_19040 = state_18822__$1;
(statearr_18834_19040[(2)] = inst_18750);

(statearr_18834_19040[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (13))){
var inst_18820 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18822__$1,inst_18820);
} else {
if((state_val_18823 === (22))){
var inst_18774 = (state_18822[(10)]);
var inst_18773 = (state_18822[(2)]);
var inst_18774__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18773,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_18775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18773,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_18822__$1 = (function (){var statearr_18835 = state_18822;
(statearr_18835[(10)] = inst_18774__$1);

(statearr_18835[(9)] = inst_18775);

return statearr_18835;
})();
if(cljs.core.truth_(inst_18774__$1)){
var statearr_18836_19042 = state_18822__$1;
(statearr_18836_19042[(1)] = (23));

} else {
var statearr_18837_19043 = state_18822__$1;
(statearr_18837_19043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (29))){
var inst_18803 = (state_18822[(2)]);
var inst_18812 = cljs.test.clear_env_BANG_();
var state_18822__$1 = (function (){var statearr_18838 = state_18822;
(statearr_18838[(11)] = inst_18803);

(statearr_18838[(12)] = inst_18812);

return statearr_18838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18822__$1,(30),devcards.core.test_channel);
} else {
if((state_val_18823 === (6))){
var state_18822__$1 = state_18822;
var statearr_18841_19044 = state_18822__$1;
(statearr_18841_19044[(2)] = true);

(statearr_18841_19044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (28))){
var inst_18775 = (state_18822[(9)]);
var inst_18795 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_18796 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_18797 = cljs.core.PersistentHashMap.fromArrays(inst_18795,inst_18796);
var inst_18798 = devcards.core.collect_test(inst_18797);
var inst_18799 = cljs.test.get_current_env();
var inst_18800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18799,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_18801 = (inst_18775.cljs$core$IFn$_invoke$arity$1 ? inst_18775.cljs$core$IFn$_invoke$arity$1(inst_18800) : inst_18775.call(null,inst_18800));
var state_18822__$1 = (function (){var statearr_18843 = state_18822;
(statearr_18843[(13)] = inst_18798);

return statearr_18843;
})();
var statearr_18844_19045 = state_18822__$1;
(statearr_18844_19045[(2)] = inst_18801);

(statearr_18844_19045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (25))){
var inst_18818 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
var statearr_18845_19046 = state_18822__$1;
(statearr_18845_19046[(2)] = inst_18818);

(statearr_18845_19046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (17))){
var state_18822__$1 = state_18822;
var statearr_18867_19047 = state_18822__$1;
(statearr_18867_19047[(2)] = true);

(statearr_18867_19047[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (3))){
var inst_18726 = (state_18822[(14)]);
var inst_18731 = inst_18726.cljs$lang$protocol_mask$partition0$;
var inst_18732 = (inst_18731 & (64));
var inst_18733 = inst_18726.cljs$core$ISeq$;
var inst_18734 = (cljs.core.PROTOCOL_SENTINEL === inst_18733);
var inst_18735 = ((inst_18732) || (inst_18734));
var state_18822__$1 = state_18822;
if(cljs.core.truth_(inst_18735)){
var statearr_18868_19048 = state_18822__$1;
(statearr_18868_19048[(1)] = (6));

} else {
var statearr_18869_19049 = state_18822__$1;
(statearr_18869_19049[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (12))){
var inst_18750 = (state_18822[(7)]);
var inst_18754 = (inst_18750 == null);
var inst_18755 = cljs.core.not(inst_18754);
var state_18822__$1 = state_18822;
if(inst_18755){
var statearr_18873_19050 = state_18822__$1;
(statearr_18873_19050[(1)] = (14));

} else {
var statearr_18874_19051 = state_18822__$1;
(statearr_18874_19051[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (2))){
var inst_18726 = (state_18822[(14)]);
var inst_18726__$1 = (state_18822[(2)]);
var inst_18728 = (inst_18726__$1 == null);
var inst_18729 = cljs.core.not(inst_18728);
var state_18822__$1 = (function (){var statearr_18875 = state_18822;
(statearr_18875[(14)] = inst_18726__$1);

return statearr_18875;
})();
if(inst_18729){
var statearr_18877_19052 = state_18822__$1;
(statearr_18877_19052[(1)] = (3));

} else {
var statearr_18879_19053 = state_18822__$1;
(statearr_18879_19053[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (23))){
var inst_18774 = (state_18822[(10)]);
var inst_18780 = (state_18822[(15)]);
var inst_18780__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_18781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18784 = devcards.core.run_card_tests(inst_18774);
var inst_18785 = [inst_18784,inst_18780__$1];
var inst_18786 = (new cljs.core.PersistentVector(null,2,(5),inst_18781,inst_18785,null));
var state_18822__$1 = (function (){var statearr_18881 = state_18822;
(statearr_18881[(15)] = inst_18780__$1);

return statearr_18881;
})();
return cljs.core.async.ioc_alts_BANG_(state_18822__$1,(26),inst_18786);
} else {
if((state_val_18823 === (19))){
var inst_18765 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
var statearr_18884_19054 = state_18822__$1;
(statearr_18884_19054[(2)] = inst_18765);

(statearr_18884_19054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (11))){
var inst_18726 = (state_18822[(14)]);
var inst_18747 = (state_18822[(2)]);
var inst_18748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18747,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_18749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18747,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_18750 = inst_18726;
var state_18822__$1 = (function (){var statearr_18886 = state_18822;
(statearr_18886[(16)] = inst_18749);

(statearr_18886[(7)] = inst_18750);

(statearr_18886[(17)] = inst_18748);

return statearr_18886;
})();
var statearr_18887_19055 = state_18822__$1;
(statearr_18887_19055[(2)] = null);

(statearr_18887_19055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (9))){
var inst_18726 = (state_18822[(14)]);
var inst_18744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18726);
var state_18822__$1 = state_18822;
var statearr_18891_19056 = state_18822__$1;
(statearr_18891_19056[(2)] = inst_18744);

(statearr_18891_19056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (5))){
var inst_18742 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
if(cljs.core.truth_(inst_18742)){
var statearr_18895_19057 = state_18822__$1;
(statearr_18895_19057[(1)] = (9));

} else {
var statearr_18896_19058 = state_18822__$1;
(statearr_18896_19058[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (14))){
var inst_18750 = (state_18822[(7)]);
var inst_18757 = inst_18750.cljs$lang$protocol_mask$partition0$;
var inst_18758 = (inst_18757 & (64));
var inst_18759 = inst_18750.cljs$core$ISeq$;
var inst_18760 = (cljs.core.PROTOCOL_SENTINEL === inst_18759);
var inst_18761 = ((inst_18758) || (inst_18760));
var state_18822__$1 = state_18822;
if(cljs.core.truth_(inst_18761)){
var statearr_18900_19059 = state_18822__$1;
(statearr_18900_19059[(1)] = (17));

} else {
var statearr_18901_19060 = state_18822__$1;
(statearr_18901_19060[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (26))){
var inst_18780 = (state_18822[(15)]);
var inst_18788 = (state_18822[(2)]);
var inst_18789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18788,(0),null);
var inst_18790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18788,(1),null);
var inst_18791 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_18790,inst_18780);
var state_18822__$1 = (function (){var statearr_18902 = state_18822;
(statearr_18902[(8)] = inst_18789);

return statearr_18902;
})();
if(inst_18791){
var statearr_18903_19061 = state_18822__$1;
(statearr_18903_19061[(1)] = (27));

} else {
var statearr_18904_19062 = state_18822__$1;
(statearr_18904_19062[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (16))){
var inst_18768 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
if(cljs.core.truth_(inst_18768)){
var statearr_18905_19063 = state_18822__$1;
(statearr_18905_19063[(1)] = (20));

} else {
var statearr_18906_19064 = state_18822__$1;
(statearr_18906_19064[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (30))){
var inst_18814 = (state_18822[(2)]);
var inst_18750 = inst_18814;
var state_18822__$1 = (function (){var statearr_18907 = state_18822;
(statearr_18907[(7)] = inst_18750);

return statearr_18907;
})();
var statearr_18908_19065 = state_18822__$1;
(statearr_18908_19065[(2)] = null);

(statearr_18908_19065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (10))){
var inst_18726 = (state_18822[(14)]);
var state_18822__$1 = state_18822;
var statearr_18909_19066 = state_18822__$1;
(statearr_18909_19066[(2)] = inst_18726);

(statearr_18909_19066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (18))){
var state_18822__$1 = state_18822;
var statearr_18910_19067 = state_18822__$1;
(statearr_18910_19067[(2)] = false);

(statearr_18910_19067[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18823 === (8))){
var inst_18739 = (state_18822[(2)]);
var state_18822__$1 = state_18822;
var statearr_18911_19068 = state_18822__$1;
(statearr_18911_19068[(2)] = inst_18739);

(statearr_18911_19068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$core$state_machine__12072__auto__ = null;
var devcards$core$state_machine__12072__auto____0 = (function (){
var statearr_18912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18912[(0)] = devcards$core$state_machine__12072__auto__);

(statearr_18912[(1)] = (1));

return statearr_18912;
});
var devcards$core$state_machine__12072__auto____1 = (function (state_18822){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_18822);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e18913){var ex__12075__auto__ = e18913;
var statearr_18914_19069 = state_18822;
(statearr_18914_19069[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_18822[(4)]))){
var statearr_18915_19070 = state_18822;
(statearr_18915_19070[(1)] = cljs.core.first((state_18822[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19071 = state_18822;
state_18822 = G__19071;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$core$state_machine__12072__auto__ = function(state_18822){
switch(arguments.length){
case 0:
return devcards$core$state_machine__12072__auto____0.call(this);
case 1:
return devcards$core$state_machine__12072__auto____1.call(this,state_18822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__12072__auto____0;
devcards$core$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__12072__auto____1;
return devcards$core$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_18916 = f__12108__auto__();
(statearr_18916[(6)] = c__12107__auto__);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__17006__auto__ = (function (props__17003__auto__){
var this__17004__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17004__auto__,props__17003__auto__);

return this__17004__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x18928_19072 = ctor__17006__auto__.prototype;
(x18928_19072.componentWillMount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x18928_19072.componentWillReceiveProps = (function (next_props){
var this$ = this;
var temp__5735__auto__ = goog.object.get(next_props,cljs.core.name(new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805)));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x18928_19072.render = (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props(this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests(this$,path,test_summary);
}));


return ctor__17006__auto__;
})();

(devcards.core.TestDevcard.displayName = cljs.core.name(new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null)));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19073 = arguments.length;
var i__4737__auto___19074 = (0);
while(true){
if((i__4737__auto___19074 < len__4736__auto___19073)){
args__4742__auto__.push((arguments[i__4737__auto___19074]));

var G__19075 = (i__4737__auto___19074 + (1));
i__4737__auto___19074 = G__19075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.t_devcards$core18937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core18937 = (function (test_thunks,meta18938){
this.test_thunks = test_thunks;
this.meta18938 = meta18938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devcards.core.t_devcards$core18937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18939,meta18938__$1){
var self__ = this;
var _18939__$1 = this;
return (new devcards.core.t_devcards$core18937(self__.test_thunks,meta18938__$1));
}));

(devcards.core.t_devcards$core18937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18939){
var self__ = this;
var _18939__$1 = this;
return self__.meta18938;
}));

(devcards.core.t_devcards$core18937.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.t_devcards$core18937.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return module$node_modules$react$index.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
}));

(devcards.core.t_devcards$core18937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta18938","meta18938",-461600074,null)], null);
}));

(devcards.core.t_devcards$core18937.cljs$lang$type = true);

(devcards.core.t_devcards$core18937.cljs$lang$ctorStr = "devcards.core/t_devcards$core18937");

(devcards.core.t_devcards$core18937.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"devcards.core/t_devcards$core18937");
}));

/**
 * Positional factory function for devcards.core/t_devcards$core18937.
 */
devcards.core.__GT_t_devcards$core18937 = (function devcards$core$__GT_t_devcards$core18937(test_thunks__$1,meta18938){
return (new devcards.core.t_devcards$core18937(test_thunks__$1,meta18938));
});

}

return (new devcards.core.t_devcards$core18937(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
}));

(devcards.core.test_card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.test_card.cljs$lang$applyTo = (function (seq18935){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18935));
}));

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18940_SHARP_,p2__18941_SHARP_){
return goog.object.get(p1__18940_SHARP_,p2__18941_SHARP_);
}),goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state));
if(cljs.core.truth_(temp__5735__auto__)){
var cards = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(ns_symbol))], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var card = temp__5735__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(cljs.core.munge(ns_symbol))));
if(cljs.core.truth_(temp__5735__auto__)){
var base_card_options = temp__5735__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,base_card_options], 0));
}));
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5735__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs18948 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18948))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18948], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs18948))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18948)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5735__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
return module$node_modules$react_dom$index.render((function (){var attrs18950 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs18950))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18950], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs18950))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18950)], null)));
})(),devcards.system.devcards_app_node());
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (1))){
var inst_18954 = devcards.core.load_data_from_channel_BANG_();
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(2),inst_18954);
} else {
if((state_val_18967 === (2))){
var inst_18958 = (state_18966[(2)]);
var inst_18959 = cljs.core.async.timeout((100));
var state_18966__$1 = (function (){var statearr_18971 = state_18966;
(statearr_18971[(7)] = inst_18958);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(3),inst_18959);
} else {
if((state_val_18967 === (3))){
var inst_18961 = (state_18966[(2)]);
var inst_18962 = (function (){return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
})();
var inst_18963 = setTimeout(inst_18962,(0));
var state_18966__$1 = (function (){var statearr_18972 = state_18966;
(statearr_18972[(8)] = inst_18961);

return statearr_18972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18963);
} else {
return null;
}
}
}
});
return (function() {
var devcards$core$mount_namespace_$_state_machine__12072__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__12072__auto____0 = (function (){
var statearr_18973 = [null,null,null,null,null,null,null,null,null];
(statearr_18973[(0)] = devcards$core$mount_namespace_$_state_machine__12072__auto__);

(statearr_18973[(1)] = (1));

return statearr_18973;
});
var devcards$core$mount_namespace_$_state_machine__12072__auto____1 = (function (state_18966){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e18974){var ex__12075__auto__ = e18974;
var statearr_18975_19076 = state_18966;
(statearr_18975_19076[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_18966[(4)]))){
var statearr_18976_19077 = state_18966;
(statearr_18976_19077[(1)] = cljs.core.first((state_18966[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19078 = state_18966;
state_18966 = G__19078;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__12072__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__12072__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__12072__auto____0;
devcards$core$mount_namespace_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__12072__auto____1;
return devcards$core$mount_namespace_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_18977 = f__12108__auto__();
(statearr_18977[(6)] = c__12107__auto__);

return statearr_18977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=devcards.core.js.map