---
title: Measures of Central Tendancy
permalink: /course/central-tendancy/
---

In this section we're going to gain an overview of statistics, what it is and ways in which it is used.

## Seven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

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

In this section we have learned about measures of central tendancy. In the next section we learn about [measures of spread](../spread/).