---
template: post
title: Documentation is Scary for Newcomers
slug: /posts/documentation-is-scary-for-newcomers/
draft: false
date: 2015-11-04T15:45:32.025Z
description: >-
  I’m amazed how quickly the last four weeks at Hack Reactor flew by! Here’s an
  updated diagram of what I’ve learned: As you can see, the past segment was
  definitely meaty. Yet it was my favorite week…
category: Coding
tags:
  - Software Development
  - JavaScript
  - Documentation
---

### Documentation is Scary for Newcomers

I’m amazed how quickly the last four weeks at Hack Reactor flew by! Here’s an updated diagram of what I’ve learned:

<figure>

![](/media/documentation-is-scary-for-newcomers-0.png)

</figure>

As you can see, the past segment was definitely meaty. Yet it was my favorite week of the program thus far. Why? Because Node.js is seriously awesome! I’m really enjoying the process of thinking about and building the server-side of an application. I’m eager to use Node.js and share some of my learnings. Future posts to come!

As I learn more advanced technologies like Node.js and Sequelize, one of the most useful skill sets I’ve built is reading and understanding documentation. So for this week, I’d like to talk about my personal experience as a newcomer with documentation.

### Documentation is Scary for Newcomers

Documentation can be incredibly scary for newcomers. It certainly was for me — I avoided docs like the plague. I was frustrated by the difficult jargon and overwhelmed by all the new concepts. Like many newcomers, I relied on blog posts and tutorials to walk me through issues, only cracking open the documentation when truly desperate.

For better or worse, I couldn’t hide from documentation forever. For one, the scope of most blog posts and tutorials is narrow, which left me with an incomplete understanding of what I needed to know. Secondly, as I started to build more complex things, my needs became more specific and interdependent. Something had to change. So I resolved to train myself on reading documentation, and to stop bypassing documentation in favor of blogs.

And wow — it was a rough learning curve. Figuring out what they were trying to tell me meant going line by line, stopping at each unfamiliar word. Over time, I learned the conventions and it got easier. Documentation isn’t scary anymore — in fact, it’s now the first place I go.

Of course, I’m not suggesting anybody neglect other resources like Stackoverflow and blog posts. They can be awesome for some problems. But I’d argue that as a developer you’re expected to be able to read and understand the documentation for technologies you’re attempting to use. Otherwise, it’s like going through life not knowing how to read. Not impossible, but ridiculously inconvenient.

Learning how to tackle documentation probably sounds scary for newcomers, especially given the fact that it’s often so poorly written. But don’t fret — anything is learnable with honest effort.

### **A Few Tips To Get Started**

Here are a few quick tips for anyone who’s new to programming and finds documentation intimidating:

1.  Never skip the Readme/Introduction! Even if unrelated to your specific issue, they set the context for the rest of the documentation and could save you a lot of time later. Moreover, they typically explain the value of using the API/framework/library along with any limitations up front so that you can double check if it’s the right tool for you in the first place
2.  Scan through the table of contents before you begin using the technology so that you get an idea for how the contents are structured and where to look for what you need.
3.  Understand what the function or method you plan to use expects as inputs

*   Do you know what these input fields mean?
*   What datatype are the inputs expecting (e.g. string, object, number, etc.)

1.  Understand what the function or method you plan to use returns as output, if any

*   Does it return an object? A boolean? Nothing?
*   Does it fire an event?

1.  Understand how the function or method mutates your data. Does it have side effects? If so, make sure you know what they are
2.  Square brackets \[likeThis\] around an argument generally indicate that the argument is _optional_. You can exclude them and the default values you see listed there will be used
3.  If the description in the documentation is unclear to you, read the source code for the specific function you’re trying to use. I’ve found that reading the source code gives you an intimate understanding of what’s happening under the hood. It’s often difficult to understand what’s going on, but give it a try anyway and just focus on understanding it at a high level. If it still doesn’t make sense, search online for examples where other people have used that function or method. Then go back to the documentation and see if it makes more sense
