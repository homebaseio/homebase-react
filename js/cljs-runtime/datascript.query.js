goog.provide('datascript.query');
datascript.query.lru_cache_size = (100);



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
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23207,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23211 = k23207;
var G__23211__$1 = (((G__23211 instanceof cljs.core.Keyword))?G__23211.fqn:null);
switch (G__23211__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23207,else__4383__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__23212){
var vec__23213 = p__23212;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23213,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23213,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Context{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23206){
var self__ = this;
var G__23206__$1 = this;
return (new cljs.core.RecordIter((0),G__23206__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23208,other23209){
var self__ = this;
var this23208__$1 = this;
return (((!((other23209 == null)))) && ((this23208__$1.constructor === other23209.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23208__$1.rels,other23209.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23208__$1.sources,other23209.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23208__$1.rules,other23209.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23208__$1.__extmap,other23209.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23206){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23216 = cljs.core.keyword_identical_QMARK_;
var expr__23217 = k__4388__auto__;
if(cljs.core.truth_((pred__23216.cljs$core$IFn$_invoke$arity$2 ? pred__23216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__23217) : pred__23216.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__23217)))){
return (new datascript.query.Context(G__23206,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23216.cljs$core$IFn$_invoke$arity$2 ? pred__23216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__23217) : pred__23216.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__23217)))){
return (new datascript.query.Context(self__.rels,G__23206,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23216.cljs$core$IFn$_invoke$arity$2 ? pred__23216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__23217) : pred__23216.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__23217)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__23206,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__23206),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23206){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__23206,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__23210){
var extmap__4419__auto__ = (function (){var G__23219 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23210,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__23210)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23219);
} else {
return G__23219;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__23210),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__23210),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__23210),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23221,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23225 = k23221;
var G__23225__$1 = (((G__23225 instanceof cljs.core.Keyword))?G__23225.fqn:null);
switch (G__23225__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23221,else__4383__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__23226){
var vec__23227 = p__23226;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23227,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23227,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Relation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23220){
var self__ = this;
var G__23220__$1 = this;
return (new cljs.core.RecordIter((0),G__23220__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23222,other23223){
var self__ = this;
var this23222__$1 = this;
return (((!((other23223 == null)))) && ((this23222__$1.constructor === other23223.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23222__$1.attrs,other23223.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23222__$1.tuples,other23223.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23222__$1.__extmap,other23223.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23220){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23234 = cljs.core.keyword_identical_QMARK_;
var expr__23235 = k__4388__auto__;
if(cljs.core.truth_((pred__23234.cljs$core$IFn$_invoke$arity$2 ? pred__23234.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__23235) : pred__23234.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__23235)))){
return (new datascript.query.Relation(G__23220,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23234.cljs$core$IFn$_invoke$arity$2 ? pred__23234.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__23235) : pred__23234.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__23235)))){
return (new datascript.query.Relation(self__.attrs,G__23220,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__23220),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23220){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__23220,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__23224){
var extmap__4419__auto__ = (function (){var G__23238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23224,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__23224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23238);
} else {
return G__23238;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__23224),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__23224),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23606 = arguments.length;
var i__4737__auto___23607 = (0);
while(true){
if((i__4737__auto___23607 < len__4736__auto___23606)){
args__4742__auto__.push((arguments[i__4737__auto___23607]));

var G__23608 = (i__4737__auto___23607 + (1));
i__4737__auto___23607 = G__23608;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq23239){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23239));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__23244 = arguments.length;
switch (G__23244) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___23610 = arguments.length;
var i__4737__auto___23611 = (0);
while(true){
if((i__4737__auto___23611 < len__4736__auto___23610)){
args_arr__4757__auto__.push((arguments[i__4737__auto___23611]));

var G__23612 = (i__4737__auto___23611 + (1));
i__4737__auto___23611 = G__23612;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq23241){
var G__23242 = cljs.core.first(seq23241);
var seq23241__$1 = cljs.core.next(seq23241);
var G__23243 = cljs.core.first(seq23241__$1);
var seq23241__$2 = cljs.core.next(seq23241__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23242,G__23243,seq23241__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__23246_SHARP_){
return cljs.core.contains_QMARK_(b,p1__23246_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__23247_SHARP_){
return cljs.core.contains_QMARK_(b,p1__23247_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__23252){
var vec__23253 = p__23252;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__23261){
var vec__23262 = p__23261;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4613__auto___23613 = l1;
var i_23614 = (0);
while(true){
if((i_23614 < n__4613__auto___23613)){
(res[i_23614] = (t1[(idxs1[i_23614])]));

var G__23615 = (i_23614 + (1));
i_23614 = G__23615;
continue;
} else {
}
break;
}

var n__4613__auto___23616 = l2;
var i_23617 = (0);
while(true){
if((i_23617 < n__4613__auto___23616)){
(res[(l1 + i_23617)] = (t2[(idxs2[i_23617])]));

var G__23618 = (i_23617 + (1));
i_23617 = G__23618;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__23266 = a;
var map__23266__$1 = (((((!((map__23266 == null))))?(((((map__23266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23266):map__23266);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__23267 = b;
var map__23267__$1 = (((((!((map__23267 == null))))?(((((map__23267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23267):map__23267);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23267__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4529__auto__ = (function datascript$query$sum_rel_$_iter__23270(s__23271){
return (new cljs.core.LazySeq(null,(function (){
var s__23271__$1 = s__23271;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23271__$1);
if(temp__5735__auto__){
var s__23271__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23271__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23271__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23273 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23272 = (0);
while(true){
if((i__23272 < size__4528__auto__)){
var vec__23274 = cljs.core._nth(c__4527__auto__,i__23272);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(1),null);
cljs.core.chunk_append(b__23273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__23619 = (i__23272 + (1));
i__23272 = G__23619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23273),datascript$query$sum_rel_$_iter__23270(cljs.core.chunk_rest(s__23271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23273),null);
}
} else {
var vec__23277 = cljs.core.first(s__23271__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__23270(cljs.core.rest(s__23271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__23280_23620 = cljs.core.seq(idxb__GT_idxa);
var chunk__23281_23621 = null;
var count__23282_23622 = (0);
var i__23283_23623 = (0);
while(true){
if((i__23283_23623 < count__23282_23622)){
var vec__23290_23624 = chunk__23281_23621.cljs$core$IIndexed$_nth$arity$2(null,i__23283_23623);
var idx_b_23625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290_23624,(0),null);
var idx_a_23626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290_23624,(1),null);
(tuple_SINGLEQUOTE_[idx_a_23626] = (tuple_b[idx_b_23625]));


var G__23627 = seq__23280_23620;
var G__23628 = chunk__23281_23621;
var G__23629 = count__23282_23622;
var G__23630 = (i__23283_23623 + (1));
seq__23280_23620 = G__23627;
chunk__23281_23621 = G__23628;
count__23282_23622 = G__23629;
i__23283_23623 = G__23630;
continue;
} else {
var temp__5735__auto___23631 = cljs.core.seq(seq__23280_23620);
if(temp__5735__auto___23631){
var seq__23280_23632__$1 = temp__5735__auto___23631;
if(cljs.core.chunked_seq_QMARK_(seq__23280_23632__$1)){
var c__4556__auto___23633 = cljs.core.chunk_first(seq__23280_23632__$1);
var G__23634 = cljs.core.chunk_rest(seq__23280_23632__$1);
var G__23635 = c__4556__auto___23633;
var G__23636 = cljs.core.count(c__4556__auto___23633);
var G__23637 = (0);
seq__23280_23620 = G__23634;
chunk__23281_23621 = G__23635;
count__23282_23622 = G__23636;
i__23283_23623 = G__23637;
continue;
} else {
var vec__23294_23638 = cljs.core.first(seq__23280_23632__$1);
var idx_b_23639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23294_23638,(0),null);
var idx_a_23640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23294_23638,(1),null);
(tuple_SINGLEQUOTE_[idx_a_23640] = (tuple_b[idx_b_23639]));


var G__23641 = cljs.core.next(seq__23280_23632__$1);
var G__23642 = null;
var G__23643 = (0);
var G__23644 = (0);
seq__23280_23620 = G__23641;
chunk__23281_23621 = G__23642;
count__23282_23622 = G__23643;
i__23283_23623 = G__23644;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__23297 = (function (){var G__23299 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__23300 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__23299,G__23300) : datascript.query.sum_rel.call(null,G__23299,G__23300));
})();
var G__23298 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__23297,G__23298) : datascript.query.sum_rel.call(null,G__23297,G__23298));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__23302 = arguments.length;
switch (G__23302) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23646 = arguments.length;
var i__4737__auto___23647 = (0);
while(true){
if((i__4737__auto___23647 < len__4736__auto___23646)){
args__4742__auto__.push((arguments[i__4737__auto___23647]));

var G__23648 = (i__4737__auto___23647 + (1));
i__4737__auto___23647 = G__23648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq23303){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23303));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23649 = arguments.length;
var i__4737__auto___23650 = (0);
while(true){
if((i__4737__auto___23650 < len__4736__auto___23649)){
args__4742__auto__.push((arguments[i__4737__auto___23650]));

var G__23651 = (i__4737__auto___23650 + (1));
i__4737__auto___23650 = G__23651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5739__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq23305){
var G__23306 = cljs.core.first(seq23305);
var seq23305__$1 = cljs.core.next(seq23305);
var G__23307 = cljs.core.first(seq23305__$1);
var seq23305__$2 = cljs.core.next(seq23305__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23306,G__23307,seq23305__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23652 = arguments.length;
var i__4737__auto___23653 = (0);
while(true){
if((i__4737__auto___23653 < len__4736__auto___23652)){
args__4742__auto__.push((arguments[i__4737__auto___23653]));

var G__23654 = (i__4737__auto___23653 + (1));
i__4737__auto___23653 = G__23654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq23308){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23308));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23655 = arguments.length;
var i__4737__auto___23656 = (0);
while(true){
if((i__4737__auto___23656 < len__4736__auto___23655)){
args__4742__auto__.push((arguments[i__4737__auto___23656]));

var G__23657 = (i__4737__auto___23656 + (1));
i__4737__auto___23656 = G__23657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq23310){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23310));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"untuple","untuple",-606149900,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"tuple","tuple",1167864243,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.identity,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.vector,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty_QMARK_,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core.keyword,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__23317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__23317 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__23317;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4529__auto__ = (function datascript$query$variance_$_iter__23318(s__23319){
return (new cljs.core.LazySeq(null,(function (){
var s__23319__$1 = s__23319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23319__$1);
if(temp__5735__auto__){
var s__23319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23319__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23319__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23321 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23320 = (0);
while(true){
if((i__23320 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__23320);
var delta = (x - mean);
cljs.core.chunk_append(b__23321,(delta * delta));

var G__23659 = (i__23320 + (1));
i__23320 = G__23659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23321),datascript$query$variance_$_iter__23318(cljs.core.chunk_rest(s__23319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23321),null);
}
} else {
var x = cljs.core.first(s__23319__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__23318(cljs.core.rest(s__23319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__23660 = null;
var G__23660__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__23660__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__23660 = function(n,coll){
switch(arguments.length){
case 1:
return G__23660__1.call(this,n);
case 2:
return G__23660__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23660.cljs$core$IFn$_invoke$arity$1 = G__23660__1;
G__23660.cljs$core$IFn$_invoke$arity$2 = G__23660__2;
return G__23660;
})()
,(function() {
var G__23661 = null;
var G__23661__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__23661__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__23661 = function(n,coll){
switch(arguments.length){
case 1:
return G__23661__1.call(this,n);
case 2:
return G__23661__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23661.cljs$core$IFn$_invoke$arity$1 = G__23661__1;
G__23661.cljs$core$IFn$_invoke$arity$2 = G__23661__2;
return G__23661;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__23662 = null;
var G__23662__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__23662__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__23662 = function(n,coll){
switch(arguments.length){
case 1:
return G__23662__1.call(this,n);
case 2:
return G__23662__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23662.cljs$core$IFn$_invoke$arity$1 = G__23662__1;
G__23662.cljs$core$IFn$_invoke$arity$2 = G__23662__2;
return G__23662;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_23663 = (function (binding,value){
var x__4428__auto__ = (((binding == null))?null:binding);
var m__4429__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4429__auto__.call(null,binding,value));
} else {
var m__4426__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4426__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_23663(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23323_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__23323_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__23324_SHARP_,p2__23325_SHARP_){
return datascript.query.in__GT_rel(p1__23324_SHARP_,p2__23325_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__23326){
var vec__23327 = p__23326;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23330_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__23330_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23331_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__23331_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__23333_SHARP_){
return (p1__23333_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23333_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__23333_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first(tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5737__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__23664 = cljs.core.next(tuples__$1);
var G__23665 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__23664;
hash_table = G__23665;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23335_SHARP_){
return datascript.query.getter_fn(attrs1,p1__23335_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23336_SHARP_){
return datascript.query.getter_fn(attrs2,p1__23336_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__23340 = a;
var map__23340__$1 = (((((!((map__23340 == null))))?(((((map__23340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23340):map__23340);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23340__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__23341 = b;
var map__23341__$1 = (((((!((map__23341 == null))))?(((((map__23341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23341):map__23341);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23337_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__23337_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23338_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__23338_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__23339_SHARP_){
return ((function (){var G__23344 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__23339_SHARP_) : key_fn_a.call(null,p1__23339_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__23344) : hash.call(null,G__23344));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23345_SHARP_){
if((p1__23345_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__23345_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23346){
var vec__23347 = p__23346;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4115__auto__ = tuple__$1;
if(cljs.core.truth_(and__4115__auto__)){
return pattern__$1;
} else {
return and__4115__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__23667 = cljs.core.next(tuple__$1);
var G__23668 = cljs.core.next(pattern__$1);
tuple__$1 = G__23667;
pattern__$1 = G__23668;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23351_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__23351_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23352){
var vec__23353 = p__23352;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first(rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__23669 = cljs.core.next(rels__$1);
var G__23670 = datascript.query.hash_join(rel,new_rel__$1);
var G__23671 = acc;
rels__$1 = G__23669;
new_rel__$1 = G__23670;
acc = G__23671;
continue;
} else {
var G__23672 = cljs.core.next(rels__$1);
var G__23673 = new_rel__$1;
var G__23674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__23672;
new_rel__$1 = G__23673;
acc = G__23674;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__23357_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__23357_SHARP_),sym)){
return p1__23357_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[(function (){var fexpr__23358 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__23358.cljs$core$IFn$_invoke$arity$1 ? fexpr__23358.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__23358.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__23359_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__23359_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23360_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__23360_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__23361_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__23361_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4613__auto___23675 = len;
var i_23676 = (0);
while(true){
if((i_23676 < n__4613__auto___23675)){
var arg_23677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_23676);
if((arg_23677 instanceof cljs.core.Symbol)){
var temp__5737__auto___23678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_23677);
if((temp__5737__auto___23678 == null)){
(tuples_args[i_23676] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_23677));
} else {
var source_23679 = temp__5737__auto___23678;
(static_args[i_23676] = source_23679);
}
} else {
(static_args[i_23676] = arg_23677);
}

var G__23680 = (i_23676 + (1));
i_23676 = G__23680;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4613__auto___23681 = len;
var i_23682 = (0);
while(true){
if((i_23682 < n__4613__auto___23681)){
var temp__5739__auto___23683 = (tuples_args[i_23682]);
if((temp__5739__auto___23683 == null)){
} else {
var tuple_idx_23684 = temp__5739__auto___23683;
var v_23685 = (tuple[tuple_idx_23684]);
(args__$1[i_23682] = v_23685);
}

var G__23686 = (i_23682 + (1));
i_23682 = G__23686;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4613__auto___23687 = len;
var i_23688 = (0);
while(true){
if((i_23688 < n__4613__auto___23687)){
var temp__5739__auto___23689 = (tuples_args[i_23688]);
if((temp__5739__auto___23689 == null)){
} else {
var tuple_idx_23690 = temp__5739__auto___23689;
var v_23691 = (tuple[tuple_idx_23690]);
(static_args[i_23688] = v_23691);
}

var G__23692 = (i_23688 + (1));
i_23688 = G__23692;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__23366 = clause;
var vec__23369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(0),null);
var seq__23370 = cljs.core.seq(vec__23369);
var first__23371 = cljs.core.first(seq__23370);
var seq__23370__$1 = cljs.core.next(seq__23370);
var f = first__23371;
var args = seq__23370__$1;
var pred = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__23372 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__23365_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__23365_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__23376 = clause;
var vec__23379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23376,(0),null);
var seq__23380 = cljs.core.seq(vec__23379);
var first__23381 = cljs.core.first(seq__23380);
var seq__23380__$1 = cljs.core.next(seq__23380);
var f = first__23381;
var args = seq__23380__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23376,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__23382 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23382,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23382,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4529__auto__ = (function datascript$query$bind_by_fn_$_iter__23385(s__23386){
return (new cljs.core.LazySeq(null,(function (){
var s__23386__$1 = s__23386;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23386__$1);
if(temp__5735__auto__){
var s__23386__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23386__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23386__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23388 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23387 = (0);
while(true){
if((i__23387 < size__4528__auto__)){
var tuple = cljs.core._nth(c__4527__auto__,i__23387);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__23388,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__23693 = (i__23387 + (1));
i__23387 = G__23693;
continue;
} else {
var G__23694 = (i__23387 + (1));
i__23387 = G__23694;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23388),datascript$query$bind_by_fn_$_iter__23385(cljs.core.chunk_rest(s__23386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23388),null);
}
} else {
var tuple = cljs.core.first(s__23386__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__23385(cljs.core.rest(s__23386__$2)));
} else {
var G__23695 = cljs.core.rest(s__23386__$2);
s__23386__$1 = G__23695;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__23391 = clause;
var seq__23392 = cljs.core.seq(vec__23391);
var first__23393 = cljs.core.first(seq__23392);
var seq__23392__$1 = cljs.core.next(seq__23392);
var rule = first__23393;
var call_args = seq__23392__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4529__auto__ = (function datascript$query$expand_rule_$_iter__23394(s__23395){
return (new cljs.core.LazySeq(null,(function (){
var s__23395__$1 = s__23395;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23395__$1);
if(temp__5735__auto__){
var s__23395__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23395__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23395__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23397 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23396 = (0);
while(true){
if((i__23396 < size__4528__auto__)){
var branch = cljs.core._nth(c__4527__auto__,i__23396);
var vec__23398 = branch;
var seq__23399 = cljs.core.seq(vec__23398);
var first__23400 = cljs.core.first(seq__23399);
var seq__23399__$1 = cljs.core.next(seq__23399);
var vec__23401 = first__23400;
var seq__23402 = cljs.core.seq(vec__23401);
var first__23403 = cljs.core.first(seq__23402);
var seq__23402__$1 = cljs.core.next(seq__23402);
var _ = first__23403;
var rule_args = seq__23402__$1;
var clauses = seq__23399__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__23397,clojure.walk.postwalk(((function (i__23396,vec__23398,seq__23399,first__23400,seq__23399__$1,vec__23401,seq__23402,first__23403,seq__23402__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__23397,s__23395__$2,temp__5735__auto__,vec__23391,seq__23392,first__23393,seq__23392__$1,rule,call_args,seqid,branches){
return (function (p1__23390_SHARP_){
if(datascript.query.free_var_QMARK_(p1__23390_SHARP_)){
var x__19774__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__23390_SHARP_) : replacements.call(null,p1__23390_SHARP_));
if((x__19774__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__23390_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__19774__auto__;
}
} else {
return p1__23390_SHARP_;
}
});})(i__23396,vec__23398,seq__23399,first__23400,seq__23399__$1,vec__23401,seq__23402,first__23403,seq__23402__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__23397,s__23395__$2,temp__5735__auto__,vec__23391,seq__23392,first__23393,seq__23392__$1,rule,call_args,seqid,branches))
,clauses));

var G__23697 = (i__23396 + (1));
i__23396 = G__23697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23397),datascript$query$expand_rule_$_iter__23394(cljs.core.chunk_rest(s__23395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23397),null);
}
} else {
var branch = cljs.core.first(s__23395__$2);
var vec__23404 = branch;
var seq__23405 = cljs.core.seq(vec__23404);
var first__23406 = cljs.core.first(seq__23405);
var seq__23405__$1 = cljs.core.next(seq__23405);
var vec__23407 = first__23406;
var seq__23408 = cljs.core.seq(vec__23407);
var first__23409 = cljs.core.first(seq__23408);
var seq__23408__$1 = cljs.core.next(seq__23408);
var _ = first__23409;
var rule_args = seq__23408__$1;
var clauses = seq__23405__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__23404,seq__23405,first__23406,seq__23405__$1,vec__23407,seq__23408,first__23409,seq__23408__$1,_,rule_args,clauses,replacements,branch,s__23395__$2,temp__5735__auto__,vec__23391,seq__23392,first__23393,seq__23392__$1,rule,call_args,seqid,branches){
return (function (p1__23390_SHARP_){
if(datascript.query.free_var_QMARK_(p1__23390_SHARP_)){
var x__19774__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__23390_SHARP_) : replacements.call(null,p1__23390_SHARP_));
if((x__19774__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__23390_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__19774__auto__;
}
} else {
return p1__23390_SHARP_;
}
});})(vec__23404,seq__23405,first__23406,seq__23405__$1,vec__23407,seq__23408,first__23409,seq__23408__$1,_,rule_args,clauses,replacements,branch,s__23395__$2,temp__5735__auto__,vec__23391,seq__23392,first__23393,seq__23392__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__23394(cljs.core.rest(s__23395__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23410){
var vec__23411 = p__23410;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__23414 = rule_clause;
var seq__23415 = cljs.core.seq(vec__23414);
var first__23416 = cljs.core.first(seq__23415);
var seq__23415__$1 = cljs.core.next(seq__23415);
var rule = first__23416;
var call_args = seq__23415__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4529__auto__ = (function datascript$query$rule_gen_guards_$_iter__23417(s__23418){
return (new cljs.core.LazySeq(null,(function (){
var s__23418__$1 = s__23418;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23418__$1);
if(temp__5735__auto__){
var s__23418__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23418__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23418__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23420 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23419 = (0);
while(true){
if((i__23419 < size__4528__auto__)){
var prev_args = cljs.core._nth(c__4527__auto__,i__23419);
var vec__23421 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(1),null);
cljs.core.chunk_append(b__23420,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__23698 = (i__23419 + (1));
i__23419 = G__23698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23420),datascript$query$rule_gen_guards_$_iter__23417(cljs.core.chunk_rest(s__23418__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23420),null);
}
} else {
var prev_args = cljs.core.first(s__23418__$2);
var vec__23424 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__23417(cljs.core.rest(s__23418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__23429_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__23429_SHARP_) : pred.call(null,p1__23429_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__23429_SHARP_);
} else {
}

return p1__23429_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__23430){
var vec__23431 = p__23430;
var vec__23434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23431,(0),null);
var seq__23435 = cljs.core.seq(vec__23434);
var first__23436 = cljs.core.first(seq__23435);
var seq__23435__$1 = cljs.core.next(seq__23435);
var _ = first__23436;
var vars = seq__23435__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__23437_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__23437_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first(stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__23458 = cljs.core.split_with(((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__23438_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__23438_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23458,(0),null);
var vec__23461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23458,(1),null);
var seq__23462 = cljs.core.seq(vec__23461);
var first__23463 = cljs.core.first(seq__23462);
var seq__23462__$1 = cljs.core.next(seq__23462);
var rule_clause = first__23463;
var next_clauses = seq__23462__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__23699 = cljs.core.next(stack);
var G__23700 = datascript.query.sum_rel(rel,new_rel);
stack = G__23699;
rel = G__23700;
continue;
} else {
var vec__23464 = rule_clause;
var seq__23465 = cljs.core.seq(vec__23464);
var first__23466 = cljs.core.first(seq__23465);
var seq__23465__$1 = cljs.core.next(seq__23465);
var rule = first__23466;
var call_args = seq__23465__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__23467 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23467,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23467,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__23439_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23439_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__23701 = cljs.core.next(stack);
var G__23702 = rel;
stack = G__23701;
rel = G__23702;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__23703 = cljs.core.next(stack);
var G__23704 = rel;
stack = G__23703;
rel = G__23704;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__23705 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__23470(s__23471){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__23471__$1 = s__23471;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23471__$1);
if(temp__5735__auto__){
var s__23471__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23471__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23471__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23473 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23472 = (0);
while(true){
if((i__23472 < size__4528__auto__)){
var branch = cljs.core._nth(c__4527__auto__,i__23472);
cljs.core.chunk_append(b__23473,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__23707 = (i__23472 + (1));
i__23472 = G__23707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23473),datascript$query$solve_rule_$_iter__23470(cljs.core.chunk_rest(s__23471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23473),null);
}
} else {
var branch = cljs.core.first(s__23471__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__23470(cljs.core.rest(s__23471__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__23464,seq__23465,first__23466,seq__23465__$1,rule,call_args,guards,vec__23467,active_gs,pending_gs,vec__23458,clauses,vec__23461,seq__23462,first__23463,seq__23462__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4529__auto__(branches);
})(),cljs.core.next(stack));
var G__23706 = rel;
stack = G__23705;
rel = G__23706;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__23475 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
if(datascript.query.attr_QMARK_(a)){
if(datascript.db.ref_QMARK_(source,a)){
var or__4126__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__23478 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23478,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23478,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23478,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23478,(3),null);
var G__23481 = cljs.core.PersistentHashSet.EMPTY;
var G__23481__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23481,e):G__23481);
var G__23481__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23481__$1,tx):G__23481__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23481__$2,v);
} else {
return G__23481__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__23482_SHARP_){
return datascript.query.limit_rel(p1__23482_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23483_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__23483_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23484_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__23484_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__23486 = cljs.core.seq(branches);
var chunk__23487 = null;
var count__23488 = (0);
var i__23489 = (0);
while(true){
if((i__23489 < count__23488)){
var branch = chunk__23487.cljs$core$IIndexed$_nth$arity$2(null,i__23489);
var temp__5739__auto___23709 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5739__auto___23709 == null)){
} else {
var missing_23710 = temp__5739__auto___23709;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_23710], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_23710], null));
}


var G__23711 = seq__23486;
var G__23712 = chunk__23487;
var G__23713 = count__23488;
var G__23714 = (i__23489 + (1));
seq__23486 = G__23711;
chunk__23487 = G__23712;
count__23488 = G__23713;
i__23489 = G__23714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__23486);
if(temp__5735__auto__){
var seq__23486__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23486__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23486__$1);
var G__23715 = cljs.core.chunk_rest(seq__23486__$1);
var G__23716 = c__4556__auto__;
var G__23717 = cljs.core.count(c__4556__auto__);
var G__23718 = (0);
seq__23486 = G__23715;
chunk__23487 = G__23716;
count__23488 = G__23717;
i__23489 = G__23718;
continue;
} else {
var branch = cljs.core.first(seq__23486__$1);
var temp__5739__auto___23719 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5739__auto___23719 == null)){
} else {
var missing_23720 = temp__5739__auto___23719;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_23720], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_23720], null));
}


var G__23721 = cljs.core.next(seq__23486__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23486 = G__23721;
chunk__23487 = G__23722;
count__23488 = G__23723;
i__23489 = G__23724;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__23495 = arguments.length;
switch (G__23495) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__23496 = datascript.query.looks_like_QMARK_;
var expr__23497 = clause;
if(cljs.core.truth_((function (){var G__23499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__23500 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23499,G__23500) : pred__23496.call(null,G__23499,G__23500));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__23501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__23502 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23501,G__23502) : pred__23496.call(null,G__23501,G__23502));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__23503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23504 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23503,G__23504) : pred__23496.call(null,G__23503,G__23504));
})())){
var vec__23505 = clause;
var seq__23506 = cljs.core.seq(vec__23505);
var first__23507 = cljs.core.first(seq__23506);
var seq__23506__$1 = cljs.core.next(seq__23506);
var source_sym = first__23507;
var rest = seq__23506__$1;
var _STAR_implicit_source_STAR__orig_val__23508 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__23509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__23509);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__23508);
}} else {
if(cljs.core.truth_((function (){var G__23510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23511 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23510,G__23511) : pred__23496.call(null,G__23510,G__23511));
})())){
var vec__23514 = clause;
var seq__23515 = cljs.core.seq(vec__23514);
var first__23516 = cljs.core.first(seq__23515);
var seq__23515__$1 = cljs.core.next(seq__23515);
var _ = first__23516;
var branches = seq__23515__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__23514,seq__23515,first__23516,seq__23515__$1,_,branches,___$1,pred__23496,expr__23497){
return (function (p1__23490_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__23490_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__23490_SHARP_));
});})(context,clause,orig_clause,vec__23514,seq__23515,first__23516,seq__23515__$1,_,branches,___$1,pred__23496,expr__23497))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__23514,seq__23515,first__23516,seq__23515__$1,_,branches,___$1,contexts,pred__23496,expr__23497){
return (function (p1__23491_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__23491_SHARP_));
});})(context,clause,orig_clause,vec__23514,seq__23515,first__23516,seq__23515__$1,_,branches,___$1,contexts,pred__23496,expr__23497))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__23517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23518 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23517,G__23518) : pred__23496.call(null,G__23517,G__23518));
})())){
var vec__23519 = clause;
var seq__23520 = cljs.core.seq(vec__23519);
var first__23521 = cljs.core.first(seq__23520);
var seq__23520__$1 = cljs.core.next(seq__23520);
var _ = first__23521;
var first__23521__$1 = cljs.core.first(seq__23520__$1);
var seq__23520__$2 = cljs.core.next(seq__23520__$1);
var vec__23522 = first__23521__$1;
var seq__23523 = cljs.core.seq(vec__23522);
var first__23524 = cljs.core.first(seq__23523);
var seq__23523__$1 = cljs.core.next(seq__23523);
var req_vars = first__23524;
var vars = seq__23523__$1;
var branches = seq__23520__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__23727 = context;
var G__23728 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__23729 = clause;
context = G__23727;
clause = G__23728;
orig_clause = G__23729;
continue;
} else {
if(cljs.core.truth_((function (){var G__23525 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23526 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23525,G__23526) : pred__23496.call(null,G__23525,G__23526));
})())){
var vec__23527 = clause;
var seq__23528 = cljs.core.seq(vec__23527);
var first__23529 = cljs.core.first(seq__23528);
var seq__23528__$1 = cljs.core.next(seq__23528);
var _ = first__23529;
var first__23529__$1 = cljs.core.first(seq__23528__$1);
var seq__23528__$2 = cljs.core.next(seq__23528__$1);
var vars = first__23529__$1;
var branches = seq__23528__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__23527,seq__23528,first__23529,seq__23528__$1,_,first__23529__$1,seq__23528__$2,vars,branches,vars__$1,___$1,join_context,pred__23496,expr__23497){
return (function (p1__23492_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__23492_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__23492_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__23527,seq__23528,first__23529,seq__23528__$1,_,first__23529__$1,seq__23528__$2,vars,branches,vars__$1,___$1,join_context,pred__23496,expr__23497))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__23527,seq__23528,first__23529,seq__23528__$1,_,first__23529__$1,seq__23528__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__23496,expr__23497){
return (function (p1__23493_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__23493_SHARP_));
});})(context,clause,orig_clause,vec__23527,seq__23528,first__23529,seq__23528__$1,_,first__23529__$1,seq__23528__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__23496,expr__23497))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__23530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23531 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23530,G__23531) : pred__23496.call(null,G__23530,G__23531));
})())){
var vec__23532 = clause;
var seq__23533 = cljs.core.seq(vec__23532);
var first__23534 = cljs.core.first(seq__23533);
var seq__23533__$1 = cljs.core.next(seq__23533);
var _ = first__23534;
var clauses = seq__23533__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__23535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23536 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23535,G__23536) : pred__23496.call(null,G__23535,G__23536));
})())){
var vec__23537 = clause;
var seq__23538 = cljs.core.seq(vec__23537);
var first__23539 = cljs.core.first(seq__23538);
var seq__23538__$1 = cljs.core.next(seq__23538);
var _ = first__23539;
var clauses = seq__23538__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__23540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23541 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23540,G__23541) : pred__23496.call(null,G__23540,G__23541));
})())){
var vec__23542 = clause;
var seq__23543 = cljs.core.seq(vec__23542);
var first__23544 = cljs.core.first(seq__23543);
var seq__23543__$1 = cljs.core.next(seq__23543);
var _ = first__23544;
var first__23544__$1 = cljs.core.first(seq__23543__$1);
var seq__23543__$2 = cljs.core.next(seq__23543__$1);
var vars = first__23544__$1;
var clauses = seq__23543__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__23545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__23546 = expr__23497;
return (pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(G__23545,G__23546) : pred__23496.call(null,G__23545,G__23546));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__23547 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__23548 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__23548);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__23547);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23497)].join('')));
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
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__23550 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__23551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__23551);

try{var G__23552 = context;
var G__23553 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__23552,G__23553) : datascript.query.resolve_clause.call(null,G__23552,G__23553));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__23550);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__23554 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__23555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__23555);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__23554);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__23558 = arguments.length;
switch (G__23558) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first(rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__23747 = acc;
var G__23748 = cljs.core.next(rels);
var G__23749 = symbols;
acc = G__23747;
rels = G__23748;
symbols = G__23749;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__23556_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__23556_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__23750 = (function (){var iter__4529__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__23560(s__23561){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__23561__$1 = s__23561;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23561__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__23561__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__23560_$_iter__23562(s__23563){
return (new cljs.core.LazySeq(null,((function (s__23561__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__23563__$1 = s__23563;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__23563__$1);
if(temp__5735__auto____$1){
var s__23563__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23563__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23563__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23565 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23564 = (0);
while(true){
if((i__23564 < size__4528__auto__)){
var t2 = cljs.core._nth(c__4527__auto__,i__23564);
cljs.core.chunk_append(b__23565,(function (){var res = cljs.core.aclone(t1);
var n__4613__auto___23777 = len;
var i_23778 = (0);
while(true){
if((i_23778 < n__4613__auto___23777)){
var temp__5739__auto___23779 = (copy_map[i_23778]);
if((temp__5739__auto___23779 == null)){
} else {
var idx_23780 = temp__5739__auto___23779;
(res[i_23778] = (t2[idx_23780]));
}

var G__23781 = (i_23778 + (1));
i_23778 = G__23781;
continue;
} else {
}
break;
}

return res;
})());

var G__23782 = (i__23564 + (1));
i__23564 = G__23782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23565),datascript$query$iter__23560_$_iter__23562(cljs.core.chunk_rest(s__23563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23565),null);
}
} else {
var t2 = cljs.core.first(s__23563__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4613__auto___23783 = len;
var i_23784 = (0);
while(true){
if((i_23784 < n__4613__auto___23783)){
var temp__5739__auto___23785 = (copy_map[i_23784]);
if((temp__5739__auto___23785 == null)){
} else {
var idx_23786 = temp__5739__auto___23785;
(res[i_23784] = (t2[idx_23786]));
}

var G__23787 = (i_23784 + (1));
i_23784 = G__23787;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__23560_$_iter__23562(cljs.core.rest(s__23563__$2)));
}
} else {
return null;
}
break;
}
});})(s__23561__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__23561__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,datascript$query$iter__23560(cljs.core.rest(s__23561__$1)));
} else {
var G__23788 = cljs.core.rest(s__23561__$1);
s__23561__$1 = G__23788;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4529__auto__(acc);
})();
var G__23751 = cljs.core.next(rels);
var G__23752 = symbols;
acc = G__23750;
rels = G__23751;
symbols = G__23752;
continue;
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_23789 = (function (var$,context){
var x__4428__auto__ = (((var$ == null))?null:var$);
var m__4429__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4429__auto__.call(null,var$,context));
} else {
var m__4426__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4426__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_23789(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23566_SHARP_){
return datascript.query._context_resolve(p1__23566_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23567_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__23567_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__23568_SHARP_,p2__23569_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__23568_SHARP_) : pred.call(null,p1__23568_SHARP_)))){
return p2__23569_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23570_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__23570_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4529__auto__ = (function datascript$query$aggregate_$_iter__23571(s__23572){
return (new cljs.core.LazySeq(null,(function (){
var s__23572__$1 = s__23572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23572__$1);
if(temp__5735__auto__){
var s__23572__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23572__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23572__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23574 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23573 = (0);
while(true){
if((i__23573 < size__4528__auto__)){
var vec__23575 = cljs.core._nth(c__4527__auto__,i__23573);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(1),null);
cljs.core.chunk_append(b__23574,datascript.query._aggregate(find_elements,context,tuples));

var G__23790 = (i__23573 + (1));
i__23573 = G__23790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23574),datascript$query$aggregate_$_iter__23571(cljs.core.chunk_rest(s__23572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23574),null);
}
} else {
var vec__23578 = cljs.core.first(s__23572__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23578,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23578,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__23571(cljs.core.rest(s__23572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23581_SHARP_,p2__23582_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23581_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__23582_SHARP_) : f.call(null,p2__23582_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_23791 = (function (find,return_map,tuples){
var x__4428__auto__ = (((find == null))?null:find);
var m__4429__auto__ = (datascript.query._post_process[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4429__auto__.call(null,find,return_map,tuples));
} else {
var m__4426__auto__ = (datascript.query._post_process["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4426__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_23791(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4529__auto__ = (function datascript$query$pull_$_iter__23583(s__23584){
return (new cljs.core.LazySeq(null,(function (){
var s__23584__$1 = s__23584;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23584__$1);
if(temp__5735__auto__){
var s__23584__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23584__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23584__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23586 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23585 = (0);
while(true){
if((i__23585 < size__4528__auto__)){
var find = cljs.core._nth(c__4527__auto__,i__23585);
cljs.core.chunk_append(b__23586,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__23792 = (i__23585 + (1));
i__23585 = G__23792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23586),datascript$query$pull_$_iter__23583(cljs.core.chunk_rest(s__23584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23586),null);
}
} else {
var find = cljs.core.first(s__23584__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__23583(cljs.core.rest(s__23584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(find_elements);
})();
var iter__4529__auto__ = (function datascript$query$pull_$_iter__23587(s__23588){
return (new cljs.core.LazySeq(null,(function (){
var s__23588__$1 = s__23588;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__23588__$1);
if(temp__5735__auto__){
var s__23588__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23588__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23588__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23590 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23589 = (0);
while(true){
if((i__23589 < size__4528__auto__)){
var tuple = cljs.core._nth(c__4527__auto__,i__23589);
cljs.core.chunk_append(b__23590,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__23589,tuple,c__4527__auto__,size__4528__auto__,b__23590,s__23588__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__23591 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__23589,tuple,c__4527__auto__,size__4528__auto__,b__23590,s__23588__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__23793 = (i__23589 + (1));
i__23589 = G__23793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23590),datascript$query$pull_$_iter__23587(cljs.core.chunk_rest(s__23588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23590),null);
}
} else {
var tuple = cljs.core.first(s__23588__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__23588__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__23595 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__23588__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__23587(cljs.core.rest(s__23588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23794 = arguments.length;
var i__4737__auto___23795 = (0);
while(true){
if((i__4737__auto___23795 < len__4736__auto___23794)){
args__4742__auto__.push((arguments[i__4737__auto___23795]));

var G__23796 = (i__4737__auto___23795 + (1));
i__4737__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__23601 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__23601);
} else {
return G__23601;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__23602 = resultset;
var G__23602__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23598_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__23598_SHARP_,(0),result_arity));
}),G__23602):G__23602);
var G__23602__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__23602__$1):G__23602__$1);
var G__23602__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__23602__$2):G__23602__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__23602__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq23599){
var G__23600 = cljs.core.first(seq23599);
var seq23599__$1 = cljs.core.next(seq23599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23600,seq23599__$1);
}));


//# sourceMappingURL=datascript.query.js.map
