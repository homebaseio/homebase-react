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
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__16603_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__16603_SHARP_.token));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16604 = cljs.core.get_global_hierarchy;
return (fexpr__16604.cljs$core$IFn$_invoke$arity$0 ? fexpr__16604.cljs$core$IFn$_invoke$arity$0() : fexpr__16604.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__16605,state){
var vec__16606 = p__16605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(0),null);
var map__16609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(1),null);
var map__16609__$1 = (((((!((map__16609 == null))))?(((((map__16609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16609):map__16609);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"func","func",-238706040));
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
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__16612,path){
var map__16613 = p__16612;
var map__16613__$1 = (((((!((map__16613 == null))))?(((((map__16613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16613):map__16613);
var state = map__16613__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__16615,path){
var map__16616 = p__16615;
var map__16616__$1 = (((((!((map__16616 == null))))?(((((map__16616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16616):map__16616);
var state = map__16616__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16618_SHARP_){
if(cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__16618_SHARP_))){
return devcards.system.devcard_QMARK_(p1__16618_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__16619){
var map__16620 = p__16619;
var map__16620__$1 = (((((!((map__16620 == null))))?(((((map__16620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16620):map__16620);
var card = map__16620__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__16622 = "div";
var G__16623 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__16624 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__16625 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__16626 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__16626);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__16625);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16622,G__16623,G__16624) : sablono.core.create_element.call(null,G__16622,G__16623,G__16624));
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
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__16627){
var map__16628 = p__16627;
var map__16628__$1 = (((((!((map__16628 == null))))?(((((map__16628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16628):map__16628);
var state = map__16628__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16628__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__16631 = "span";
var G__16632 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__16633 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16631,G__16632,G__16633) : sablono.core.create_element.call(null,G__16631,G__16632,G__16633));
});
var G__16634 = "div";
var G__16635 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__16636 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16638){
var vec__16639 = p__16638;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639,(1),null);
var G__16642 = "span";
var G__16643 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__16644 = (function (){var G__16645 = "a";
var G__16646 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__16647 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16645,G__16646,G__16647) : sablono.core.create_element.call(null,G__16645,G__16646,G__16647));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16642,G__16643,G__16644) : sablono.core.create_element.call(null,G__16642,G__16643,G__16644));
}),crumbs))));
var G__16637 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16634,G__16635,G__16636,G__16637) : sablono.core.create_element.call(null,G__16634,G__16635,G__16636,G__16637));
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
var attrs16648 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16649){
var vec__16650 = p__16649;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16650,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16650,(1),null);
var G__16653 = "a";
var G__16654 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__16655 = (function (){var G__16657 = "span";
var G__16658 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__16659 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16657,G__16658,G__16659) : sablono.core.create_element.call(null,G__16657,G__16658,G__16659));
})();
var G__16656 = (function (){var G__16660 = "span";
var G__16661 = null;
var G__16662 = " ";
var G__16663 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16660,G__16661,G__16662,G__16663) : sablono.core.create_element.call(null,G__16660,G__16661,G__16662,G__16663));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__16653,G__16654,G__16655,G__16656) : sablono.core.create_element.call(null,G__16653,G__16654,G__16655,G__16656));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__16664){
var vec__16665 = p__16664;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16648))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs16648], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs16648))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16648)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__16671 = "div";
var G__16672 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5735__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__16673 = (function (){var attrs16668 = (function (){var temp__5735__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5735__auto__)){
var crumbs = temp__5735__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16668))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs16668], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs16668))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs16669 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16669))?sablono.interpreter.attributes(attrs16669):null),((cljs.core.map_QMARK_(attrs16669))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16669)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16668),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs16670 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs16670))?sablono.interpreter.attributes(attrs16670):null),((cljs.core.map_QMARK_(attrs16670))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16670)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__16671,G__16672,G__16673) : sablono.core.create_element.call(null,G__16671,G__16672,G__16673));
});
devcards.system.DevcardsRoot = (function (){var ctor__16471__auto__ = (function (props__16468__auto__){
var this__16469__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16469__auto__,props__16468__auto__);

return this__16469__auto__;
});
goog.inherits(ctor__16471__auto__,devcards.util.utils.react_holder.Component);

var x16674_16954 = ctor__16471__auto__.prototype;
(x16674_16954.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x16674_16954.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__16471__auto__;
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
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_16744){
var state_val_16749 = (state_16744[(1)]);
if((state_val_16749 === (7))){
var inst_16740 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16750_16955 = state_16744__$1;
(statearr_16750_16955[(2)] = inst_16740);

(statearr_16750_16955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (1))){
var inst_16675 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_16676 = inst_16675;
var state_16744__$1 = (function (){var statearr_16751 = state_16744;
(statearr_16751[(7)] = inst_16676);

return statearr_16751;
})();
var statearr_16752_16956 = state_16744__$1;
(statearr_16752_16956[(2)] = null);

(statearr_16752_16956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (4))){
var inst_16683 = (state_16744[(8)]);
var inst_16683__$1 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16753 = state_16744;
(statearr_16753[(8)] = inst_16683__$1);

return statearr_16753;
})();
if(cljs.core.truth_(inst_16683__$1)){
var statearr_16754_16957 = state_16744__$1;
(statearr_16754_16957[(1)] = (5));

} else {
var statearr_16755_16958 = state_16744__$1;
(statearr_16755_16958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (15))){
var state_16744__$1 = state_16744;
var statearr_16756_16959 = state_16744__$1;
(statearr_16756_16959[(2)] = null);

(statearr_16756_16959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (13))){
var inst_16735 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16757_16960 = state_16744__$1;
(statearr_16757_16960[(2)] = inst_16735);

(statearr_16757_16960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (6))){
var state_16744__$1 = state_16744;
var statearr_16758_16961 = state_16744__$1;
(statearr_16758_16961[(2)] = null);

(statearr_16758_16961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (3))){
var inst_16742 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16744__$1,inst_16742);
} else {
if((state_val_16749 === (12))){
var state_16744__$1 = state_16744;
var statearr_16759_16995 = state_16744__$1;
(statearr_16759_16995[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (2))){
var inst_16678 = (state_16744[(9)]);
var inst_16678__$1 = cljs.core.async.timeout((500));
var inst_16679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16680 = [channel,inst_16678__$1];
var inst_16681 = (new cljs.core.PersistentVector(null,2,(5),inst_16679,inst_16680,null));
var state_16744__$1 = (function (){var statearr_16761 = state_16744;
(statearr_16761[(9)] = inst_16678__$1);

return statearr_16761;
})();
return cljs.core.async.ioc_alts_BANG_(state_16744__$1,(4),inst_16681);
} else {
if((state_val_16749 === (11))){
var inst_16676 = (state_16744[(7)]);
var inst_16711 = devcards.system.merge_in_new_data(start_data,inst_16676);
var state_16744__$1 = state_16744;
var statearr_16762_16996 = state_16744__$1;
(statearr_16762_16996[(2)] = inst_16711);

(statearr_16762_16996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (9))){
var inst_16700 = (state_16744[(10)]);
var inst_16708 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16700,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_16744__$1 = state_16744;
if(inst_16708){
var statearr_16764_16997 = state_16744__$1;
(statearr_16764_16997[(1)] = (11));

} else {
var statearr_16765_16998 = state_16744__$1;
(statearr_16765_16998[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (5))){
var inst_16678 = (state_16744[(9)]);
var inst_16683 = (state_16744[(8)]);
var inst_16699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16683,(0),null);
var inst_16700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16699,(0),null);
var inst_16701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16699,(1),null);
var inst_16702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16683,(1),null);
var inst_16704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16702,inst_16678);
var state_16744__$1 = (function (){var statearr_16767 = state_16744;
(statearr_16767[(11)] = inst_16701);

(statearr_16767[(10)] = inst_16700);

return statearr_16767;
})();
if(inst_16704){
var statearr_16768_16999 = state_16744__$1;
(statearr_16768_16999[(1)] = (8));

} else {
var statearr_16783_17000 = state_16744__$1;
(statearr_16783_17000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (14))){
var inst_16676 = (state_16744[(7)]);
var inst_16701 = (state_16744[(11)]);
var inst_16700 = (state_16744[(10)]);
var inst_16719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16727 = [inst_16700,inst_16701];
var inst_16728 = (new cljs.core.PersistentVector(null,2,(5),inst_16719,inst_16727,null));
var inst_16729 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_16728,inst_16676);
var inst_16676__$1 = inst_16729;
var state_16744__$1 = (function (){var statearr_16790 = state_16744;
(statearr_16790[(7)] = inst_16676__$1);

return statearr_16790;
})();
var statearr_16795_17001 = state_16744__$1;
(statearr_16795_17001[(2)] = null);

(statearr_16795_17001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (16))){
var inst_16733 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16796_17002 = state_16744__$1;
(statearr_16796_17002[(2)] = inst_16733);

(statearr_16796_17002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (10))){
var inst_16737 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16797_17003 = state_16744__$1;
(statearr_16797_17003[(2)] = inst_16737);

(statearr_16797_17003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (8))){
var inst_16676 = (state_16744[(7)]);
var inst_16706 = devcards.system.merge_in_new_data(start_data,inst_16676);
var state_16744__$1 = state_16744;
var statearr_16798_17004 = state_16744__$1;
(statearr_16798_17004[(2)] = inst_16706);

(statearr_16798_17004[(1)] = (10));


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
var devcards$system$off_the_books_$_state_machine__10936__auto__ = null;
var devcards$system$off_the_books_$_state_machine__10936__auto____0 = (function (){
var statearr_16799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16799[(0)] = devcards$system$off_the_books_$_state_machine__10936__auto__);

(statearr_16799[(1)] = (1));

return statearr_16799;
});
var devcards$system$off_the_books_$_state_machine__10936__auto____1 = (function (state_16744){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_16744);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e16800){var ex__10939__auto__ = e16800;
var statearr_16801_17005 = state_16744;
(statearr_16801_17005[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_16744[(4)]))){
var statearr_16802_17006 = state_16744;
(statearr_16802_17006[(1)] = cljs.core.first((state_16744[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17007 = state_16744;
state_16744 = G__17007;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__10936__auto__ = function(state_16744){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__10936__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__10936__auto____1.call(this,state_16744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__10936__auto____0;
devcards$system$off_the_books_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__10936__auto____1;
return devcards$system$off_the_books_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_16803 = f__10977__auto__();
(statearr_16803[(6)] = c__10976__auto__);

return statearr_16803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__10976__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (1))){
var inst_16804 = cljs.core.deref(devcards.system.app_state);
var inst_16805 = cljs.core.PersistentVector.EMPTY;
var inst_16806 = devcards.system.off_the_books(channel,inst_16804,inst_16805);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16811__$1,(2),inst_16806);
} else {
if((state_val_16812 === (2))){
var inst_16808 = (state_16811[(2)]);
var inst_16809 = cljs.core.reset_BANG_(devcards.system.app_state,inst_16808);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16811__$1,inst_16809);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____0 = (function (){
var statearr_16813 = [null,null,null,null,null,null,null];
(statearr_16813[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__);

(statearr_16813[(1)] = (1));

return statearr_16813;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____1 = (function (state_16811){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_16811);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e16820){var ex__10939__auto__ = e16820;
var statearr_16821_17014 = state_16811;
(statearr_16821_17014[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_16811[(4)]))){
var statearr_16822_17015 = state_16811;
(statearr_16822_17015[(1)] = cljs.core.first((state_16811[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17016 = state_16811;
state_16811 = G__17016;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_16823 = f__10977__auto__();
(statearr_16823[(6)] = c__10976__auto__);

return statearr_16823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
}));

return c__10976__auto__;
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

var c__10976__auto___17017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_16848){
var state_val_16849 = (state_16848[(1)]);
if((state_val_16849 === (7))){
var state_16848__$1 = state_16848;
var statearr_16850_17018 = state_16848__$1;
(statearr_16850_17018[(2)] = null);

(statearr_16850_17018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16849 === (1))){
var inst_16824 = devcards.system.load_data_from_channel_BANG_(channel);
var state_16848__$1 = state_16848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16848__$1,(2),inst_16824);
} else {
if((state_val_16849 === (4))){
var inst_16846 = (state_16848[(2)]);
var state_16848__$1 = state_16848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16848__$1,inst_16846);
} else {
if((state_val_16849 === (6))){
var inst_16833 = (state_16848[(7)]);
var inst_16835 = cljs.core.deref(devcards.system.app_state);
var inst_16836 = devcards.system.off_the_books(channel,inst_16835,inst_16833);
var state_16848__$1 = state_16848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16848__$1,(9),inst_16836);
} else {
if((state_val_16849 === (3))){
var state_16848__$1 = state_16848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16848__$1,(5),channel);
} else {
if((state_val_16849 === (2))){
var inst_16826 = (state_16848[(2)]);
var inst_16827 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_16828 = setTimeout(inst_16827,(0));
var inst_16829 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_16830 = setTimeout(inst_16829,(0));
var state_16848__$1 = (function (){var statearr_16854 = state_16848;
(statearr_16854[(8)] = inst_16828);

(statearr_16854[(9)] = inst_16830);

(statearr_16854[(10)] = inst_16826);

return statearr_16854;
})();
var statearr_16855_17019 = state_16848__$1;
(statearr_16855_17019[(2)] = null);

(statearr_16855_17019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16849 === (9))){
var inst_16833 = (state_16848[(7)]);
var inst_16838 = (state_16848[(2)]);
var inst_16839 = (function (){var temp__5735__auto__ = inst_16833;
var v = inst_16833;
var new_state = inst_16838;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_16840 = setTimeout(inst_16839,(0));
var state_16848__$1 = (function (){var statearr_16856 = state_16848;
(statearr_16856[(11)] = inst_16840);

return statearr_16856;
})();
var statearr_16857_17020 = state_16848__$1;
(statearr_16857_17020[(2)] = null);

(statearr_16857_17020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16849 === (5))){
var inst_16833 = (state_16848[(7)]);
var inst_16833__$1 = (state_16848[(2)]);
var state_16848__$1 = (function (){var statearr_16858 = state_16848;
(statearr_16858[(7)] = inst_16833__$1);

return statearr_16858;
})();
if(cljs.core.truth_(inst_16833__$1)){
var statearr_16859_17021 = state_16848__$1;
(statearr_16859_17021[(1)] = (6));

} else {
var statearr_16860_17022 = state_16848__$1;
(statearr_16860_17022[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16849 === (8))){
var inst_16844 = (state_16848[(2)]);
var state_16848__$1 = state_16848;
var statearr_16861_17023 = state_16848__$1;
(statearr_16861_17023[(2)] = inst_16844);

(statearr_16861_17023[(1)] = (4));


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
var devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____0 = (function (){
var statearr_16862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16862[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__);

(statearr_16862[(1)] = (1));

return statearr_16862;
});
var devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____1 = (function (state_16848){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_16848);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e16863){var ex__10939__auto__ = e16863;
var statearr_16864_17024 = state_16848;
(statearr_16864_17024[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_16848[(4)]))){
var statearr_16865_17025 = state_16848;
(statearr_16865_17025[(1)] = cljs.core.first((state_16848[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17026 = state_16848;
state_16848 = G__17026;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__ = function(state_16848){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____1.call(this,state_16848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__10936__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_16866 = f__10977__auto__();
(statearr_16866[(6)] = c__10976__auto___17017);

return statearr_16866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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

var c__10976__auto___17027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10977__auto__ = (function (){var switch__10935__auto__ = (function (state_16900){
var state_val_16901 = (state_16900[(1)]);
if((state_val_16901 === (7))){
var state_16900__$1 = state_16900;
var statearr_16902_17028 = state_16900__$1;
(statearr_16902_17028[(2)] = null);

(statearr_16902_17028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (1))){
var inst_16876 = devcards.system.load_data_from_channel_BANG_(channel);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16900__$1,(2),inst_16876);
} else {
if((state_val_16901 === (4))){
var inst_16898 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16900__$1,inst_16898);
} else {
if((state_val_16901 === (6))){
var inst_16885 = (state_16900[(7)]);
var inst_16887 = cljs.core.deref(devcards.system.app_state);
var inst_16888 = devcards.system.off_the_books(channel,inst_16887,inst_16885);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16900__$1,(9),inst_16888);
} else {
if((state_val_16901 === (3))){
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16900__$1,(5),channel);
} else {
if((state_val_16901 === (2))){
var inst_16878 = (state_16900[(2)]);
var inst_16879 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_16880 = setTimeout(inst_16879,(0));
var inst_16881 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_16882 = setTimeout(inst_16881,(0));
var state_16900__$1 = (function (){var statearr_16903 = state_16900;
(statearr_16903[(8)] = inst_16878);

(statearr_16903[(9)] = inst_16880);

(statearr_16903[(10)] = inst_16882);

return statearr_16903;
})();
var statearr_16904_17037 = state_16900__$1;
(statearr_16904_17037[(2)] = null);

(statearr_16904_17037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (9))){
var inst_16885 = (state_16900[(7)]);
var inst_16890 = (state_16900[(2)]);
var inst_16891 = (function (){var temp__5735__auto__ = inst_16885;
var v = inst_16885;
var new_state = inst_16890;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_16892 = setTimeout(inst_16891,(0));
var state_16900__$1 = (function (){var statearr_16905 = state_16900;
(statearr_16905[(11)] = inst_16892);

return statearr_16905;
})();
var statearr_16906_17038 = state_16900__$1;
(statearr_16906_17038[(2)] = null);

(statearr_16906_17038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (5))){
var inst_16885 = (state_16900[(7)]);
var inst_16885__$1 = (state_16900[(2)]);
var state_16900__$1 = (function (){var statearr_16907 = state_16900;
(statearr_16907[(7)] = inst_16885__$1);

return statearr_16907;
})();
if(cljs.core.truth_(inst_16885__$1)){
var statearr_16908_17039 = state_16900__$1;
(statearr_16908_17039[(1)] = (6));

} else {
var statearr_16909_17040 = state_16900__$1;
(statearr_16909_17040[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (8))){
var inst_16896 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16910_17041 = state_16900__$1;
(statearr_16910_17041[(2)] = inst_16896);

(statearr_16910_17041[(1)] = (4));


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
var devcards$system$start_ui_$_state_machine__10936__auto__ = null;
var devcards$system$start_ui_$_state_machine__10936__auto____0 = (function (){
var statearr_16911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16911[(0)] = devcards$system$start_ui_$_state_machine__10936__auto__);

(statearr_16911[(1)] = (1));

return statearr_16911;
});
var devcards$system$start_ui_$_state_machine__10936__auto____1 = (function (state_16900){
while(true){
var ret_value__10937__auto__ = (function (){try{while(true){
var result__10938__auto__ = switch__10935__auto__(state_16900);
if(cljs.core.keyword_identical_QMARK_(result__10938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10938__auto__;
}
break;
}
}catch (e16912){var ex__10939__auto__ = e16912;
var statearr_16913_17042 = state_16900;
(statearr_16913_17042[(2)] = ex__10939__auto__);


if(cljs.core.seq((state_16900[(4)]))){
var statearr_16914_17043 = state_16900;
(statearr_16914_17043[(1)] = cljs.core.first((state_16900[(4)])));

} else {
throw ex__10939__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17044 = state_16900;
state_16900 = G__17044;
continue;
} else {
return ret_value__10937__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__10936__auto__ = function(state_16900){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__10936__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__10936__auto____1.call(this,state_16900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__10936__auto____0;
devcards$system$start_ui_$_state_machine__10936__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__10936__auto____1;
return devcards$system$start_ui_$_state_machine__10936__auto__;
})()
})();
var state__10978__auto__ = (function (){var statearr_16919 = f__10977__auto__();
(statearr_16919[(6)] = c__10976__auto___17027);

return statearr_16919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10978__auto__);
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
