---
title: Cyphers
permalink: /course/cyphers/
---

One important application of modular arithmetic is **cryptography**. We will take a look at two cyphers, the **Caesar Cypher** and the **Affine Cypher** and see how they make use of modular arithmetic.

Watch the video and then answer the questions below.

## Thirteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/BNexh31dOfk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/BNexh31dOfk )

---

## Key Points

* A cypher is a way to encrypt text to make it hard for other people to read.
* A **monoalphabetic substitution cypher** replaces every occourance of a letter with the same letter each time, so `A` might always become `Q`, for example. For a monoalphabetic cypher, you can write out a table such as this one, for a Caesar Cypher with a shift of 3:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C |

### Caesar Cypher

* The **Caesar Cypher** is a monoalphabetic substitution cypher. It replaces each letter by shifting it on through the alphabet by a certain amount determined by a numerical key `k`.
* We can write the Caesar Cypher mathematically as `E(X) = (X + k) mod 26`, assuming an alphabet length of 26.
* To decrypt the Caesar Cypher, we use the function `D(X) = (X - k) mod 26`.

The following table shows how to encypher any letter with a shift of `3`. First finding the value of the letter, then adding the shift of `3`, then applying `mod 26`, finally converting back into letters.

| plaintext | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --------- |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| value     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24| 25|
| x + 3     | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24| 25| 26| 27| 28|
| mod 26    | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24| 25| 0| 1| 2|
| cyphertext| D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C |

### Affine Cypher

* The **Affine Cypher** uses the encryption function `E(X) = (aX + b) mod 26`. It has two keys `a` and `b`, which must be coprime (meaning their greatest common denomonator is 1)
* To decrypt the affine cypher, you use the function <code>D(X) = a<sup>-1</sup>(X - b) mod 26</code>. For this you need to calculate the modular inverse of `a`.

The following table shows how to encypher any letter using keys of `a=3` and `b=5` in the affine function. First finding the value of the letter, then applying the affine function `ax + b`, then applying `mod 26`, finally converting back into letters.

| plaintext | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --------- |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| value     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24| 25|
| 3x + 5    | 5 | 8 | 11| 14| 17| 20| 23| 26| 29| 32| 35| 38| 41| 44| 47| 50| 53| 56| 59| 62| 65| 68| 71| 74| 77| 80|
| mod 26    | 5 | 8 | 11| 14| 17| 20| 23| 0 | 3 | 6 | 9 | 12| 15| 18| 21| 24| 1 | 4 | 7 | 10| 13| 16| 19| 22| 25| 2 |
| cyphertext| F | I | L | O | R | U | X | A | D | G | J | M | P | S | V | Y | B | E | H | K | N | Q | T | W | Z | C |

---

## Character values in Java

For the following questions, we need to know how to turn characters into their ASCII values.

In Java:

* Character literals are written using single quotes, so to assign the character `a` to the `char` variable called `letter`, you might do: `char letter = 'a'`
* Casting a `char` to `int` gives the ASCII value of the character, e.g. `int ascii = (int) 'a'`
* Casting an `int` to `char` gives the character for the ASCII value, e.g. `char value = (char) '97'`
* `(int) 'A'` gives the offset of the start of the alphabet in ASCII `(= 65)`
* `(int) 'a'` gives the offset of the start of the lower case letters in ASCII `(= 97)`

You can see this demonstrated in the folowing example. Here we take an input from the user and give the ASCII values and then the zero-indexed position in the alphabet, starting from `a = 0`.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmeticCharacterValuesJava?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


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

1. <label for ="q1">ievnkxy</label> <input type="text" id="q1" data-answer="cyphers"/> <span id="q1c" style="display:inline-block"></span> (hint: try a Caesar cypher with a shift of 6)
2. <label for ="q2">lll.vddvat.rdb</label> <input type="text" id="q2" data-answer="www.google.com"/> <span id="q2c" style="display:inline-block"></span> (hint: try guessing the plaintext)

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1', 'q2')">Check Answers</a>
<script src="/assets/check.js"></script>

### 2. Ceaser cypher

A rotational (Caesar) cypher with a shift of `k` has a function:

    E(x) = (x + k) mod 26

Write a function in Java that takes a string and a value for `k` and returns an encrypted string. For each letter, if it in `[a-zA-Z]`, shift it by `k`, otherwise leave it untouched.

Look at the Java example above for an example of how to convert characters in a string to numerical values.

### 3. Affine Cypher

An Affine cypher with keys `a` and `b` has the function:

    E(x) = (ax + b) mod m

Write a function in Java that takes a string, and values for `a` and `b` and returns an encrypted string using the affine cypher. Leave any letter not in `[a-zA-Z]` untouched.

Look at the Java example above for an example of how to convert characters in a string to numerical values.

---

## Summary

In this section we have used modular arithmatic for cyphers. You have seen how to encode using the **Caesar** and **Affine cyphers**.

* You should be able to apply simple cypher functions to text.
* You should understand why modulus is required for the cyphers shown.

In order to decode an affine cypher, however, we need to know how to find the **inverse under modulus**. This works differently than usual. But before we tackle that, we will first we will look at some other properties of [modular arithmatic](../modular-arithmetic/).