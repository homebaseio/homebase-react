goog.provide('cljs.reader');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__19109 = b.append("0");
b = G__19109;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__19049 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(10),null);
var v = vec__19049;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4126__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,cljs.reader.days_in_month(months__$1,cljs.reader.leap_year_QMARK_(years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5733__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__19058 = temp__5733__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__19063_19129 = cljs.core.seq(form);
var chunk__19064_19130 = null;
var count__19065_19131 = (0);
var i__19066_19132 = (0);
while(true){
if((i__19066_19132 < count__19065_19131)){
var x_19133 = chunk__19064_19130.cljs$core$IIndexed$_nth$arity$2(null,i__19066_19132);
arr.push(x_19133);


var G__19134 = seq__19063_19129;
var G__19135 = chunk__19064_19130;
var G__19136 = count__19065_19131;
var G__19137 = (i__19066_19132 + (1));
seq__19063_19129 = G__19134;
chunk__19064_19130 = G__19135;
count__19065_19131 = G__19136;
i__19066_19132 = G__19137;
continue;
} else {
var temp__5735__auto___19138 = cljs.core.seq(seq__19063_19129);
if(temp__5735__auto___19138){
var seq__19063_19139__$1 = temp__5735__auto___19138;
if(cljs.core.chunked_seq_QMARK_(seq__19063_19139__$1)){
var c__4556__auto___19140 = cljs.core.chunk_first(seq__19063_19139__$1);
var G__19141 = cljs.core.chunk_rest(seq__19063_19139__$1);
var G__19142 = c__4556__auto___19140;
var G__19143 = cljs.core.count(c__4556__auto___19140);
var G__19144 = (0);
seq__19063_19129 = G__19141;
chunk__19064_19130 = G__19142;
count__19065_19131 = G__19143;
i__19066_19132 = G__19144;
continue;
} else {
var x_19160 = cljs.core.first(seq__19063_19139__$1);
arr.push(x_19160);


var G__19161 = cljs.core.next(seq__19063_19139__$1);
var G__19162 = null;
var G__19163 = (0);
var G__19164 = (0);
seq__19063_19129 = G__19161;
chunk__19064_19130 = G__19162;
count__19065_19131 = G__19163;
i__19066_19132 = G__19164;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__19071_19165 = cljs.core.seq(form);
var chunk__19072_19166 = null;
var count__19073_19167 = (0);
var i__19074_19168 = (0);
while(true){
if((i__19074_19168 < count__19073_19167)){
var vec__19081_19169 = chunk__19072_19166.cljs$core$IIndexed$_nth$arity$2(null,i__19074_19168);
var k_19170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081_19169,(0),null);
var v_19171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081_19169,(1),null);
goog.object.set(obj,cljs.core.name(k_19170),v_19171);


var G__19172 = seq__19071_19165;
var G__19173 = chunk__19072_19166;
var G__19174 = count__19073_19167;
var G__19175 = (i__19074_19168 + (1));
seq__19071_19165 = G__19172;
chunk__19072_19166 = G__19173;
count__19073_19167 = G__19174;
i__19074_19168 = G__19175;
continue;
} else {
var temp__5735__auto___19176 = cljs.core.seq(seq__19071_19165);
if(temp__5735__auto___19176){
var seq__19071_19177__$1 = temp__5735__auto___19176;
if(cljs.core.chunked_seq_QMARK_(seq__19071_19177__$1)){
var c__4556__auto___19178 = cljs.core.chunk_first(seq__19071_19177__$1);
var G__19179 = cljs.core.chunk_rest(seq__19071_19177__$1);
var G__19180 = c__4556__auto___19178;
var G__19181 = cljs.core.count(c__4556__auto___19178);
var G__19182 = (0);
seq__19071_19165 = G__19179;
chunk__19072_19166 = G__19180;
count__19073_19167 = G__19181;
i__19074_19168 = G__19182;
continue;
} else {
var vec__19084_19183 = cljs.core.first(seq__19071_19177__$1);
var k_19184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084_19183,(0),null);
var v_19185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084_19183,(1),null);
goog.object.set(obj,cljs.core.name(k_19184),v_19185);


var G__19186 = cljs.core.next(seq__19071_19177__$1);
var G__19187 = null;
var G__19188 = (0);
var G__19189 = (0);
seq__19071_19165 = G__19186;
chunk__19072_19166 = G__19187;
count__19073_19167 = G__19188;
i__19074_19168 = G__19189;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__19088 = arguments.length;
switch (G__19088) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19089,reader){
var map__19090 = p__19089;
var map__19090__$1 = (((((!((map__19090 == null))))?(((((map__19090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19090):map__19090);
var opts = map__19090__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19090__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__19093 = arguments.length;
switch (G__19093) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

//# sourceMappingURL=cljs.reader.js.map
