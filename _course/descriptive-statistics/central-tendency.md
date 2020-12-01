---
title: Measures of Central Tendency
permalink: /course/central-tendency/
---

In this section, we're going to learn about measures of central tendancy, very common descriptive statistics used to describe datasets.

## Thirteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/wdRkqLkd7L0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/wdRkqLkd7L0)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

A measure of central tendancy tells you where the middle of your data is. There are all sorts of things you could consider the "middle" of your dataset, so there is more than one measure of central tendancy.

These work for numeric data.

* **Mean** - sum all and divide by the number \( \frac{\sum_{i=0}^{n} X_i}{n})
* **Median** - order the values and find the one in the middle. If there are an even number of values, find the mean of the two middle values.
* **Mode** - the most common value in the dataset

### Why are they used?

* Give an impression of what is a normal value in the data
* Compare two data sets to see if one is larger or smaller on average than the other
* Check whether a value is above or below the centre.

### Limitations
 
* By itself, measures of central tendency don't say anything about the _distribution_ of the data
* Just because one dataset is on average larger than another is not enough to conclude that there is a meaningful difference.

---

## Sorting in Java

To calculate the median, you need to have sorted data. You can use the `Arrays.sort()` method from the `java.util.Arrays` package. 

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSDescriptiveStatsJavaSort?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

1. <label for ="q1">Calculate the **mean** of the following data by hand: `1, 4, 3, 2, 2, 1, 1`</label> <input type="text" id="q1" data-answer="2"/> <span id="q1c" style="display:inline-block"></span>
2. <label for ="q2">Calculate the **mode** of the following data by hand: `4, 2, 1, 0, 1, 2, 3, 2`</label> <input type="text" id="q2" data-answer="2"/> <span id="q2c" style="display:inline-block"></span>
3. <label for ="q3">Calculate the **median** of the following data by hand: `1, 2, 3, 4, 5`</label> <input type="text" id="q3" data-answer="3"/> <span id="q3c" style="display:inline-block"></span>
3. <label for ="q4">Calculate the **median** of the following data by hand: `2, 4, 1, 2, 3, 4`</label> <input type="text" id="q4" data-answer="2.5"/> <span id="q4c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1', 'q2', 'q3', 'q4')">Check Answers</a>
<script src="/assets/js/check.js"></script>

### 2. Implementing in Code

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSDescriptiveStatsCentralTendancyJava?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

A Replit project is available [in Python](https://repl.it/@davidgundry/MathsForCSMeasuresOfCentralTendency#main.py) and [model answers for Python](https://repl.it/@davidgundry/MathsForCSMeasuresOfCentralTendencyModelAnswer#main.py) are also available.

#### 1. Central tendancy functions
Write the functions `double mean(double[] arr)`, `double median(double[] arr)`, and `double mode(double[] arr)` to calculate the mean, median, and mode of an array of numbers. You may use Java's inbuilt sorting.

#### 2. Weighted averages
A weighted average can be calculated by multiplying each number by a weight and summing the result.  Write a function `double weightedAverage(double[] arr)` that takes an array of numbers and an array of weights and calculate the weighted average. You can assume the weights sum to 1.

#### 3. Calculating mean again, but differently

Write a function to calculate the mean of an array of numbers **without making reference to the length of the array**. Use a for loop to iterate through the numbers in the array one by one.

#### 4. Harmonic Mean

The **harmonic mean** is a measure of central tendency that is often more robust to outliers than the 'normal' mean (also known as the _arithmetic mean_). Write a function which calculates the harmonic mean of an array of numbers

## Summary

In this section we have learned about measures of central tendancy.

* You should be able to calculate mean, median, and mode.
* You should understand why measures of central tendancy are used.

In the next section we learn about [measures of spread](../spread/).