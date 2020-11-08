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
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__17148_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__17148_SHARP_.token));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17149 = cljs.core.get_global_hierarchy;
return (fexpr__17149.cljs$core$IFn$_invoke$arity$0 ? fexpr__17149.cljs$core$IFn$_invoke$arity$0() : fexpr__17149.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__17150,state){
var vec__17151 = p__17150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17151,(0),null);
var map__17154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17151,(1),null);
var map__17154__$1 = (((((!((map__17154 == null))))?(((((map__17154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17154):map__17154);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17154__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17154__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17154__$1,new cljs.core.Keyword(null,"func","func",-238706040));
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
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__17156,path){
var map__17157 = p__17156;
var map__17157__$1 = (((((!((map__17157 == null))))?(((((map__17157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17157):map__17157);
var state = map__17157__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17157__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__17159,path){
var map__17160 = p__17159;
var map__17160__$1 = (((((!((map__17160 == null))))?(((((map__17160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17160):map__17160);
var state = map__17160__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17160__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__17163_SHARP_){
if(cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__17163_SHARP_))){
return devcards.system.devcard_QMARK_(p1__17163_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__17164){
var map__17165 = p__17164;
var map__17165__$1 = (((((!((map__17165 == null))))?(((((map__17165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17165):map__17165);
var card = map__17165__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17165__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17165__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17165__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__17167 = "div";
var G__17168 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__17169 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__17170 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__17171 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__17171);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__17170);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17167,G__17168,G__17169) : sablono.core.create_element.call(null,G__17167,G__17168,G__17169));
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
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__17172){
var map__17173 = p__17172;
var map__17173__$1 = (((((!((map__17173 == null))))?(((((map__17173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17173):map__17173);
var state = map__17173__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__17175 = "span";
var G__17176 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__17177 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17175,G__17176,G__17177) : sablono.core.create_element.call(null,G__17175,G__17176,G__17177));
});
var G__17178 = "div";
var G__17179 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__17180 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17182){
var vec__17183 = p__17182;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17183,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17183,(1),null);
var G__17186 = "span";
var G__17187 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__17188 = (function (){var G__17189 = "a";
var G__17190 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__17191 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17189,G__17190,G__17191) : sablono.core.create_element.call(null,G__17189,G__17190,G__17191));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17186,G__17187,G__17188) : sablono.core.create_element.call(null,G__17186,G__17187,G__17188));
}),crumbs))));
var G__17181 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17178,G__17179,G__17180,G__17181) : sablono.core.create_element.call(null,G__17178,G__17179,G__17180,G__17181));
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
var attrs17192 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17193){
var vec__17194 = p__17193;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17194,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17194,(1),null);
var G__17197 = "a";
var G__17198 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__17199 = (function (){var G__17201 = "span";
var G__17202 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__17203 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17201,G__17202,G__17203) : sablono.core.create_element.call(null,G__17201,G__17202,G__17203));
})();
var G__17200 = (function (){var G__17204 = "span";
var G__17205 = null;
var G__17206 = " ";
var G__17207 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17204,G__17205,G__17206,G__17207) : sablono.core.create_element.call(null,G__17204,G__17205,G__17206,G__17207));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17197,G__17198,G__17199,G__17200) : sablono.core.create_element.call(null,G__17197,G__17198,G__17199,G__17200));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__17208){
var vec__17209 = p__17208;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17192))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs17192], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs17192))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17192)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__17216 = "div";
var G__17217 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5735__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__17218 = (function (){var attrs17212 = (function (){var temp__5735__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5735__auto__)){
var crumbs = temp__5735__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17212))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs17212], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs17212))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs17214 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17214))?sablono.interpreter.attributes(attrs17214):null),((cljs.core.map_QMARK_(attrs17214))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17214)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17212),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs17215 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17215))?sablono.interpreter.attributes(attrs17215):null),((cljs.core.map_QMARK_(attrs17215))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17215)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17216,G__17217,G__17218) : sablono.core.create_element.call(null,G__17216,G__17217,G__17218));
});
devcards.system.DevcardsRoot = (function (){var ctor__17006__auto__ = (function (props__17003__auto__){
var this__17004__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17004__auto__,props__17003__auto__);

return this__17004__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x17220_17490 = ctor__17006__auto__.prototype;
(x17220_17490.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x17220_17490.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__17006__auto__;
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
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17269){
var state_val_17270 = (state_17269[(1)]);
if((state_val_17270 === (7))){
var inst_17265 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17271_17499 = state_17269__$1;
(statearr_17271_17499[(2)] = inst_17265);

(statearr_17271_17499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (1))){
var inst_17222 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_17223 = inst_17222;
var state_17269__$1 = (function (){var statearr_17274 = state_17269;
(statearr_17274[(7)] = inst_17223);

return statearr_17274;
})();
var statearr_17276_17500 = state_17269__$1;
(statearr_17276_17500[(2)] = null);

(statearr_17276_17500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (4))){
var inst_17230 = (state_17269[(8)]);
var inst_17230__$1 = (state_17269[(2)]);
var state_17269__$1 = (function (){var statearr_17278 = state_17269;
(statearr_17278[(8)] = inst_17230__$1);

return statearr_17278;
})();
if(cljs.core.truth_(inst_17230__$1)){
var statearr_17279_17501 = state_17269__$1;
(statearr_17279_17501[(1)] = (5));

} else {
var statearr_17281_17502 = state_17269__$1;
(statearr_17281_17502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (15))){
var state_17269__$1 = state_17269;
var statearr_17283_17503 = state_17269__$1;
(statearr_17283_17503[(2)] = null);

(statearr_17283_17503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (13))){
var inst_17260 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17284_17504 = state_17269__$1;
(statearr_17284_17504[(2)] = inst_17260);

(statearr_17284_17504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (6))){
var state_17269__$1 = state_17269;
var statearr_17285_17508 = state_17269__$1;
(statearr_17285_17508[(2)] = null);

(statearr_17285_17508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (3))){
var inst_17267 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17269__$1,inst_17267);
} else {
if((state_val_17270 === (12))){
var state_17269__$1 = state_17269;
var statearr_17286_17509 = state_17269__$1;
(statearr_17286_17509[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (2))){
var inst_17225 = (state_17269[(9)]);
var inst_17225__$1 = cljs.core.async.timeout((500));
var inst_17226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17227 = [channel,inst_17225__$1];
var inst_17228 = (new cljs.core.PersistentVector(null,2,(5),inst_17226,inst_17227,null));
var state_17269__$1 = (function (){var statearr_17288 = state_17269;
(statearr_17288[(9)] = inst_17225__$1);

return statearr_17288;
})();
return cljs.core.async.ioc_alts_BANG_(state_17269__$1,(4),inst_17228);
} else {
if((state_val_17270 === (11))){
var inst_17223 = (state_17269[(7)]);
var inst_17248 = devcards.system.merge_in_new_data(start_data,inst_17223);
var state_17269__$1 = state_17269;
var statearr_17291_17510 = state_17269__$1;
(statearr_17291_17510[(2)] = inst_17248);

(statearr_17291_17510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (9))){
var inst_17239 = (state_17269[(10)]);
var inst_17246 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17239,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_17269__$1 = state_17269;
if(inst_17246){
var statearr_17293_17511 = state_17269__$1;
(statearr_17293_17511[(1)] = (11));

} else {
var statearr_17295_17512 = state_17269__$1;
(statearr_17295_17512[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (5))){
var inst_17225 = (state_17269[(9)]);
var inst_17230 = (state_17269[(8)]);
var inst_17238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17230,(0),null);
var inst_17239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17238,(0),null);
var inst_17240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17238,(1),null);
var inst_17241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17230,(1),null);
var inst_17242 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17241,inst_17225);
var state_17269__$1 = (function (){var statearr_17297 = state_17269;
(statearr_17297[(11)] = inst_17240);

(statearr_17297[(10)] = inst_17239);

return statearr_17297;
})();
if(inst_17242){
var statearr_17302_17513 = state_17269__$1;
(statearr_17302_17513[(1)] = (8));

} else {
var statearr_17303_17514 = state_17269__$1;
(statearr_17303_17514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (14))){
var inst_17223 = (state_17269[(7)]);
var inst_17240 = (state_17269[(11)]);
var inst_17239 = (state_17269[(10)]);
var inst_17251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17252 = [inst_17239,inst_17240];
var inst_17253 = (new cljs.core.PersistentVector(null,2,(5),inst_17251,inst_17252,null));
var inst_17254 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_17253,inst_17223);
var inst_17223__$1 = inst_17254;
var state_17269__$1 = (function (){var statearr_17309 = state_17269;
(statearr_17309[(7)] = inst_17223__$1);

return statearr_17309;
})();
var statearr_17311_17515 = state_17269__$1;
(statearr_17311_17515[(2)] = null);

(statearr_17311_17515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (16))){
var inst_17258 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17313_17516 = state_17269__$1;
(statearr_17313_17516[(2)] = inst_17258);

(statearr_17313_17516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (10))){
var inst_17262 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17314_17517 = state_17269__$1;
(statearr_17314_17517[(2)] = inst_17262);

(statearr_17314_17517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (8))){
var inst_17223 = (state_17269[(7)]);
var inst_17244 = devcards.system.merge_in_new_data(start_data,inst_17223);
var state_17269__$1 = state_17269;
var statearr_17319_17518 = state_17269__$1;
(statearr_17319_17518[(2)] = inst_17244);

(statearr_17319_17518[(1)] = (10));


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
var devcards$system$off_the_books_$_state_machine__12072__auto__ = null;
var devcards$system$off_the_books_$_state_machine__12072__auto____0 = (function (){
var statearr_17320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17320[(0)] = devcards$system$off_the_books_$_state_machine__12072__auto__);

(statearr_17320[(1)] = (1));

return statearr_17320;
});
var devcards$system$off_the_books_$_state_machine__12072__auto____1 = (function (state_17269){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17269);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17321){var ex__12075__auto__ = e17321;
var statearr_17322_17519 = state_17269;
(statearr_17322_17519[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17269[(4)]))){
var statearr_17323_17520 = state_17269;
(statearr_17323_17520[(1)] = cljs.core.first((state_17269[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17521 = state_17269;
state_17269 = G__17521;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__12072__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__12072__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__12072__auto____0;
devcards$system$off_the_books_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__12072__auto____1;
return devcards$system$off_the_books_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17327 = f__12108__auto__();
(statearr_17327[(6)] = c__12107__auto__);

return statearr_17327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17335){
var state_val_17336 = (state_17335[(1)]);
if((state_val_17336 === (1))){
var inst_17328 = cljs.core.deref(devcards.system.app_state);
var inst_17329 = cljs.core.PersistentVector.EMPTY;
var inst_17330 = devcards.system.off_the_books(channel,inst_17328,inst_17329);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17335__$1,(2),inst_17330);
} else {
if((state_val_17336 === (2))){
var inst_17332 = (state_17335[(2)]);
var inst_17333 = cljs.core.reset_BANG_(devcards.system.app_state,inst_17332);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17335__$1,inst_17333);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0 = (function (){
var statearr_17337 = [null,null,null,null,null,null,null];
(statearr_17337[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__);

(statearr_17337[(1)] = (1));

return statearr_17337;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1 = (function (state_17335){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17335);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17340){var ex__12075__auto__ = e17340;
var statearr_17341_17561 = state_17335;
(statearr_17341_17561[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17335[(4)]))){
var statearr_17342_17562 = state_17335;
(statearr_17342_17562[(1)] = cljs.core.first((state_17335[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17563 = state_17335;
state_17335 = G__17563;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__ = function(state_17335){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1.call(this,state_17335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17348 = f__12108__auto__();
(statearr_17348[(6)] = c__12107__auto__);

return statearr_17348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
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

var c__12107__auto___17564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17389){
var state_val_17390 = (state_17389[(1)]);
if((state_val_17390 === (7))){
var state_17389__$1 = state_17389;
var statearr_17391_17568 = state_17389__$1;
(statearr_17391_17568[(2)] = null);

(statearr_17391_17568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17390 === (1))){
var inst_17365 = devcards.system.load_data_from_channel_BANG_(channel);
var state_17389__$1 = state_17389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17389__$1,(2),inst_17365);
} else {
if((state_val_17390 === (4))){
var inst_17387 = (state_17389[(2)]);
var state_17389__$1 = state_17389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17389__$1,inst_17387);
} else {
if((state_val_17390 === (6))){
var inst_17374 = (state_17389[(7)]);
var inst_17376 = cljs.core.deref(devcards.system.app_state);
var inst_17377 = devcards.system.off_the_books(channel,inst_17376,inst_17374);
var state_17389__$1 = state_17389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17389__$1,(9),inst_17377);
} else {
if((state_val_17390 === (3))){
var state_17389__$1 = state_17389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17389__$1,(5),channel);
} else {
if((state_val_17390 === (2))){
var inst_17367 = (state_17389[(2)]);
var inst_17368 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_17369 = setTimeout(inst_17368,(0));
var inst_17370 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_17371 = setTimeout(inst_17370,(0));
var state_17389__$1 = (function (){var statearr_17392 = state_17389;
(statearr_17392[(8)] = inst_17371);

(statearr_17392[(9)] = inst_17369);

(statearr_17392[(10)] = inst_17367);

return statearr_17392;
})();
var statearr_17393_17571 = state_17389__$1;
(statearr_17393_17571[(2)] = null);

(statearr_17393_17571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17390 === (9))){
var inst_17374 = (state_17389[(7)]);
var inst_17379 = (state_17389[(2)]);
var inst_17380 = (function (){var temp__5735__auto__ = inst_17374;
var v = inst_17374;
var new_state = inst_17379;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_17381 = setTimeout(inst_17380,(0));
var state_17389__$1 = (function (){var statearr_17394 = state_17389;
(statearr_17394[(11)] = inst_17381);

return statearr_17394;
})();
var statearr_17395_17572 = state_17389__$1;
(statearr_17395_17572[(2)] = null);

(statearr_17395_17572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17390 === (5))){
var inst_17374 = (state_17389[(7)]);
var inst_17374__$1 = (state_17389[(2)]);
var state_17389__$1 = (function (){var statearr_17396 = state_17389;
(statearr_17396[(7)] = inst_17374__$1);

return statearr_17396;
})();
if(cljs.core.truth_(inst_17374__$1)){
var statearr_17397_17573 = state_17389__$1;
(statearr_17397_17573[(1)] = (6));

} else {
var statearr_17398_17574 = state_17389__$1;
(statearr_17398_17574[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17390 === (8))){
var inst_17385 = (state_17389[(2)]);
var state_17389__$1 = state_17389;
var statearr_17399_17578 = state_17389__$1;
(statearr_17399_17578[(2)] = inst_17385);

(statearr_17399_17578[(1)] = (4));


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
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0 = (function (){
var statearr_17400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17400[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__);

(statearr_17400[(1)] = (1));

return statearr_17400;
});
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1 = (function (state_17389){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17389);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17416){var ex__12075__auto__ = e17416;
var statearr_17417_17579 = state_17389;
(statearr_17417_17579[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17389[(4)]))){
var statearr_17418_17593 = state_17389;
(statearr_17418_17593[(1)] = cljs.core.first((state_17389[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17594 = state_17389;
state_17389 = G__17594;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__ = function(state_17389){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1.call(this,state_17389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17419 = f__12108__auto__();
(statearr_17419[(6)] = c__12107__auto___17564);

return statearr_17419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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

var c__12107__auto___17595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17444){
var state_val_17445 = (state_17444[(1)]);
if((state_val_17445 === (7))){
var state_17444__$1 = state_17444;
var statearr_17446_17596 = state_17444__$1;
(statearr_17446_17596[(2)] = null);

(statearr_17446_17596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (1))){
var inst_17420 = devcards.system.load_data_from_channel_BANG_(channel);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17444__$1,(2),inst_17420);
} else {
if((state_val_17445 === (4))){
var inst_17442 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17444__$1,inst_17442);
} else {
if((state_val_17445 === (6))){
var inst_17429 = (state_17444[(7)]);
var inst_17431 = cljs.core.deref(devcards.system.app_state);
var inst_17432 = devcards.system.off_the_books(channel,inst_17431,inst_17429);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17444__$1,(9),inst_17432);
} else {
if((state_val_17445 === (3))){
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17444__$1,(5),channel);
} else {
if((state_val_17445 === (2))){
var inst_17422 = (state_17444[(2)]);
var inst_17423 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_17424 = setTimeout(inst_17423,(0));
var inst_17425 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_17426 = setTimeout(inst_17425,(0));
var state_17444__$1 = (function (){var statearr_17453 = state_17444;
(statearr_17453[(8)] = inst_17424);

(statearr_17453[(9)] = inst_17426);

(statearr_17453[(10)] = inst_17422);

return statearr_17453;
})();
var statearr_17454_17597 = state_17444__$1;
(statearr_17454_17597[(2)] = null);

(statearr_17454_17597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (9))){
var inst_17429 = (state_17444[(7)]);
var inst_17434 = (state_17444[(2)]);
var inst_17435 = (function (){var temp__5735__auto__ = inst_17429;
var v = inst_17429;
var new_state = inst_17434;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_17436 = setTimeout(inst_17435,(0));
var state_17444__$1 = (function (){var statearr_17455 = state_17444;
(statearr_17455[(11)] = inst_17436);

return statearr_17455;
})();
var statearr_17456_17598 = state_17444__$1;
(statearr_17456_17598[(2)] = null);

(statearr_17456_17598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (5))){
var inst_17429 = (state_17444[(7)]);
var inst_17429__$1 = (state_17444[(2)]);
var state_17444__$1 = (function (){var statearr_17457 = state_17444;
(statearr_17457[(7)] = inst_17429__$1);

return statearr_17457;
})();
if(cljs.core.truth_(inst_17429__$1)){
var statearr_17458_17599 = state_17444__$1;
(statearr_17458_17599[(1)] = (6));

} else {
var statearr_17459_17600 = state_17444__$1;
(statearr_17459_17600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (8))){
var inst_17440 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17460_17601 = state_17444__$1;
(statearr_17460_17601[(2)] = inst_17440);

(statearr_17460_17601[(1)] = (4));


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
var devcards$system$start_ui_$_state_machine__12072__auto__ = null;
var devcards$system$start_ui_$_state_machine__12072__auto____0 = (function (){
var statearr_17461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17461[(0)] = devcards$system$start_ui_$_state_machine__12072__auto__);

(statearr_17461[(1)] = (1));

return statearr_17461;
});
var devcards$system$start_ui_$_state_machine__12072__auto____1 = (function (state_17444){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17444);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17462){var ex__12075__auto__ = e17462;
var statearr_17463_17602 = state_17444;
(statearr_17463_17602[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17444[(4)]))){
var statearr_17464_17603 = state_17444;
(statearr_17464_17603[(1)] = cljs.core.first((state_17444[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17604 = state_17444;
state_17444 = G__17604;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__12072__auto__ = function(state_17444){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__12072__auto____1.call(this,state_17444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__12072__auto____0;
devcards$system$start_ui_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__12072__auto____1;
return devcards$system$start_ui_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17465 = f__12108__auto__();
(statearr_17465[(6)] = c__12107__auto___17595);

return statearr_17465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
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
