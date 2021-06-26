Homebase React uses ClojureScript and its corresponding data format EDN internally. We then compile all of that to Javascript using the Google Closure Compiler (closure not clojure) to get as small a bundle as possible. Then we provide APIs (react hooks) that accept JSON and do all the conversion to EDN and back again behind the scenes.

EDN and Clojure provide far more safety and extensibility than JSON and Javascript; Clojure being immutable by default and EDN being extensible. This lets us build and support features that would be unwieldy in JSON and JS.

However, the tradeoffs are:

1. A larger bundle size. Some of the Clojure runtime cannot be compiled away even though the closure compiler is really aggressive.
2. Clojure error messages sometimes leak into JS land. We try to annotate the ones we know about so they make sense to JS devs, but it's far from perfect and if you see something weird please create an issue.
3. Our code is released already minified. We do this because most people do not develop with the google closure compiler and other build tools are not nearly as effective at optimizing this code. This makes debugging homebase-react while developing a bit harder since the code is not very readable, but we think the tradeoff is worth it to provide a smaller bundle size. And to compensate we try to build enough supporting dev tooling so you never need to read the compiled source.
4. Confusing console logs. EDN data looks different from JSON and to add to that, homebase-react mostly outputs entities, which are lazy data types and not very helpful when logged out with the default console formatting. See custom chrome formatters below for a vastly improved logging experience.

### Custom chrome formatters
If you develop with [Chrome](https://www.google.com/chrome/) or a Chromium browser like Brave or Edge you'll get significantly more meaningful logs for entities `console.log(anEntity)` due to our use of custom chrome :formatters. These custom formatters allow us to perform lazy database queries to fetch all of an entity's attributes, including references to other entities and all reverse references to the current entity. They let you access your entire data graph from the console, with any logged out entity as an entry point.

**To enable custom chrome formatters**

**1.** Open the preferences panel in chrome devtools by clicking the cog.

![image of chrome devtools preferences button](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_1.png?raw=true)

**2.** Toggle `Enabled custom formatters` on.

![image of chrome devtools custom formatters toggle](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_2.png?raw=true)

**3.** Keep the chrome console open and refresh the page. Any logged out entities should now have the custom formatting.

![image of custom entity chrome console logs](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_3.png?raw=true)

**Live demo:** open the console while on the [todo example](https://homebaseio.github.io/homebase-react/#!/homebase.dev.example.todo) page.

**Remember**: for custom formatters to work `console.log(anEntity)` must be called *after* you open the chrome console. Anything logged out before you open the console will not have custom formatting applied because chrome processes those logs in the background.

### Datalog Console Extension

We also integrate with the [Datalog Console](https://github.com/homebaseio/datalog-console) extension.

![image of datalog console extension](https://github.com/homebaseio/homebase-react/blob/master/public/images/datalog_console.png?raw=true)

It's still in an early stage of development, but we seek to expose all common DB administration capabilities here and let you connect to any Datalog database that implements the console's interface.

#### Using the Datalog Console

1. [Add the extension to Chrome](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb)
2. Visit a page built with homebase-react [like this one](https://homebaseio.github.io/homebase-react/#!/homebase.dev.example.todo), open the inspector, click the `Datalog DB` tab, and click `Load database` to try it out

### DEPRECATED `_recentlyTouchedAttributes`

*Use [custom chrome formatters](#custom-chrome-formatters) instead.*

If you set `debug` to `true` in your configuration, you will be able to access the `_recentlyTouchedAttributes` attribute on entities. `_recentlyTouchedAttributes` will show any cached attributes for a given entity. This is helpful for approximating that entity's schema and values.

```js
  <HomebaseProvider config={{ debug: true }}>
    <App/>
  </HomebaseProvider>
```
