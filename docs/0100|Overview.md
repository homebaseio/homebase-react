<img src="public/images/logo-blk.png" height="50" align="right">

# Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)

*The graph database for delightful React state management*


Homebase React makes state management painless by enabling you to plug a relational graph database into your React application with just 3 lines of code. This is the same database that powers Roam Research and many other ClojureScript applications, but with an API that's familiar to React and JS developers.

## Install

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```
## Features
- The simplest and most declarative state management solution
- The power of a backend relational graph database, but without having to wait on the network
- Convenient JSON query syntax
- Powerful Clojure style [Datalog](https://docs.datomic.com/on-prem/query.html) query syntax if you need it
- Traverse your data graph like it's a big JSON object
- Backup your data to the cloud

## Roadmap

1. Document integration with more backends
1. Swap [Datascript](https://github.com/tonsky/datascript) out for [Datahike](https://github.com/replikativ/datahike)
    1. Immutability
    1. History / Change Tracking
2. Persist to IndexedDB
3. [Local-first](https://www.inkandswitch.com/local-first.html) conflict resolution for offline caching and sync between multiple devices