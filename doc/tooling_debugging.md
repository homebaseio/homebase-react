# Tooling & Debugging

We've built a few tools to make debugging a bit more convenient.

## Custom chrome formatters
If you develop with [Chrome](https://www.google.com/chrome/) or a Chromium browser like Brave or Edge you'll get significantly more meaningful logs for entities `(js/console.log an-entity)` due to our use of custom chrome :formatters. These custom formatters allow us to perform lazy database queries to fetch all of an entity's attributes, including references to other entities and all reverse references to the current entity. They let you access your entire data graph from the console, with any logged out entity as an entry point.

**To enable custom chrome formatters**

**1.** Open the preferences panel in chrome devtools by clicking the cog.

![image of chrome devtools preferences button](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_1.png?raw=true)

**2.** Toggle `Enabled custom formatters` on.

![image of chrome devtools custom formatters toggle](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_2.png?raw=true)

**3.** Keep the chrome console open and refresh the page. Any logged out entities should now have the custom formatting.

![image of custom entity chrome console logs](https://github.com/homebaseio/homebase-react/blob/master/public/images/enable_chrome_formatters_3.png?raw=true)

**Live demo:** open the console while on the [todo example](https://homebaseio.github.io/homebase-react/#!/dev.example.todo) page.

**Remember**: for custom formatters to work `(js/console.log an-entity)` must be called *after* you open the chrome console. Anything logged out before you open the console will not have custom formatting applied because chrome processes those logs in the background.

## Datalog Console Extension

We also integrate with the [Datalog Console](https://github.com/homebaseio/datalog-console) extension.

![image of datalog console extension](https://github.com/homebaseio/homebase-react/blob/master/public/images/datalog_console.png?raw=true)

It's still in an early stage of development, but we seek to expose all common DB administration capabilities here and let you connect to any Datalog database that implements the console's interface.

### Using the Datalog Console

1. [Add the extension to Chrome](https://chrome.google.com/webstore/detail/datalog-console/cfgbajnnabfanfdkhpdhndegpmepnlmb)
2. Vist a page built with homebase-react [like this one](https://cljdoc.org/d/io.homebase/homebase-react/CURRENT/api/homebase.reagent), open the inspector, click the `Datalog DB` tab, and click `Load database` to try it out