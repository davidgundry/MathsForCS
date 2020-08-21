---
title: Cyphers
permalink: /course/cyphers/
---

In this section we will learn about how modular arithmatic is used in cyphers.

Watch the video and then answer the questions below.

## Eleven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

## Character values in Python 

For the following questions, we need to know how to turn characters into their Unicode values.

In Python:

* `ord()`  returns Unicode value of letter
* `chr()` returns character with unicode value
* `ord(‘A’)` gives the offset of the start of the alphabet in Unicode `(= 65)`
* `ord(‘a’)` gives the offset of the start of the lower case letters in Unicode `(= 97)`

You can see this demonstrated in the folowing example. Here we take an input from the user and give the Unicode values and then the zero-indexed position in the alphabet, starting from `a = 0`.

<iframe height="600px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmeticCharacterValuesDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Questions

### 1. Check your understanding

Decode the following by hand and enter your answer:

1. <label for ="q1">ievnkxy (hint: try a caeser cypher with a shift of 6)</label> <input type="text" id="q1" /> (cyphers)
2. <label for ="q2">lll.vddvat.rdb (hint: try guessing the plaintext)</label> <input type="text" id="q2" /> (www.google.com)

<input type="submit" value="Check Answers" />

### 2. Ceaser cypher

A rotational (Caeser) cypher with a shift of `k` has a function:

    E(x) = (x + k) mod 26

Write a function that takes a string and a value for `k` and returns an encrypted string. For each letter, if it in `[a-zA-Z]`, shift it by `k`, otherwise leave it untouched.

### 3. Affine Cypher

An Affine cypher with keys `a` and `b` has the function:

    E(x) = (ax + b) mod m
    D(x) = a-1 (x - b) mod m

Write a function that takes a string, and values for `a` and `k` and returns an encrypted string using the affine cypher. Leave any letter not in `[a-zA-Z]` untouched.

Extend your affine cypher function by checking that a and b are coprime. If they are not, throw an error. You will need to write a function to calculate the greatest common denomonator of two nunbers


**Challenge**: Write a function that takes an array of bytes, and values of a and k, and returns an array of bytes encrypyed using an affine cypher. 

## Summary

In this section we have used modulus for cyphers. In the next section we learn about [maths with modulus](../maths-with-mod/).