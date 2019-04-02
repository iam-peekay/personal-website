---
template: post
title: The Great Programming Jargon Bake-off
slug: /posts/programming-mental-models/
draft: false
date: 2016-12-20T16:29:43.133Z
description: >-
  Terminology like this is sprinkled throughout programming blog posts,
  conference talks, papers, and text books. But don’t be turned off by this
  jargon. Let’s jump right in and break some of these…
category: Coding
tags:
  - Programming
  - Web Development
  - Tech
  - Learning To Code
  - Technology
---
<figure>

![](/media/programming-mental-models-0.jpeg)

</figure>

Imperative vs. Declarative. Pure vs. Impure. Static vs. Dynamic.

Terminology like this is sprinkled throughout programming blog posts, conference talks, papers, and text books.

But don’t be turned off by this jargon. Let’s jump right in and break some of these concepts down, so you can understand what all these developers around you are talking about.

### Static vs. Dynamic Typing

This is about when a type information is acquired — either at compile time or at runtime.

You can use this type information to detect type errors. A type error is when a value is not of the expected type.

#### Static Type Checking

The process of verifying the type safety of a program based on analysis of a program’s source code. In other words, type checking happens at compile time, allowing type errors to be detected sooner.

<figure>

![](/media/programming-mental-models-1.png)

</figure>

#### Dynamic Type Checking

The process of verifying the type safety of a program at runtime. With dynamic type checking, type errors occur at runtime.

<figure>

![](/media/programming-mental-models-2.png)

</figure>

### Strong vs. Weak typing

It’s important to note strong vs. weak typing doesn’t have a universally-agreed-upon technical meaning. For example, even though Java is statically typed, every time you use reflection or a cast, you’re deferring the type check to run time.

Similarly, most strongly-typed languages will still automatically convert between integers and floats. Hence, you should avoid using these terms because calling a type system “strong” or “weak” by itself does not communicate very much.

#### Strongly Typed

In a strongly typed language, the type of a construct does not change — an `int` is always an `int`, and trying to use it as a `string` will result in an error.

<figure>

![](/media/programming-mental-models-3.png)

</figure>

#### Weakly typed

Weak typing means that the type of a construct can change depending on context. For example, in a weakly-typed language, the string “123” may be treated as the number 123 if you add another number to it.

It generally means the type system can be subverted (invalidating any guarantees) because you can cast a value of one type to another.

<figure>

![](/media/programming-mental-models-4.png)

</figure>

### Mutable vs. Immutable data

#### Immutable data

When an object is not modifiable after it has been created, you can say it’s “immutable” which is a fancy word for “unchangable.” This means you’ll instead allocate a new value for every change.

<figure>

![](/media/programming-mental-models-5.png)

</figure>

#### Mutable data

When you can modify an object after its creation, it’s “mutable.” When you have a reference to a mutable object, for instance, the contents of the object can change.

<figure>

![](/media/programming-mental-models-6.png)

</figure>

### Pure vs. Impure functions

#### Pure functions

A pure function has two qualities:

1. It relies only on the input provided — and not on any external state that may change during its evaluation or in between calls.
2. It doesn’t cause any semantically observable side effects, such as modifying a global object or a parameter passed by reference.

<figure>

![](/media/programming-mental-models-7.png)

</figure>

#### Impure functions

Any function that does not meet those two requirements for a pure function is “impure.”

<figure>

![](/media/programming-mental-models-8.png)

</figure>

### Lazy Evaluation vs. Eager Evaluation

#### Lazy evaluation

Lazy evaluation does not evaluate function arguments unless their values are required to evaluate the function call itself.

In other words, expressions are only evaluated when evaluating another expression which are dependent on the current expression.

Laziness allows programs to calculate data structures that are potentially _infinite_ without crashing.

<figure>

![](/media/programming-mental-models-9.png)

</figure>

#### Eager evaluation

Eager evaluation — also known as strict evaluation — always fully evaluates function arguments before invoking the function. In other words, an expression is evaluated as soon as it is bound to a variable.

<figure>

![](/media/programming-mental-models-10.png)

</figure>

### Declarative vs. Imperative

#### Declarative programming

Declarative programs express a set of operations without revealing how they’re implemented, or how data flows through them. They focus on “what” the program should accomplish (by using expressions to describe the logic) rather than “how” the program should achieve the result.

One example of declarative programming is SQL. SQL queries are composed of statements that describe what the outcome of a query should look like, while abstracting over the internal process for how the data is retrieved:

```
SELECT EMP_ID, FIRST_NAME, LAST_NAME  
FROM EMPLOYEES  
WHERE CITY = ‘SAN FRANCISCO’  
ORDER BY EMP_ID;
```

Here’s an example of declarative code:

<figure>

![](/media/programming-mental-models-11.png)

</figure>

#### Imperative programming

Imperative programming focuses on describing how a program should achieve a result by using statements that specify control flow or state changes. It uses a sequence of statements to compute a result.

Here’s an example of imperative code:

<figure>

![](/media/programming-mental-models-12.png)

</figure>

### Stateful vs. Stateless

A state is a sequence of values calculated progressively, which contains the intermediate results of a computation.

#### Stateful

Stateful programs have some mechanism to keep track of and update state. They have some memory of the past, and remember previous transactions that may affect the current transaction.

<figure>

![](/media/programming-mental-models-13.png)

</figure>

#### Stateless

Stateless programs, on the other hand, doesn’t keep track of state. There’s no memory of the past. Every transaction is performed as if it were being done for the very first time. Stateless programs will give the same response to the same request, function, or method call — every single time.

<figure>

![](/media/programming-mental-models-14.png)

</figure>

### Functional vs. Object-Oriented

#### Functional

Functional programming is a paradigm that places a major emphasis on the use of functions. The goal of functional programming is to use functions to abstract control flows and operations on data, and to avoid side effects.

So functional programming uses pure functions and avoids mutable data, which in turn provides _referential transparency._

A function has referential transparency when you can freely replace an expression with its value and not change the behavior of the program. Said a bit differently: for a given input, it always returns the same results.

Some examples languages that emphasize functional programming include Haskell, Lisp, Clojure, and Elm. But you can use functional programming concepts in most languages, including JavaScript.

#### Object Oriented

The Object Oriented programming paradigm places major emphasis on the use of objects. This results in programs that are made out of objects that interact with one another. These objects can contain data (in the form of fields or attributes) and behavior (in the form of methods).

It’s a style of partitioning (or encapsulating) the state of a program via objects to make analyzing the effect of changes tractable \[1].

Moreoever, object-oriented programs uses inheritance and/or composition as their main mechanisms for code reuse. Inheritance means that a new class can be defined in terms of existing classes by specifying just how the new class is different. It represents an “is-a” relationship (e.g. a Bird class which extends an Animal class). Composition, on the other hand, is when classes contain instances of other classes that implement the desired functionality. It represents a “has a” relationship (e.g. a Bird class has an instance of a Wing class as it’s member).

Polymorphism is also an important mechanism for code reuse in object oriented programming. It’s when a language can process objects differently depending on their data type or class.

Some examples languages that emphasize object oriented programming include Java, C++, Ruby. Again, you can apply these concepts in most languages, including JavaScript.

<figure>

![](/media/programming-mental-models-15.png)

</figure>

### Deterministic vs. Nondeterministic

#### Deterministic

Deterministic programs always return the same result any time they’re called with a specific set of input values and the same given state.

<figure>

![](/media/programming-mental-models-16.png)

</figure>

#### Nondeterministic

Nondeterministic programs may return different results each time they’re called, even with the same specific set of input values and initial state.

Nondeterminism is a property of any concurrent system — that is, any system where multiple tasks can happen at the same time by running on different threads. A concurrent algorithm that is mutating state might perform differently on each time, depending upon which thread the scheduler decides to execute.

For example:

```
declare X  
thread X=1 end  
thread X=2 end
```

The execution order of the two threads is not fixed. We don’t know whether X will be bound to 1 or 2. The system will choose during the program’s execution, and it’s free to choose which thread to execute first.

Another example of non-determinism:

<figure>

![](/media/programming-mental-models-17.png)

</figure>

### Phew! We’re done.

As always, your feedback and input is really important to me. I read and consider every single comment, so please don’t shy away from responding!

Finally, you can also check out the [Prezi presentation](http://prezi.com/fftgbgltl-6u/?utm_campaign=share&utm_medium=copy&rc=ex0share) I built for this article.

\[1] Thank you to [Kent Beck](https://medium.com/u/db2690bcb10e) for his input on this.
