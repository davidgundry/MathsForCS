---
title: Challenges (Java)
permalink: /course/modular-challenges-java/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Decoding the Affine Cypher

**Update:** There is a model answer available for this practical [here](https://repl.it/@davidgundry/MathsForCSModularArithmeticDecodeAffineJavaModelAnswer).

The goal is to write a function `decodeAffine(String c, int a, int b)` that takes a string encrypted using an affine cypher (i.e. the cypher text), and values for` a` and `b` and returns the decrypted string (the plain text). For example, it might take the string `jollg kgblh`, and values `a = 7, b = 12` and return the string `hello world`. Leave any character not in `a-zA-Z` (i.e. non-alphabetic characters) unmodified. You may use the `.toLowerCase()` method on your string and work with only lower case strings.

The decryption function for an affine cypher is <code>D(X) = a<sup>-1</sup>(X - b) mod 26</code>. Here, because we are working under modulus, <code>a<sup>-1</sup></code> is the _modular_ (multplicative) inverse of a. 

### Part 1

In order to calculate <code>a<sup>-1</sup></code>, you will have to write a modular inverse function. One way to do this is using a brute force method. That means you try every possible value until you find the right one. You know that <code>a * a<sup>-1</sup> mod n = 1</code>. You also know that the modular inverse, <code>a<sup>-1</sup></code>, must be an integer value between `0` and `n-1`.

Write a function `int modInverse(int a, int m)` that takes two integers and returns the inverse of `a` under modulus `n`. If there is no modular inverse for `a` under modulo `n`, the function should return `-1`.

### Part 2

Write a `int decodeValue(int v, int a, int b)` function that takes a numerical value `v` for a letter (e.g. `3`) and returns the decoded value, using affine keys `a` and `b`.

### Part 3

You'll need to write a function `int charToPosition(char c)` to convert characters from your string to numerical values and another `char positionToChar(int p)`to convert them back again. If you're only working with lower case, this would convert `a` to `0`, `b` to `1`, and so on. 

### Part 4

Write a `char decodeChar(char v, int a, int b)` function to:

1. Check if the character is alphabetic (if not, return it)
2. Convert a character into a numerical value
3. Find the decoded value
4. Convert back to a character and return it

### Part 5

Put it all together in your `String decodeAffine(String c, int a, int b)` function. This function should take a string and a value for the two affine cypher keys `a` and `b`, and return a decrypted string.

In this function you will need to loop through the string, and for each character run your `decodeChar()` function.

### Part 6 (Optional)

If you get this far and you really want a challenge, try writing a program to crack an affine cypher using a known-plaintext attack. Assume you know the correct values for the first two characters of the encrypted string. Your function should take a cyphertext string and the first two plaintext characters and return the decrypted string.

### Repl.it Project

The following Replit project has functions for you to fill in and tests to check your answers. Make sure you write your code in the provided functions in the `Main.java` file. You can change file by using the file icon on the left side of the frame. You might find [this online tool](http://rumkin.com/tools/cipher/affine.php) helpful for checking your work.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/ModularArithmeticDecodeAffineJava?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
