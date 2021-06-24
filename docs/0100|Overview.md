## Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/homebaseio/homebase-react?style=social)](https://github.com/homebaseio/homebase-react)
[![Twitter Follow](https://img.shields.io/twitter/follow/homebase__io?label=Follow&style=social)](https://twitter.com/homebase__io)

Supported languages, frameworks and DBs:

- JS + React + Datascript
- CLJS + Reagent + Datascript
- *Datahike support coming soon*

# ClojureScript + Reagent

This is the Javascript docs site. Go here for [CLJS + Reagent docs](https://cljdoc.org/d/io.homebase/homebase-react/CURRENT).

# Javascript + React

Start by installing `homebase-react` [![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```

Optionally install the `datalog-console` [chrome extension](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb?hl=en) to inspect the `homebase-react` DB in your browser.

## Quick Start

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

## What and Why

As data and our need to annotate and organize it grows, so does our need for supporting state in *write-heavy* applications.

To solve this problem, modern write-heavy applications such as Superhuman, Roam Research, and Facebook Messenger built their own embedded data layers to enable these more sophisticated user experiences. 

Homebase React enables developers to access the same embedded datalog database as Roam Research through React hooks. You no longer have to build out a team or learn specialized tools like Clojure in order to build a delightful write-heavy application.

## Testimonials
> Homebase is executing on the vision of data usage, portability, and management we had when building Firebase. We never got there. I'm excited!
>
> —James Tamplin, Founder/CEO of Firebase

> Datalog is the future of end-user programming, personal productivity software, p2p software, etc.
>
> —Chet Corcos, Founding Engineer of Notion
