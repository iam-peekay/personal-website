---
template: post
title: >-
  Why use static types in JavaScript? (A 4-part primer on static typing with
  Flow)
slug: /posts/why-use-static-types-in-javascript-part-1/
draft: false
date: 2016-12-08T17:46:02.133Z
description: >-
  As a JavaScript developer, you can code all day long without encountering any
  static types. So why bother learning about them? Well it turns out learning
  types isn’t just an exercise in…
category: Coding
tags:
  - JavaScript
  - Programming
  - Flowtype
  - Computer Science
  - Web Development
---

### Why use static types in JavaScript? (A 4-part primer on static typing with Flow)

<figure>

![](/media/why-use-static-types-in-javascript-part-1-0.jpeg)

<figcaption><a href="http://anglescomic.blogspot.com" class="figcaption-link">Image credit</a></figcaption></figure>

As a JavaScript developer, you can code all day long without encountering any static types. So why bother learning about them?

Well it turns out learning types isn’t just an exercise in mind-expansion. If you’re willing to invest some time in learning about static types’ advantages, disadvantages, and use cases, it could help your programming immensely.

Interested? Well you’re in luck — that’s what the rest of this four-part series is about.

### First, a definition

The quickest way to understand static types is to contrast them with dynamic types. A language with static types is referred to as a **statically-typed language**. On the other hand, a language with dynamic types is referred to as a **dynamically-typed** language.

The core difference is that **statically-typed** languages perform type checking at **compile time**, while **dynamically-typed** languages perform type checking at **runtime**.

This leaves one more concept for you to tackle: what does “**type-checking”** mean?

To explain, let’s look at types in Java versus Javascript.

**“Types”** refers to the type of data being defined.

For example, in Java if you define a `boolean` as:  
  
`boolean result = true;`

This has a correct type, because the `boolean` annotation matches the value given to `result`, as opposed to an integer or anything else.

On the other hand, if you tried to declare:  
  
`boolean result = 123;`

…this would fail to compile because it has an incorrect type. It explicitly marks `result` as a `boolean`, but then defines it as the integer `123`.

JavaScript and other dynamically-typed languages have a different approach, allowing the context to establish what type of data is being defined:

`var result = true;`

Long story short: statically-typed languages require you to declare the data types of your constructs before you can use them. Dynamically-typed languages do not. JavaScript implies the data type, while Java states it outright.

So as you can see, types allow you to specify program **invariants**, or the logical assertions and conditions under which the program will execute.

**Type-checking** verifies and enforces that the type of a construct (constant, boolean, number, variable, array, object) matches an invariant that you’ve specified. You might, for example, specify that “this function always returns a string.” When the program runs, you can safely assume that it will return a string.

The differences between static type checking and dynamic type checking matter most when a type error occurs. In a statically-typed language, type errors occur during the compilation step, that is, at compile time. In dynamically-typed languages, the errors occur only once the program is executed. That is, at **runtime**.

This means that a program written in a dynamically-typed language (like JavaScript or Python) can compile even if it contains type errors that would otherwise prevent the script from running properly.

On the other hand, if a program written in a statically-typed language (like Scala or C++) contains type errors, it will fail to compile until the errors have been fixed.

### A new era of JavaScript

Because JavaScript is a dynamically-typed language, you can go about declaring variables, functions, objects and anything without declaring the type.

```
var myString = "my string";

var myNumber = 777;

var myObject = {
  name: "Preethi",
  age: 26,
};

function add(x, y) {
  return x + y;
}
```

Convenient, but not always ideal. Which is why tools like [Flow](https://flowtype.org) and [TypeScript](https://www.typescriptlang.org/) have recently stepped in to give JavaScript developers the \*option\* to use static types.

[**Flow**](https://flowtype.org/) is an open-source static type checking library developed and released by Facebook that allows you to incrementally add types to your JavaScript code.

[**TypeScript**](https://www.typescriptlang.org/), on the other hand, is a superset that compiles down to JavaScript — although it feels almost like a new statically-typed language in its own right. That said, it looks and feels very similar to JavaScript and isn’t hard to pick up.

In either case, when you want to use types, you explicitly tell the tool about which file(s) to type-check. For TypeScript you do this by writing files with the `.ts` extension instead of `.js`. For Flow, you include a comment on top of the file with `@flow`

Once you’ve declared that you want to type-check a file, you get to use their respective syntax for defining types. One distinction to make between the two tools is that Flow is a type “checker” and not a compiler. TypeScript, on the other hand, is a compiler.

I truly believe that tools like Flow and TypeScript present a _generational shift and advancement_ for JavaScript.

Personally, I’ve learned so much by using types in my day-to-day. Which is why I hope you’ll join me on this short and sweet journey into static types.

The rest of this 4-part post will cover:

Part I. [A quick intro to the Flow syntax and language](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb#.prtc7vhrr)

Parts II & III. [Advantages & Disadvantages of static types (with detailed walk-through examples)](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#.9ywoivqaz)

Part IV. [Should you use static types in JavaScript or not?](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-4-b2e1e06a67c9#.cb2z6mty8)

Note that I chose Flow over TypeScript in the examples in this post because of my familiarity with it. For your own purposes, please do research and pick the right tool for you. TypeScript is also fantastic.

Without further ado, let’s begin!

### Part 1: A quick intro to Flow syntax and language

To understand the advantages and disadvantages of static types, you should first get a basic understanding of the syntax for static types using Flow. If you’ve never worked in a statically-typed language before, the syntax might take a little while to get used to.

Let’s begin by exploring how to add types to JavaScript primitives, as well as constructs like Arrays, Object, Functions, and etc.

#### boolean

This describes a `boolean` (true or false) value in JavaScript.

```
var isFetching: boolean = false;
```

Notice that when you want to specify a type, the syntax you use is:

<figure>

![](/media/why-use-static-types-in-javascript-part-1-1.png)

</figure>

#### number

This describes an IEEE 754 floating point number. Unlike many other programming languages, JavaScript doesn’t define different types of numbers (like integers, short, long, and floating points). Instead, numbers are always stored as double precision floating point numbers. Hence, you only need one number type to define any number.

`number` includes `Infinity` and `NaN`.

```
var luckyNumber: number = 10;

var notSoLuckyNumber: number = NaN;
```

#### string

This describes a string.

```
var myName: string = 'Preethi'; 
```

#### null

This describes the `null` data type in JavaScript.

```
var data: null = null; 
```

#### void

This describes the `undefined` data type in JavaScript.

```
var data: void = undefined;
```

Note that `null` and `undefined` are treated differently. If you tried to do:

```
var data: void = null;

/*------------------------FLOW ERROR------------------------*/
20: var data: void = null                     
                     ^ null. This type is incompatible with
20: var data: void = null
              ^ undefined
```

Flow would throw an error because the type `void` is supposed to be of type `undefined` which is not the same as the type `null`.

#### Array

Describes a JavaScript array. You use the syntax `Array<T>` to describe an array whose elements are of some type `T`.

```
var messages: Array = ['hello', 'world', '!'];
```

Notice how I replaced `T` with `string`, which means I’m declaring `messages` as an array of strings.

#### Object

This describes a JavaScript object. There are a few different ways to add types to objects.

You could add types to describe the shape of an object:

```
var aboutMe: { name: string, age: number } = {
  name: 'Preethi',
  age: 26,
};
```

You could define objects as maps where you map a string to some value:

```
var namesAndCities: { [name: string]: string } = {
  Preethi: 'San Francisco',
  Vivian: 'Palo Alto',
};
```

You could also define an object as an `Object` type:

```
var someObject: Object = {};

someObject.name = {};
someObject.name.first = 'Preethi';
someObject.age = 26;
```

This last approach lets us set any key and value on your object without restriction, so it doesn’t really add much value as far as type-checking is concerned.

#### any

This can represent literally any type. The `any` type is effectively unchecked, so you should try to avoid using it unless absolutely necessary (like when you need to opt out of type checking or need an escape hatch).

```
var iCanBeAnything:any = 'LALA' + 2; // 'LALA2'
```

One situation you might find `any` useful for is when using an external library that extends another system’s prototypes (like Object.prototype).

For example, if you are using a library that extends Object.prototype with a `doSomething` property:

```
Object.prototype.someProperty('something');
```

You may get an error:

```
41:   Object.prototype.someProperty('something')
                       ^^^^^^ property `someProperty`. Property not found in
41:   Object.prototype.someProperty('something')
      ^^^^^^^^^^^^ Object
```

To circumvent this, you can use `any`:

```
(Object.prototype: any).someProperty('something'); // No errors!
```

#### Functions

The most common way to add types to functions is to add types to it’s input arguments and (when relevant) the return value:

```
var calculateArea = (radius: number): number => {
  return 3.14 * radius * radius
};
```

You can even add types to async functions (see below) and generators:

```
async function amountExceedsPurchaseLimit(
  amount: number,
  getPurchaseLimit: () => Promise ): Promise {
  var limit = await getPurchaseLimit();

  return limit > amount;
}
```

Notice how our second parameter `getPurchaseLimit` is annotated as a function that returns a `Promise`. And `amountExceedsPurchaseLimit` is annotated as also returning a `Promise`.

#### Type alias

Type aliasing is one of my favorite ways to use static types. They allow you to use existing types (number, string, etc.) to compose new types:

```
type PaymentMethod = {
  id: number,
  name: string,
  limit: number,
};
```

Above, I created a new type called `PaymentMethod` which has properties that are comprised of `number` and `string` types.

Now if you want to use the `PaymentMethod` type, you can do:

```
var myPaypal: PaymentMethod = {
  id: 123456,
  name: 'Preethi Paypal',
  limit: 10000,
};
```

You can also create type aliases for any primitive by wrapping the underlying type inside another type. For example, if you want to type alias a `Name` and `EmailAddress`:

```
type Name = string;
type Email = string;

var myName: Name = 'Preethi';
var myEmail: Email = 'iam.preethi.k@gmail.com';
```

By doing this, you’re indicating that `Name` and `Email` are distinct things, not just strings. Since a name and email aren’t really interchangeable, doing this prevents you from accidentally mixing them up.

#### Generics

Generics are a way to abstract over the types themselves. What does this mean?

Let’s take a look:

```
type GenericObject = { key: T };

var numberT: GenericObject = { key: 123 };
var stringT: GenericObject = { key: "Preethi" };
var arrayT: GenericObject> = { key: [1, 2, 3] } 
```

I created an abstraction for the type `T`. Now you can use whatever type you want to represent `T`. For `numberT`, `T` was of type `number`. Meanwhile, for `arrayT`, T was of type `Array<number>`.

Yes, I know. It’s dizzying stuff if this is the first time you’re looking at types. I promise the “gentle” intro is almost over!

#### Maybe

Maybe type allows us to type annotate a potentially `null` or `undefined` value. They have the type `T|void|null` for some type `T`, meaning it is either type `T` or it is `undefined` or `null`. To define a `maybe` type, you put a question mark in front of the type definition:

```
var message: ?string = null;
```

Here I’m saying that message is either a `string`, or it’s `null` or `undefined`.

You can also use maybe to indicate that an object property will be either of some type `T` or `undefined`:

```
type Person = {
  firstName: string,
  middleInitial?: string,
  lastName: string,
};
```

By putting the `?` next to the property name for `middleInitial`, you can indicate that this field is optional.

#### Disjoint unions

This is another powerful way to model data. Disjoint unions are useful when you have a program that needs to deal with different kinds of data all at once. In other words, the shape of the data can be different based on the situation.

Extending on the `PaymentMethod` type from our earlier generics example, let’s say that you have an app where users can have one of three types of payment methods. In this case, you can do something like:

```
type Paypal = { id: number, type: 'Paypal' };
type CreditCard = { id: number, type: 'CreditCard' };
type Bank = { id: number, type: 'Bank' };
```

Then you can define your PaymentMethod type as a disjoint union with three cases.

```
type PaymentMethod = Paypal | CreditCard | Bank; 
```

Payment method now can only ever be one of these three shapes. The property `type` is the property that makes the union type “disjoint”.

You’ll see more practical examples of disjoint union types later in part II.

All right, almost done. There are a couple other features of Flow worth mentioning before concluding this intro:

**1) Type inference**: Flow uses type inference where possible. Type inference kicks in when the type checker can automatically deduce the data type of an expression. This helps avoid excessive annotation.

For example, you can write:

```
/* @flow */

class Rectangle {
  width: number;
  height: number;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  circumference() {
    return (this.width * 2) + (this.height * 2)
  }

  area() {
    return this.width * this.height;
  }
}
```

Even though this Class doesn’t have types, Flow can adequately type check it:

```
var rectangle = new Rectangle(10, 4);

var area: string = rectangle.area();

// Flow errors
100: var area: string = rectangle.area();
                        ^^^^^^^^^^^^^^^^ number. This type is incompatible with
100: var area: string = rectangle.area();
               ^^^^^^ string
```

Here I’ve tried to define `area` as a `string`, but in the `Rectangle` class definition we defined `width` and `height` as numbers. So based on the function definition for `area`, it must be return a `number`. Even though I didn’t explicitly define types for the `area` function, Flow caught the error.

One thing to note is that the Flow maintainers recommend that if you were exporting this class definition, you’d want to add explicit type definitions to make it easier to find the cause of errors when the class is not used in a local context.

**2) Dynamic type tests**: What this basically means is that Flow has logic to determine what the the type of a value will be at runtime and so is able to use that knowledge when performing static analysis. They become useful in situations like when Flow throws an error but you need to convince flow that what you’re doing is right.

I won’t go into too much detail because it’s more of an advanced feature that I hope to write about separately, but if you want to learn more, it’s worth reading through the [docs](https://flowtype.org/docs/dynamic-type-tests.html).

### We’re done with syntax

We covered a lot of ground in one section! I hope this high-level overview has been helpful and manageable. If you’re curious to go deeper, I encourage you to dive into the [well-written docs](https://flowtype.org/docs/) and explore.

With syntax out of the way, let’s finally get to the fun part: [exploring the advantages and disadvantages of using types](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#.9ywoivqaz)!

Next up: [Part 2 & 3](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#.9ywoivqaz).
