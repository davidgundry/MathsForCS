---
title: Measures of Spread
permalink: /course/spread/
---

In this section we're going to learn about measures of spread, measures that tell us how spread out or bunched up our data is.

## Thirteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/a6u8GKgLIU4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/a6u8GKgLIU4)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


## Key Points

Measures of spread tell us how spread out our data is.

* **Range** - difference between highest and lowest value
* **Inter-quartile range (IQR)** - difference between upper and lower quartiles

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

There are two ways to calculate it, depending on whether \(( x \\) is a _sample_ or a _population_. A population is all of the data there could be (e.g. the height of everyone in the world), and a sample is a subset of the population (e.g. the height of everyone in your study).

The standard deviation of a **sample** is calculated as follows:

<p class="math">\( SD = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \overline{x})^2}{n - 1}} \)</p>

The standard deviation of a **population** is calculated as follows:

<p class="math">\( SD = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \overline{x})^2}{n}} \)</p>


---

## Questions

### 1. Check your understanding

1. <label for ="q1">Calculate the **range** of the following data by hand: `3, 66, 32, 64, 23, 11, 4`</label> <input type="text" id="q1" data-answer="63"/> <span id="q1c" style="display:inline-block"></span>
2. <label for ="q2">Calculate the **inter-quartile range** of the following data by hand: `1, 2, 3, 4, 5`</label> <input type="text" id="q2" data-answer="2"/> <span id="q2c" style="display:inline-block"></span>

Given the following data, answer the questions below:  `3, 5, 5, 6, 7, 8, 8, 9`

1. <label for ="q3">What is the lower quartile?</label> <input type="text" id="q3" data-answer="5"/> <span id="q3c" style="display:inline-block"></span>
2. <label for ="q4">What is the upper quartile?</label> <input type="text" id="q4" data-answer="8"/> <span id="q4c" style="display:inline-block"></span>
3. <label for ="q5">What is the median?</label> <input type="text" id="q5" data-answer="6.5"/> <span id="q5c" style="display:inline-block"></span>
4. <label for ="q6">What is the inter-quartile range?</label> <input type="text" id="q6" data-answer="3"/> <span id="q6c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1', 'q2', 'q3', 'q4', 'q5', 'q6')">Check Answers</a>
<script src="/assets/js/check.js"></script>

### 2. Implementing in Code

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSDescriptiveStatsSpread?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### 1. Range

Write a function `double range(double[] arr)` that takes an array of numbers and calculates their range.

#### 2. Inter-quartile Range

Write a function `double iqr(double[] arr)` that takes an array of numbers and calculates their inter-quartile range.

You might want to make use of some of your code from the last section for calculating the median.


---

## Summary

In this section we have learned about measures of spread.

* You should be able to calculate the range and inter-quartile range of a dataset.
* With reference to the formulas, you should be able to calculate the variance and the standard deviation of a dataset.
* You should understand why measures of spread are used.

In the next section we learn about [data visualisation](../data-visualisation/).