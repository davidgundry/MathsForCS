---
title: Summation
permalink: /course/summation/
---

Many algorithms involve loops. In order to work out the time functions for these algorithms, we need to use summations. We will learn how summations work and how to work with them.

Watch the video and then answer the questions below.

## Video not yet available

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

* A **summation** is an adding up of lots of things.
* We write summations using **sigma notation**
* Converting from sigma notation to a polynomial expression requires some thought, and sometimes the use of some formulae.

### Reading Sigma Notation

Sigma notation uses the Greek capital letter sigma to express a summation, like this;

<p class="math">\[ \sum_{i=1}^{4} i = 1 + 2 + 3 + 4 = 10 \]</p>

Below the sigma, you have a variable and a lower bound, here `i=1`. At the top you have an upper bound, here `n`. You can read this as the sum of `i` with values of `i` between `1` and `n` (inclusive).

### Sum of an Arithmetic Series

An **arithmetic sequence** is a list of numbers with a constant difference between them, e.g. `1, 2, 3, 4, 5, ...` In this sequence, the number increases by `1` each time. If we add them up, we get an **arithmetic series**, e.g. `1 + 2 + 3 + 4 + 5 + ...`. To sum an arithmetic series you can use the formula:

<p class="math">\[ \sum_{i=1}^{n} a = n (\frac{a_1 + a_n}{2}) \]</p>

<p>Where \(n\) is the length of the sequence, and \(a_1\) is the first element and \(a_n\) is the last element.</p>

Basically, you find the average size of an element, and multiply it my the number of elements there are.

#### Sum of the First n Natural Numbers

<p>To find the sum of the first `n` natural numbers is related to this. Because we start on \(1\), and end on \(n\) the average value of a number is going to be \( \frac{n+1}{2} \)</p>

<p class="math">\[ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \]</p>

### Sum of a Geometric Series

A **geometric sequence** is a list of numbers where each number is found my multiplying the previous number by a constant e.g. `1, 2, 4, 8, 16, ...`. In this sequence, the number doubles every time. If we add them up, we get a **geometric series**, e.g. `1 + 2 + 4 + 8 + 16 + ...`.

To sum a geometric series you can use the formula:

<p class="math">\[ \sum_{i=0}^{n-1} (ar^k) = a(\frac{1-r^n}{1-r}) \]</p>

### Sum of Squares of the first n natural numnbers

We will often find that we need to sum the squares of the first `n` natural numbers. For this we can use this formula:

<p class="math">\[ \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6} \]</p>

---

## Questions

### 1. Check your understanding

##### 1. Arithmetic and Geometric Sequences

|    | Sequence | Arithmetic | Geometric |  |
| -- | ---------- | ---- | ----- |--|
| 1. | `5, 10, 15, 20, ...` | <input type="radio" name="q31" id="q31t" data-answer value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> | <span id="q31c" style="display:inline-block"></span> |
| 2. | `4, 12, 36, 108, ...` | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" data-answer id="q32f" value="f"/> | <span id="q32c" style="display:inline-block"></span> |
| 3. | `1, 0.5, 0.25, 0.125, ...` | <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f"  data-answer value="f"/> | <span id="q33c" style="display:inline-block"></span> |
| 4. | `1, 0.75, 0.5, 0.25, ...` | <input type="radio" name="q34" id="q34t" data-answer value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> | <span id="q34c" style="display:inline-block"></span> |


<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

<script src="/assets/check.js"></script>

##### 2. Summations

Solve the folowing:

<ol>
    <li><label for ="q11">\( \sum_{i=1}^{10} 1 = \)</label><input type="text" id="q11" data-answer="10" /> <span id="q11c" style="display:inline-block"></span></li>
    <li><label for ="q12">\( \sum_{i=1}^{10} a =  \)</label><input type="text" id="q12" data-answer="10a" /> <span id="q12c" style="display:inline-block"></span></li>
    <li><label for ="q13">\( \sum_{i=1}^{10} i  = \)</label><input type="text" id="q13" data-answer="55" /> <span id="q13c" style="display:inline-block"></span></li>
    <li><label for ="q14">\( \sum_{i=1}^{10} i^2 =  \)</label><input type="text" id="q14" data-answer="385" /> <span id="q14c" style="display:inline-block"></span></li>
</ol>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 3. Multiple Summations

Work from right to left, expanding the inner-most summation first.

<ol>
    <li><label for ="q41">\( \sum_{i=1}^{10} \sum_{j=1}^{10} 1 = \)</label><input type="text" id="q41" data-answer="100" /> <span id="q41c" style="display:inline-block"></span></li>
    <li><label for ="q42">\( \sum_{i=1}^{10} \sum_{j=1}^{10} j = \)</label><input type="text" id="q42" data-answer="550" /> <span id="q42c" style="display:inline-block"></span></li>
    <li><label for ="q43">\( \sum_{i=1}^{10} \sum_{j=1}^{10} i = \)</label><input type="text" id="q43" data-answer="550" /> <span id="q43c" style="display:inline-block"></span></li>
</ol>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>


##### 4. Tricky Summations

Solve the following:

<ol>
    <li><label for ="q22">\( \sum_{i=1}^{10} \sum_{j=1}^{10} 1 = \)</label><input type="text" id="q22" data-answer="100" /> <span id="q22c" style="display:inline-block"></span></li>
    <li><label for ="q22">\( \sum_{i=1}^{10} \sum_{j=1}^{i} j = \)</label><input type="text" id="q22" data-answer="220" /> <span id="q22c" style="display:inline-block"></span></li>
    <li><label for ="q21">\( \sum_{i=1}^{10} 2i^2 + 4i + 3  = \)</label><input type="text" id="q21" data-answer="817" /> <span id="q21c" style="display:inline-block"></span></li>
</ol>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


---

## Summary

In this section we have learned about summation and how to work with sigma notation.

* You should be able to interpret sigma notation
* You should be able to solve equations that involve summations
* You should be able to apply the two summation formulas described above

Once you've answered the questions above you can move on to the [challenges for this topic](../algorithms-challenges/)