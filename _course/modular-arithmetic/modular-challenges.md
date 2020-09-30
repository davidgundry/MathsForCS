---
title: Challenges (Python)
permalink: /course/modular-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Decoding the Affine Cypher

The goal is to write a function `decode_affine(c, a, b)` that takes a string encrypted using an affine cypher (i.e. the cypher text), and values for` a` and `b` and returns the decrypted string (the plain text). For example, it might take the string `jollg kgblh`, and values `a = 7, b = 12` and return the string `hello world`. Leave any character not in `a-zA-Z` (i.e. non-alphabetic characters) unmodified.

The decryption function for an affine cypher is <code>D(X) = a<sup>-1</sup>(X - b) mod 26</code>. Here, because we are working under modulus, <code>a<sup>-1</sup></code> is the _modular_ (multplicative) inverse of a. 

### Part 1

In order to calculate <code>a<sup>-1</sup></code>, you will have to write a modular inverse funtion. One way to do this is using a brute force method. That means, you try every possible value until you find the right one. You know that <code>a * a<sup>-1</sup> mod n = 1</code>. You also know that the modular inverse, <code>a<sup>-1</sup></code>, must be an integer value between `0` and `n-1`.

Write a function `mod_inverse(a, n)` that takes two integers and returns the inverse of `a` under modulus `n`. If there is no modular inverse for `a` under modulo `n`, the function should return `None`.

### Part 2

Once you've written a `mod_inverse()` function, use it in your `affine_decode()` function. This function should take a string and a value for the two affine cypher keys `a` and `b`, and return a decrypted string.

### Repl.it Project

The following Replit project has functions for you to fill in and tests to check your answers. Make sure you write your code in the `main.py` file. You can change file by using the file icon on the left side of the frame. You might find [this online tool](http://rumkin.com/tools/cipher/affine.php) helpful for checking your work.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmeticDecodeAffine?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Cracking Cyphers

The goal is to write a program that will crack a cypher using a known-plaintext attack. 