---
title: Numerical Systems
permalink: /course/intro-to-numerical-systems/
---

A numerical system is a way of writing numbers. Here we're interested in three particular numerical systems: decimal (the one we're used to, with 10 digits), binary (with 2 digits), and hexadecimal (with 16 digits).

Watch the video and then answer the questions below.

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

* Binary, Decimal, and Hexadecimal are all numerical systems - ways of writing numbers.
* In decimal (base 10), each digit is either a unit, 10s, 100s, 1000s, etc. (powers of 10)
* In binary (base 2), each digit is either a unit, 2s, 4s, 8s, 16s, etc. (powers of 2)
* These are ordered largest to smallest. Units comes last.

### Converting from Binary to Decimal

To calculate the decimal value of a binary number, work out the multiplier for each digit. Multiply the binary digit by the multiplier, and sum together. 

| bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| - | - | - | - | - | - | - | - | - |
| power | 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| decimal | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

    01001101
    = 1 * 64 + 1 * 8 + 1 * 4 + 1 * 1
    = 77

---

## Working with bases in Python

In Python, we can write numbers in different bases using a prefix:

1. `0b` is binary, e.g. 0b11
2. `0o` is octal, e.g. 0o77
3. `0x` is hexadecimal, e.g. 0xFF

To convert a binary string to decimal, you can use the `int` function, passing 2 as the base:

    int("01", 2) # outputs 1

To convert a number to its binary, octal, or hexadecimal representaiton, use the built-in `bin`, `oct` and `hex` functions.

Have a play with the demo below:

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmaticModulusDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

Once you've got an answer for each question, click the button marked "Check Answers" below.

Use Python to help you.

##### 1. Conversions

1. <label for ="q1">What is the biggest number you can write using 5 binary digits?</label> <input type="text" id="q1" data-answer="32" /> <span id="q1c" style="display:inline-block"></span>
2. <label for ="q2">What is the biggest number you can write using n binary digits?</label> <input type="text" id="q2" data-answer="2^n" /> <span id="q2c" style="display:inline-block"></span>

##### 2. ASCII

Convert each of the folowing numbers into the corresponsing ASCII symbol. [This reference table](https://www.ascii-code.com/) may help you:

3. <label for ="q3">6d 61 74 68 73</label> <input type="text" id="q3" data-answer="maths" /> <span id="q3c" style="display:inline-block"></span>
4. <label for ="q4">01111001 01110011 01101010</label> <input type="text" id="q4" data-answer="ysj" /> <span id="q4c" style="display:inline-block"></span>
5. <label for ="q5">112 121 116 104 111 110</label> <input type="text" id="q5" data-answer="python" /> <span id="q5c" style="display:inline-block"></span>

##### 3. Octal

6. <label for ="q6">Octal is a number system that uses base 8. How many symbols does octal have?</label> <input type="text" id="q6" data-answer="8" /> <span id="q6c" style="display:inline-block"></span>
7. <label for ="q7">What is 864 in octal?</label> <input type="text" id="q7" data-answer="1540" /> <span id="q7c" style="display:inline-block"></span>
8. <label for ="q8">How many octal digits would be required to represent 1 byte?</label> <input type="text" id="q8" data-answer="3" /> <span id="q8c" style="display:inline-block"></span>

##### 4. Bits and peices

9. <label for ="q9">How many bits are required to store the decimal value 500?</label> <input type="text" id="q9" data-answer="9" /> <span id="q9c" style="display:inline-block"></span>
10. <label for ="q10">In C an unsigned short (integer) is stored using 2 bytes. The lowest value it can store is 0. What is the largest value it can store?</label> <input type="text" id="q10" data-answer="65535" /> <span id="q10c" style="display:inline-block"></span>
11. <label for ="q11">In C an unsigned long (integer) can store values from 0 to 18446744073709551615. How many bytes does it use?</label> <input type="text" id="q11" data-answer="8" /> <span id="q11c" style="display:inline-block"></span>
12. <label for ="q12">A program generates a plain text file containing 142 8-bit ASCII characters. How large is the file in bytes?</label> <input type="text" id="q12" data-answer="142" /> <span id="q12c" style="display:inline-block"></span>

##### 5. Colours on the Web

13. <label for ="q13">Colours on the web are stored as the combintion of three values: red, green, and blue. They are written using a hexadecimal string, for example #FF0000 is bright red. What is the highest value possible for a channel, in decimal?</label>  <input type="text" id="q13" data-answer="255" /> <span id="q13c" style="display:inline-block"></span>

In computer graphics colours often include a fourth ‘alpha’ channel, representing the colour’s opacity. 00 is transparent, FF is opaque.

14. <label for ="q14">How many bytes does it take to store such a colour?</label> <input type="text" id="q14" data-answer="4" /> <span id="q14c" style="display:inline-block"></span>
15. <label for ="q15">A file stores the raw data for a picture with a width of 10 pixels and a height of 10 pixels. If the colour of each pixel was stored separately, and includes an alpha channel, how large would the file be, in bytes?</label> <input type="text" id="q15" data-answer="400" /> <span id="q15c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','q13','q14','q15')">Check Answers</a>
<script src="/assets/check.js"></script>


### 2. On paper

Find the decimal value of 0xA4E001, showing your working. Calculate the numerical value for each digit separately, and then sum them together. Check your answer using Python.


---

## Summary

In this section we have learned about different number systems. We know how to interpret a number written in binary (base 2), hexadecimal(base 16), or any other base. In the next section we will find out how to [convert between these different bases](./bases/).