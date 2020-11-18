---
title: Challenges
permalink: /course/probability-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Factorial

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

### Task 1: Factorial

We're can implement factorial in two ways: recursively (you should have seen this already in the lecture notes), and using a loop. It is often more efficient to use a loop rather than recursion. However, the recursive definition can be more elegant.

<p class="math">\[ n! = \begin{cases} 
      0 & n = 0 \\
      (n-1)! & n \gt 0 
   \end{cases} \]</p>

Look back at the [combinatorics](../combinatorics) lecture notes at the Java code for calculating factorial recursively. Make sure you understand this. 

Then implement a `int factorial(int n)` function that returns the result of the n factorial, or \\( n! \\). Your code should make use of a `for` loop.

It might be helpful to think about another way that the factorial function can be written mathematically:

<p class="math">\[ n! = n \cdot (n-1) \cdot (n-2) \cdot (n-3) \cdots 3 \cdot 2 \cdot 1 \]</p>

### Task 2: Combination

Implement the function `int combination(int n, int k)`. It should return the result of the binomial coefficient, or combination:

<p class="math">\[ ^nC_k = \frac{n!}{k!(n-k)!}  = {n}\choose{k}\]</p>

