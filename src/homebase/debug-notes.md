Query is not working for some uses after advanced compilation

Possible problems
- google closure compiler options?
- is a meaningful symbol/name getting minified?
- is it in homebase-react or shadowcljs?
- what version of clojurescript are we using?
- what version of shadowcljs are we using?

What do we know?
- queries
  - works - [:find ?e :where [?e :block/children 2]] -> #{[1]}
  - fails - [:find ?e :where [1 ?e 2]] -> #{[nil]} -> #{[:block/children]}
  - fails - [:find ?e :where [1 :block/children ?e]] -> #{[nil]} -> #{[2]}
- advanced compilation of datascript.js works fine, but they use cljsbuild and not shadowcljs
- the query works without advanced compilation
- logging out just d/q, bypassing the hook and hbjs/q does not work
  - it seems that advanced compilation of datascript is the issue and not the hook
  - it could also be something with (js->query)...?

Questions
- why is it returning #{[nil]} and not just #{}?
  - we expect to see #{[2]} so clearly its finding something, but instead of inserting the id of 2 it's inserting an id of nil in the result
- what about the A slot? e.g. [1 ?e 2]


```
function $datascript$query$lookup_pattern_db$$($datoms$jscomp$14_db$jscomp$102$$, $attr__GT_prop_pattern$jscomp$30$$) {
  debugger
```