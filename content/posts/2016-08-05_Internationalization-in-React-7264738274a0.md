---
template: post
title: Internationalization in React
slug: /posts/internationalization-in-react/
draft: false
date: 2016-08-05T15:09:41.661Z
description: >-
  Internationalization is a big problem. If you want your application to make a
  worldwide impact, you have to deal with language barriers. Unfortunately, the
  road from “Your funds will arrive by July…
category: Coding
tags:
  - JavaScript
  - React
  - Web Development
  - Programming
  - Tech
---

### Internationalization in React

<figure>

![](/media/internationalization-in-react-0.jpeg)

<figcaption><a href="http://globalfragrancebusiness.com/?page_id=31" class="figcaption-link">Image credit</a></figcaption></figure>

Internationalization is a big problem. If you want your application to make a worldwide impact, you have to deal with language barriers.

Unfortunately, the road from “Your funds will arrive by July 7th” to “Vos fonds arriveront le 7 Juillet” is far from simple.

Before your application can succeed outside the English-speaking world, you’ll have to adapt all your strings, dates, and numbers to the conventions of different cultures.

Developers call this practice **internationalization** (which is often abbreviated to “**i18n**,” because there are 18 letters between the ‘**I**’ and the ’**n**’ in the word **I**nternationalizatio**n**.)

One reason we overlook internationalization is simply because it’s hard to get right. Every language has different rules and conventions. Adapting to these rules and conventions takes time and effort.

### The solution: React Intl

But internationalization doesn’t have to be hard, thanks to a new React library. [**React Intl**](https://github.com/yahoo/react-intl) is an open-source project from Yahoo, and part of [Format.js](http://formatjs.io/), a collection of JavaScript libraries for internationalization that builds on Javascript’s built-in Intl API.

The [React Intl](https://github.com/yahoo/react-intl) library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization.

Let’s give it a walk-through.

### Core concepts

Here are the core concepts you’ll need under your belt to get the most out of React Intl:

#### JavaScript’s Internationalization API

JavaScript has an [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) specification which defines the **Intl** object as a standard built-in global object.

React Intl essentially uses and builds on this API. As long as the browser supports these APIs, React Intl will continue to work its magic.

_Note: the only browser that doesn’t currently support these APIs is Safari. We’ll use a polyfill to overcome this in the sample project below._

#### Module bundlers

React Intl distributes its package via ES6, CommonJS, and UMD modules. Hence, it works really well with bundlers like Webpack, Browserify and Rollup.

In the sample project, we’ll be using Webpack as our module bundler.

If you don’t plan to use a module bundler to load React Intl into your application, I recommend the documentation for more information on other approaches (e.g. via Node.js).

#### Loading Locale data

React Intl relies on this locale data to support plural and relative-time formatting. Locale data defines the following for each specific locale:

*   Locale-specific patterns for formatting and parsing dates, times, time zones, numbers and currency values
*   Translations for names of currencies, eras, months, weekdays, etc.
*   Language and script information (plural cases, characters used, gender of lists, capitalization, writing direction, etc.)
*   Country information (currency, calendar preference, week conventions, telephone codes, etc.)

If you’re using Browserify, Webpack or Rollup to bundle React Intl for the browser, it will only contain locale data for basic English by default. The rest of the locale data is **not** included in the main library. So in this sample project we’ll cover how to import the locale data per language you choose to support in your app.

Keep in mind that if you’re using React Intl via Node.js, all locale data will be loaded into memory, so you can skip this step.

#### Formatting Data using React Components vs. the API

The library provides two ways to format strings, numbers, and dates: **React** **components** or an **API**.

**React Component:**

**API:**

```
const messages = defineMessages({
  feesMessage: {
    id: "Tooltip.fees",
    defaultMessage: “Click here to understand how we calculate fees.”,
  },
});

formatMessage(messages.feesMessage);
```

I take the first approach whenever possible, using declarative idiomatic-React components to format data over the imperative API.

The benefit of this approach is that it lets us a) compose components with other components, b) allows for rich text and string formatting, c) provides prop type warnings for formatting options, and d) implements _shouldComponentUpdate_ to avoid costly formatting operations.

Of course, there are times when your only choice is to use the API (For example: passing a string as a prop, a name attribute of an HTML element, etc.), so it still comes in handy.

### Sample project

The best way to learn is to see a live example. For this post, I made a [simple React project](https://github.com/iam-peekay/inbox-react-intl) which consists of a main header component, a subheader component, and a few widget components, each with their own headers and body.

First, we’ll walk through the process of setting up React Intl. Then we’ll use the components and API to convert strings, numbers, and dates used within the components.

### Setting up

Let’s assume we have an existing React application that we’re working from. First, you’ll need to install the React Intl package:

```
npm install —-save react-intl
```

Next, we’ll need to install the babel plugin for React Intl:

```
npm install --save-dev babel-plugin-react-intl
```

To actually have the babel plugin do its magic, we need to set up our **.babelrc** file to include this plugin. Here’s what my **.babelrc** looks like with the react-intl plugin added to it (lines 6–11):

```
{
  "presets": ["es2015", "react", "stage-0"],
  "plugins": [
    "transform-object-rest-spread",
    "transform-runtime",
    [
      "react-intl", {
        "messagesDir": "./build/messages",
        "enforceDescriptions": false
      }
    ]
  ],
  "env": {
     "development": {
      "presets": ["react-hmre"]
     }
  }
}
```

What this babel plugin does is it extract all the string messages in your application that are defined using either **defineMessages**, **<FormattedMessage>**, or **<FormattedHTMLMessage>**.

(Note that **defineMessages**, **<FormattedMessage>**, and **<FormattedHTMLMessage>** are all named exports of the React Intl package).

Once extracted, it generates JSON files which contain the string messages and places them in the directory you defined in the **messagesDir** path above.

<figure>

![](/media/internationalization-in-react-1.png)

<figcaption>Extracted messages</figcaption></figure>

### Loading data

Next, let’s load the appropriate locale data for the languages that we need to support.

As I mentioned above, if you’re bundling for the browser using Webpack, Browserify or Rollup, React Intl comes English-only by default. So we have to add the other locale data manually.

In the root component file, we add the locale data using the **addLocaleData** API. The data will then be passed the contents of the locale data module, which will then be registered in its locale data registry.

For this sample project, I’m going to assume we’re supporting 4 languages: English, Spanish, French and Italian.

```
import { addLocaleData } from ‘react-intl’;
import en from ‘react-intl/locale-data/en’;
import es from ‘react-intl/locale-data/es’;
import fr from ‘react-intl/locale-data/fr’;
import it from ‘react-intl/locale-data/it’;

addLocaleData([...en, ...es, ...fr, ...it]);
```

**Note**: If your app supports a lot more, the recommended approach to adding locale data is to dynamically load the locale data based on the current user’s language. Read the React Intl docs for more info on this approach.

### Create the i18n context in your React application

So far, we’ve installed the React Intl package, set up our** .babelrc** plugin, and loaded the appropriate locale data.

One final step is to create an **i18n** context for all our React components so that the current user’s locale and translated message (based on the user’s locale) can be loaded into the React Intl Components that you define in your app.

To do this, we first define the messages to pass to **IntlProvider** based on the user’s locale (see lines 18–26 below). Then we wrap the root React component with **IntlProvider,** which is  a named export provided by React-Intl (see lines 31–33):

```
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';

// Our translated strings
import localeData from './../../build/locales/data.json';

addLocaleData([...en, ...es, ...fr, ...it]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

// Render our root component into the div with id "root"
// We select the messages to pass to IntlProvider based on the user's locale
render(
   ,
  document.getElementById('root')
); 
```

In this setup, we’re assuming that our translated data will live in **build/locales/data.json** and that the data is grouped by language, like so:

```
{
  en: {
    ...English version of strings,
  },
  fr: {
    ...French version of strings,
  },
  es: {
    ...Spanish version of strings,
  }
  ... etc.
}
```

### Build a script for translating

Now that we have the configuration all done, let’s take a look at how we can build a simple script that will grab all the strings that babel extracts for us into multiple JSON files, and combine them into one file.

The point of this script is to accumulate all the English strings so that we can then upload these strings to a translation service, have them be translated into the different languages we support, and then place the results into the **build/locales/data.json** file we used above. Once there, the **IntlProvider** component can finally load them into our root component.

Since we don’t need to actually do the translations in this post, we’ll skip this step and just build a script that puts everything in one file. Just remember to loop in a translation service provider in real-world applications :)

All credit goes to the React Intl library authors for generating this script below:

```
import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const filePattern = './build/messages/**/*.json';
const outputDir = './build/locales/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(filePattern)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({id, defaultMessage}) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});
// Create a new directory that we want to write the aggregate messages to
mkdirpSync(outputDir);

// Write the messages to this directory
fs.writeFileSync(outputDir + 'data.json', `{ "en": ${JSON.stringify(defaultMessages, null, 2)} }`);
```

### Steps to convert dates, numbers and strings with React Intl

Okay — we’re finally ready to do some formatting!

The sample app is a simple layout with a **header**, **subheader**, and **widgets**, each of which contains strings, numbers, and/or a dates:

<figure>

![](/media/internationalization-in-react-2.png)

</figure>

Nothing sophisticated, but it’s enough to get us started.

#### Header

First, we’ll look at the header which says: _“Welcome to your dashboard, Preethi!”_

To convert this, we’ll use the **FormattedMessage** component:

The **FormattedMessage** component has props that correspond something called a “**Message** **Descriptor**” in React Intl. The **Message Descriptor** is the format used to define default messages/strings, and is useful for providing the data necessary for having the strings/messages translated. It contains the following properties:

*   **id**: A unique, stable identifier for the message
*   **description**: Context for the translator about how it’s used in the UI (optional)
*   **defaultMessage**: The default message (in English)

The **id** prop must be unique for every message defined in your app. What’s awesome is that the **defaultMessage** can be passed data from the props, as is the case in **name** above. (Note that the values that are passed as data won’t get translated — they’re simply inserted into the final translated string as-is.)

#### SubHeader

Next, let’s look at the Subheader, which is slightly more involved:

```
 ),
    notifications: (
      
    ),
  }}
/>
```

The ability to compose components within other components (i.e. have **Formatted**\* items within another **Formatted**\* item) is a powerful feature of React Intl.

You can see in the above example that **unreadCount** is a **FormattedNumber**, and **notifications** is a **FormattedPlural**, and that both are values passed into **FormattedMessages**’s **defaultMessage**. Beautiful!

Another slick feature is **FormattedRelative**, which will render the formatted relative time:

```
 }}
/>
```

Once translated and formatted, it will read: _“You last logged in 4 hours ago!”_ (Or however long ago lastLogin was.)

### Passing formatted strings as components

In the above two snippets, we saw how to use the **Formatted**\* Components to define strings, numbers, dates, and pluralization.

However, there are plenty of instances where it’s necessary to pass formatted strings as props or use formatted strings to name an HTML component. The **FormattedMessage** component doesn’t well work in cases like this.

Luckily, React Intl’s **defineMessages** API lets us imperatively define all of a component’s strings, then pass them as props to the component.

Let’s try this approach for the widget headers and body. First, we use **defineMessages** to define our strings:

```
const messages = defineMessages({
  widget1Header: {
    id: 'Widgets.widget1.header',
    defaultMessage: 'Creative header',
  },
  widget1Body: {
    id: 'Widgets.widget1.body',
    defaultMessage: 'Mark todays date: {date}',
  },
  widget2Header: {
    id: 'Widgets.widget2.header',
    defaultMessage: 'Here is another widget',
  },
  widget2Body: {
    id: 'Widgets.widget2.body',
    defaultMessage: 'Hello. How is your day going?',
  },
  widget3Header: {
    id: 'Widgets.widget3.header',
    defaultMessage: 'Yet another widget',
  },
  widget3Body: {
    id: 'Widgets.widget3.body',
    defaultMessage: 'What is the meaning of life, my friend?',
  },
  widget4Header: {
    id: 'Widgets.widget4.header',
    defaultMessage: 'This is the last widget',
  },
  widget4Body: {
    id: 'Widgets.widget4.body',
    defaultMessage: 'I love React so much!',
  },
});
```

Then, assuming we have a Widget component that expects header and body props, we can continue like so:

One thing you might have noticed in the first widget is that we can also pass data to the strings defined in **defineMessages**. Here, we passed the current formatted date as the value **date**. Pretty neat, huh?

The API also works well for formatting numbers, dates, times, relative times, and pluralization (check out their [docs](https://github.com/yahoo/react-intl/wiki/API) for more on this)

### How to make it work in Safari

Now that we’re almost done, I’ll throw one last curve ball at you:

The current setup will not work for Safari browsers :(

As mentioned above, this is because Safari does not currently have native support for Javascript’s Internationalization API.

Fortunately, there’s still a way to make this work for Safari users. What we need to do is use the **Intl polyfill**. There are a few different ways to load this in. Let’s continue using Webpack, for the sake of example:

First, we install the **intl** package from npm:

```
npm install --save intl
```

Next, we’ll write a simple if-statement to only load the polyfill if there is no native browser support for **Intl** (see lines 30–57). This is to avoid loading the library and all the locale data into your app when not needed.

```
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import localeData from './../../build/locales/data.json';

addLocaleData([...en, ...es, ...fr, ...it]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

// Render our root component into the div with id "root"

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/es.js',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/it.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/es.js');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/it.js');
    render(
       ,
      document.getElementById('root')
    );
  });
} else {
  render(
     ,
    document.getElementById('root')
  );
} 
```

As you can see, the first thing to check is if the **intl** global is _not_ available on window. If not, then we load the intl polyfill and associated locale data and then render the component. Otherwise, we simply render the component.

And at last, here’s our pre-translated app (still in English of course). I’ll leave you with the final step, which is finding a translation provider and getting these strings translated!

<figure>

![](/media/internationalization-in-react-3.png)

</figure>

### Other tips

I hope this post is enough to start turning your spazzy React application into one that’s amicable to other cultures and languages.

Before I sign off, here are a few other tips to consider when internationalizing your app:

*   **Flexible components:** Build your components such that they are flexible and allow for text expansion and shrinkage. Some languages can expand much larger or shrink much smaller than English. If you don’t account for this, your layout can look unbearable after translation.
*   **Appropriate font size:** Use a font size that will work well with all the languages you support. Some languages, like Japanese and Chinese, need larger font sizes.
*   **UTF-8**: Use UTF-8 everywhere. This includes in your HTML, server-side language, database, etc. Unlike other encodings, UTF-8 encoding handles almost all languages really well.
*   **No text in images:** Avoid using text in images because translating text in graphics is extremely difficult, and not worth the pain.
*   **Don’t split your strings:** For example, if you have “Your funds will arrive by July 7th,” avoid splitting strings like “Your funds will arrive by” and “July 7th”. The combination might only work in English due to word order variations in other languages.

### Conclusion

As always, feel free to comment with suggestions and questions. I’d love to hear it :)

All the code for the sample application can be found on github here: [https://github.com/iam-peekay/inbox-react-intl](https://github.com/iam-peekay/inbox-react-intl)
