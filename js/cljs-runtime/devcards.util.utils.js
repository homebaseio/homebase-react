goog.provide('devcards.util.utils');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
devcards.util.utils.react_holder = module$node_modules$react$index;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17049_17058 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17050_17059 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17051_17060 = true;
var _STAR_print_fn_STAR__temp_val__17052_17061 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17051_17060);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17052_17061);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17050_17059);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17049_17058);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e17047){if((e17047 instanceof Error)){
var e1 = e17047;
try{return obj.toString();
}catch (e17048){if((e17048 instanceof Error)){
var e2 = e17048;
return "<<Un-printable Type>>";
} else {
throw e17048;

}
}} else {
throw e17047;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__17054 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__17055 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__17055);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__17054);
}});

//# sourceMappingURL=devcards.util.utils.js.map
