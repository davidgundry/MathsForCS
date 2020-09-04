---
title: Modular Arithmetic
permalink: /course/modular-arithmetic/
---

In this section we will learn more about modular arithmetic, including how it interacts with addition, subtraction, multiplication and division. These are mostly straightforward, except for division.

Watch the video and then answer the questions below.

## Ten-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

* Moduar arithmetic introduces the "congruance" relation. It is written using a triple equals symbol `≡`.
* Numbers are congruant modulo `n`, if after finding their modulus with `n`, you get the same answer. For example `1` and `7` are congruant modulo `6`

### Properties of Relations

* A relation `R` is **reflexive** if it is always true that `a R a`, no matter what `a` is.
* A relation `R` is **symmetric** if from `a R b` you can infer `b R a`.
* Given a relation `R`, say you know that `a R b` and `b R c` are both true. If `R` is **transitive**, then you can infer `a R c`.

### Additivity and Multiplicativity

* Both equality `=` and the congruance relation `≡` are additive and multiplicative.
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

Check all those properties that hold of  the relation `>` (greater than)

1. <input type="checkbox" id="q21" data-answer="false"/> <span id="q21c" style="display:inline-block"></span> <label for ="q21">reflexive</label> 
2. <input type="checkbox" id="q22" data-answer="false"/> <span id="q22c" style="display:inline-block"></span> <label for ="q22">symmetric</label> 
3. <input type="checkbox" id="q23" data-answer="true"/> <span id="q23c" style="display:inline-block"></span> <label for ="q23">transitive</label> 

Check all those properties that hold of the relation `≥` (greater or equal to)

1.  <input type="checkbox" id="q31" data-answer="true"/> <span id="q31c" style="display:inline-block"></span> <label for ="q31">reflexive</label>
2. <input type="checkbox" id="q32" data-answer="false"/> <span id="q32c" style="display:inline-block"></span> <label for ="q32">symmetric</label> 
3. <input type="checkbox" id="q33" data-answer="true"/> <span id="q33c" style="display:inline-block"></span> <label for ="q33">transitive</label> 

Check all those properties that hold of the relation `≡` (congruant modulo n)

1.  <input type="checkbox" id="q41" data-answer="true"/> <span id="q41c" style="display:inline-block"></span> <label for ="q41">reflexive</label>
2.  <input type="checkbox" id="q42" data-answer="true"/> <span id="q42c" style="display:inline-block"></span> <label for ="q42">symmetric</label>
3. <input type="checkbox" id="q43" data-answer="true"/> <span id="q43c" style="display:inline-block"></span> <label for ="q43">transitive</label> 

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2','q3','q4')">Check Answers</a>

---

## Summary

In this section we have learned about various properties of arithmatic and modular arithmatic. In the next section we will learn about modular division, using the [modular inverse](../modular-inverse)