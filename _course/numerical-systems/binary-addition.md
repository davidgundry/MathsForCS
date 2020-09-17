---
title: Binary Addition
permalink: /course/binary-addition/
---

Computers don't just store numbers in binary - they do stuff with them. We will learn how to do **binary addition and subtraction**. In order to do subtraction, we also need to learn **how to write negative numbers** in binary using **Two's Compliment**.

The point of learning this stuff is so you really understand how working with binary works. After all, computers do it quite a lot. 

Watch the video and then answer the questions below.

## Eight-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/W1Nh6ZFgWwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/W1Nh6ZFgWwU)

---

## Key Points

* All binary artithmatic in computers is performed using addition.
* To subtract, e.g. `4-3`, just do addition with negative numbers, e.g. `4 + (-3)`
* Negative numbers in binary are written using **Two's Compliment**. You must decide in advance how many bits you are going to use to store them.

### Binary Addition

Write the two numbers above each other. Working from right to left, add the columns of digits, carrying numbers to the next column as required.

      101
    + 011
     ----
     1000

### Twos Compliment

To go from a positive number to a negative number, e.g. from `5` to `-5`, you perform two steps:

1. Invert each bit, (a 0 becomes a 1, a 1 becomes a 0)
2. Add 1

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

Use pen and paper to solve the following expressions then check your answers here.

Write your answers in binary. Do not use a prefix or any leading zeroes in your answers.

##### 1. Addition

1. <label for ="q11">1010 + 1101</label> <input type="text" id="q11" data-answer="10111"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">1011 + 111</label> <input type="text" id="q12" data-answer="10010"/> <span id="q12c" style="display:inline-block"></span>
2. <label for ="q13">110 + 101</label> <input type="text" id="q13" data-answer="1011"/> <span id="q13c" style="display:inline-block"></span>
3. <label for ="q14">11 + 10110</label> <input type="text" id="q14" data-answer="11001"/> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Two's Compliment

Convert these numbers into their two's compliment. Assume we're working with numbers stored using 4 bits. 

1. <label for ="q31">0010</label> <input type="text" id="q31" data-answer="1110"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">0111</label> <input type="text" id="q32" data-answer="1001"/> <span id="q32c" style="display:inline-block"></span>
3. <label for ="q33">1010</label> <input type="text" id="q33" data-answer="0110"/> <span id="q33c" style="display:inline-block"></span>
4. <label for ="q34">1011</label> <input type="text" id="q34" data-answer="0101"/> <span id="q34c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>


##### 3. Subtraction

Assume we're working with numbers stored using 4 bits. Negative numbers are stored using Two's Compliment

1. <label for ="q21">0011 - 0010</label> <input type="text" id="q21" data-answer=""/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">0110 – 0111</label> <input type="text" id="q22" data-answer=""/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">1111 - 1010</label> <input type="text" id="q23" data-answer=""/> <span id="q23c" style="display:inline-block"></span>
4. <label for ="q24">1110 – 101</label> <input type="text" id="q24" data-answer=""/> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


---

## Summary

In this section we learned how to do addition and subtraction with binary numbers.

* You should be able to find the Two's Compliment of a binary number.
* You should be able to add and subtract numbers in binary.

In the next section we will learn [binary multiplication and division](../binary-multiplication/).