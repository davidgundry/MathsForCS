---
title: Challenges
permalink: /course/algorithms-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Algorithm Analysis

The goal is to analyse a given Java function to assess the efficieny of its algorithm. We will do this both empirically (by collecting data) and theoretically (by working out the time function).

The code we are going to be working with is in the Replit project below.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSAlgorithmsChallenge?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Part 1

First we want to work out what the function `myFunction` does. Look first to the `public static void main(String[] args)` method. This is where our code starts executing. Run the provided code and look at the output. What is the function `myFunction` doing? 

### Part 2

Uncomment this code in the project:

    for (int i=0;i<10;i++)
      System.out.println(timedCall(i*1000));

This will run `myFunction` repeatedly for different-size inputs, or `n`s from `0` to `10000`. It will print out the time taken in milliseconds. At what rate do these numbers seem to be increasing? From this, take a guess about the **time complexity** of the function (make a note of it and check your answer later). Copy and plot the numbers on a graph using _Excel_ or _Libre Office Calc_. (Note from Repl.it the data may be very noisy, if so, you might want to consider doing this multiple times and finding an average).

### Part 3

Analyse the `myFunction` algorithm to work out its time function in terms of the size of input `n`. You will also have some constant multiplier `c`, which is the time taken to perform the inner loop.

What is the time complexity of `myFunction`? (Remember, look for the highest-order term).

### Part 4

Use this function to generate values in _Excel_ or _Libre Office Calc_ for inputs of different sizes. Plot these values on a chart with the numbers you recorded earlier. They should have approximately the same curve. Now experiment with different values of `c` until you get a value that closely fits your recorded values.

Based on your findings, what is the time it would take to run this algorithm on the same computer where `z = 10<sup>10`.

### Part 5

Is this algorithm efficient? Look for a more efficient way of achieving the same goal. You may want to look [at question 2 in the lecture notes](../intro-to-algorithms/) (recommended), or look at this [extensive list](https://www.geeksforgeeks.org/sorting-algorithms/) (probably more challenging).

Implement your chosen algorithm (and check that it works!). Now analyse it again using the same methods we used above to find both the time complexity as well as a specific time function and constants for the computer you are running it on.
