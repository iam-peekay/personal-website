---
title: "A Full-Stacked Journey"
date: 2015-10-14T14:58:57.508Z
template: "post"
draft: false
slug: "/posts/a-full-stacked-journey/"
category: ""
tags: [Software Development,Communication,JavaScript]
description: "I spent the past week putting in 12-hour days at Hack Reactor, an immersive coding program here in sunny (cloudy?) San Francisco. After 6 straight days of Sublime Text, Stacks, Queues, Hash tables…"
---

### A Full-Stacked Journey

My journey into software development has officially begun.

I spent the past week putting in 12-hour days at Hack Reactor, an immersive coding program here in sunny (cloudy?) San Francisco.

After 6 straight days of Sublime Text, Stacks, Queues, Hash tables, Graphs, Prototypal chains, Scopes, Closures, the keyword “this,” I’m so cross-eyed I can barely see the screen. Nonetheless, stoke is high. After all, this is what I was looking for: ambitious, nerdy and fun people to help me develop a skill I’m passionate about. Moreover, working with my peers has made it increasingly clear that effective communication for developers is crucial for success — I am realizing that good developers are usually “good” not just because of raw talent or wizardry but rather because they are very effective communicators. It turns out articulating solutions can be as important as the problem-solving itself. Fascinating, huh?

With everything we’ve covered in just one week, I can’t imagine how wild the next 11 between now and graduation will be! I came into the program with little more than a solid foundation in vanilla JavaScript. By the end of the Hack Reactor program, I’ll be layering on core Computer Science concepts while also learning the tools and concepts needed to build full-stack applications.

I figured it would be fun to document my progress along the way using a fun little diagram. I’ll fill in the web application diagram below each week to make note of all the concepts, technologies and frameworks I’ve learned. The parts circled in red represent the new concepts I’ve picked up during the week’s coding adventures. It will be exciting to see how this diagram fills out!

I’ll also be documenting my favorite learning each week, to keep a record of the program highlights. Note: Any technical posts will be posted separately and excluded from this weekly review.

Fasten your seatbelt — this is going to be one hell of a ride! :)

<figure>

![](/media/a-full-stacked-journey-0.png)

</figure>

#### **Favorite learning**

Constructing a hash table implementation for JavaScript. A hash table is a data structure used to implement an associative array — a structure that can map keys to values. The reason we would use a hash table over another data structure is because it allows for constant time access, i.e. O(1). Note that insert & remove operations are O(1) most of the time, but the worst case is O(n). This can occur because:

*   When a hash table is growing, it resizes itself and every element must be rehashed
*   It’s possible for all keys to hash to the same bucket, in which case it becomes a O(n) search for an item in that bucket

My favorite parts of the implementation was learning how to avoid collisions and how to resize the hash table to maintain optimal performance.

#### Closing Remarks

Still reading? Good! If you enjoy the technical side of things as much as me, we’re probably kindred spirits :). See you next week!
