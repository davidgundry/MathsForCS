---
title: Propositional Logic
permalink: /course/intro-to-propositional-logic/
---

Propositional logic is a branch of logic that deals with **propositions**. A proposition is a statement like "John is tall", something that can either be **true or false**. Propositional logic lets us represent statements like this as letters, e.g. `p` and work with them and relate them to other statements using logical operators and relations.

## Six-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/e93Lgf0Y9jo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/e93Lgf0Y9jo)


---

## Key Points

* **Propositions** are statements that are either true or false
* A proposition is called **atomic** if its truth or falsity is not dependant on any other proposition. For example, `Mary is tall`
* A **compound proposition** does depend on other propositions for truth or falsity. For example `Mary is not tall`, which is composed of the atomic proposition `Mary is tall` along with negation.
* **Negation** (written `¬`) is a logical operation that flips truth values. The negation of a true proposition is false, and vice-versa.

---

## Questions

### 1. Check your understanding

##### 1. Truth Values 

Which propositions are equivalent to TRUE and which are equivalent to FALSE?

|    | Expression | True | False | |
|----| ------ | ------- | ----- | - |
| 1. | <label for ="q11">11 + 12 = 22</label>  | <input type="radio" name="q11" id="q11t" value="t"/> | <input type="radio" name="q11" id="q11f" data-answer value="f"/> |  <span id="q11c" style="display:inline-block"></span> |
| 2. | <label for ="q12">1<0</label> | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" data-answer  value="f"/> |  <span id="q12c" style="display:inline-block"></span> |
| 3. | <label for ="q13">12 × 3 = 36</label>| <input type="radio" name="q13" id="q13t" data-answer value="t"/> | <input type="radio" name="q13" id="q13f" value="f"/> |  <span id="q13c" style="display:inline-block"></span> |
| 4. | <label for ="q14">(( 3 × 4 + 22) × 2) ≠ 112</label> | <input type="radio" name="q14" id="q14t" data-answer value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> |  <span id="q14c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>


##### 2. Atomic and Compound Propositions

Identify which of the following are atomic propositions and which are compound propositions:

|    | Expression | Atomic | Compound |
|----| ------ | ------- | ----- |
| 1. | <label for ="q21">Alice is older than 50</label>  | <input type="radio" name="q21" id="q21t" data-answer value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <span id="q21c" style="display:inline-block"></span> |
| 2. | <label for ="q22">It is not the case that the earth is not flat</label> | <input type="radio" name="q22" id="q22t" value="t"/> | <input type="radio" name="q22" id="q22f" data-answer value="f"/> | <span id="q22c" style="display:inline-block"></span> |
| 3. | <label for ="q23">(30 × 10) < 500</label>| <input type="radio" name="q23" id="q23t" data-answer value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> | <span id="q23c" style="display:inline-block"></span> |
| 4. | <label for ="q24">If it is monday then I like pizza</label> | <input type="radio" name="q24" id="q24t" value="t"/> | <input type="radio" name="q24" id="q24f" data-answer value="f"/> | <span id="q24c" style="display:inline-block"></span> |
| 5. | <label for ="q25">"Cat" is a three letter word</label> | <input type="radio" name="q25" id="q25t" data-answer value="t"/> | <input type="radio" name="q25" id="q25f" value="f"/> |  <span id="q25c" style="display:inline-block"></span> |
| 6. | <label for ="q26">I rolled a 1 on a six-sided die or I rolled a 6 on a six-sided die </label> | <input type="radio" name="q26" id="q26t" value="t"/> | <input type="radio" name="q26" id="q26f" data-answer value="f"/> | <span id="q26c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


##### 3. Negation

Calculate the truth values for the following:

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31">¬(3 + 7 = 10)</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" data-answer value="f"/> | <span id="q31c" style="display:inline-block"></span> |
| 2. | <label for ="q32">¬("The earth is flat")</label> | <input type="radio" name="q32" id="q32t" data-answer value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> | <span id="q32c" style="display:inline-block"></span> |
| 3. | <label for ="q33">¬¬(3 + 1 = 10)</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" data-answer  value="f"/> | <span id="q33c" style="display:inline-block"></span> |
| 4. | <label for ="q34">¬(14 < 15)</label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" data-answer value="f"/> | <span id="q34c" style="display:inline-block"></span> |
| 5. | <label for ="q35">¬((((6 + 4) − 3) × 2) − 4 = 10)</label> | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" data-answer value="f"/> | <span id="q35c" style="display:inline-block"></span> |
| 6. | <label for ="q36">¬¬(23 = 8)</label> | <input type="radio" name="q36" id="q36t" value="t"/> | <input type="radio" name="q36" id="q36f" data-answer value="f"/> | <span id="q36c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 4. Double Negation

Complete the following table with either `T` or `F`.

| p | ¬p | ¬¬p |  ¬¬¬p |
|---|----|---- |---- |
| T |  <input type="text" id="q41" data-answer="F"/> <span id="q41c" style="display:inline-block"></span> | <input type="text" id="q42" data-answer="T"/> <span id="q42c" style="display:inline-block"></span> | <input type="text" id="q43" data-answer="F"/> <span id="q43c" style="display:inline-block"></span> |
| F | <input type="text" id="q44" data-answer="T"/> <span id="q44c" style="display:inline-block"></span> | <input type="text" id="q45" data-answer="F"/> <span id="q45c" style="display:inline-block"></span> | <input type="text" id="q46" data-answer="T"/> <span id="q46c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>


<script src="/assets/check.js"></script>

### 2. On paper

Give the negated form of each of the following:

1. FT212 is on the 2nd floor
2. David's office is warm
3. n < y
4. my shoes fit my feet

---

## Summary

In this section we have learned about propositional logic.

* You should be able to assign truth values to propositions and their negations.
* You should be able to identify atomic and compound propositions.

In the next section we will find out about [conjunction and disjunction in propositional logic](./conjunction-disjunction/).