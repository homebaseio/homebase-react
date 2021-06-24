<img src="public/images/logo-blk.png" height="50" align="right">

# Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/homebase__io?label=Follow&style=social)](https://twitter.com/homebase__io)

*The React state management library for write-heavy applications*

Supported languages, frameworks and DBs:

- JS + React + Datascript ([jump](#javascript--react))
- CLJS + Reagent + Datascript ([jump](#clojurescript--reagent))
- *Datahike support coming soon*

## What and Why

As data and our need to annotate and organize it grows, so does our need for supporting state in *write-heavy* applications.

To solve this problem, modern write-heavy applications such as Superhuman, Roam Research, and Facebook Messenger built their own embedded data layers to enable these more sophisticated user experiences. 

Homebase-react enables developers to access the same embedded datalog database as Roam Research through React hooks. You no longer have to build out a team or learn specialized tools like Clojure in order to build a delightful write-heavy application.


## Testimonials
> Homebase is executing on the vision of data usage, portability, and management we had when building Firebase. We never got there. I'm excited!
>
> —James Tamplin, Founder/CEO of Firebase

> Datalog is the future of end-user programming, personal productivity software, p2p software, etc.
>
> —Chet Corcos, Founding Engineer of Notion

# Javascript + React

Start by installing `homebase-react`.

[![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```

Optionally install the `datalog-console` [chrome extension](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb?hl=en) to inspect the `homebase-react` DB in your browser.

⭐️ 📖 **[Read the JS docs](https://homebase.io/docs/homebase-react)** ⚛️ ⭐️

```js
import { useCallback } from 'react'
import { HomebaseProvider, useEntity, useTransact } from 'homebase-react'

const RootComponent = () => (
  // Create a DB and set some starting data
  <HomebaseProvider config={{ initialData: [{ counter: { id: 1, count: 0 }}] }}>
    <App/>
  </HomebaseProvider>
)

const App = () => {
  // Get entity id = 1
  const [counter] = useEntity(1)
  const [transact] = useTransact()

  return (
    <button onClick={() => {
      // Increment and save the count
      transact([{ counter: { 
        id: 1, count: counter.get('count') + 1 
      }}])
    }>
      {/* Render the count */}
      Increment {counter.get('count')}
    </button>
  )
}
```

[Live demo](https://homebaseio.github.io/homebase-react/#!/dev.example.counter)

# ClojureScript + Reagent

Start by adding `homebase-react`.

[![Clojars Project](https://img.shields.io/clojars/v/io.homebase/homebase-react.svg)](https://clojars.org/io.homebase/homebase-react)

Optionally add `datalog-console` and its corresponding [chrome extension](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb?hl=en) to inspect the DB in your browser.

[![Clojars Project](https://img.shields.io/clojars/v/io.homebase/datalog-console.svg)](https://clojars.org/io.homebase/datalog-console)

⭐️ 📖 **[Read the CLJS docs](https://cljdoc.org/d/io.homebase/homebase-react/CURRENT)** ƛ ⭐️

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

## Roadmap

1. ~~Improve developer tools: custom chrome formatters, DB admin console extension~~
2. ~~Rewrite React ↔ Homebase cache~~
    1. ~~Support async DB access (for Datahike)~~
    2. ~~Reactive query planning (better perf on pages with lots of live reads)~~
3. Swap [Datascript](https://github.com/tonsky/datascript) out for [Datahike](https://github.com/replikativ/datahike)
    1. Immutability
    2. History / Change Tracking
4. Persist to IndexedDB
5. [Local-first](https://www.inkandswitch.com/local-first.html) conflict resolution for offline caching and sync between multiple devices

## Limitations

Homebase React is currently not a good choice for read-heavy applications (e.g. Twitter, ecommerce). We plan to support these query patterns with our [platform](http://homebase.io) eventually.

## Alternatives

There isn't much in the way of React friendly datalog DB based state management for Javascript, but there's at least one alternative if you're a Clojure dev.

- If your prefer `d/pull` over `d/entity` take a look at [Posh](https://github.com/denistakeda/posh). It supports less of the `d/q` API, but provides more tools for tuning performance.

## Development

```bash
yarn install
yarn dev
```

Open http://localhost:3000

## Test

```bash
yarn install
yarn test
```

## Contributing

Welcome and thank you! Writing docs, patches and features are all incredibly helpful and appreciated.

We only ask that you provide test coverage for code changes, and conform to our [commit guidelines](CONTRIBUTING.md).

## Authors

- Chris Smothers ([@csmothers](https://twitter.com/csmothers)) – [Homebase](https://www.homebase.io/)
- JB Rubinovitz ([@rubinovitz](https://twitter.com/rubinovitz)) – [Homebase](https://www.homebase.io/)
