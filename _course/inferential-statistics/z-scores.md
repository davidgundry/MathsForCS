---
title: Z Scores
permalink: /course/z-scores/
---

Watch the video and then answer the questions below.

## Sixteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Ko2s180NBpg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Ko2s180NBpg)


---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

The general form of an inferential statistic is usually like this:

<p class="math">\[ \frac{\textrm{observed} - \textrm{expected}}{\textrm{typical variation}} \]</p>

This gives us a number which expresses the **difference from what we expected** proportional to **what variation we would typcially expect**.

Different **test statistics** are defined in this way, such as the z-statistic and the t-statistic. To interpret the liklihood of achiving a particular value, you need to look where that value falls on **the probability distribution for that statistic**.

The z-distribution is a normal distribution with a mean of 0 and a standard deviation of 1. So a z statistic of 2 is equivalent to being 2 standard deviations away from the mean, or in the most extreme 5% of the data.


### Picking a single value from a normal distribution

If you've caught a fish (a single value) and you want to compare its size to a population mean, then we use the following form of the formula:

<p class="math">\[ z = \frac{x - \mu}{\sigma} \]</p>

Where \\( x \\) is the size of the fish caught (obsered), and \\( \\mu \\) is the population mean (expected). Here our **sampling distribution** is the same as the population distribution (our observed value represents 1 fish, and our population is a population of fish). Therefore, the typical variation we expect is equal to \\( \\sigma \\), where \\( \\sigma \\) is the population standard deviation.

This gives a z-statistic which is interpreted using the z-distribution.

### Picking a group mean from a distribution of group means

Say we catch 100 fish and find the average size, and compare that average to the population mean. When we average over a group of fish, we are no longer sampling directly from the population of fish. Instead our **sampling distribution** is of **means of groups of fish**, (where \\( n \\) is our group size).

<p class="math">\[ z = \frac{\overline{X} - \mu}{\frac{\sigma}{\sqrt{n}}} \]</p>

This gives a z-statistic which is interpreted using the z-distribution.

---

## Questions

### 1. Check your understanding

---

## Summary

Once you've completed the questions, you can move on to the next section about [the t-test](../t-test/).