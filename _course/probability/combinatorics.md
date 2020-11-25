---
title: Combinatorics
permalink: /course/combinatorics/
---

It is useful to be able to find the number of combinations and permutations of sets.

Watch the video and then answer the questions below.

## Fifteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/ccFCR11poBk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/ccFCR11poBk)


---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

### Enumeration

To **enumerate** is to list of all the elements of a set. The extensional definition of a set it an enumeration of that set. I can enumerate all numbers in the set \\(\\{ x : x < 5 \\} \\) as follows:

    1, 2, 3, 4

Simple!

### Combination

A **combination** is a way of picking \\( k \\) elements out of a set of \\( n \\) elements.

If we had a set of 4 elements \\( \\{ a, b, c, d \\} \\) and picked 3, there would be 4 combinations we could pick:

    abc acd abd bcd

<p class="math">\[ ^nC_k = \frac{n!}{k!(n-k)!} \]</p>

Read \\( ^nC_k \\) as "n choose k".

Where \\( n \\) is the size of the set and \\( k \\) is the size of the subset we are picking. Here \\( ^4C_3 = \\frac{4!}{3!(4-3)!} = \\frac{4 \\times 3 \\times 2 \\times 1}{3!1!} = \\frac{24}{6} = 4 \\)

This is also known as the **binomial coefficient** and can be written:

<p class="math">\( {n}\choose{k} \)</p>

### Permutation

The order of elements in a set is a **permutation**. If we had the a set of coloured balls \\( \\{ R, G, B \\} \\), there would be 6 different ways to order them:

    RGB RBG
    BGR BRG
    GBR GRB

<p class="math">\[ ^nP_k = \frac{n!}{(n-k)!} \]</p>

Where \\( n \\) is the size of the set and \\( k \\) is the size of the subset we are ordering. Here \\( ^3P_3 = \\frac{3!}{(3-3)!} = \\frac{3 \\times 2 \\times 1}{0!} = \\frac{6}{1} = 6 \\)

---

### Calculating Factorial in Java

Factorial can be shown mathematically using a piecewise function:

<p class="math">\[ n! = \begin{cases} 
      0 & n = 0 \\
      (n-1)! & n \gt 0 
   \end{cases} \]</p>

This lends itself to a recursive definition in Java (one that calls itself):

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSProbabilityFactorial?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

<script src="/assets/check.js"></script>

##### 1. Factorials

By hand, solve the following factorials.

1. <label for ="q31">\\( 4! = \\)</label> <input type="text" id="q31" data-answer="24"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">\\( 0! = \\)</label> <input type="text" id="q32" data-answer="1"/> <span id="q32c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 2. Combinations

By hand, work out the answers to the following combinations. You can use the formula given above to help you.

1. <label for ="q11">\\( ^1C_1 = \\)</label> <input type="text" id="q11" data-answer="1"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">\\( ^2C_1 = \\)</label> <input type="text" id="q12" data-answer="2"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">\\( { {4}\choose{2} } = \\)</label> <input type="text" id="q13" data-answer="6"/> <span id="q13c" style="display:inline-block"></span>
3. <label for ="q14">\\( {5}\choose{3} = \\)</label> <input type="text" id="q14" data-answer="10"/> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 3. Permutations

By hand, work out the answers to the following permutations. You can use the formula given above to help you.

1. <label for ="q21">\\( ^1P_1 = \\)</label> <input type="text" id="q21" data-answer="1"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">\\( ^2P_1 = \\)</label> <input type="text" id="q22" data-answer="2"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">\\( ^4P_2 = \\)</label> <input type="text" id="q23" data-answer="12"/> <span id="q23c" style="display:inline-block"></span>
3. <label for ="q24">\\( ^5P_3 = \\)</label> <input type="text" id="q24" data-answer="60"/> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>



### 2. Maths to Code Practice

Write a function `int permutation(int n, int k)` to calculate the permutation \\(^nP_k\\) for values of \\( n \\) and \\( k \\). It will need to implement the following equation:

<p class="math">\[ ^nP_k = \frac{n!}{(n-k)!} \]</p>

You can make use of the recursive factorial function given above.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSProbabilityPermutation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we have learned about combinatorics.

* You should know how **factorial** is calculated.
* You should understand what a **combination** is.
* You should understand what a **permutation** is.
* You should be able to use their formulas to calculate these.

In the next section we will look at [probability trees](../probability-trees).