---
title: Coding
permalink: /course/formative-1/
---

## Formative Assessment

This is a formative assessment that covers the first four lectures of the Mathematics and Problem Solving course. Here we're looking only at the mathematics content, rather than the programming content. The final assessment will involve both maths and implementing maths in code.

This assessment will not affect your final grade for this course. However, it'll help you assess your progress.

Unlike the other questions yoy have answered on this site for the lectures, the answers will not be shown until you complete the assessment.


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


## Assessment

### Babylonians

Assuming the Babylonain _cubit_ is 518.6 mm long and the Euphrates River is 2,800 km long, if we expressed the length of the Euphrates in cubits (rounded to the nearest cubit), how many bablyonian digits (including spaces in place of a `0` digit) would you need to write it down?

### A _Base_ic Puzzle?

Let `v` be a number written in binary. It has the following digits. Digits written with a `?` are either 0 or 1.

<p>\[v = ?????0??1?????1_2\]</p>

Use the following equations to help you recover the original number.

<p>\[ v = x * b^2 + y * b + z\]</p>
<p>\[x = y * 2 = z * 4\]</p>

### Fractional values in binary

To store fractional values in a positional notation system, we use negative powers. For example, in base `n`:

<table>
    <tr><th> n^2 </th><th> n^1 </th><th> n^0</th><th>. </th><th> n^-1 </th><th> n^-2 </th></tr>
    <tr><td>\(n*n\) </td><td> \(n\) </td><td> \(1\)  </td><td> . </td><td> \(1/n\) </td><td> \(1/(n*n)\)</td></tr>
</table>

<p>Solve \(101.10_2 + 52.41_8 + AFF.3F_{16}\)</p>

With `n` bits to the right of the decimal place, what is the smallest number you can store?

### Vigenère Cypher

The Vigenère was first described by _Giovan Battista Bellaso_ in 1553, but was named after _Blaise de Vigenère_ for some reason.

A Vigenere cypher can be expressed algebraicly as:

<p>\[ C_i = E_K(P_i) = (P_i + K_i) mod 26 \]</p>

<p>\[ P_i = D_K(C_i) = (C_i - K_i + 26) mod 26 \]</p>

<p>Where \( P = P_1 ... P_n \) is the plaintext, \(C = C_1 ... C_n\) is the cyphertext, and \(K = K_1 ... K_n\) is the key. If the key is shorter than n, it is repeated as needed. For example if the key word `LEMON` was used to encrypt a message 8 characters long, the key would be `LEMONLEM`  </p>

