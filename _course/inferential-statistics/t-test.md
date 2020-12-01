---
title: Student's T-Test
permalink: /course/t-test/
---

We are going to learn about a common inferential statistic called the Student's T-Test (it was published under the psedonym 'Student'). It is a so-called **parametric** test, becuase it assumes your data follows a **normal distribution**.

Watch the video and then answer the questions below.

## Video not yet available

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

* The t-test calculates the T statistic
* The T statistic can be converted to a p-value
* The t-test assumes our data is normally distributed

<p class="math">\[ t = \frac{\overline{x}_1 - \overline{x}_2}{\sqrt{s^2 (\frac{1}{n_1} + \frac{1}{n_2})}} \]</p>

Where \\( \\overline{x}_1} \\) and  \\( \\overline{x}_2} \\) are the means of the two groups,  \\( n_1 \\) and \\( n_2 \\) are the number of observations in the two groups, and \\( s_2 \\) is the pooled standard error.


---

## Questions

### 1. Check your understanding

### 2. Implementing the T-Test

Write a function that takes two arrays of numbers and calculates the t-statistic.

Write a function that takes a t-statistic and the degrees of freedom and returns its p-value.

---

## Summary

In this section we have learned about sampling from a population and threats to validity involved. Once you've completed the questions, you can move on to the next section about [hypothesis testing](../hypothesis-testing/).