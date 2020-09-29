---
title: Modular Arithmetic
permalink: /course/modular-arithmetic/
---

In this section we will learn more about **modular arithmetic**, including how it interacts with **addition, subtraction, multiplication and division**. These are mostly straightforward, except for division. We'll leave that one for later.

Watch the video and then answer the questions below.

## Twelve-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/aCkqf-HZfyU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/aCkqf-HZfyU)

---

## Key Points

* Modlar arithmatic applies to integers. For example, arithmatic modulo 4 just uses the numbers `{0, 1, 2, 3}`
* Moduar arithmetic introduces the **congruance** relation. It is written using a triple equals symbol `≡`.
* Numbers are **congruant modulo `n`**, if after finding their modulus with `n`, you get the same answer. For example `1` and `7` are congruant modulo 6, and `13` and `23` are congruant modulo 10.

### Properties of Relations

* A relation `R` is **reflexive** if it is always true that `a R a`, no matter what `a` is.
* A relation `R` is **symmetric** if from `a R b` you can infer `b R a`.
* Given a relation `R`, say you know that `a R b` and `b R c` are both true. If `R` is **transitive**, then you can infer `a R c`.

### Additivity and Multiplicativity

* Both equality `=` and the congruance relation `≡` are **additive and multiplicative**.
* **Additivity** means you can add the same value to both sides of an equation.
* **Multiplicativity** means that you can multiply both sides of an equation by the same value.
* With modular arithmatic, because you can add or multiply values that are not equal, so long as they are congruant.
* If you know `a ≡ b` and `c ≡ d`, you can infer that `a + c ≡ b + d`
* If you know `a ≡ b` and `c ≡ d`, you can infer that `a * c ≡ b * d`

### Simplifying modular expressions

You can simplify modular expressions in the following way, if the modulus is the same:

* `(a mod n) + (b mod n) = (a+b) mod n`
* `(a mod n) - (b mod n) = (a+b) mod n`
* `(a mod n) x (b mod n) = (a+b) mod n`.

---

## Questions

### 1. Check your understanding

##### 1. Simplifying modular expressions

Rewrite the following into the form: a mod b

1. <label for ="q11">(4 mod 8) + (22 mod 8)</label> <input type="text" id="q11" data-answer="26 mod 8"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">(1 mod 11) + (4 mod 11)</label> <input type="text" id="q12" data-answer="5 mod 11"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">(12 mod 4) – (3 mod 4 )</label> <input type="text" id="q13" data-answer="9 mod 4"/> <span id="q13c" style="display:inline-block"></span>
4. <label for ="q14">(65 mod 12) – (42 mod 12)</label> <input type="text" id="q14" data-answer="23 mod 12"/> <span id="q14c" style="display:inline-block"></span>
5. <label for ="q15">(6 mod 3) * (9 mod 3)</label> <input type="text" id="q15" data-answer="54 mod 3"/> <span id="q15c" style="display:inline-block"></span>
6. <label for ="q16">(2 mod 8) * (6 mod 8)</label> <input type="text" id="q16" data-answer="12 mod 8"/> <span id="q16c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Relations

Check all those properties that hold of the given relation.

| Relation | Reflexive | Symmetric | Transitive |
| -------- | --------- | --------- | ---------- |
|`>` (greater than) | <input type="checkbox" id="q21" data-answer="false"/> <span id="q21c" style="display:inline-block"></span> | <input type="checkbox" id="q22" data-answer="false"/> <span id="q22c" style="display:inline-block"></span> | <input type="checkbox" id="q23" data-answer="true"/> <span id="q23c" style="display:inline-block"></span> |
|`≥` (greater or equal to) | <input type="checkbox" id="q31" data-answer="true"/> <span id="q31c" style="display:inline-block"></span> | <input type="checkbox" id="q32" data-answer="false"/> <span id="q32c" style="display:inline-block"></span> | <input type="checkbox" id="q33" data-answer="true"/> <span id="q33c" style="display:inline-block"></span> |
|`≡` (congruant modulo n) | <input type="checkbox" id="q41" data-answer="true"/> <span id="q41c" style="display:inline-block"></span> | <input type="checkbox" id="q42" data-answer="true"/> <span id="q42c" style="display:inline-block"></span> | <input type="checkbox" id="q43" data-answer="true"/> <span id="q43c" style="display:inline-block"></span> |
|`=` (equals) | <input type="checkbox" id="q51" data-answer="true"/> <span id="q51c" style="display:inline-block"></span> | <input type="checkbox" id="q52" data-answer="true"/> <span id="q52c" style="display:inline-block"></span> | <input type="checkbox" id="q53" data-answer="true"/> <span id="q53c" style="display:inline-block"></span> |
|"is standing next to" | <input type="checkbox" id="q61" data-answer="false"/> <span id="q61c" style="display:inline-block"></span> | <input type="checkbox" id="q62" data-answer="true"/> <span id="q62c" style="display:inline-block"></span> | <input type="checkbox" id="q63" data-answer="false"/> <span id="q63c" style="display:inline-block"></span> |
|"is twice as tall as" | <input type="checkbox" id="q71" data-answer="false"/> <span id="q71c" style="display:inline-block"></span> | <input type="checkbox" id="q72" data-answer="false"/> <span id="q72c" style="display:inline-block"></span> | <input type="checkbox" id="q73" data-answer="false"/> <span id="q73c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2','q3','q4','q5','q6','q7')">Check Answers</a>

---

## Summary

In this section we have learned about various properties of arithmatic and modular arithmetic. 

* You should understand and be able to classify relations as **reflexive**, **symmetric**, and **transitive**
* You should be able to work with **addition, subtraction and multiplication** in modular arithmetic.

In the next section we will learn about modular division, using the [modular inverse](../modular-inverse)