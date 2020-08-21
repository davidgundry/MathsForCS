---
title: Subsets and Supersets
permalink: /course/subsets-supersets/
---

Now that we've learned what a set is and how to define one, we want to start using sets to say something. To do this, we'll first introduce what it means to be a member of a set (∈), and also how sets can be related to each other as subsets (⊆) or supersets (⊇).

Watch the video and then answer the questions below.

## Seven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Subsets and Supersets in Python

Python has built-in methods for comparing sets.

`issubset()` Returns whether another set contains this set

`issuperset()` Returns whether this set contains another set

You can check whether an item is an element of a set using the `in` operator

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSSetTheorySubsetsSupersetsDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

##### 1. Set elements  <span id="q1c" style="display:inline-block"></span>

Which of the following set theory statements are logically equivalent to true and which are logically equivalent to false:

|    | Expression | True | False | 
| -- | ---------- | ---- | ----- |
| 1. | a ∈ {r, a, c, b, l, z, k}  | <input type="radio" name="q11" id="q11t" value="t"/> | <input type="radio" name="q1" id="q11f" value="f"/> |
| 2. | p ∈ {r, a, c, b, l, z, k} | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" value="f"/> |
| 3. | a ∉ {r, a, c, b, l, z, k} | <input type="radio" name="q13" id="q13t" value="t"/> | <input type="radio" name="q13" id="q13f" value="f"/> |
| 4. | p ∉ {r, a, c, b, l, z, k} | <input type="radio" name="q14" id="q14t" value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> |

##### 2. Set elements again <span id="q2c" style="display:inline-block"></span>

For the set:

    Cakes = {cupcake, carrotcake, doughnut}

which of the following are TRUE, FALSE OR UNDEFINED?

|    | Expression | True | False | Undefined |
| -- | ---------- | ---- | ----- | --------- |
| 1. | Carrot cake ∈ Cakes | <input type="radio" name="q21" id="q21t" value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <input type="radio" name="q21" id="q21u" value="u" /> |
| 2. |  Doughnut ∈ Cakes | <input type="radio" name="q22" id="q22t" value="t"/> | <input type="radio" name="q22" id="q22f" value="f"/> | <input type="radio" name="q22" id="q22u" value="u" /> |
| 3. | cupcake, doughnut ∈ Cakes | <input type="radio" name="q23" id="q23t" value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> | <input type="radio" name="q23" id="q23u" value="u" /> |
| 4. | Ø ∉ Cakes | <input type="radio" name="q24" id="q24t" value="t"/> | <input type="radio" name="q24" id="q24f" value="f"/> | <input type="radio" name="q24" id="q24u" value="u" /> |
| 5. | cupcake ∉ Cakes | <input type="radio" name="q25" id="q25t" value="t"/> | <input type="radio" name="q25" id="q25f" value="f"/> | <input type="radio" name="q25" id="q25u" value="u" /> |


##### 3. Subsets<span id="q3c" style="display:inline-block"></span>

Which of the following are TRUE, FALSE and UNDEFINED?

|    | Expression | True | False | Undefined |
| -- | ---------- | ---- | ----- | --------- |
| 1. | a ⊆ {a, b, c} | <input type="radio" name="q5" id="q5t" value="t"/> | <input type="radio" name="q5" id="q5f" value="f"/> | <input type="radio" name="q5" id="q5u" value="u" /> |
| 2. | {a} ⊆ {a, b, c} | <input type="radio" name="q5" id="q5t" value="t"/> | <input type="radio" name="q5" id="q5f" value="f"/> | <input type="radio" name="q5" id="q5u" value="u" /> |
| 3. | ∅ ⊆ {a, b, c} | <input type="radio" name="q5" id="q5t" value="t"/> | <input type="radio" name="q5" id="q5f" value="f"/> | <input type="radio" name="q5" id="q5u" value="u" /> |
| 4. | {a, b, c} ⊆ ∅ | <input type="radio" name="q5" id="q5t" value="t"/> | <input type="radio" name="q5" id="q5f" value="f"/> | <input type="radio" name="q5" id="q5u" value="u" /> |
| 5. | ∅ ∈ {a, b, c} | <input type="radio" name="q5" id="q5t" value="t"/> | <input type="radio" name="q5" id="q5f" value="f"/> | <input type="radio" name="q5" id="q5u" value="u" /> |

##### 4. Proper Subsets <span id="q4c" style="display:inline-block"></span>

Which of the following are TRUE and which are FALSE:

|    | Expression | True | False | 
| -- | ---------- | ---- | ----- |
| 1. | {monkey} ⊆ {monkey, elephant, zebra} | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 2. | monkey ∈ {monkey, elephant, zebra} | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 3. | ∅ ⊂ {elephant, monkey, zebra} | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 4. | monkey, elephant, zebra ⊂ {monkey, elephant, zebra} | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |

##### 5. Subsets and Supersets <span id="q5c" style="display:inline-block"></span>

Work out the truth value of the following statements given set

    S = {Berlin, Belfast, Bratislava, Burnley}:

|    | Expression | True | False | 
| -- | ---------- | ---- | ----- |
| 1. | {Berlin} ⊂ S | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 2. | {Berlin} ⊆ S | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 3. | S ⊇ {Berlin, Bratislava, Burnely} | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 4. | Ø ⊇ S | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 5. | S ⊇ Ø | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |
| 6. | {Berlin, Belfast, Burnley} ⊅ S | <input type="radio" name="q1" id="q1t" value="t"/> | <input type="radio" name="q1" id="q1f" value="f"/> |

<input type="submit" value="Check Answers" onClick="checkAnswers('q1','q2','q3','q4','q5')"/>
<script src="/assets/check.js"></script>

### 2. On pencil and paper

Given the set S:

    S = {a, b, c, d}

1. List all the subsets for S
2. List all the proper subsets S
3. Can you conceive of a mathematical formula for working out the number of proper subsets of a exist for a given set of n elements?

---

## Summary

In this section we have learned about subsets and supersets. In the next section we learn about how to work with sets using [set operations](./set-operations/).