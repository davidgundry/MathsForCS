---
title: Measures of Central Tendancy
permalink: /course/central-tendancy/
---

In this section, we're going to learn about measures of central tendancy, very common measures used to describe datasets.

### Video not yet available

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

## Questions

### 1. Check your understanding

### 2. Central tendancy functions
Write the functions `mean()`, `median()`, and `mode()` to calculate the mean, median, and mode of an array of numbers. You may use Python’s inbuilt sorting.

### 3. Weighted averages
A weighted average can be calculated by multiplying each number by a weight and summing the result.  Write a function `weighted_average()` that takes an array of numbers and an array of weights and calculate the weighted average. You can assume the weights sum to 1.

### 4. Calculating mean again, but differently

Write a function to calculate the mean of an array of numbers without making reference to the length of the array. Use a for loop to iterate through the numbers in the array one by one.

### 5. Harmonic Mean

The **harmonic mean** is a measure of central tendency that is often more robust to outliers than the 'normal' mean (also known as the _arithmetic mean_). Write a function which calculates the harmonic mean of an array of numbers

### 6. Challenge 

Sometimes you do not have access to all of the numbers at once. For example, if you are calculating the mean “live” from e.g. sensor readings, or if you do not have space in memory to store all of the values.

* You have a datafile that stores sensor readings in raw bytes. Each reading is stored as one byte.
* Complete the provided code to calculate the mean one value at a time
* Extra challenge: Adapt the provided code to calculate the mode

## Summary

In this section we have learned about measures of central tendancy.

* You should be able to calculate mean, median, and mode.
* You should understand why measures of central tendancy are used.

In the next section we learn about [measures of spread](../spread/).