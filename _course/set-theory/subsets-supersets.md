---
title: Subsets and Supersets
permalink: /course/subsets-supersets/
---

Now that we've learned what a set is and how to define one, we want to start using sets to say something. To do this, we'll first introduce what it means to be a member of a set (∈), and also how sets can be related to each other as subsets (⊆) or supersets (⊇).

Watch the video and then answer the questions below.

## Seven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/YM4dBGJ5Ovk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/YM4dBGJ5Ovk)

---

## Subsets and Supersets in Java

Using the `Set` interface from `java.util`, we have methods for some set relations, but not everything is provied for us.

`containsAll()` Returns whether this set is a superset of a given set.

`size()` Returns the cardinality of the set.

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

##### 1. Set elements

Which of the following set theory statements are logically equivalent to true and which are logically equivalent to false:

|    | Expression | True | False | |
| -- | ---------- | ---- | ----- |--|
| 1. | a ∈ {r, a, c, b, l, z, k}  | <input type="radio" name="q11" id="q11t" data-answer value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> | <span id="q11c" style="display:inline-block"></span> |
| 2. | p ∈ {r, a, c, b, l, z, k} | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" data-answer  value="f"/> | <span id="q12c" style="display:inline-block"></span> |
| 3. | a ∉ {r, a, c, b, l, z, k} | <input type="radio" name="q13" id="q13t" value="t"/> | <input type="radio" name="q13" id="q13f" data-answer  value="f"/> | <span id="q13c" style="display:inline-block"></span> |
| 4. | p ∉ {r, a, c, b, l, z, k} | <input type="radio" name="q14" id="q14t" data-answer  value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> | <span id="q14c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>


##### 2. Set elements again

For the set:

    Cakes = {cupcake, carrotcake, doughnut}

which of the following are TRUE, FALSE OR UNDEFINED?

|    | Expression | True | False | Undefined | |
| -- | ---------- | ---- | ----- | --------- |--|
| 1. | Carrot cake ∈ Cakes | <input type="radio" name="q21" id="q21t" data-answer value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <input type="radio" name="q21" id="q21u" value="u" /> | <span id="q21c" style="display:inline-block"></span> |
| 2. |  Doughnut ∈ Cakes | <input type="radio" name="q22" id="q22t" data-answer value="t"/> | <input type="radio" name="q22" id="q22f" value="f"/> | <input type="radio" name="q22" id="q22u" value="u" /> | <span id="q22c" style="display:inline-block"></span> |
| 3. | { cupcake, doughnut } ∈ Cakes | <input type="radio" name="q23" id="q23t" value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> | <input type="radio" name="q23" id="q23u" data-answer value="u" /> | <span id="q23c" style="display:inline-block"></span> |
| 4. | Ø ∉ Cakes | <input type="radio" name="q24" id="q24t" value="t"/> | <input type="radio" name="q24" id="q24f" value="f"/> | <input type="radio" name="q24" id="q24u" data-answer value="u" /> | <span id="q24c" style="display:inline-block"></span> |
| 5. | cupcake ∉ Cakes | <input type="radio" name="q25" id="q25t" value="t"/> | <input type="radio" name="q25" id="q25f" data-answer value="f"/> | <input type="radio" name="q25" id="q25u" value="u" /> | <span id="q25c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


##### 3. Subsets

Which of the following are TRUE, FALSE and UNDEFINED?

|    | Expression | True | False | Undefined | |
| -- | ---------- | ---- | ----- | --------- |--|
| 1. | a ⊆ {a, b, c} | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> | <input type="radio" name="q31" id="q31u" data-answer value="u" /> | <span id="q31c" style="display:inline-block"></span> |
| 2. | {a} ⊆ {a, b, c} | <input type="radio" name="q32" id="q32t" data-answer value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> | <input type="radio" name="q32" id="q32u" value="u" /> | <span id="q32c" style="display:inline-block"></span> |
| 3. | ∅ ⊆ {a, b, c} | <input type="radio" name="q33" id="q33t" data-answer value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> | <input type="radio" name="q33" id="q33u" value="u" /> | <span id="q33c" style="display:inline-block"></span> |
| 4. | {a, b, c} ⊆ ∅ | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" data-answer value="f"/> | <input type="radio" name="q34" id="q34u" value="u" /> | <span id="q34c" style="display:inline-block"></span> |
| 5. | ∅ ∈ {a, b, c} | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" value="f"/> | <input type="radio" name="q35" id="q35u" data-answer value="u" /> | <span id="q35c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>


##### 4. Proper Subsets

Which of the following are TRUE and which are FALSE:

|    | Expression | True | False |  |
| -- | ---------- | ---- | ----- |--|
| 1. | {monkey} ⊆ {monkey, elephant, zebra} | <input type="radio" name="q41" id="q41t" data-answer value="t"/> | <input type="radio" name="q41" id="q41f" value="f"/> | <span id="q41c" style="display:inline-block"></span> |
| 2. | monkey ∈ {monkey, elephant, zebra} | <input type="radio" name="q42" id="q42t" data-answer value="t"/> | <input type="radio" name="q42" id="q42f" value="f"/> | <span id="q42c" style="display:inline-block"></span> |
| 3. | ∅ ⊂ {elephant, monkey, zebra} | <input type="radio" name="q43" id="q43t" data-answer value="t"/> | <input type="radio" name="q43" id="q43f" value="f"/> | <span id="q43c" style="display:inline-block"></span> |
| 4. | { monkey, elephant, zebra } ⊂ {monkey, elephant, zebra} | <input type="radio" name="q44" id="q44t" value="t"/> | <input type="radio" name="q44" data-answer id="q44f" value="f"/> | <span id="q44c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>


##### 5. Subsets and Supersets

Work out the truth value of the following statements given set

    S = {Berlin, Belfast, Bratislava, Burnley}:

|    | Expression | True | False |  |
| -- | ---------- | ---- | ----- |--|
| 1. | {Berlin} ⊂ S | <input type="radio" name="q51" id="q51t" data-answer value="t"/> | <input type="radio" name="q51" id="q51f" value="f"/> | <span id="q51c" style="display:inline-block"></span> |
| 2. | {Berlin} ⊆ S | <input type="radio" name="q52" id="q52t" data-answer value="t"/> | <input type="radio" name="q52" id="q52f" value="f"/> | <span id="q52c" style="display:inline-block"></span> |
| 3. | S ⊇ {Berlin, Bratislava, Burnely} | <input type="radio" name="q53" id="q53t" data-answer value="t"/> | <input type="radio" name="q53" id="q53f" value="f"/> | <span id="q53c" style="display:inline-block"></span> |
| 4. | Ø ⊇ S | <input type="radio" name="q54" id="q54t" value="t"/> | <input type="radio" name="q54" id="q54f"  data-answer value="f"/> | <span id="q54c" style="display:inline-block"></span> |
| 5. | S ⊇ Ø | <input type="radio" name="q55" id="q55t" data-answer value="t"/> | <input type="radio" name="q55" id="q55f" value="f"/> | <span id="q55c" style="display:inline-block"></span> |
| 6. | {Berlin, Belfast, Burnley} ⊅ S | <input type="radio" name="q56" id="q56t" data-answer value="t"/> | <input type="radio" name="q56" id="q56f" value="f"/> | <span id="q56c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5')">Check Answers</a>

<script src="/assets/js/check.js"></script>

### 2. On pencil and paper

Given the set S:

    S = {a, b, c, d}

1. List all the subsets for S
2. List all the proper subsets S

---

## Summary

In this section we have learned about subsets and supersets. In the next section we learn about how to work with sets using [set operations](./set-operations/).