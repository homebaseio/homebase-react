goog.provide('sablono.interpreter');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

var sablono$interpreter$IInterpreter$interpret$dyn_13378 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sablono.interpreter.interpret["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
});
/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((((!((this$ == null)))) && ((!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
return sablono$interpreter$IInterpreter$interpret$dyn_13378(this$);
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

return state;
})());

return module$node_modules$react$index.Component.call(this$,props);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x13218_13389 = ctor.prototype;
(x13218_13389.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
}));

(x13218_13389.componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = goog.object.get(module$node_modules$react_dom$index.findDOMNode(this$),property);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_value))){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
}));

(x13218_13389.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,this$.state);
}));


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
(sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value"));

(sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked"));

(sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value"));

return (sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value"));
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
if(cljs.core.object_QMARK_(props)){
var G__13264 = type;
switch (G__13264) {
case "input":
return (((!((props.checked == null)))) || ((!((props.value == null)))));

break;
case "select":
return (!((props.value == null)));

break;
case "textarea":
return (!((props.value == null)));

break;
default:
return false;

}
} else {
return false;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__13305 = type;
switch (G__13305) {
case "input":
var G__13306 = ((cljs.core.object_QMARK_(props))?props.type:false);
switch (G__13306) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13396 = arguments.length;
var i__4737__auto___13397 = (0);
while(true){
if((i__4737__auto___13397 < len__4736__auto___13396)){
args__4742__auto__.push((arguments[i__4737__auto___13397]));

var G__13398 = (i__4737__auto___13397 + (1));
i__4737__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,sablono.interpreter.element_class(type,props),props,children);
}));

(sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq13312){
var G__13313 = cljs.core.first(seq13312);
var seq13312__$1 = cljs.core.next(seq13312);
var G__13314 = cljs.core.first(seq13312__$1);
var seq13312__$2 = cljs.core.next(seq13312__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13313,G__13314,seq13312__$2);
}));

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5735__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5735__auto__)){
var js_attrs = temp__5735__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__13331 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(sablono.util.element_QMARK_(x)){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

goog.object.set(sablono.interpreter.interpret,"null",(function (this$){
return null;
}));

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

goog.object.set(sablono.interpreter.interpret,"_",(function (this$){
return this$;
}));

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
}));

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

//# sourceMappingURL=sablono.interpreter.js.map
