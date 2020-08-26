---
title: Binary Arithmatic
permalink: /course/binary-arithmatic/
---

We will learn how about binary arithmatic

Watch the video and then answer the questions below.

## Fourteen-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

* To write a negative number in binary, use the twos compliment
* To subtract, just perform addition with negative numbers

### Binary Addition

Write the two numbers above each other. Working from right to left, add the columns of digits, carrying numbers to the next column as required.

      101
    + 011
     ----
     1000

### Twos Compliment

To go from a positive number to a negative number, e.g. from `5` to `-5`, you perform two steps:

1. Invert each bit, (a 0 becomes a 1, a 1 becomes a 0)
2. Add 1x

So we go from `0101`, invert it to `1010`, and add `1` to get `1011`. Using the twos compliment method, `1011` is `-5`.

### Binary Subtraction

To perform `a - b`, first take the twos compliment of `b`, and add it to `a`. For example, to do `0101 - 0101` (assuming we're storing numbers as 4 bits), we take the twos compliment of `101`, getting `1011`, as above.

       101
    + 1011
     -----
     10000

We're working with 4-bits, so we strike off the first number, leaving `0000`.

---

## Questions

### 1. Check your understanding

Use pen and paper to simplify the following expressions, then check your answers here.

1. <label for ="q1">1010 + 1101</label> <input type="text" id="q1" />
2. <label for ="q2">1011 + 111</label> <input type="text" id="q2" />
3. <label for ="q3">1111 - 1010</label> <input type="text" id="q3" />
4. <label for ="q4">1110 – 101</label> <input type="text" id="q4" />
5. <label for ="q5">1101 * 101</label> <input type="text" id="q5" />
6. <label for ="q6">1001 / 101</label> <input type="text" id="q6" />

---

## Summary

In this section we learned how to do arithmatic with binary numbers. In the next section we will discover [bitwise operators](../bitwise-operators/) in Python.