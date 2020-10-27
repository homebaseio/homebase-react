goog.provide('devcards.system');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5733__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var first_child = temp__5733__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5733__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5733__auto__)){
var heads = temp__5733__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element("com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child(document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__16678_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__16678_SHARP_.token));
}));

var temp__5735__auto__ = goog.object.get(location,"hash");
if(cljs.core.truth_(temp__5735__auto__)){
var token = temp__5735__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
if(cljs.core.map_QMARK_(d)){
var and__4115__auto__ = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$2)){
return d;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(cljs.core.last(path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16680 = cljs.core.get_global_hierarchy;
return (fexpr__16680.cljs$core$IFn$_invoke$arity$0 ? fexpr__16680.cljs$core$IFn$_invoke$arity$0() : fexpr__16680.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__16681,state){
var vec__16682 = p__16681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16682,(0),null);
var map__16685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16682,(1),null);
var map__16685__$1 = (((((!((map__16685 == null))))?(((((map__16685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16685):map__16685);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16685__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16685__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16685__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons(new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__16688,path){
var map__16689 = p__16688;
var map__16689__$1 = (((((!((map__16689 == null))))?(((((map__16689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16689):map__16689);
var state = map__16689__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16689__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__16691,path){
var map__16692 = p__16691;
var map__16692__$1 = (((((!((map__16692 == null))))?(((((map__16692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16692):map__16692);
var state = map__16692__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16692__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4115__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16700_SHARP_){
if(cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__16700_SHARP_))){
return devcards.system.devcard_QMARK_(p1__16700_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__16701){
var map__16702 = p__16701;
var map__16702__$1 = (((((!((map__16702 == null))))?(((((map__16702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16702):map__16702);
var card = map__16702__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16702__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16702__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16702__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__16704 = "div";
var G__16705 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__16706 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__16711 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__16712 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__16712);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__16711);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16704,G__16705,G__16706) : sablono.core.create_element.call(null,G__16704,G__16705,G__16706));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref(state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__16735){
var map__16736 = p__16735;
var map__16736__$1 = (((((!((map__16736 == null))))?(((((map__16736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16736):map__16736);
var state = map__16736__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__16739 = "span";
var G__16740 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__16741 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16739,G__16740,G__16741) : sablono.core.create_element.call(null,G__16739,G__16740,G__16741));
});
var G__16742 = "div";
var G__16743 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__16744 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16746){
var vec__16747 = p__16746;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(1),null);
var G__16750 = "span";
var G__16751 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__16752 = (function (){var G__16758 = "a";
var G__16759 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__16760 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16758,G__16759,G__16760) : sablono.core.create_element.call(null,G__16758,G__16759,G__16760));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16750,G__16751,G__16752) : sablono.core.create_element.call(null,G__16750,G__16751,G__16752));
}),crumbs))));
var G__16745 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16742,G__16743,G__16744,G__16745) : sablono.core.create_element.call(null,G__16742,G__16743,G__16744,G__16745));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs16795 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16796){
var vec__16797 = p__16796;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(1),null);
var G__16800 = "a";
var G__16801 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__16802 = (function (){var G__16804 = "span";
var G__16805 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__16806 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16804,G__16805,G__16806) : sablono.core.create_element.call(null,G__16804,G__16805,G__16806));
})();
var G__16803 = (function (){var G__16807 = "span";
var G__16808 = null;
var G__16809 = " ";
var G__16810 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16807,G__16808,G__16809,G__16810) : sablono.core.create_element.call(null,G__16807,G__16808,G__16809,G__16810));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16800,G__16801,G__16802,G__16803) : sablono.core.create_element.call(null,G__16800,G__16801,G__16802,G__16803));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__16811){
var vec__16812 = p__16811;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16812,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16812,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16795))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs16795], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs16795))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16795)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__16818 = "div";
var G__16819 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5735__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__16820 = (function (){var attrs16815 = (function (){var temp__5735__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5735__auto__)){
var crumbs = temp__5735__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16815))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs16815], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs16815))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs16816 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16816))?sablono.interpreter.attributes(attrs16816):null),((cljs.core.map_QMARK_(attrs16816))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16816)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16815),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs16817 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16817))?sablono.interpreter.attributes(attrs16817):null),((cljs.core.map_QMARK_(attrs16817))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16817)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16818,G__16819,G__16820) : sablono.core.create_element.call(null,G__16818,G__16819,G__16820));
});
devcards.system.DevcardsRoot = (function (){var ctor__16459__auto__ = (function (props__16456__auto__){
var this__16457__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16457__auto__,props__16456__auto__);

return this__16457__auto__;
});
goog.inherits(ctor__16459__auto__,devcards.util.utils.react_holder.Component);

var x16838_17046 = ctor__16459__auto__.prototype;
(x16838_17046.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x16838_17046.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__16459__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node());
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_16890){
var state_val_16891 = (state_16890[(1)]);
if((state_val_16891 === (7))){
var inst_16886 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16901_17047 = state_16890__$1;
(statearr_16901_17047[(2)] = inst_16886);

(statearr_16901_17047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (1))){
var inst_16843 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_16844 = inst_16843;
var state_16890__$1 = (function (){var statearr_16902 = state_16890;
(statearr_16902[(7)] = inst_16844);

return statearr_16902;
})();
var statearr_16903_17048 = state_16890__$1;
(statearr_16903_17048[(2)] = null);

(statearr_16903_17048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (4))){
var inst_16851 = (state_16890[(8)]);
var inst_16851__$1 = (state_16890[(2)]);
var state_16890__$1 = (function (){var statearr_16904 = state_16890;
(statearr_16904[(8)] = inst_16851__$1);

return statearr_16904;
})();
if(cljs.core.truth_(inst_16851__$1)){
var statearr_16905_17049 = state_16890__$1;
(statearr_16905_17049[(1)] = (5));

} else {
var statearr_16906_17050 = state_16890__$1;
(statearr_16906_17050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (15))){
var state_16890__$1 = state_16890;
var statearr_16911_17051 = state_16890__$1;
(statearr_16911_17051[(2)] = null);

(statearr_16911_17051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (13))){
var inst_16881 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16912_17052 = state_16890__$1;
(statearr_16912_17052[(2)] = inst_16881);

(statearr_16912_17052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (6))){
var state_16890__$1 = state_16890;
var statearr_16913_17053 = state_16890__$1;
(statearr_16913_17053[(2)] = null);

(statearr_16913_17053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (3))){
var inst_16888 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16890__$1,inst_16888);
} else {
if((state_val_16891 === (12))){
var state_16890__$1 = state_16890;
var statearr_16914_17062 = state_16890__$1;
(statearr_16914_17062[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (2))){
var inst_16846 = (state_16890[(9)]);
var inst_16846__$1 = cljs.core.async.timeout((500));
var inst_16847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16848 = [channel,inst_16846__$1];
var inst_16849 = (new cljs.core.PersistentVector(null,2,(5),inst_16847,inst_16848,null));
var state_16890__$1 = (function (){var statearr_16916 = state_16890;
(statearr_16916[(9)] = inst_16846__$1);

return statearr_16916;
})();
return cljs.core.async.ioc_alts_BANG_(state_16890__$1,(4),inst_16849);
} else {
if((state_val_16891 === (11))){
var inst_16844 = (state_16890[(7)]);
var inst_16869 = devcards.system.merge_in_new_data(start_data,inst_16844);
var state_16890__$1 = state_16890;
var statearr_16917_17068 = state_16890__$1;
(statearr_16917_17068[(2)] = inst_16869);

(statearr_16917_17068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (9))){
var inst_16860 = (state_16890[(10)]);
var inst_16867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16860,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_16890__$1 = state_16890;
if(inst_16867){
var statearr_16918_17069 = state_16890__$1;
(statearr_16918_17069[(1)] = (11));

} else {
var statearr_16919_17070 = state_16890__$1;
(statearr_16919_17070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (5))){
var inst_16851 = (state_16890[(8)]);
var inst_16846 = (state_16890[(9)]);
var inst_16859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16851,(0),null);
var inst_16860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16859,(0),null);
var inst_16861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16859,(1),null);
var inst_16862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16851,(1),null);
var inst_16863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16862,inst_16846);
var state_16890__$1 = (function (){var statearr_16920 = state_16890;
(statearr_16920[(10)] = inst_16860);

(statearr_16920[(11)] = inst_16861);

return statearr_16920;
})();
if(inst_16863){
var statearr_16921_17071 = state_16890__$1;
(statearr_16921_17071[(1)] = (8));

} else {
var statearr_16922_17072 = state_16890__$1;
(statearr_16922_17072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (14))){
var inst_16860 = (state_16890[(10)]);
var inst_16844 = (state_16890[(7)]);
var inst_16861 = (state_16890[(11)]);
var inst_16872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16873 = [inst_16860,inst_16861];
var inst_16874 = (new cljs.core.PersistentVector(null,2,(5),inst_16872,inst_16873,null));
var inst_16875 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_16874,inst_16844);
var inst_16844__$1 = inst_16875;
var state_16890__$1 = (function (){var statearr_16923 = state_16890;
(statearr_16923[(7)] = inst_16844__$1);

return statearr_16923;
})();
var statearr_16924_17079 = state_16890__$1;
(statearr_16924_17079[(2)] = null);

(statearr_16924_17079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (16))){
var inst_16879 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16925_17084 = state_16890__$1;
(statearr_16925_17084[(2)] = inst_16879);

(statearr_16925_17084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (10))){
var inst_16883 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16926_17085 = state_16890__$1;
(statearr_16926_17085[(2)] = inst_16883);

(statearr_16926_17085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (8))){
var inst_16844 = (state_16890[(7)]);
var inst_16865 = devcards.system.merge_in_new_data(start_data,inst_16844);
var state_16890__$1 = state_16890;
var statearr_16927_17088 = state_16890__$1;
(statearr_16927_17088[(2)] = inst_16865);

(statearr_16927_17088[(1)] = (10));


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
});
return (function() {
var devcards$system$off_the_books_$_state_machine__10908__auto__ = null;
var devcards$system$off_the_books_$_state_machine__10908__auto____0 = (function (){
var statearr_16928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16928[(0)] = devcards$system$off_the_books_$_state_machine__10908__auto__);

(statearr_16928[(1)] = (1));

return statearr_16928;
});
var devcards$system$off_the_books_$_state_machine__10908__auto____1 = (function (state_16890){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_16890);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e16929){var ex__10911__auto__ = e16929;
var statearr_16930_17090 = state_16890;
(statearr_16930_17090[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_16890[(4)]))){
var statearr_16931_17093 = state_16890;
(statearr_16931_17093[(1)] = cljs.core.first((state_16890[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17094 = state_16890;
state_16890 = G__17094;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__10908__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__10908__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__10908__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__10908__auto____0;
devcards$system$off_the_books_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__10908__auto____1;
return devcards$system$off_the_books_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_16932 = f__10965__auto__();
(statearr_16932[(6)] = c__10964__auto__);

return statearr_16932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__10964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_16943){
var state_val_16944 = (state_16943[(1)]);
if((state_val_16944 === (1))){
var inst_16936 = cljs.core.deref(devcards.system.app_state);
var inst_16937 = cljs.core.PersistentVector.EMPTY;
var inst_16938 = devcards.system.off_the_books(channel,inst_16936,inst_16937);
var state_16943__$1 = state_16943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16943__$1,(2),inst_16938);
} else {
if((state_val_16944 === (2))){
var inst_16940 = (state_16943[(2)]);
var inst_16941 = cljs.core.reset_BANG_(devcards.system.app_state,inst_16940);
var state_16943__$1 = state_16943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16943__$1,inst_16941);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null];
(statearr_16952[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____1 = (function (state_16943){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_16943);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e16953){var ex__10911__auto__ = e16953;
var statearr_16954_17099 = state_16943;
(statearr_16954_17099[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_16943[(4)]))){
var statearr_16955_17101 = state_16943;
(statearr_16955_17101[(1)] = cljs.core.first((state_16943[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17104 = state_16943;
state_16943 = G__17104;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__ = function(state_16943){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____1.call(this,state_16943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_16956 = f__10965__auto__();
(statearr_16956[(6)] = c__10964__auto__);

return statearr_16956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));

return c__10964__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof js !== 'undefined') && (typeof js.module$node_modules$react$index !== 'undefined') && (typeof js.module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

var c__10964__auto___17105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_16981){
var state_val_16982 = (state_16981[(1)]);
if((state_val_16982 === (7))){
var state_16981__$1 = state_16981;
var statearr_16983_17106 = state_16981__$1;
(statearr_16983_17106[(2)] = null);

(statearr_16983_17106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (1))){
var inst_16957 = devcards.system.load_data_from_channel_BANG_(channel);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16981__$1,(2),inst_16957);
} else {
if((state_val_16982 === (4))){
var inst_16979 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16981__$1,inst_16979);
} else {
if((state_val_16982 === (6))){
var inst_16966 = (state_16981[(7)]);
var inst_16968 = cljs.core.deref(devcards.system.app_state);
var inst_16969 = devcards.system.off_the_books(channel,inst_16968,inst_16966);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16981__$1,(9),inst_16969);
} else {
if((state_val_16982 === (3))){
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16981__$1,(5),channel);
} else {
if((state_val_16982 === (2))){
var inst_16959 = (state_16981[(2)]);
var inst_16960 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_16961 = setTimeout(inst_16960,(0));
var inst_16962 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_16963 = setTimeout(inst_16962,(0));
var state_16981__$1 = (function (){var statearr_16984 = state_16981;
(statearr_16984[(8)] = inst_16961);

(statearr_16984[(9)] = inst_16963);

(statearr_16984[(10)] = inst_16959);

return statearr_16984;
})();
var statearr_16985_17107 = state_16981__$1;
(statearr_16985_17107[(2)] = null);

(statearr_16985_17107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (9))){
var inst_16966 = (state_16981[(7)]);
var inst_16971 = (state_16981[(2)]);
var inst_16972 = (function (){var temp__5735__auto__ = inst_16966;
var v = inst_16966;
var new_state = inst_16971;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_16973 = setTimeout(inst_16972,(0));
var state_16981__$1 = (function (){var statearr_16986 = state_16981;
(statearr_16986[(11)] = inst_16973);

return statearr_16986;
})();
var statearr_16987_17108 = state_16981__$1;
(statearr_16987_17108[(2)] = null);

(statearr_16987_17108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (5))){
var inst_16966 = (state_16981[(7)]);
var inst_16966__$1 = (state_16981[(2)]);
var state_16981__$1 = (function (){var statearr_16988 = state_16981;
(statearr_16988[(7)] = inst_16966__$1);

return statearr_16988;
})();
if(cljs.core.truth_(inst_16966__$1)){
var statearr_16989_17109 = state_16981__$1;
(statearr_16989_17109[(1)] = (6));

} else {
var statearr_16990_17110 = state_16981__$1;
(statearr_16990_17110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (8))){
var inst_16977 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_16992_17111 = state_16981__$1;
(statearr_16992_17111[(2)] = inst_16977);

(statearr_16992_17111[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____0 = (function (){
var statearr_16993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16993[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__);

(statearr_16993[(1)] = (1));

return statearr_16993;
});
var devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____1 = (function (state_16981){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_16981);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e16994){var ex__10911__auto__ = e16994;
var statearr_16995_17112 = state_16981;
(statearr_16995_17112[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_16981[(4)]))){
var statearr_16996_17119 = state_16981;
(statearr_16996_17119[(1)] = cljs.core.first((state_16981[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17120 = state_16981;
state_16981 = G__17120;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__ = function(state_16981){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____1.call(this,state_16981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__10908__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_16997 = f__10965__auto__();
(statearr_16997[(6)] = c__10964__auto___17105);

return statearr_16997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof js !== 'undefined') && (typeof js.module$node_modules$react$index !== 'undefined') && (typeof js.module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__10964__auto___17123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10965__auto__ = (function (){var switch__10907__auto__ = (function (state_17022){
var state_val_17023 = (state_17022[(1)]);
if((state_val_17023 === (7))){
var state_17022__$1 = state_17022;
var statearr_17024_17126 = state_17022__$1;
(statearr_17024_17126[(2)] = null);

(statearr_17024_17126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (1))){
var inst_16998 = devcards.system.load_data_from_channel_BANG_(channel);
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17022__$1,(2),inst_16998);
} else {
if((state_val_17023 === (4))){
var inst_17020 = (state_17022[(2)]);
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17022__$1,inst_17020);
} else {
if((state_val_17023 === (6))){
var inst_17007 = (state_17022[(7)]);
var inst_17009 = cljs.core.deref(devcards.system.app_state);
var inst_17010 = devcards.system.off_the_books(channel,inst_17009,inst_17007);
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17022__$1,(9),inst_17010);
} else {
if((state_val_17023 === (3))){
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17022__$1,(5),channel);
} else {
if((state_val_17023 === (2))){
var inst_17000 = (state_17022[(2)]);
var inst_17001 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_17002 = setTimeout(inst_17001,(0));
var inst_17003 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_17004 = setTimeout(inst_17003,(0));
var state_17022__$1 = (function (){var statearr_17025 = state_17022;
(statearr_17025[(8)] = inst_17002);

(statearr_17025[(9)] = inst_17004);

(statearr_17025[(10)] = inst_17000);

return statearr_17025;
})();
var statearr_17026_17140 = state_17022__$1;
(statearr_17026_17140[(2)] = null);

(statearr_17026_17140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (9))){
var inst_17007 = (state_17022[(7)]);
var inst_17012 = (state_17022[(2)]);
var inst_17013 = (function (){var temp__5735__auto__ = inst_17007;
var v = inst_17007;
var new_state = inst_17012;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_17014 = setTimeout(inst_17013,(0));
var state_17022__$1 = (function (){var statearr_17027 = state_17022;
(statearr_17027[(11)] = inst_17014);

return statearr_17027;
})();
var statearr_17028_17144 = state_17022__$1;
(statearr_17028_17144[(2)] = null);

(statearr_17028_17144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (5))){
var inst_17007 = (state_17022[(7)]);
var inst_17007__$1 = (state_17022[(2)]);
var state_17022__$1 = (function (){var statearr_17029 = state_17022;
(statearr_17029[(7)] = inst_17007__$1);

return statearr_17029;
})();
if(cljs.core.truth_(inst_17007__$1)){
var statearr_17030_17146 = state_17022__$1;
(statearr_17030_17146[(1)] = (6));

} else {
var statearr_17031_17148 = state_17022__$1;
(statearr_17031_17148[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (8))){
var inst_17018 = (state_17022[(2)]);
var state_17022__$1 = state_17022;
var statearr_17032_17150 = state_17022__$1;
(statearr_17032_17150[(2)] = inst_17018);

(statearr_17032_17150[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_$_state_machine__10908__auto__ = null;
var devcards$system$start_ui_$_state_machine__10908__auto____0 = (function (){
var statearr_17033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17033[(0)] = devcards$system$start_ui_$_state_machine__10908__auto__);

(statearr_17033[(1)] = (1));

return statearr_17033;
});
var devcards$system$start_ui_$_state_machine__10908__auto____1 = (function (state_17022){
while(true){
var ret_value__10909__auto__ = (function (){try{while(true){
var result__10910__auto__ = switch__10907__auto__(state_17022);
if(cljs.core.keyword_identical_QMARK_(result__10910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10910__auto__;
}
break;
}
}catch (e17034){var ex__10911__auto__ = e17034;
var statearr_17035_17154 = state_17022;
(statearr_17035_17154[(2)] = ex__10911__auto__);


if(cljs.core.seq((state_17022[(4)]))){
var statearr_17036_17155 = state_17022;
(statearr_17036_17155[(1)] = cljs.core.first((state_17022[(4)])));

} else {
throw ex__10911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17156 = state_17022;
state_17022 = G__17156;
continue;
} else {
return ret_value__10909__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__10908__auto__ = function(state_17022){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__10908__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__10908__auto____1.call(this,state_17022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__10908__auto____0;
devcards$system$start_ui_$_state_machine__10908__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__10908__auto____1;
return devcards$system$start_ui_$_state_machine__10908__auto__;
})()
})();
var state__10966__auto__ = (function (){var statearr_17037 = f__10965__auto__();
(statearr_17037[(6)] = c__10964__auto___17123);

return statearr_17037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10966__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return module$node_modules$react$index.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=devcards.system.js.map
