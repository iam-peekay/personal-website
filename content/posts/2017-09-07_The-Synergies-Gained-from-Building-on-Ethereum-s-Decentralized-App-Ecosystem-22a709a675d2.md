---
title: "The Synergies Gained from Building on Ethereum’s Decentralized App Ecosystem"
date: 2017-09-07T14:40:35.692Z
template: "post"
draft: false
slug: "/posts/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem/"
category: ""
tags: [Blockchain,Ethereum,Network Effect,Decentralized Web,Software Development]
description: "When the first home telephones were being installed in the 1870s, the companies selling them had a problem: phones aren’t very useful if you can only call a few people. However, this challenge got…"
---

### The Synergies Gained from Building on Ethereum’s Decentralized App Ecosystem

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-0.jpeg)

</figure>

When the first home telephones were being installed in the 1870s, the companies selling them had a problem: phones aren’t very useful if you can only call a few people.

However, this challenge got easier and easier as the networks expanded, since every new customer’s presence in the phone book increased the overall value of the product as a communication tool.

This concept — called a **“network effect”** — entered its renaissance during the tech boom, as platforms like Facebook and the Apple ecosystem rapidly secured huge market shares on the power of large userbases.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-1.png)

</figure>

Just like the telephone, tech products with strong built-in network effects tend to become the most profitable and sustainable businesses around.

I say “profitable” because companies that have strong network effects typically result in a “winner-take-all” dynamic that leads to massive market shares. I say “sustainable” because once they’ve secured a majority position, it becomes less and less attractive for people to fully leave or switch to another network.

Fast forward to 2017, and everyone is looking around for the next runaway network effect.

As I’ve been developing for Ethereum and the decentralized web, I’ve discovered that decentralized apps on Ethereum are empowered by a whole new type of network effect, or what I’d refer to as “synergies”.

Let’s start by looking more closely at some classic network effects, and build up to show how Ethereum enables an attractive environment for application developers building on top of it.

### Direct network effects

LinkedIn is a classic example of a network effect in action. Every new employee that joins the platform adds value for existing users by increasing their networking potential. The more members there are on the platform, the more attractive it is for employers to join.

Every new employer that joins the platform adds value because you now have more employment opportunities to choose from. As this viral network grows, it becomes unattractive to switch to a LinkedIn clone with a smaller network.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-2.png)

</figure>

This virtuous cycle typically results in one or two companies taking 80% of the market in a [power law distribution](https://en.wikipedia.org/wiki/Power_law).

YouTube, Airbnb, Uber, Facebook, WhatsApp, and eBay are also strong examples of businesses built on a direct network effect.

### Indirect network effects

When we typically talk of these network effects, we’re typically referring to **direct network effects**: increases in usage lead to direct increases in value.

However, there’s another type of network effect called “**indirect network effects**”, where increase in usage of the product creates more value for _complementary_ products, which creates an ecosystem of sorts that increases the value of the original product.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-3.png)

</figure>

For example, let’s take the Mac computer. It has some direct network effects — for example, increase in the number of Mac users increases its value because a greater number of people can share compatible files.

But the indirect network effects that arise from the complementary Mac applications are probably much more important: the larger the number of Mac users, the greater the demand for compatible Mac applications, which leads to greater demand for software firms and developers to build Mac applications. More development leads to lower prices and a greater variety of applications, making Mac users better off.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-4.png)

</figure>

This hardware/software paradigm applies to a number of markets:

*   iPhones (hardware) and iPhone applications (software)
*   Android phones (hardware) and Android applications (software)
*   ATM cards (hardware) and compatible teller machines (software)
*   Televisions (hardware) and movies / TV-shows (software)
*   Electric cars (hardware) and electric fueling stations (software)

In each one of these cases, you have some standard hardware platform, and a variety of complementary software and services.

Similarly, we can argue that indirect network effects exist between the web platform itself and all the applications built for the web — specifically, every new user added to the web platform creates more demand for web applications, which in turn creates a greater variety of web applications and benefits users.

But can such indirect network effects also exist among two complementary software products built on the web platform?

### Friction in network effects between web apps: proprietary APIs

On the surface, a photo sharing service and a cloud storage service would seem primed for indirect network effects. We could argue that an increase in usage of the photo sharing service would lead to an increase in usage of the cloud storage service, since the photo sharing service has to store more and more photos somewhere, while cloud storage services need customers with lots of things (such as photos) to store.

In theory, this increased demand for cloud storage services creates a greater variety of cloud storage services and lower prices (due to more competition), which in the end, is better off for the photo sharing service.

But the problem here is that unlike the hardware/software paradigm, there’s no single standard for “a photo sharing service” or a “cloud storage service” on the web today.

Centralized platforms like Instagram often have to make a tradeoff between the openness they are willing to enable vs. control of their core technologies and data. Creating shared technology standards is great, but can be difficult when competing technology firms each want their R&D to be well-represented.

So unlike the indirect network effects seen with a standard hardware platform and complementary software, we wind up with a _proprietary_ cloud storage platform and a _proprietary_ photo sharing service. How do they find synergies? Well, they do it by directly plugging together _proprietary_ APIs.

Consider Amazon S3’s proprietary API for its cloud storage service. In order to create an integration between Amazon S3 and Instagram, the two products have to engage directly — Instagram needs to sign up, create an Amazon account, pay for the service, and build new back-end code that plugs into Amazon’s proprietary APIs. If Instagram finds a need for another cloud storage service (e.g. Google Cloud Platform), it would need to sign up, create an account, and pay for the service, and build additional back-end code that plugs into Google’s proprietary APIs and so on. One proprietary API after another.

Soon enough, your application architecture looks like this:

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-5.png)

</figure>

Are you ready for the other shoe to drop? Well then, let’s take a look at how this all changes when you’re building on an open, decentralized platform like Ethereum.

### How Ethereum tackles the synergy problem

Ethereum is a blockchain with a built-in Turing-complete programming language and state-management capabilities that make it simple to write smart contracts and decentralized applications. In theory, this enables us to build a more “decentralized web”.

Just like the current web, we find indirect network effects between the Ethereum platform and all the applications that get built on top — every new user that gets added to the platform creates more demand for decentralized applications, which in turn creates a greater variety of decentralized applications. It’s a win-win.

But there’s more.

The beauty of building an application on Ethereum is that its decentralized, permissionless and open nature allows complementary applications to seamlessly integrate with each other as first class citizens.

Proprietary APIs aren’t a problem because every application is written on the same virtual machine (aka Ethereum Virtual Machine (EVM)) and uses the same underlying language (aka EVM Code), the same primitives (aka Smart Contracts, Accounts, Addresses, Transactions, Messages etc.), same fee structure (aka gas price), same state validation logic (e.g. proof-of-work, proof-of-stake), same wallets, etc.

In other words, **everything is built around a single shared standard**.

As a result, it’s clear to see that there’s also indirect network effects _among_ every complementary decentralized applications that get built on top of Ethereum — every new application that gets added can seamlessly integrate with every other existing application, which in turns increases the value of all applications on the platform.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-6.png)

</figure>

Every time any of these applications adds a new user, it increases the value of that application, which in turn indirectly increases the value of every other application on the platform (again, because of the ability to seamlessly integrate and benefit from one another).

**And the best part is, all these synergies emerge automatically.**

Overall, the decentralized web pushes applications away from building up disproportional direct network effects and monopolistic business practices, to one where there are indirect network effects and synergies among every application built on Ethereum. Hopefully, this opens up lots of choice, flexibility and freedom.

### An Example of Synergies among Decentralized applications built on ethereum

But will this really happen? Well, it’s already happening, at least in the decentralized app microcosm.

First, consider this handful of Ethereum apps:

[**Golem**](https://golem.network/): A platform built on Ethereum which sources computing infrastructure in a decentralized manner to create a global market for computation. A “worldwide supercomputer” that anyone can contribute to and/or buy from.

[**Oracalize**](http://www.oraclize.it/): A data carrier between external Web APIs and a decentralized application on Ethereum, where security is enforced by cryptographic proofs.

[**uPort**](https://www.uport.me/): A digital identity service built on Ethereum that makes it simple and safe to make statements about who a person or entity is when interacting with smart contracts and other uPort identities, either on-chain or off-chain.

[**Gnosis**](https://gnosis.pm/): A decentralized prediction market that operates on the Ethereum blockchain. By using the platform, individuals and companies will be able to forecast future events (e.g. expected stock fundamentals, price discovery, etc.)

[**Aragon**](https://aragon.one/faq): A decentralized governance platform built on Ethereum that offers various services to managed decentralized services and entities.

Finally, let’s walk through an example of what real-world automatic synergies on Ethereum look like.

Say you’re building a decentralized insurance application. With the addition of uPort to the ecosystem, you no longer have to do KYC and digital signatures yourself, and can seamlessly use uPort to verify a user’s identity. Similarly, every other application on Ethereum automatically benefits from the identity service uPort provides. And every time uPort adds a new user, it benefits the entire ecosystem because more users can be verified across any application that uses uPort.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-7.png)

</figure>

With the addition Golem to the ecosystem, you can use their distributed plug-and-play computation platform for running various services within your insurance application. Similarly, every other application on Ethereum natively and automatically benefits from their service. Every time Golem adds a new user (i.e. machine), it adds more compute power to the system and benefits the entire ecosystem.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-8.png)

</figure>

With the addition of Gnosis, your insurance application can get market predictions of the uncertain outcome that a borrower on your platform will default on their loan. Similarly, every other application built on Ethereum benefits from a predictions market for their own application. Every time Gnosis adds a new user, it makes its predictions market platform better, which benefits the entire ecosystem.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-9.png)

</figure>

With the addition of Oracalize, you can now fetch external information like price feeds, quotes, etc. Similarly, every other application built on Ethereum benefits from Oracalize by now having the ability to fetch external information.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-10.png)

</figure>

With the addition of Aargon to the ecosystem, you can now create a voting governance system that helps process insurance claims in a fast, cheap, and fair manner. Similarly, every other application on Ethereum can seamlessly use Aargon’s governance system within their own applications. Every user that gets added to Aargon’s platform makes their services better, which benefits the entire ecosystem.

<figure>

![](/media/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem-11.png)

</figure>

… and so on.

All these integrations happen seamlessly, without custom integrations, back-ends, payment models, APIs, and so on.

This is just a small scaled version of what’s possible. There are [seriously endless possibilities for these automatic synergies](https://dapps.ethercasts.com/).

### The irony of Ethereum: removing friction makes monopolies difficult

The flip side of all this is that it becomes much harder to build giant businesses off direct network effects on Ethereum. The radically streamlined ecosystem makes the cost of switching to alternative services much lower. Even from an end user’s perspective, it becomes much simpler to switch from one service to another, so long as they are on the underlying Ethereum platform and have an Ethereum account/address that works across any application.

Unlike the LinkedIn example I used at the beginning of this post, creating a “moat” around any service becomes difficult since most of the proprietary puzzle pieces have been removed from the picture. How this “monopoly resistance” feature will play out as real-world businesses choose Ethereum as their playing ground remains to be seen.

Regardless of the outcome, I’m personally excited about the enormous potential for a system where apps as well as users can create value with little to no friction.
