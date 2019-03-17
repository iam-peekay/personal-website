---
template: post
title: 'Debugging: A Fact of Life'
slug: /posts/debugging-a-fact-of-life/
draft: false
date: 2015-10-19T15:00:01.223Z
description: >-
  Another week at Hack Reactor has passed and the rhythm is beginning to feel
  natural: wake up, gym, shower, eat, hack, eat, hack, eat, hack, eat, sleep,
  repeat. Luckily, the emotional roller coasters…
category: Coding
tags:
  - JavaScript
  - Coding
  - Debugging
---

### Debugging: A Fact of Life

Another week at Hack Reactor has passed and the rhythm is beginning to feel natural: wake up, gym, shower, eat, hack, eat, hack, eat, hack, eat, sleep, repeat.

Luckily, the emotional roller coasters keep it from ever feeling repetitive. I spent my entire walk during lunch hour a few days ago stressing over a problem that my pair and I were trying to debug for hours, worried that we’d never figure it out. Contrast that to Saturday when I was strolling in the sun with my favorite music jamming and thinking to myself “wow, this is amazing. I get to literally just hack and learn all day. I never want this to end.”

Speaking of problem code, I’d like to take advantage of this post to talk about how my perspective on debugging has been changing.

One of the things I’m realizing as I progress is that a significant chunk of my time as a developer is spent debugging. When I first started coding I had this misconception that the better I got, the less time I’d spend going back to fix errors. I imagined clicking away on the keyboard, shredding through code. Boy was I wrong.

That said, I think the term “debugging” gives it too much of a negative connotation. The more I debug code, the more I’ve come to see it as a natural part of software development — a cost that must be factored into development time. Humans write programs and humans are prone to mistakes. It’s not easy to get programs right the first try. Or the second. Or the tenth.

With positive guidance from the teachers here at Hack Reactor, I’ve even started to enjoy the debugging process. It helps me get an intimate understanding of my program and illuminates how things are working under the hood. Debugging forces me to see the step-by-step execution of my program. I feel like a detective searching for clues as I use the debugger tool to examine program state, whether that means watching the call stack or throwing in watch expressions and stepping into and over functions. It’s almost like a game — a frustrating one sometimes — but a fun and positive process overall because it leaves me with insight into ways that I could refactor and improve my code.

The real question for me when I spend time debugging is “did I learn anything from my mistakes?” If so, I make a note of what I learned to avoid making the same mistake twice.

Of course, I’m by no means saying that developers shouldn’t work towards reducing the amount of time they spend debugging. Writing unit tests, composing readable and simple code, engaging in test driven development, designing better specs etc. are huge headache-savers. What I’m saying is that until the day comes that robots write our code for us, a good portion of our time as programmers will be spent debugging.

Being that most of us learn from our errors, that’s a good thing.

With that, here’s my updated diagram for this week:

<figure>

![](/media/debugging-a-fact-of-life-0.png)

</figure>

#### **Favorite Learning this week: **D3.js!

D3 stands for “Data Driven Documents.” It’s a JavaScript library for manipulating documents based on data. D3 isn’t a charting library — meaning that it doesn’t draw anything to the screen. Rather than interacting with the DOM to move elements around, D3 allows you to bind data to the DOM and then apply data-driven transformations to the document. It’s well-documented, fun to use and sometimes feels magical.

Our task was to reimplement [this game](http://latentflip.com/LearningD3/collider/), which was fairly straight forward. My pair and I finished early so we moved onto the advanced section which asked us to use web sockets via Socket.io to enable pair mode (Socket.io is a JavaScript library that enables real-time, bi-directional communication between web clients and servers). This was my first introduction to server-side stuff and I was SO into it! I’m pumped to dive deeper into server-side technologies in the next few weeks. See you in a few days :)
