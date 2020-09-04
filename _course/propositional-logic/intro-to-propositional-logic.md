---
title: Propositional Logic
permalink: /course/intro-to-propositional-logic/
---

Propositional logic is a branch of logic that deals with propositions. A proposition is a statement like "John is tall", something that can either be true or false. Propositional logic lets us represent statements like this as letters, e.g. `p` and relate them to other statements using logical operators.

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points



---

## Questions

### 1. Check your understanding

##### 1. Truth Values 

Which propositions are equivalent to TRUE and which are equivalent to FALSE?

|    | Expression | True | False | |
|----| ------ | ------- | ----- | - |
| 1. | <label for ="q11">11 + 12 = 22</label>  | <input type="radio" name="q11" id="q11t" value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> |  <span id="q11c" style="display:inline-block"></span> |
| 2. | <label for ="q12">1<0</label> | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" value="f"/> |  <span id="q12c" style="display:inline-block"></span> |
| 3. | <label for ="q13">12 × 3 = 36</label>| <input type="radio" name="q13" id="q13t" value="t"/> | <input type="radio" name="q13" id="q13f" value="f"/> |  <span id="q13c" style="display:inline-block"></span> |
| 4. | <label for ="q14">(( 3 × 4 + 22) × 2) ≠ 112</label> | <input type="radio" name="q14" id="q14t" value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> |  <span id="q14c" style="display:inline-block"></span> |


##### 2. Atomic and Compound Propositions

Identify which of the following are atomic propositions and which are compound propositions:

|    | Expression | Atomic | Compound |
|----| ------ | ------- | ----- |
| 1. | <label for ="q21">Alice is older than 50</label>  | <input type="radio" name="q21" id="q21t" value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> |
| 2. | <label for ="q22">It is not the case that the earth is not flat</label> | <input type="radio" name="q22" id="q22t" value="t"/> | <input type="radio" name="q22" id="q22f" value="f"/> |
| 3. | <label for ="q23">(30 × 10) < 500</label>| <input type="radio" name="q23" id="q23t" value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> |
| 4. | <label for ="q24">If it is monday then I like pizza</label> | <input type="radio" name="q24" id="q24t" value="t"/> | <input type="radio" name="q24" id="q24f" value="f"/> |
| 5. | <label for ="q25">"Cat" is a three letter word</label> | <input type="radio" name="q25" id="q25t" value="t"/> | <input type="radio" name="q25" id="q25f" value="f"/> |
| 6. | <label for ="q26">I rolled a 1 on a six-sided die or I rolled a 6 on a six-sided die </label> | <input type="radio" name="q26" id="q26t" value="t"/> | <input type="radio" name="q26" id="q26f" value="f"/> |

##### 3. Negation

Calculate the truth values for the following:

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31">¬(3 + 7 = 10)</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> |
| 2. | <label for ="q32">¬("The earth is flat")</label> | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> |
| 3. | <label for ="q33">¬¬(3 + 1 = 10)</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> |
| 4. | <label for ="q34">¬(14 < 15)</label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> |
| 5. | <label for ="q35">((((6 + 4) − 3) × 2) − 4 = 10)</label> | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" value="f"/> |
| 6. | <label for ="q36">¬¬(23 = 8)</label> | <input type="radio" name="q36" id="q36t" value="t"/> | <input type="radio" name="q36" id="q36f" value="f"/> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2','q3')">Check Answers</a>

<script src="/assets/check.js"></script>

### 2. On paper

Give the negated form of each of the following:

1. FT212 is on the 2nd floor
2. Justin’s office is warm
3. n < y
4. my shoes fit my feet

The law of double negation states that the truth value of a proposition P is equivalent to the truth value of the proposition  ¬¬P. This can be written	¬¬P ⇔ P. Write out a truth table showing p, ¬P, and ¬¬P

---

## Summary

In this section we have learned about propositional logic. In the next section we will find out about [operators in propositional logic](./logical-operators/).