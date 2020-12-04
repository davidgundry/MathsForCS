---
title: Student's T-Test
permalink: /course/t-test/
---

We are going to learn about a common inferential statistic called the Student's T-Test (it was published under the psedonym 'Student'). It is a so-called **parametric** test, becuase it assumes your data follows a **normal distribution**.

Watch the video and then answer the questions below.

## Thirty four-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Hh8wehA0HSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Hh8wehA0HSY)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

* The t-test calculates the T statistic
* The T statistic can be converted to a p-value by comparing it to the t-distribution
* The t-test assumes our data is normally distributed
* T-tests can compare only up to two groups

### One-sample and paired t-test

If we want to compare **a group mean** against a known value (e.g the population mean \\( \\mu \\)), or a mean of a group of differences with a known value (e.g. (\\(\\mu = 0\\)), we use the following formula:

<p class="math">\[ t = \frac{\overline{x} - \mu}{\frac{s}{\sqrt{n}}} \]</p>

We use the t-test (as opposed to the z-test) when we don't know the population standard deviation \\( \\sigma \\), so we use the sample standard deviation \\( s \\). Because of the uncertainty in calculating \\( s \\), we get a t-statistic instead of a z-statistic, and have to compare it on a t-distribution.

### Two-sample t-test

If we want to compare **a differences between group means** (\\(\overline{x}_1 - \overline{x}_2\\)) against an expected difference (e.g. 0 as in the formula below), we use the following formula:

<p class="math">\[ t = \frac{(\overline{x}_1 - \overline{x}_2) - 0 }{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \]</p>

Where \\( \\overline{x}_1 \\) and  \\( \\overline{x}_2 \\) are the means of the two groups,  \\( n_1 \\) and \\( n_2 \\) are the number of observations in the two groups, and \\( s_1 \\) and \\( s_2 \\) are the standard deviations of the two groups.


---

## Questions

### 1. Check your understanding

### 2. Implementing the T-Test

Write a function that takes two arrays of numbers and calculates the t-statistic.

Write a function that takes a t-statistic and the degrees of freedom and returns its p-value.

---

## Summary

In this section we have learned about sampling from a population and threats to validity involved. Once you've completed the questions, you can move on to the next section about [hypothesis testing](../hypothesis-testing/).