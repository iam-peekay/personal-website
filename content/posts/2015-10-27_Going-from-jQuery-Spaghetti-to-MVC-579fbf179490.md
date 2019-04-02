---
template: post
title: Going from jQuery Spaghetti to MVC
slug: /posts/going-from-jquery-spaghetti-to-mvc/
draft: false
date: 2015-10-27T21:02:41.174Z
description: >-
  This week, let’s start with a look at the typical web developer’s experience
  going from pure jQuery to an MVC framework. Phase 1: You discover this
  incredible scripting library called jQuery. It’s…
category: Coding
tags:
  - Software Development
  - JavaScript
---
This week, let’s start with a look at the typical web developer’s experience going from pure jQuery to an MVC framework.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-0.jpg)

</figure>

**Phase 1:** You discover this incredible scripting library called jQuery. It’s flexible, speedy, and easy to use, making you feel like a web development superhero.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-1.jpg)

</figure>

**Phase 2:** You use it to build a few personal projects. One of them gets some traction and starts to grow. As signups increase, you need to communicate heavier data between the client and server. You look under the hood to start improving the UX, and discover a tangled mess of jQuery and Ajax. You try to clean it up so that you can build on top of it, but then back off because you’re scared you’ll break something.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-2.jpg)

</figure>

**Phase 3:** Your friends and colleagues suggest that an MVC framework will get the job done. MVC? You have no idea what that means, but you figure it’s worth learning about.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-3.jpg)

</figure>

**Phase 4:** You scour the internet, pick an MV* framework called Backbone to give it a whirl. It’s your first time using it. You’re immediately lost. What in the world is a controller? Or a model? How do I set this all up? What goes where?

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-4.jpg)

</figure>

**Phase 5:** You go through a few tutorials and read the documentation. It takes a while to sink in, but you start to get the hang of the basic functionality and how things work on a high level.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-5.jpg)

</figure>

**Phase 6:** You finally feel confident enough to give it a try. You start building. Or at least, you think you will start building. But wait… you actually have to think before you write a single piece of code. Maybe even draw a bunch of diagrams to map out the control flow of your application. You’re trying really hard to get used to this new way of building. You’re jamming it all into your brain with the hope that you get something good out of it. But it feels so inefficient. It takes a long time. You get discouraged. You thought you understood it conceptually but maybe you need to go back and re-read everything. Maybe it’s better that you stay with what you know and find a way to better organize your jQuery.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-6.jpg)

</figure>

**Phase 7:** A day or two later, you decide there’s no way that you’ll let Backbone win this fight. You lift yourself up, take a deep breath, and go at it again. You start small and win some tiny victories. A day later, you have a part of a working application and you’re stoked.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-7.jpg)

</figure>

**Phase 8:** After a week of fiddling, you can see the light at the end of the tunnel. You realize why using a front-end framework will make your application much more maintainable. It all makes sense now.

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-8.jpg)

</figure>

**Phase 9:** You love Backbone, even though he made you work hard and think hard up front. But is he the one for you? You hear all the buzz about other frameworks and libraries like Angular, Ember, React and Meteor. Could it be that you’re missing out?

**Phase 10:** The temptation is too sweet. Return to phase 4 with a new framework!

This is my personal love-hate relationship with jQuery and MVC frameworks, but I’m betting there’s at least one developer out there who’s reading this and nodding yes.

There comes a time in every developer’s life when jQuery welcomes her into its dark underworld. That point when her code does gymnastics on the page, but collapses to a tangled mess underneath. You could hit the wall with this anywhere in your career. “Is this the norm?” you ask yourself. “There has to be a better way.” Soon enough, you start researching all the MVC frameworks out there but aren’t sure which is right for you.

I personally hit this breaking point when I built my first project a few months ago. I’ve been reading up on MVC frameworks ever since and have been eager to start learning one to keep my code more organized, readable, maintainable, and scalable.

### **MVC for the First Time**

Hack Reactor introduced the MVC design pattern to our group last week, and in particular an MV* framework known as Backbone. They gave us very little to work with — a matter of a few slides to introduce some concepts — and told us we had to refactor our existing jQuery implementation. Just like that, they pushed us into the deep end. We spent the rest of the week learning the inner workings of Backbone in order to complete our sprints — no jQuery required.

It was intimidating at first to implement on the fly without prior knowledge of what Backbone is or how it works, let alone how to use it to build parts of an application. But I’m starting to become resilient to these intimidating and unfamiliar experiences because that’s the nature of programming — especially at Hack Reactor. The problems only get harder, never easier.

It shreds your ego to pieces when you see other developers grokking concepts that you can’t seem to comprehend, yet you somehow become determined to never give up because you know that if you keeping pushing you’ll eventually reach enlightenment. That’s the beauty of it.

In summary, let me tell you what I did and didn’t like about Backbone. Note: I’m sure my point of view will change once I’ve tried out some other frameworks :)

#### **What I liked**

* As the name suggests, Backbone is bare bones. Rather than a full-blown framework you get a minimalistic library that provides utilities for manipulating and querying data in your application. As a result, it’s a fairly simple and small code base (which I was able to read last night in a matter of a few hours), making it easy to get started
* It hits the metal — meaning, it has fewer abstractions and built-in assumptions relative to other front-end frameworks. This forces you to understand and think about how data will flow through your application, which I think is a very important skillset for a beginner
* It’s flexible and plays well with other frameworks or libraries so you don’t have to be locked into a single solution
* Backbone is not opinionated. In fact, many organizations create their own conventions and their own accepted way of doing things. Besides the few anti-patterns and conventions that the Backbone community agrees on, the choices of how you decide to wire up the app to make events propagate through it are left up to the programmer
* Killer documentation

#### **What I didn’t like**

* No two-way data binding, leaving the developer tasked with writing a lot of boilerplate to update the view whenever the model changes and vice versa
* Backbone is not opinionated. This is a gift and curse. I explained above why I think this characteristic makes Backbone special — but it also makes it difficult for beginners who are left with too much choice and can easily wander down the wrong path. I spent too much time searching for “the right way” to do things, only to realize they don’t exist

To close, here’s my update for the week:

<figure>

![](/media/going-from-jquery-spaghetti-to-mvc-9.png)

</figure>

#### **Favorite Learning this week**

This is a tough one, since we covered so much the past few days! Getting familiar with Coffeescript was definitely a highlight. I found it to be much prettier than JavaScript, and I particularly enjoyed the easy function and lambda definitions, straightforward class definitions, and the syntactic appeal of cutting away symbols and curly braces.

…But as for favorites, I’ll have to go with Backbone for this week because of how fundamental MVC design pattern is to my progress as a web developer. Although I’ve been following the movement of the Flux architecture along with React and Meteor very closely and do plan to learn those, I’m glad I started with Backbone. It’s provided me with the fundamentals I need to move on to more abstract frameworks. See you next week :)
