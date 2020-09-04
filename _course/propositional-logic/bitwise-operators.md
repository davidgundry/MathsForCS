---
title: Bitwise Operators
permalink: /course/bitwise-operators/
---

Bitwise operators let you apply logical operations to binary numbers, by applying them per binary bit.

Watch the video and then answer the questions below.

## Five-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

Bitwise operators are like logical operators that are applied _per bit_. While logical operators take a pair of truth values and return a truth value, bitwise operators take a pair of binary values and return a binary value.

Bitwise AND takes two operands `a` and `b`, and return a value `c` that is determined by applying logical conjunction to each bit in turn.

For example, imagine we had the 4-bit binary numbers `0011` and `1010`. Bitwise AND would apply logical conjunction on each bit, and return either 1 or 0 for that bit. Similarly for bitwise OR and XOR.

|   |   |   |   |   | 
|-- | - | - | - | - |
| **a** | 0 | 0 | 1 | 1 |
| **b** | 1 | 0 | 1 | 0 |
| **AND** | 0 | 0 | 1 | 0 |
| **OR**  | 1 | 0 | 1 | 1 |
| **XOR** | 1 | 0 | 0 | 1 |

---

## Bitwise Operators in Python

In Python, you can do bitwise operations using the following operators:

* `&` bitwise AND
* `|` bitwise OR
* `^` bitwise XOR

In the example below, we set two numerical values using the binary prefix `0b`. Then we print out the binary for each of the bitwise operations applied to these values.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSPropositionalLogicBitwiseOperators?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### Check your understanding

Solve the following, where bitwise operators are applied to a pair of bytes. Give your answers without using the binary prefix `0b`.

1. <label for ="q11">`10101010 & 01101001`</label> <input type="text" id="q11" data-answer="00101000"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">`01010111 | 10010011`</label> <input type="text" id="q12" data-answer="11010111"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">`11001100 ^ 00101011`</label> <input type="text" id="q13" data-answer="11100111"/> <span id="q13c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

Convert the following values from decimal into binary (you will want to pad the front with `0`s), and then perform the bitwise operator shown. Give your answers as 8-bit binary values without using a prefix.

1. <label for ="q21">`215 & 12`</label> <input type="text" id="q21" data-answer="00000100"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">`164 | 77`</label> <input type="text" id="q22" data-answer="11101101"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">`92 ^ 125`</label> <input type="text" id="q23" data-answer="00100001"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

For any value `a` between `0-255`, give the result of the following bitwise operations in decimal: 

1. <label for ="q31">`255 | a`</label> <input type="text" id="q31" data-answer="255"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">`a & 0`</label> <input type="text" id="q32" data-answer="0"/> <span id="q32c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

---

## Summary

In this section we learned how to use bitwise operators in Python. One you've completed the questions above, you're ready to move onto the [propositional logic challenges](../proposional-logic-challenges).