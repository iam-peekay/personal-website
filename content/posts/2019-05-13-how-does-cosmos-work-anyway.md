---
template: post
title: 'How is Cosmos different from Bitcoin and Ethereum? (Part 1) '
slug: /posts/how-is-cosmos-different-from-bitcoin-and-ethereum-part1
draft: true
date: 2019-05-29T16:25:00.000Z
description: >-
  The crypto industry never really rests. It all started with the launch of
  Bitcoin in 2010. When it first came out, everyone thought Bitcoin was the holy
  grail of digital currencies. What was once believed to be impossible was now
  real: The first ever peer-to-peer (P2P) payments network. Even today, trust in
  anything remains the most elusive and rarest asset. Bitcoin circumvented this
  by creating the first-ever “trustless” system. But this was just the
  beginning. Since then, Bitcoin has become the catalyst for a much broader
  movement of crypto innovation. This has resulted in an array of new
  decentralized systems and financial primitives: Ethereum, Lightning Network,
  EOS, Tezos, Maker... The list is now endless. But one stands out from the
  rest: Cosmos.  
category: Blockchain
tags:
  - Cosmos
  - Cryptocurrency
  - Blockchain
  - Distributed systems
  - Dapps
  - Bitcoin
  - Ethereum
  - Consensus protocol
---
<figure>

![](/media/190492935.jpg)

</figure>

The crypto industry never really rests.

It all started with the launch of Bitcoin in 2010. When it first came out, everyone thought Bitcoin was the holy grail of digital currencies. What was once believed to be impossible was now real: The first ever peer-to-peer (P2P) payments network.

Even today, trust in anything remains the most elusive and rarest asset. Bitcoin circumvented this by creating the first-ever “trustless” system. But this was just the beginning.

Since then, Bitcoin has become the catalyst for a much broader movement of crypto innovation. This has resulted in an array of new decentralized systems and financial primitives: Ethereum, Lightning Network, EOS, Tezos, Maker... The list is now endless.

**But one stands out from the rest: Cosmos**

When it comes to blockchains, [Cosmos](https://cosmos.network/) is the “new kid on the block.” While it's been around for some time now, the team has been slowly building it out in the background to get it right. It only recently launched publicly.

So it's no surprise that many people look at Cosmos and don't understand it. A quick glance only leaves them with more questions than answers: 

**_What is Cosmos?_**

**_How does it work?_**

**_How does it compare to Bitcoin or Ethereum?_**

**_What makes it unique?_**

I've known the Cosmos team for almost two years now. When I first heard about what they were doing, I was honestly just as clueless as others about its concept.

But once I took a deeper look into it, I began to appreciate it, a lot. And I'm not just saying this for dramatic effect.

**I was so enamored by Cosmos that we decided to build the TruStory application as a Cosmos blockchain application.** _(Note: I'll write about this decision more extensively in a future post)_

With that being said, there's still a ton of confusion surrounding Cosmos. So I've decided to dedicate an entire post to it. I want to give readers a high-level understanding of what it is and the purpose it's trying to serve in the crypto world.

Are you ready to begin? Clear your mind. Put your thinking caps on. And buckle up. It's going to be a wild ride!

# What is Cosmos?

Here's how Cosmos defines itself:

**_“A decentralized network of independent parallel blockchains each powered by a BFT consensus algorithm like Tendermint consensus.”_**

Woah, that's more than a mouthful! Let's break this definition down into easy-to-digest pieces.

**Decentralized network of independent parallel blockchains**

You're probably familiar with what a blockchain is by now, right? Of course you are! Still, let's do a quick refresher: 

In simple terms, a blockchain is a database that's replicated across many computers. The database maintains the same state across each computer. In other words, every computer has the same exact data. Together, all of these computers form what is known as a “blockchain network.”

<figure>

![](/media/screen-shot-2019-05-13-at-9.14.52-am.png "Cosmos")

</figure>

Bitcoin and Ethereum are both blockchains. And Cosmos is a network of many of these blockchains operating in parallel with one another. 

<figure>

![](/media/screen-shot-2019-05-13-at-9.15.18-am.png)

</figure>

If this doesn't make complete sense, it would be prudent for you to read up some more on the [basics of blockchain](https://hackernoon.com/wtf-is-the-blockchain-1da89ba19348) before going further.

**“Each blockchain is powered by a BFT consensus algorithm”**

BFT is short for “Byzantine Fault-Tolerant.” A blockchain that's Byzantine Fault-Tolerant can guarantee certain properties like “safety” and “liveness” despite having some computers in the network which are faulty and/or malicious (i.e., Byzantine). Safety and liveness ensure the blockchain can successfully maintain the same state across every node in the network.

Side Note: If you need more insight into what safety and liveness are, check out my [post on distributed consensus](https://www.preethikasireddy.com/posts/lets-take-a-crack-at-understanding-distributed-consensus/).

A “BFT consensus algorithm,” therefore, is the algorithm which defines how these computers communicate and coordinate to guarantee that the blockchain is Byzantine Fault-Tolerant. Every blockchain in the Cosmos network is powered by a BFT consensus algorithm.

Bitcoin and Ethereum are technically not BFT. So they don't fit the definition of a blockchain that can exist in the Cosmos network. (It's worth noting that, although they're not BFT, blockchains like Bitcoin and Ethereum can still be part of the Cosmos network. It just involves some extra steps and complexity. If this sounds confusing, don't worry — we'll delve more into this later.)

Side Note: If you're still unsure about what BFT means, I wrote extensively about it in [this post](https://www.preethikasireddy.com/posts/lets-take-a-crack-at-understanding-distributed-consensus/). 

**“Tendermint consensus”**

Tendermint is a BFT consensus algorithm that's built by the developers behind Cosmos. Blockchains in the Cosmos network can be powered by Tendermint or any other consensus algorithm which is BFT. We'll learn more about Tendermint later in this post.

In short, the Cosmos network is an ecosystem of independent Byzantine Fault-Tolerant blockchains that are operating in parallel to each other. These blockchains can operate _**independent**_ of one another AND _**interoperate**_ with each other. 

So now you may be wondering, _“Why would blockchains need to ever interoperate with each other?”_

That is a great question! We'll get into this soon. But first, let's brush up on blockchain architecture.

# A brief background on blockchain architecture

Before we dive into how blockchains in the Cosmos ecosystem work and interoperate, let's take a step back and review the basics of blockchain architecture.

As we discussed earlier, a blockchain is a database that's replicated across many computers and maintains the same data on each computer. This type of distributed system is also known as a “replicated state machine.”

A **replicated state machine** is a deterministic state machine that is replicated across many computers but functions as a single state machine. 

Sounds familiar, right? That's because it is! Revisit our blockchain definition above and replace “database” with “state machine” and “data” with “state” to see what I mean.

<figure>

![](/media/screen-shot-2019-05-13-at-9.20.46-am.png)

</figure>

**_“Deterministic”_** simply means that, given a particular input, the machine will always produce the same output. In the context of a blockchain, it means if you start at a given state and replay the same sequence of transactions, you will always end up with the same final state.

Replicated state machines start at a certain state. Each new valid transaction causes the system's state to transition to the next one (this is just like what happens in a database: if you update some entry, the database is now in a new state with the updated data entry). 

<figure>

![](/media/screen-shot-2019-05-13-at-9.22.41-am.png)

</figure>

A replicated state machine has three conceptual layers:

**1) Application layer**

This layer is responsible for defining the state transitions and updating the state of the state machine after a transaction occurs.

**2) Networking layer**

This layer propagates transactions that happen on one state machine across all other state machines in the network.

**3) Consensus layer**

This layer comprises the algorithm which is responsible for ensuring the state stored on every state machine is the same after a transaction happens (i.e., machines can't fake transactions that never existed).

**3a) Sybil resistance layer**

A replicated state machine that's trying to operate in a decentralized public network also needs a fourth layer known as the “Sybil resistance layer.” This layer makes sure no single state machine can subvert the network. Without it, state machines could manipulate the state by creating many pseudonymous identities to gain a disproportionately large influence (i.e., a [Sybil attack](https://en.wikipedia.org/wiki/Sybil_attack)).

<figure>

![](/media/screen-shot-2019-05-13-at-9.24.19-am.png)

</figure>

In sum, the application layer is responsible for defining the state and managing state transitions. The networking and consensus layers are responsible for keeping the state on each machine consistent (i.e., making sure the data in every database in the network is the same). And the Sybil resistance layer is (obviously) responsible for avoiding Sybil attacks.

Now, let's look at how these layers are applied in the context of Bitcoin and Ethereum.

## Bitcoin's layers

**1) Application layer**

Bitcoin's primary application is P2P transactions. Bitcoin uses [Script](https://en.bitcoin.it/wiki/Script) (a simple stack-based and non-Turing-complete language) to define and execute transactions. When a sender sends Bitcoins to a recipient via a transaction, the instructions for how the recipient can gain access to these Bitcoins are encoded using Script. Script has a set of opcodes, or commands, which the sender uses to encode the details necessary for the recipient to later spend the Bitcoins

**2) Networking layer**

When a sender sends Bitcoins to a recipient, that transaction must be broadcast to the network so miners can include it in a block. Bitcoin uses a “gossip protocol” to ensure that every node informs all of its peers about any new block or transaction it receives. A gossip protocol is a P2P protocol that makes sure messages are communicated between all nodes. All nodes in Bitcoin network will immediately forward a valid transaction it has not seen before to all other nodes to which it is connected. The transaction is able to propagates out across the peer-to-peer network to a large percentage of the nodes within seconds.

**3) Consensus layer**

After a transaction is propagated to the network, it needs to be added to the blockchain. The process by which transactions are verified and included in a block is known as the “Nakamoto Consensus.” How Nakamoto Consensus works is a whole other rabbit hole on its own. If you want to dive into it, here is a [great explainer](https://blockonomi.com/nakamoto-consensus/) to get you started. 

**3a) Sybil resistance layer**

Nakamoto Consensus relies on “Proof of Work” to prevent Sybil attacks. Basically, the computation effort required to mine a new block makes Bitcoin's consensus protocol inherently Sybil-resistant. Since miners need substantial computing power to generate the next block, there's really no way for them to “fake” multiple identities without expending a ton of computing power (and money).

<figure>

![](/media/screen-shot-2019-05-13-at-9.24.28-am.png)

</figure>

## Ethereum's layers

**1) Application layer**

Unlike Bitcoin, Ethereum is designed to enable decentralized applications. Ethereum has a high-level language (i.e., Solidity) which enables developers to code smart contracts that define the functionality of the decentralized application. The EVM (Ethereum Virtual Machine) is the core of the application layer for Ethereum. It compiles smart contract code into byte code using an EVM compiler, which is then uploaded on the underlying blockchain. The EVM then executes these smart contracts. All nodes in the Ethereum network run the EVM.

**2) Networking layer**

Similar to Bitcoin, Ethereum also uses the gossip protocol to enable nodes to communicate messages and transactions with their peers.

**3) Consensus layer**

To achieve consensus, Ethereum uses “[Ethash](https://en.wikipedia.org/wiki/Ethash)” which is similar to Nakamoto Consensus but with some key differences. If you need a primer on how Ethereum's consensus algorithm works, check out this [previous post of mine](https://www.preethikasireddy.com/posts/how-does-ethereum-work-anyway/).

**3a) Sybil resistance layer**

Just like Bitcoin, Ethash is inherently Sybil resistant because it relies on Proof of Work (as of now).

# Building apps with Bitcoin and Ethereum

I hope this has given you some clarity on blockchain architectures. When we discuss blockchains in the context of Bitcoin or Ethereum, we're referring to all of these layers combined. This is because Bitcoin and Ethereum are built as one unit.

You cannot separate Ethereum's smart contracts from its underlying Ethash consensus layer, so there's no point in talking about either topic in isolation. The same goes for Bitcoin — you can't have Bitcoin transactions without using Nakamoto Consensus and Proof of Work.

**On the other hand, Cosmos takes a slightly different approach: It separates the application layer from the consensus and networking layers.**

Since Cosmos is aiming to build a network of blockchains, this makes sense; each blockchain is independent and has its own needs and requirements (i.e., its own application). A one-size-fits-all approach for each blockchain application doesn't work in this case. Let's investigate why with a few examples.

**An example of Bitcoin's limitations**

Pretend we are trying to build a money application. A simple stack-based scripting language like Bitcoin Scrypt makes the most sense in this scenario. Not only is the Bitcoin scripting language great for enabling transfer of value from one address to another, but it's also simple and non-Turing-complete.

As a result, it's not as susceptible to various types of security vulnerabilities that could plague a Turing-complete programming language. This is exactly what we want when dealing with money and store of value. But this simplicity has its limits.

Trying to do anything more elaborate (e.g., decentralized prediction markets) would be incredibly difficult. The Bitcoin scripting language is restrained in the complexity of code it can execute and not exactly user-friendly. To make matters worse, Bitcoin blockchain transactions are slow to process (~7 transactions per second). **So it doesn't make sense to build applications which require high transaction throughput directly on the Bitcoin blockchain.**

**An example of Ethereum's limitations**

Conversely, Ethereum's EVM and smart contract language (Solidity) were designed to enable much more flexible applications. Solidity is Turing-complete, so it can execute code of arbitrary algorithmic complexity... in theory.

In practice, it's actually been proven to be quite difficult to do this since Solidity is error-prone and vulnerable to security attacks. This is the exact opposite of what you want for an application that's dealing with value transfer. In this scenario, security is paramount. 

Moreover, smart contracts are hard to upgrade; this makes iterative development incredibly difficult. You ship once and just pray it all works! And like Bitcoin, Ethereum transactions are slow (~15 transactions per second) — so it doesn't make sense to build applications that require frequent transactions.

Cosmos was built to serve this need, albeit it makes some huge tradeoffs to do so. And we're going to dive into exactly what this means next. But first, we must understand how the three layers of a blockchain work in Cosmos.

# The blockchain architecture behind Cosmos

To start things off, let's begin with the consensus layer. Doing so will give us a better understanding of how building applications with Cosmos differs from making one with Bitcoin or Ethereum.

## The Cosmos consensus layer

Blockchains in the Cosmos network use the Tendermint consensus algorithm. Tendermint is an open-source project that was born in 2014 _“to address the speed, scalability, and environmental issues of Bitcoin's proof-of-work consensus algorithm.”_

Tendermint is an _“application-agnostic consensus engine.”_ Basically, this means any blockchain application can use it to power its consensus layer. The algorithm is Byzantine Fault-Tolerant and uses Proof of Stake as its Sybil resistance mechanism. 

That's a _whole lot of jargon_! Let's break it down.

## How Tendermint consensus works

Recall that a consensus algorithm is responsible for making sure the state stored on every state machine is the same after a transaction occurs. The Tendermint consensus algorithm, therefore, defines the rules for how all the nodes within a blockchain network agree on the next block.

Let's take a look at the various factors involved and how the rules play out. 

**Validators**

The nodes that are responsible for helping achieve consensus are called “validators.” A validator is any network node that willingly participates in helping the network achieve consensus and receives. For doing so, validators receive fees and a block reward as payment. Tendermint aggregates votes from these validators to determine the correct next block.

**Sybil resistance via Staking**

Each validator has its own voting power which is used to weigh the votes. The voting power is typically determined when the blockchain first launches (at genesis) or by the blockchain through some logic that the application developer decides on. The typical approach to determine voting power is by the amount of tokens validators lock up in the system as collateral. This stake is known as the “bond.”

**Consensus**

By following protocol rules, validators come to a consensus on every block in rounds. Each round is composed of three steps **(Propose, Prevote, and Precommit)**, along with two contingent steps **Commit** and **NewHeight**. At a high level, here are the protocol rules that validators use to come to a consensus on what block to add to the next height:

1. First, we have the **Propose** step. This is where a designated proposer proposes a block. The proposer for a round is chosen deterministically in proportion to their voting power from the ordered list of validators.
2. We then enter the **Prevote** step, where each validator broadcasts its Prevote vote.
3. When more than 2/3 of voting power Prevote for a particular block in a round, this is known as a “**polka**.” Once a polka is achieved, it moves on to the next step.
4. In the **Precommit** step, each validator broadcasts its Precommit vote. 
   * If 2/3 of voting power Precommits for a particular block in a round, the block moves to the **Commit** step. This is where we add the block to the blockchain and increment the block height to a **NewHeight**. Every time a new block is added to the blockchain, the “height” of the blockchain increases by 1.
   * Otherwise, we either return to the Prevote or Precommit step.

Note that there **may be more than one round** required to commit a block at any given block height. There are various reasons for this. Let's cover a few examples:

* The designated “proposer” may have been offline when they were supposed to propose the next block.
* The block proposed was not valid according to some pre-defined criteria.
* Tendermint relies on a timeout to ensure the blockchain makes progress without halting. If more than 2/3 of Prevotes for the proposed block were not received before the timeout, a new validator gets to propose a block for that height.

The full details of the protocol can be found [here](https://github.com/tendermint/tendermint/wiki/Byzantine-Consensus-Algorithm). 

<figure>

![](/media/screen-shot-2019-05-13-at-9.39.35-am.png)

</figure>

Overall, Tendermint takes a different approach from Bitcoin's Nakamoto Consensus and Ethereum's Ethash. Let's highlight some of the biggest contrasts:

**Deterministic vs. Probabilistic**

Unlike Nakamoto consensus and Ethash which is probabilistic, Tendermint is deterministic. This means each block must be finalized; it's not sufficient to have a high probability of a block being finalized, as in Bitcoin.

Recall that in Nakamoto Consensus, blocks are “not finalized” — instead, we have a high probability of a block being finalized if we know that it exists on the “[longest chain](https://blockonomi.com/nakamoto-consensus/).” This is why we typically wait for “[6 confirmations](https://en.bitcoin.it/wiki/Confirmation)” before we know a Bitcoin transaction is confirmed. 

<figure>

![](/media/screen-shot-2019-05-24-at-9.45.41-am.png)

</figure>

In Tendermint, blocks are confirmed immediately after validators successfully vote and commit a block.

<figure>

![](/media/screen-shot-2019-05-13-at-9.42.40-am.png)

</figure>

**Fixed vs. Variable**

Nakamoto Consensus and Ethash allow miners to choose to participate or not participate in mining at any time and doesn't require miners to be known ahead of time. Conversely, Tendermint consensus requires there to be a fixed and known set of validators, where each validator is identified by their public key.

**Leader vs. No leader**

Nakamoto Consensus and Ethash have no designated leader to propose the next block (i.e., any miner can mine the next block). On the other hand, Tendermint chooses a leader, or proposer, who is responsible for proposing the next block.

**Explicit timeouts vs. Implicit timeouts**

Unlike Nakamoto Consensus and Ethash, which don't use timeouts to ensure that blocks are being produced by miners, Tendermint uses an explicit timeout to ensure the blockchain makes progress without halting.

**100s of validators vs. 1000s of validators**

The Tendermint consensus algorithm follows a traditional approach which relies on all validators to communicate with one another to reach consensus. Because of the communication overhead, it does not scale to 1000s of validators like Bitcoin or Ethereum, which can have an unlimited number of validators. Tendermint works when there are 100s of validators.

Therefore, one of the downsides of a blockchain built using Tendermint is that, unlike Bitcoin or Ethereum, it requires the validators to be known ahead of time and doesn't allow for miners to come and go as they please.

Besides this, it also requires the system to maintain some notion of time, which is known to be a complex problem in theory. Although in practice, Tendermint has proven this can be done reasonably well if you use the timestamp aggregates of each node.

In this regard, one could argue that Tendermint consensus protocol is “less decentralized” than Bitcoin because there are fewer validators, and they must be known ahead of time.

But decentralization is in the eyes of the beholder. Okay, cleverness aside, what do I mean?

**Well, decentralization is a means to an end, not a goal unto itself.** I don't like having conversations about decentralization without first understanding what the underlying purpose of the decentralization is.

I think there are plenty of cases (in fact, most cases) where Tendermint's conservative approach of having a fixed, known set of validators is enough as long as the cost to subvert the system is reasonable high and there's a mechanism to detect and punish bad actors in the system.

If we revisit our prediction markets example, I could easily make the case that a decentralized prediction market application doesn't need the level of decentralization that an application like sound money or store of value would need. Having 10, 20, or 100 validators is good enough.

At [TruStory](https://www.trustory.io/), for example, we're building our back-end application logic using the Cosmos SDK. Therefore, the state and logic about claims and arguments live on a blockchain and are open and transparent. Our front-end, on the other hand, is proprietary. This gives users transparency over the data layer and allows users to share in the ownership and governance of the network. They can vote on new features, vote out bad actors, and curate the network to their liking, both at the user and infrastructure level. It also gives developers the ability to inspect and build their own tools and services on top of the back-end blockchain logic. 

Therefore, having 10s or 100s of validators who are running and validating our transactions gives us reasonably enough security while giving both users and developers the transparency, ownership and accountability they need.

If you can get on-board with the tradeoffs that Tendermint makes in having a fixed and known validator set, then you'll appreciate some of the neat properties it offers which would be impossible otherwise:

**Safety and liveness**

Tendermint's protocol guarantees safety and liveness, assuming more than 2/3 of the validators' voting power is not Byzantine (i.e., malicious). In other words, if less than 1/3 of the network voting power is Byzantine, the protocol can guarantee safety and liveness (i.e., validators will never commit conflicting blocks at the same height and the blockchain continues to make progress).

**High performance**

Tendermint consensus can have as low as one-second block times and handle up to thousands of transactions per second, making it more suitable for applications that have a high transaction frequency.

**Instant finality**

In the blockchain world, finality means that once a block is committed, we deterministically know that state of the blockchain up until that block.

As we mentioned earlier, Nakamoto Consensus is probabilistic, so it doesn't have this finality guarantee. Essentially, you can only guarantee that a transaction is included on the canonical Bitcoin fork based on the probability of the majority of miners continuing to mine on that fork.

Tendermint, on the other hand, requires validators to vote on and finalize every block. So basically, as long as more than 2/3 of validators are not Byzantine, transactions have “instant finality” — users know their transactions are finalized as soon as a block is created.

**Accountability**

Tendermint uses Proof of Stake as its Sybil resistance mechanism; requiring validators to stake tokens (i.e., their “bond”) ensures that nodes are not creating multiple fake accounts. 

Proof of Stake is more energy efficient than Proof of Work (where the proof is in the computing power miners expend to solve the next block hash). But it has the inherent “[Nothing at Stake](https://discourse.trustory.io/t/best-trustories-of-the-week-6/455/2?u=preethi)” problem which makes it easy for validators to cheat.

Tendermint solves the Nothing at Stake problem by punishing validators who violate the rules of the protocol (e.g., voting for conflicting blocks and broadcasting unjustified votes) by slashing their bond. More specifically, the protocol has **“locking rules”** for what each validator is allowed to do when it is voting for particular block. For example, once a validator precommits a block, it is “locked” on that block. At that point, the validator can only unlock and precommit for a new block if there is a polka for that different block in a later round. If these locking rules are violated, validators are penalized by having their **bond slashed.**

**Easier light clients**

Light clients are nodes which are “lighter” than full nodes because they don't store the full state of the blockchain. Instead, they only store the block headers. Most nodes don't need to store the full state of the blockchain unless they are mining nodes or validating nodes that are responsible for validating and producing new blocks.

Instead of downloading and storing the full chain, light clients only download the block headers from the genesis block to the current head. The block headers give light clients enough information to easily verify that certain transactions are valid when needed but still store way less data than a full node. 

<figure>

![](/media/screen-shot-2019-05-13-at-9.46.30-am.png)

</figure>

**The cool thing with Tendermint-based blockchains is that light clients don't even need to sync all block headers and can get away with only periodically downloading block headers.**

As we discussed before, this is because all validators in Tendermint are required to vote on and finalize every block, unlike Bitcoin and Ethereum. Since there is finality on every block, a light client simply needs to keep tracks of changes in the validator set. As long it knows the latest validator set, the light client can pull the latest block header it is aware of and verify that there are >⅔ PreCommits from the validators for that block.

<figure>

![](/media/screen-shot-2019-05-24-at-9.52.44-am.png)

</figure>

## The Cosmos networking layer

As we described above, consensus in Tendermint is achieved by validators voting in rounds. In order to do this, nodes must be able to communicate and pass messages to each other to ensure everyone in the network is seeing the same data.

**So like Bitcoin and Ethereum, Tendermint uses the gossop protocol to bring peers up to speed on the most recent state of the blockchain.**

A node in the network doesn't have to be a validator to play a role in the networking part of the consensus process. For example, a node can be a light client or a full node which doesn't want to participate as a validator. These are known as “non-validator nodes.” 

Validator and non-validator nodes are responsible for sending data to their peers (e.g., proposals, blocks, and votes) in order to make sure all nodes hear messages and transactions being generated in the system.

## The Cosmos application layer

So far, we've learned that Tendermint Core consists of the networking layer and the consensus layer. The networking layer is responsible for propagating transactions across all computers in the network, and the Tendermint consensus algorithm ensures the state on every state machine is the same (i.e., the blockchain is consistent across all nodes).

But just what transactions are we propagating and validating? Well, this is where the application layer comes in.

**The Cosmos application layer is responsible for:**

* **defining and submitting the transactions that need to be added to the blockchain.**
* **subsequently updating the blockchain state after a transaction gets committed by the consensus layer.**

</figure>

![](/media/screen-shot-2019-05-13-at-9.55.30-am.png)

</figure>

**Building applications using the Cosmos SDK**

The [Cosmos SDK ](https://github.com/cosmos/cosmos-sdk)provides a framework for building the application layer. It's **like Ruby-on-Rails for blockchains.** Ruby-on-Rails is a framework designed to make programming web applications easier by providing developers with default structures for building them. Similarly, the **Cosmos SDK gives developers a framework to build secure blockchain applications on top of Tendermint Core.**

Remember, a blockchain is simply a state machine where the same state is replicated on every node. Cosmos SDK lets you build the actual state machine that you're replicating across many nodes. The SDK gives you the functionality and tools needed to define the state of your application, transaction types, and state-transition functions.

<figure>

![](/media/screen-shot-2019-05-13-at-9.57.40-am.png)

</figure>

**How a Cosmos application works (at a high-level)**

The Cosmos SDK provides a “**multistore**” for defining and maintaining the state of the application's state machine. A multistore is a way to divide the state of your application into distinct compartments. Each of these stores is managed by its own “module.”

The power of the Cosmos SDK lies in this unique type of **modularity**, where each module defines and maintains a subset of the state that makes up the overall blockchain application. Here are a few examples:

* **Bank module**: Lets you have tokens and token transfers within your application.
* **Auth module**: Lets you create and manage accounts and signatures.
* **Staking and Slashing modules**: Lets you encode the rules for building a Proof-of-Stake consensus mechanism.

**Each module is essentially a little state machine that can be combined with one another to generate the overall state machine.**

<figure>

![](/media/screen-shot-2019-05-13-at-9.59.48-am.png)

</figure>

The application developer defines the subset of state handled by each module and the custom logic that modifies the state. In addition to the modules the Cosmos SDK provides, developers can also access other third-party modules.

This **plug-and-play model for building blockchain applications is incredibly powerful** because of the flexibility it affords developers to only use the modules it needs, whether it's a module provided by the SDK itself or an external module. 

**How the Application layer interfaces with the Consensus layer**

Transactions that happen on the application layer are communicated to the Tendermint consensus and networking layer through an interface called the [Application Blockchain Interface](https://github.com/tendermint/tendermint/tree/master/abci) (ABCI).

<figure>

![](/media/screen-shot-2019-05-13-at-10.03.31-am.png)

</figure>

The ABCI is a socket protocol that connects Tendermint Core (consensus + networks) to the application. It can be wrapped in any programming language, which means blockchain applications built using the Cosmos SDK can technically be programmed in _any_ language, not just the one that the underlying Tendermint consensus and networking layer is written in.

<figure>

![](/media/screen-shot-2019-05-13-at-10.05.52-am.png)

</figure>

_Note: The current version of the Cosmos SDK primarily supports Golang (more languages will be supported in the future). _

**In summary, the Cosmos SDK allows developers to build decentralized applications on top of Tendermint Core. This application can theoretically be built in any language and connected to the Tendermint consensus engine via the ABCI.**

By separating the networking and consensus layer (Tendermint Core) from the application layer (Cosmos SDK, ABCI), developers have much more **flexibility** to build various types of applications. And because the Cosmos SDK allows these applications to be written in any programming language (e.g. Golang), it feels more like traditional application development.

This is a stark contrast to building an application on Ethereum, which requires developers to learn a new language and deal with the constraints and [flaws](https://hackernoon.com/solidity-pitfalls-and-how-to-avoid-them-24ba87735c7a) of Solidity. Moreover, Golang has much better **tooling** than Solidity does, which makes the developer experience 10x better. 

**Besides this, Ethereum apps all have to operate on top of one single network.** The upside of this is that apps built on Ethereum share the same standards and automatically have [massive synergies](https://www.preethikasireddy.com/posts/the-synergies-gained-from-building-on-ethereums-decentralized-app-ecosystem/). The downside is that all apps built on Ethereum share the same consensus layer and are bogged down by the weight of every new application that gets built on top of it. Moreover, **the network as a whole has to be governed as one giant unit, which makes it difficult to socially scale because of differing philosophies and ideologies of how the network should be governed.**

Instead of having this restriction, **Cosmos blockchain applications each operate as their own independent network with their own consensus layer and governance layer.**

This means developers have the freedom to determine how permissioned or permissionless they want their consensus layer to be. They can choose whether they want a public set of validators who are elected based on the token quantity they have at stake or a private set of validators who are pre-authorized to be validators. This freedom to customize the rules that determine a validator set means blockchains have more **sovereignty over their chain.**

**Of course, there is a tradeoff for this advantage: Each blockchain application in the Cosmos network has to bootstrap their own validators, community, and economy. And unlike Ethereum, they can't simply piggyback off the global set of validators, community, and economy.**

<figure>

![](/media/screen-shot-2019-05-13-at-10.10.45-am.png)

</figure>

# Conclusion

In this first post, we talked about how the architecture of a single blockchain on Cosmos differs from the Bitcoin and Ethereum blockchain. The architecture enables blockchain applications to have **sovereignty over their chain**. 

In part 2, we'll dive into understanding how sovereign independent blockchains in the Cosmos network **interoperating** with one another, and more importantly, answer the question of **"_Why would blockchains need to ever interoperate with each other?"_**

Stay tuned 😊
