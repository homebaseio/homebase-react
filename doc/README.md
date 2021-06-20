# Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/homebaseio/homebase-react?style=social)](https://github.com/homebaseio/homebase-react)
[![Twitter Follow](https://img.shields.io/twitter/follow/homebase__io?label=Follow&style=social)](https://twitter.com/homebase__io)

> Use a datalog db to manage react application state.

Supported languages, frameworks and DBs:

- JS + React + Datascript
- CLJS + Reagent + Datascript
- *Datahike support coming soon*

# Javascript + React

This is the Clojure docs site. Go here for [JS + React docs](https://homebase.io/docs/homebase-react).

# ClojureScript + Reagent

Start by adding `homebase-react`.

[![Clojars Project](https://img.shields.io/clojars/v/io.homebase/homebase-react.svg)](https://clojars.org/io.homebase/homebase-react)

Optionally add `datalog-console` and its corresponding [chrome extension](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb?hl=en) to inspect the DB in your browser.

[![Clojars Project](https://img.shields.io/clojars/v/io.homebase/datalog-console.svg)](https://clojars.org/io.homebase/datalog-console)

## Quick Start

```clojure
(ns dev.example.reagent.counter
  (:require
   [datascript.core :as d]
   [homebase.reagent :as hbr]
   [datalog-console.integrations.datascript :as datalog-console]))

(def db-conn (d/create-conn {}))
(d/transact! db-conn [[:db/add 1 :count 0]]) ; Transact some starting data.
(hbr/connect! db-conn) ; Connect homebase.reagent to the database.
(datalog-console/enable! {:conn db-conn}) ; Also connect the datalog-console extension for better debugging.

(defn counter []
  (let [[entity] (hbr/entity db-conn 1)] ; Get a homebase.reagent/Entity. Note the use of db-conn and not @db-conn, this makes it reactive.
    (fn []
      [:div
       "Count: " (:count @entity) ; Deref the entity just like a reagent/atom.
       [:div
        [:button {:on-click #(d/transact! db-conn [[:db/add 1 :count (inc (:count @entity))]])} ; Use d/transact! just like normal.
         "Increment"]]])))
```

[Live demo](https://homebaseio.github.io/homebase-react/index.html#!/dev.example.reagent)

## API

- [homebase.reagent](https://cljdoc.org/d/io.homebase/homebase-react/CURRENT/api/homebase.reagent)

## Performance

Our reactive query functions like `hbr/entity` and `hbr/q` will only trigger re-renders when their results change.

In the case of `hbr/entity` we track which attributes get consumed `(:attr @entity)` and only dispatch updates when those attributes are transacted.

`hbr/q` queries rerun on every transaction. If the result is different we re-render. We're looking into differential datalog and incremental view maintenance, but for typical datasets of tens of thousands of datoms the current performance is great. DOM updates tend to be much more costly, so just rerunning the queries still performs well as long as we don't repaint the DOM.

## Alternatives

- If your prefer `d/pull` over `d/entity` take a look at [Posh](https://github.com/denistakeda/posh). It supports less of the `d/q` API, but provides more tools for tuning performance.