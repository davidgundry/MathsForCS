---
title: Sets
permalink: /course/sets/
---

What is a set? It's a collection of _things_. A bag of marbles, a box of chocolates, all of the numbers between 4 and 42. Sets are everywhere. In fact, that list is a set _of sets_. You can see how they come in handy when we want to talk about the real world - or write programs for it.

Watch the video below for an introduction to this useful concept and then answer the questions below.

## Six-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Qrnt_Vxhvx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Qrnt_Vxhvx0)

---

## Key Points

### What is a set?

* A set is a formal way of talking about a collection of things, like `{a, b, c}` or "the set of all integers from 1-10"
* We usually refer to sets using capital letters, e.g. `A`, `B`, etc. and when we define them we use curly brackets: `{}`.
* Sets are **unordered**. There is no "first" or "last" element in a set. You can write them in any order, so `{ 1, 2, 3 } = { 3, 2, 1 }`
* Each element is **unique**. If you have the set `{ "cat" , "dog" }` and you add `{ "cat" }`, you still have the same set!

### Defining sets

* Sets can be defined by **extension**, or **listing**, by writing down all of the elements of the set, e.g. `A ≜ { 1, 2, 3, 4 }` The funny symbol (≜) means "is equal by definition to". You can also use = here.
* Sets can be defined by **intension** by giving conditions that say what's in the set without ambiguity, e.g. `A  ≜ { y | y > 0 and y < 5 }` The symbol \| is read "given that". Or you could write, somewhat less formally, `B  ≜ { x | x is red and x is a ball }`

### Common sets

* The set with no elements is called **the empty set**. We use the symbol Ø for the empty set.
* A set with only one member is called a **singleton**. (Note that `{ Ø }` is not the empty set, it's a singleton set containing the empty set))
* The **natural numbers** `ℕ ≜ { 0, 1, 2, 3, … }` 
* The **integers** `ℤ ≜ { … -3, -2, -1, 0, 1, 2, 3 }`
* The **real numbers** `ℝ` = the integers and all fractions
* ℕ, ℤ, and ℝ are all infinite in size, but infinity is not an element of them.

---

## Sets in Java

Java provides a [`Set`](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html) interface in the `java.util` package. As it is an interface, we also need a class that implements the Set interface, such as [`HashSet`](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html).  We need to import both of these by adding imports to the top of our Java file:

    import java.util.Set; 
    import java.util.HashSet;

Or we could import both at once by importing the whole `java.util` package.

    import java.util.*; 

We construct a `HashSet`. We can either store it as a `HashSet` or `Set` (if you're wondering why, ask me about Polymorphism). We can use the `add()` method to add an element to the set, and `contains()` to check if an element is in the set.

    Set<String> hashSet = new HashSet<String>(); 
    hashSet.add("My element"); 
    hashSet.contains("My element"); // returns true

We need to specifty the type of data that the set will store in angled brackets. E.g. `Set<String>` is a Set of String types. This is because Sets are _generics_. Generic types are far too complicated to explain here (and are beyond what you need in this module), but do ask me if you're interested.

---

## Sets in Python

Python has sets built in. Sets are written using curly brackets, e.g.

    my_set = {"some", "set", "elements"}

In Python a set is a collection that is unordered (just like a set in Set Theory).

Python sets are also unindexed, which means you cannot refer to an item by its index. So the following is **not** allowed: `my_set[0]` Because this is trying to look at the element in the set with index 0 - but set elements do not have indexes!

In languages that don't have sets built in you would often use an array to represent a set. Arrays _are_ ordered, and _can_ have duplicate elements, so if you do use an array to represent a set, make sure you don't accidently do something you shouldn't!

### Accessing items in a set

So how do you access items in a Python set? You can do so in a loop using the `in` operator.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSSetTheorySetDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Because the set is unordered, you will not necessarily get the elements out in the same order!

For more information about sets in Python, W3Schools [has a good introduction](https://www.w3schools.com/python/python_sets.asp).

---

## Questions

### 1. Check your knowledge

##### 1. Defining Sets

The soup served in the canteen today contains potato, carrot, onion, celery, and leeks. <label for ="q1">Express the set of vegetables in todays soup `V` using definition by extension</label> `V = {`<input type="text" id="q1" data-answer-set="potato,carrot,onion,cellery,leeks"/>`}` <span id="q1c" style="display:inline-block"></span>

##### 2. Defining Sets again

Using definition by listing define the following sets: e.g. The set of all 1 digit binary numbers = {0, 1}

1. <label for ="q21">The set of all even primes greater than 2</label> `{`<input type="text" id="q21" data-answer-set="" />`}` <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">The letters of the alphabet that appear in the phrase `smell the cheese`.</label> `{`<input type="text" id="q22" data-answer-set="s,m,e,l,t,h,c"/>`}` <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">The numbers between 1 and 10 (inclusive)</label> `{`<input type="text" id="q23" data-answer-set="1,2,3,4,5,6,7,8,9,10"/>`}` <span id="q23c" style="display:inline-block"></span>

##### 3. Defining more sets

Which of the following phrases are equivalent when their component letters are expressed through set definition? (You may want to use Python to help you)

1. <input type="checkbox" id="q31" data-answer="true" /> <label for ="q31">`tomorrow is Monday`</label> <span id="q31c" style="display:inline-block"></span>
2. <input type="checkbox" id="q32" data-answer="false" /> <label for ="q32">`To my mind sand is dirty snow`</label> <span id="q32c" style="display:inline-block"></span>
3. <input type="checkbox" id="q33" data-answer="false"/> <label for ="q33">`Tommy ran day and night`</label> <span id="q33c" style="display:inline-block"></span>
4. <input type="checkbox" id="q34" data-answer="true"/> <label for ="q34">`rain wind and snow today and tomorrow`</label> <span id="q34c" style="display:inline-block"></span>

##### 4. Singleton sets

Which of the following are singleton sets? Check all that apply.

1. <input type="checkbox" id="q41" data-answer="true" /><label for ="q41">`[1, 1, 1, 1]`</label> <span id="q41c" style="display:inline-block"></span>
2. <input type="checkbox" id="q42" data-answer="false" /><label for ="q42">The vowels in the alphabet between `A` and `D`</label> <span id="q42c" style="display:inline-block"></span>
3. <input type="checkbox" id="q43" data-answer="false" /><label for ="q43">The prime numbers between 1 and 10</label> <span id="q43c" style="display:inline-block"></span>
4. <input type="checkbox" id="q44" data-answer="false" /><label for ="q44">The set of all numbers used in the binary system</label> <span id="q44c" style="display:inline-block"></span>

##### 5. The empty set

Which of the following are empty sets? Check all that apply.

1. <input type="checkbox" id="q51" data-answer="true" /><label for ="q51">The set of all Natural numbers `ℕ` that are not in the set of all integers `ℤ`</label> <span id="q51c" style="display:inline-block"></span>
2. <input type="checkbox" id="q52" data-answer="false" /><label for ="q52">The set of all Integers `ℤ`, less that 0.</label>  <span id="q52c" style="display:inline-block"></span>
3. <input type="checkbox" id="q53" data-answer="true" /><label for ="q53">The set of all letters in the alphabet tham come before the letter `a`</label> <span id="q53c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2','q3','q4','q5')">Check Answers</a>
<script src="/assets/check.js"></script>


### 2. Properties of Sets 

Write a function `is_singleton` which takes a set and returns `true` if and only if it is a singleton. (You may want to use the `len()` function). Write a function `is_empty_set` which returns true if a set is the empty set.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSSetTheorySetsQuestions?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we have learned about the most important part of set theory: sets. We now know that sets are unordered collections of unique _things_. Once you've completed the questions above, you can move on to the next section where we learn how to talk about sets in relation to one another using the concepts of [subsets and supersets](../subsets-supersets).