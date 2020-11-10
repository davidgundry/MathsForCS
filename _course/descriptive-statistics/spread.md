---
title: Measures of Spread
permalink: /course/spread/
---

In this section we're going to learn about measures of spread, measures that tell us how spread out or bunched up our data is.

## Seven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


## Key Points

Measures of spread tell us how spread out our data is.

* Range - difference between highest and lowest value
* Inter-quartile range - difference between upper and lower quartiles

### Why are they used?

* Is our data mostly clustered around the mean, or spread out?
* Does one data set vary more than another?

### Limitations

* Measures of spread don't tell us everthing about the distribution of our data if it doesn't have a parametric distribution.

### Variance

Variance (\\( \sigma^2 \\)) is the square of average difference between a value and the mean of our data, divided by the size of our dataset

<p class="math">\( \sigma^2 = \frac{\sum_{i=1}^{n}(x_i - \overline{x})^2}{n} \)</p>

Where:
* \\( n \\) is the size of our dataset
* \\( x_i \\) is the \\( i \\)th data point of our dataset
* \\( \overline{x} \\) is the mean of all the data points.

### Standard Deviation

Standard deviation is a common measure of spread that is used in the calculation of other statistics. It is closely related to variance and the calculation is nearly the same.

<p class="math">\( SD = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \overline{x})^2}{n - 1}} \)</p>

### Normal Distribution

A normal distribution is a parametric distribution. That means it can be modeled by parameters.

A normal distribution is modeled by the mean and the standard deviation.

Parametric data is easier to work with than non-parmetric data, especially for inferential statistics.


---

## Questions

### 1. Check your understanding

### 2. Measures of spread functions
1. Write a function that takes an array of numbers and calculates their range
2. Write a function that takes an array of numbers and calculates their IQR
3. Write a function that takes an array of numbers and calculates their standard deviation

---

## Summary

In this section we have learned about measures of spread.

* You should be able to calculate the range and inter-quartile range of a dataset.
* With reference to the formulas, you should be able to calculate the variance and the standard deviation of a dataset.
* You should understand why measures of spread are used.

In the next section we learn about [data visualisation](../data-visualisation/).