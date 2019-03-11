---
title: "You don’t have to be a programming wizard to build an open-source library"
date: 2016-01-05T16:32:09.238Z
template: "post"
draft: false
slug: "/posts/you-don-t-have-to-be-a-programming-wizard-to-build-an-open-source-library/"
category: ""
tags: [JavaScript,Web Development,Open Source]
description: "If there’s one thing I’ve learned about programming over the last few months, it’s that you don’t have to be a programming wizard to build something useful. Case in point: My teammates Banun Idris…"
---

### You don’t have to be a programming wizard to build an open-source library

<figure>

![](/media/you-don-t-have-to-be-a-programming-wizard-to-build-an-open-source-library-0.png)

</figure>

If there’s one thing I’ve learned about programming over the last few months, **it’s that you don’t have to be a programming wizard to build something useful.**

Case in point: My teammates [Banun Idris](https://twitter.com/banunatina?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), Colin Seale and I spent the last couple of weeks building our first open-source library. We call it [tld3.js](https://iam-peekay.gitbooks.io/tld3/content/index.html). It makes it easier for developers to build graphs with [d3.js](http://d3js.org/).

…Why does that matter? It matters because all three of us have been coding full-time for less than a year, but we still pulled it off!

Building an open-source library is a different beast entirely from building web apps or websites, and we learned a few important lessons along the way.

Web development is full of unnecessary pain-points, and solving them through open-source projects is easier (and more rewarding) than you might imagine.

…It doesn’t have to be world-changing. It doesn’t have to be perfect. Honestly, it doesn’t even have to be used. The worst-case scenario is that you build your skills as a developer.

I hope this post is useful to anyone interested in contributing to the open-source community.

#### Design Pattern and API design: Make it easy

We decided early on that the most important goal of our library was _to make it as easy as possible for beginners or programmers who aren’t experienced in d3.js_.

No face-melts. No confusion. Just a simple, minimal API that exposes enough methods to the end user to make them productive.

Now, don’t get us wrong — “minimal” doesn’t have to mean “less useful.” It just means making sure the end user doesn’t have to get tangled up under the hood if they don’t want to.

This was probably the single best decision we made going into the project. Why? Because it forced us to focus on the end user at all times — figuring out the ideal user experience and then working backward from there.

#### Future-Forward: make it extensible

Our second goal was to make our library extensible so that it would be easy to add features and fix bugs in the future. The only thing more important than making the code was making it maintainable — this wasn’t a project we wanted to just finish and put on the shelf.

In the process of making our library extensible, we pair-programmed for the first 10 days building and refactoring the code over and over again. Each time it got better and better until it finally felt “right.” We kept the bar high for ourselves because we knew that thinking about and iterating on the design in depth would help us in the long run.

One of the ways we kept ourselves in check throughout the development phase was by continuously asking ourselves: “would we want to use this if we stumbled across it on GitHub?”

…And so we kept iterating until the answer was “fuck yes! \*npm install tld3\*!”

#### Take testing and CI seriously

We knew that testing and continuous integration (CI) would be crucial to building a robust library.

So it goes without saying that we had to write clean and modular code, with testing in mind. CI really saved us here: I can’t imagine tackling a project like this with any other method.

For the broader audience: Continuous Integration is when developers integrate code into a shared repository which is then verified by an automated build process. That way if the build fails we detect it immediately — prompting the contributor whose build failed to fix the error and re-submit.

Besides helping reduce integration problems and speed up the time to add new features, the most important benefit we saw in this approach was increased visibility. If a build failed, everyone on the team knew. This kept us aware and more importantly, held us accountable.

Lesson learned: there’s no comfort like the comfort of automated infrastructure running your test cases.

#### Architecture matters: use the “right” folder structure

When you build a web app, directory structure can be more or less free-form. There are conventions and best practices of course, but in most cases you can do it any way you like.

It’s a different story when you’re building a library. To be honest, I didn’t know where to start! The structure didn’t really “click” until I spent some time studying my favorite open-source libraries (lodash, Backbone, jQuery, Redux, and others).

Why does it matter so much? Well, open-source projects are by nature public-facing. They’re designed to be shared and tinkered with by a lot of people, so making the structure somewhat consistent with community norms makes it much easier for others to jump in and understand your code base — especially other contributors.

(Look out for a follow-up post on this shortly!)

#### Hitting the books: (docs) ^ 747.

As you may know, [I love documentation](https://medium.com/@preethikasireddy/documentation-is-scary-for-newcomers-7599294a96b9#.rfjeh9452). So it’s fitting that I was the documentation ninja on the team.

Going into this project, I wanted every single function documented:

*   What are the inputs?
*   What are the outputs?
*   Why does it exist in the first place?

No one should have to ask these questions when they encounter a library, so I knew docs would be critical for future contributors — and frankly for us too when we look at the code base a few weeks or months from now. We all know that it’s really hard to look back at your code after a while and know exactly why you did something.

I’m happy to say that we’ve got some [amazing docs](https://iam-peekay.gitbooks.io/tld3/content/index.html) up and [source code commentary](http://iam-peekay.github.io/tld3/) as well. :)

#### Tooling is grueling: but you have to do it

Libraries are no good if they can’t get to users, so we had to learn how to publish a package to npm. We had so many questions:

*   Should we check our node_modules folder into git? (quick answer: no)
*   What’s the typical folder structure?
*   How do we publish new versions to GitHub? to npm?
*   How do we implement semantic versioning?
*   How do we correct a mistake after a botched release?
*   And many, many more…

Luckily, some careful Googling was able to answer all our questions. One of the great things about open-source is that it’s all “out there.” Even when you feel stuck, there’s probably a detailed answer (or exploration) out there somewhere!

#### Environment matters: billions and billions of options

Picking out tools to manage our linting, testing, building, and deployment process was incredibly tricky. (Mostly because of the diversity of tools in the ecosystem and different opinions for what’s best.)

For example, we picked up several different client-side bundlers and build tools along the way, including Webpack, Browserify, Gulp and Grunt. It was difficult to figure out which combination would work best for us, so we gave them all a try. Eventually we settled on using Webpack and Gulp — Webpack because we loved how well it plays with Babel and Gulp because we preferred writing code instead of config.

There’s no right or wrong choice when it comes to these things. It just depends on what you’re looking for and what trade offs you’re willing to make for one tool versus another. In this regard, trying different tools helped us learn to navigate the system and understand the pros and cons of different approaches.

#### Error handling: make useful error messages

As a developer, I hate vague error messages. Hate them with a passion. And if you’re reading this, you probably do too.

With that in mind, we wanted to write error messages that actually made sense to the user. Not “error occurred” messages that leave you in the middle of a forest.

<figure>

![](/media/you-don-t-have-to-be-a-programming-wizard-to-build-an-open-source-library-1.jpg)

</figure>

Secondly, error handling also means recognizing and planning for edge cases. We knew that developers (and people) don’t use products (or libraries) as perfectly intended. Not even close.

…I mean, think about the last time you read an instruction manual ;)

We were particularly vigilant about coding error handling for all kinds of inputs — valid or invalid — and giving the end users error messages that were as descriptive as possible.

#### Conclusion

Building an open-source library stretched us beyond our limits.

We made a ton of mistakes along the way and [tld3.js](https://github.com/pbc-labs/tld3) definitely has some rough edges to show for it. But in the end, building a perfect library wasn’t the point — the point was to demonstrate the commitment and self-confidence we’d gained in this journey into programming. My favorite part about it all has been that it deepened our understanding of JavaScript and how to write good code, more so than gaining experience in a particular tool or framework.

…Along the way, we discovered that “mere mortals” are just as capable of building a useful and functional open-source library as the “programming wizards.” :)

#### Contact

If you have any questions on how to use [tld3.js](https://github.com/pbc-labs/tld3) or want to help us out, tweet me [@iam_preethi](https://twitter.com/iam_preethi) or email me at iam.preethi.k@gmail.com.

Lastly, please reach out if I can be helpful in anyway, as always :)
