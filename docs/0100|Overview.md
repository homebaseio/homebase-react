## Homebase React

[![CI](https://github.com/homebaseio/homebase-react/workflows/CI/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACI)
[![CD](https://github.com/homebaseio/homebase-react/workflows/CD/badge.svg)](https://github.com/homebaseio/homebase-react/actions?query=workflow%3ACD)
[![NPM Version](https://img.shields.io/npm/v/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/homebase-react)](https://www.npmjs.com/package/homebase-react)
[![License](https://img.shields.io/github/license/homebaseio/homebase-react.svg)](LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/homebaseio/homebase-react?style=social)](https://github.com/homebaseio/homebase-react)
[![Twitter Follow](https://img.shields.io/twitter/follow/homebase__io?label=Follow&style=social)](https://twitter.com/homebase__io)

## What and Why

As data and our need to annotate and organize it grows, so does our need for supporting state in *write-heavy* applications.

To solve this problem, modern write-heavy applications such as Superhuman, Roam Research, and Facebook Messenger built their own embedded data layers to enable these more sophisticated user experiences. 

Homebase React enables developers to access the same embedded datalog database as Roam Research through React hooks. You no longer have to build out a team or learn specialized tools like Clojure in order to build a delightful write-heavy application.

## Install

```bash
# NPM
npm install homebase-react --save

# Yarn
yarn add homebase-react
```

## Testimonials
> Homebase is executing on the vision of data usage, portability, and management we had when building Firebase. We never got there. I'm excited!
>
> —James Tamplin, Founder/CEO of Firebase

> Datalog is the future of end-user programming, personal productivity software, p2p software, etc.
>
> —Chet Corcos, Founding Engineer of Notion

##  Debugging
Homebase React uses ClojureScript and its corresponding data format EDN internally. We then compile all of that to Javascript using the Google Closure Compiler (closure not clojure, I know right) to get as small a bundle as possible. Then we provide APIs (react hooks) that accept JSON and do all the conversion to EDN and back again behind the scenes.

EDN and Clojure provide far more safety and extensibility than JSON and Javascript. Clojure being immutable by default and EDN being extensible. This lets us build and support features that would be unwieldy in JSON or JS. 

However, the tradeoffs are:
1. A larger bundle since some of the Clojure runtime cannot be compiled away even thought the closure compiler is really aggressive.
2. Clojure error messages sometimes leak into JS land. We try to annotate the ones we know about so they make sense to JS devs, but it's far from perfect and if you see something weird please create an issue.
3. Our code is released already minified. We do this because most people do not develop with the google closure compiler and other build tools are not nearly as effective at optimizing this code. This makes debugging homebase-react while developing a bit harder since the code is not very readable, but we think the tradeoff is worth it to provide a smaller bundle size.
4. Confusing console logs since EDN data looks different from JSON and to add to that, homebase-react mostly deals in entities, which are lazy and not very helpful when logged with the default console formatting. See custom chrome formatters below for an improvement.

### Custom chrome console log formatters
If you develop with [Chrome](https://www.google.com/chrome/) or a Chromium browser like Brave or Edge you'll get significantly more meaningful logs for entities `console.log(anEntity)` due to our use of custom chrome :formatters. These custom formatters allow us to perform lazy database queries to fetch all of an entity's attributes, including references to other entities and all reverse references to the current entity. They give you full access to your data graph with any entity as an entry point.

#### To enable chrome custom formatters
**1.** Open the preferences panel in chrome devtools by clicking the cog.

<img alt="image of chrome devtools preferences button" src="https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_1.png?raw=true" width="400">

**2.** Toggle `Enabled custom formatters` on.

<img alt="image of chrome devtools custom formatters toggle" src="https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_2.png?raw=true" width="400">

**3.** Keep the chrome console open and refresh the page. Any logged out entities should now have the custom formatting.

<img alt="image of custom entity chrome console logs" src="https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_3.png?raw=true" width="400">

**Live demo:** open the console while on the [todo example](https://homebaseio.github.io/homebase-react/#!/dev.example.todo) page.

**Remember**: for custom formatters to work `console.log(anEntity)` must be called *after* you open the chrome console. Anything logged out before you open the console will not have custom formatting applied because chrome processes those logs in the background.