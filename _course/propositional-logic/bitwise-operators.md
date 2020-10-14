---
title: Bitwise Operators
permalink: /course/bitwise-operators/
---

Bitwise operators let you apply logical operations to binary numbers, by applying them per binary bit. They are not often used very often, but every now and then they come in very handy. For example, sometimes you might want to store multiple variables as a single binary number (e.g. instead of 8 different booleans) in order to minimise your memory footprint. 

Watch the video and then answer the questions below.

## Video not yet available

---

## Key Points

Bitwise operators are like logical operators that are applied _per bit_. While logical operators take a pair of truth values and return a truth value, bitwise operators take a pair of binary values and return a binary value.

**Bitwise AND** takes two operands `a` and `b`, and return a value `c` that is determined by applying logical conjunction to each bit in turn.

For example, imagine we had the 4-bit binary numbers `0011` and `1010`. Bitwise AND would apply logical conjunction on each bit, and return either 1 or 0 for that bit. Similarly for bitwise OR and XOR.

|   |   |   |   |   | 
| **a** | 0 | 0 | 1 | 1 |
| **b** | 1 | 0 | 1 | 0 |
|-- | - | - | - | - |
| **AND** | 0 | 0 | 1 | 0 |
| **OR**  | 1 | 0 | 1 | 1 |
| **XOR** | 1 | 0 | 0 | 1 |

Bit shifts just shift all the bits left and right. There are multiple ways in which shifts can work: sometimes they shift in 0. Sometimes right shifts shift in the sign bit (i.e. -1 for negative). You can also get circular shifts (where the numbers wrap around) - it depends on your platform.

|   |   |   |   |   | 
| **a** | 0 | 0 | 1 | 1 |
|-- | - | - | - | - |
| **LEFT SHIFT** | 0 | 1 | 1 | 0 |
| **RIGHT SHIFT** | 0 | 0 | 0 | 1 |

---

## Bitwise Operators in Java

In Java, you can do bitwise operations using the following operators:

* `&` bitwise AND
* `|` bitwise OR
* `^` bitwise XOR
* `~` bitwise NOT
* `<< n` left shift by n
* `>> n` right shift by n

In the example below, we set two numerical values using the binary prefix `0b`. Then we print out the binary for each of the bitwise operations applied to these values.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSPropositionalLogicBitwiseJava?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Bitwise Operators in Python

In Python, you can do bitwise operations using the following operators:

* `&` bitwise AND
* `|` bitwise OR
* `^` bitwise XOR
* `~` bitwise NOT
* `<< n` left shift by n
* `>> n` right shift by n

In the example below, we set two numerical values using the binary prefix `0b`. Then we print out the binary for each of the bitwise operations applied to these values.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSPropositionalLogicBitwiseOperators?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

##### 1. Logical Operators

Solve the following, where bitwise operators are applied to a pair of bytes. Give your answers without using the binary prefix `0b`.

1. <label for ="q11">`10101010 AND 01101001`</label> <input type="text" id="q11" data-answer="00101000"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">`01010111 OR 10010011`</label> <input type="text" id="q12" data-answer="11010111"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">`11001100 XOR 00101011`</label> <input type="text" id="q13" data-answer="11100111"/> <span id="q13c" style="display:inline-block"></span>
3. <label for ="q14">`NOT 00101010`</label> <input type="text" id="q14" data-answer="11010101"/> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

Convert the following values from decimal into binary (you will want to pad the front with `0`s), and then perform the bitwise operator shown. Give your answers as 8-bit binary values without using a prefix.

1. <label for ="q21">`215 AND 12`</label> <input type="text" id="q21" data-answer="00000100"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">`164 OR 77`</label> <input type="text" id="q22" data-answer="11101101"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">`92 XOR 125`</label> <input type="text" id="q23" data-answer="00100001"/> <span id="q23c" style="display:inline-block"></span>
3. <label for ="q24">`NOT 64`</label> <input type="text" id="q24" data-answer="10111111"/> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

For any value `a` between `0-255`, give the result of the following bitwise operations in decimal: 

1. <label for ="q31">`255 OR a`</label> <input type="text" id="q31" data-answer="255"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">`a AND 0`</label> <input type="text" id="q32" data-answer="0"/> <span id="q32c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 2. Bit Shifts

Assume `<< n` and `>> n` shift left and right by n, and that replacment values are always 0.

1. <label for ="q41">`10101010 << 2`</label> <input type="text" id="q41" data-answer="10101000"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">`01010111 >> 3`</label> <input type="text" id="q42" data-answer="00001010"/> <span id="q42c" style="display:inline-block"></span>

Without converting to binary, work out the answers to these. Give your answers in decimal.

1. <label for ="q43">`64 >> 2`</label> <input type="text" id="q43" data-answer="16"/> <span id="q43c" style="display:inline-block"></span>
2. <label for ="q44">`128 << 1`</label> <input type="text" id="q44" data-answer="256"/> <span id="q44c" style="display:inline-block"></span>
3. <label for ="q45">`(32 << 1) >> 2`</label> <input type="text" id="q45" data-answer="16"/> <span id="q45c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>
<script src="/assets/check.js"></script>


---

## Summary

In this section we learned how to use bitwise operators.

* You should be able to apply bitwise AND, OR and XOR, and left and right bit shifts both by hand and using Python.
* You should know that left shift on a binary number does multiplication by 2, and right shift on a binary number  does integer division by 2.

One you've completed the questions above, you're ready to move onto the [propositional logic challenges](../propositional-logic-challenges).