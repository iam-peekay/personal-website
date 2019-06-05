---
template: post
title: How does Cosmos work? How does it compare to Bitcoin and Ethereum?  (Part 2)
slug: /posts/how-does-cosmos-work-part2
draft: true
date: 2019-05-29T19:02:57.038Z
description: >-
  So far, we've talked about Cosmos from the viewpoint of building a single
  blockchain and blockchain application. But as we noted earlier, one of Cosmos'
  biggest value propositions is interoperability — the ability to communicate
  across MANY blockchains. But how? And why?
category: Blockchain
tags:
  - blockchain
  - cosmos
  - interoperability
  - scalability
  - cryptocurrency
---
<figure>

![](/media/e88453b35bf7ab9c4eddefdf8cda1f40.jpeg)

</figure>

So far, we've talked about Cosmos from the viewpoint of building a single blockchain and blockchain application. But as we noted earlier, one of Cosmos' biggest value propositions is interoperability — **the ability to communicate across MANY blockchains.**

To grasp how this works, we first need to understand the fundamental architect that Cosmos employs to enable this interoperability: "**Hubs and Zones**". 

# Hubs and Zones

Blockchains in the Cosmos network use a hub and spoke model:

<figure>

![](/media/screen-shot-2019-05-13-at-10.12.52-am.png)

</figure>

At the base, we have the Hub. The **Hub manages many independent blockchains called "Zones"** (For the rest of this article, when I say “Zone”, I mean blockchain). **The Hub keeps up with the state of each Zone.** And the Zones are responsible for constantly communicating new blocks being produced in their Zone back to the Hub. Likewise, each **Zone keeps up with the state of the Hub.**

But here's where things get a little tricky — Zones do not keep up with each other directly; only indirectly by sending information packets through the Hub. To understand how this works, we must examine the mechanism that makes it possible: **Inter-blockchain communication (IBC)**.

# How IBC works

Hubs communicate with Zones and Zones communicate with each other indirectly through IBC. When a Zone creates an IBC connection with a Hub, it can automatically access every other Zone that is connected to the Hub. This means a Zone only needs to connect with Hubs, not other Zones. 

**Hubs also prevent double spending among Zones by preserving the global invariance of each token's total amount across the Zones**. These tokens can be moved from one Zone to another in a special IBC packet called a "coin packet."

**When a Zone receives a token from another Zone through the Hub, it only needs to trust the Hub and the Zone where the token originated; it doesn't need to trust all the other Zones in the network.**

_Let's look at an example:_

Assume there are two blockchains: Zone 1 and Zone 2. Now, **what happens if we want Zone 1 to send tokens to Zone 2?**

<figure>

![](/media/screen-shot-2019-05-13-at-10.14.59-am.png)

</figure>

To move a packet from **Zone 1 to Zone 2**, Zone 1 first publishes a packet to the Hub that is designated for Zone 2. 

<figure>

![](/media/screen-shot-2019-05-13-at-10.18.53-am.png)

</figure>

The Hub then sends a proof to Zone 2 stating that Zone 1 published a packet for it. 

<figure>

![](/media/screen-shot-2019-05-13-at-10.19.00-am.png)

</figure>

After this, Zone 2 must verify that this proof of Zone 1 is accurate. In order to do so, Zone 2 uses Zone 1's block headers which are stored on the Hub. Remember, a Hub helps a Zone keep up with the state of every other Zone. It does this by keeping tracking of the other Zones' block headers.

<figure>

![](/media/screen-shot-2019-05-13-at-10.19.07-am.png)

</figure>

Now, one thing you might be wondering is: Why doesn't Cosmos just use IBC to directly connect every Zone with every other Zone? Why does it need Hubs and Zones?

Well, connecting every Zone with each other causes the number of connections in the network to grow quadratically with the number of Zones. So if there are 100 Zones in the network, and each needs to maintain an IBC connection with every other Zone, that equals... 4950 connections! Obviously, this would quickly get out of hand.

**The “Hub and Zone” model lets Cosmos scale communication across many Zones, regardless of how many there are.**

<figure>

![](/media/screen-shot-2019-05-13-at-10.21.21-am.png)

</figure>

**IBC is critical for the Cosmos network to operate properly. It's what enables multiple sovereign blockchains (i.e., Zones) with different applications and validator sets to interoperate.**

## The first "Hub": The Cosmos Hub

As you learned, Hubs are what connect different Zones together. The Cosmos Hub is the first Hub in the Cosmos network. It connects to other zones via IBC.

The first blockchains (or Zones) that get built in the Cosmos network will use this main Cosmos Hub to interoperate with other Zones in the network. This means that the Cosmos Hub must have high security (i.e., many validators) so that Zones who use the Cosmos Hub to interoperate with other Zones can do so safely.

## Bridging Non-Tendermint chains together

So far, we talked about how Tendermint-based blockchains (i.e. Zones) can interoperate using Hubs and IBC. However, **Cosmos is not limited to transfers between Tendermint-based chains.**

I'll quickly explain how Cosmos tries to accommodate other chains which have a different consensus algorithm.

**Peg Zones**

Typically, there are two classes of blockchains: deterministic chains and probabilistic chains.

**Deterministic chains** are ones where you can finalize the state of each block and replay the state at any point in the future (e.g., Tendermint). **Probabilistic chains** are where you have a probabilistic guarantee of determining the canonical chain based on how much of the network's weight is on the dominant fork (e.g., Bitcoin). **Hubs in Cosmos can theoretically work with both, although working with probabilistic chains is more difficult.**

This is because IBC fundamentally works only when a blockchain can guarantee finality. If the blockchain state is probabilistic, then the Hub won't be able to preserve the global invariance of each token's total amount across the zones. And as we discussed, the Hub must be able to do this if it wants to transfer tokens across Zones without double-spends as Zones transfer tokens to one another.

**Cosmos attempts to achieve interoperability with probabilistic chains via something called a “Peg Zone.”**

A Peg Zone is a blockchain that tracks the state of another blockchain. Its role is to establish finality for the probabilistic blockchain it bridges so that it can be compatible with IBC.

<figure>

![](/media/screen-shot-2019-05-13-at-10.24.06-am.png)

</figure>

Still with me? Great! There's one final (and most important) part I want to cover: **Why is interoperability among blockchains even needed?**

# Why is interoperability important?

As you know, blockchains are an immutable ledger. However, just like any other software, software used to build blockchains needs to be upgraded and iterated on over time. It's impossible to build perfect software, so changes are inevitable. How a blockchain proposes, decides, and implements changes to the underlying software protocol is called “**governance**.”

Bitcoin, for example, relies on the Bitcoin Foundation, Bitcoin core developers, miners, and users to propose and coordinate upgrades. Ethereum relies on social coordination among the Ethereum developers and user community for making such decisions.  

**Cosmos does things a little differently. Rather than having one governance mechanism for the entire network, it allows each Hub to have its own governance mechanism. **

Any stakeholder can create a proposal for a change, and validators and delegators on that Zone or Hub can vote on proposals. These proposals can include things like changes to preset system parameters (e.g., block gas limit), software upgrades, or even policy updates for how a hub would deal with theft, hacks, or bugs.

**Also, each Zone can also have its own governance mechanism.**

For example, the Cosmos Hub could choose to enforce immutability at the Hub, while each zone can set their own policies regarding how immutable it wants to be (or not). You can read more about the [how the governance process for the Cosmos Hub works here](https://twitter.com/adriana_kalpa/status/1132736339026305024?s=20).

This is powerful, and in my opinion, very underrated. _If there is one thing to walk away from this post, it's this:_

**Cosmos fundamentally believes that it's impossible to get everyone to agree on a single set of rules to govern a world-wide economic network. This is already evident in the real world where you see multiple forks of Bitcoin being created because of philosophical and political disagreement. On the other hand, in Ethereum's case, we're seeing that **[**stakeholders can't agree**](https://twitter.com/iam_preethi/status/1112776792157220864)** on the right form of governance and/or have a tendency to resist formal governance, which has been counter-productive and significantly slowing down the progress of development.**

**Cosmos tries to solve this by enabling interoperability among many sovereign blockchains, even and ESPECIALLY if they have different governance policies. Therefore, social AND economic scalability is one of the core value props of Cosmos. It give its users and developers the ultimate freedom and potential for permissionless experimentation.**

# Thanks for taking the trip through the Cosmos (network) with me!

Woah, you made it this far? That's incredible — this is the end. Congratulations! And thanks for sticking with me through this journey of Cosmos.

If you've read all the way up to here, it's safe to say that Cosmos has intrigued you. And rightly so! Or maybe you skipped some sections? Let's put your knowledge of Cosmos to the test 😉

# It's pop quiz time

1. True or False: Cosmos separates the application layer from the consensus and networking layers.
2. Which blockchain application can use Tendermint Core to power its consensus layer?
3. What are the three steps of the Cosmos consensus round?
4. Unlike Bitcoin which is probabilistic, Cosmos is \_\_\_ , which means transactions can have \_\_\_
5. Cosmos solves the “Nothing at Stake” problem by requiring validators to put up a security deposit also known as?
6. How come Tendermint light clients don't need to sync all block headers? 
7. What two actions is the Cosmos application layer responsible for?
8. Using the Cosmos SDK, what programming languages can be used to build blockchain applications?
9. How does Cosmos enable interoperability?
10. How does Cosmos handle governance?

...Okay — Pencils down!

...No cheating.

...Are you ready to see how you did?

**Here are the answers**

1. True
2. Any blockchain application.
3. Propose, Prevote, and Precommit.
4. Deterministic, Instant Finality
5. Bond
6. All current validators in Tendermint are required to vote on and finalize every block. Therefore, the state of the blockchain is deterministic. This means light clients can simply keep track of the current validator set and verify the current block based on the validators' votes without needing to download every block header in history.
7. 1. Defining and submitting the transactions that need to be added to the blockchain and 2) Subsequently updating the blockchain state after a transaction gets committed by the consensus layer.
8. Any programming language, technically.
9. Through the “Hub and Zone” model.
10. It allows each Hub to have its own governance mechanism. (Bonus: Each Zone can also have its own governance mechanism.)

How'd you fare? 

💯or 😭or 🤷‍♀️??

Cosmos is one of the most interesting and innovative projects in the blockchain space right now. As they are right now, blockchains desperately need improvements in terms of both scalability and interoperability. And Cosmos has vast potential to move things forward in the right direction.

I hope you've enjoyed this piece and taken away something useful from it. I love the concept and team behind Cosmos, and I truly believe it will pave the way for better possibilities with blockchains (else, we wouldn't have built the TruStory application as a Cosmos blockchain application).

Well, that's about it. I'm going to take a much-needed break from writing now. See you in the next post! 🤗
