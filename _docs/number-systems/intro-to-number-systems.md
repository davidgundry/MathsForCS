---
title: Number Systems
permalink: /docs/intro-to-number-systems/
---

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)


## Working with bases in Python

In Python, 

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmaticModulusDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## Questions

### 1. Check your understanding

Use Python to help you

1. What is the biggest binary number you can write using 5 bits?
2. What is the biggest binary number you can write using n bits?

Decode the following encoded ASCII text:

3. 6d 61 74 68 73 (maths)
4. 01111001 01110011 01101010  (ysj)
5. 112 121 116 104 111 110 (python)

6. On paper, find the decimal value of 0xA4E001, showing your working. Calculate the numerical value for each digit separately, and then sum them together. Check your answer using Python.

7. Octal is a number system that uses base 8. How many symbols does octal have?
8. How many octal digits would be required to represent 1 byte?
9. How many bits are required to store the decimal value 500?
10. For a given positive integer n, how many bits are required to store it?
11. In C an unsigned short (integer) is stored using 2 bytes. The lowest value it can store is 0. What is the largest value it can store? (65,535)
12. In C an unsigned long (integer) can store values from 0 to 18446744073709551615. How many bytes does it use? (8)
13. A program generates a plain text file containing 142 ASCII characters. How large is the file in bytes?

### 2. Colours on the Web

1. Colours on the web are stored as the combintion of three values: red, green, and blue. They are written using a hexadecimal string, for example #FF0000 is bright red. What is the range of possible values of each channel, in decimal?

In computer graphics colours often include a fourth ‘alpha’ channel, representing the colour’s opacity. 00 is transparent, FF is opaque.
2. How many bytes does it take to store such a colour?
3. A file stores the raw data for a picture with a width of10 pixels and a height of 10 pixels. If the colour of each pixel was stored separately, and includes an alpha channel, how large would the file be, in bytes?

## Summary

In this section we have learned about different number systems. In the next section we will find out how to [convert between these different bases](./bases/).