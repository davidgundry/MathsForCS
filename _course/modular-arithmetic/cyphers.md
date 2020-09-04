---
title: Cyphers
permalink: /course/cyphers/
---

One important application of modular arithmatic is cryptography. We will take a look at two cyphers, the Caeser Cypher and the Affine Cypher and see how they make use of modular arithmatic.

Watch the video and then answer the questions below.

## Eleven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

* A cypher is a way to encrypt text to make it hard for other people to read.
* A **monoalphabetic substitution cypher** replaces every occourance of a letter with the same letter each time, so `A` might always become `Q`, for example.

### Caeser Cypher

* The **Caeser Cypher** is a monoalphabetic substitution cypher. It replaces each letter by shifting it on through the alphabet by a certain amount determined by a numerical key `k`.
* We can write the Caeser Cypher mathematically as `E(X) = (X + k) mod 26`, assuming an alphabet length of 26.
* To decrypt the Caeser Cypher, we use the function `D(X) = (X - k) mod 26`.

### Affine Cypher

* The **Affine Cypher** uses the encryption function `E(X) = (aX + b) mod 26`. It has two keys `a` and `b`, which must be coprime (meaning their greatest common denomonator is 1)
* To decrypt the affine cypher, you use the function <code>D(X) = a<sup>-1</sup>(X - b) mod 26</code>. For this you need to calculate the modular inverse of `a`.


---

## Character values in Python 

For the following questions, we need to know how to turn characters into their Unicode values.

In Python:

* `ord()`  returns Unicode value of letter
* `chr()` returns character with unicode value
* `ord(‘A’)` gives the offset of the start of the alphabet in Unicode `(= 65)`
* `ord(‘a’)` gives the offset of the start of the lower case letters in Unicode `(= 97)`

You can see this demonstrated in the folowing example. Here we take an input from the user and give the Unicode values and then the zero-indexed position in the alphabet, starting from `a = 0`.

<iframe height="600px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmeticCharacterValuesDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

Decode the following by hand and enter your answer:

1. <label for ="q1">ievnkxy</label> <input type="text" id="q1" data-answer="cyphers"/> <span id="q1c" style="display:inline-block"></span> (hint: try a caeser cypher with a shift of 6)
2. <label for ="q2">lll.vddvat.rdb</label> <input type="text" id="q2" data-answer="www.google.com"/> <span id="q2c" style="display:inline-block"></span> (hint: try guessing the plaintext)

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1', 'q2')">Check Answers</a>
<script src="/assets/check.js"></script>

### 2. Ceaser cypher

A rotational (Caeser) cypher with a shift of `k` has a function:

    E(x) = (x + k) mod 26

Write a function in Python that takes a string and a value for `k` and returns an encrypted string. For each letter, if it in `[a-zA-Z]`, shift it by `k`, otherwise leave it untouched.

Look above for an example of how to convert characters in a string to numerical values.

### 3. Affine Cypher

An Affine cypher with keys `a` and `b` has the function:

    E(x) = (ax + b) mod m

Write a function in Python that takes a string, and values for `a` and `b` and returns an encrypted string using the affine cypher. Leave any letter not in `[a-zA-Z]` untouched.

---

## Summary

In this section we have used modular arithmatic for cyphers. In order to decode an affine cypher, however, we need to know how to find the inverse under modulus. This works differently than usual. But before we tackle that, we will first we will look at some other properties of [modular arithmatic](../modular-arithmetic/).