---
title: Set Operations
permalink: /course/set-operations/
---

Lets see some operations we can use with sets. We apply these to set to get new sets. We'll see Union (∪), Intersection (∩), and Relative (\\) and Absolute (A<sup>c</sup>) Compliment.

Watch the video and then answer the questions below.

## Eleven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/MJpfM6QbQbo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/MJpfM6QbQbo)

---

## Set Operations in Java

The `java.util.Set` interface does not provide the union (∪), intersection (∩), or difference (\\) operations. These would need to be implemented yourself.

---

## Set Operations in Python

Helpfully, Python contains all the basic set operations built in.

Set union (∪) uses the `union()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.union(set_b_)
    print(set3) 

Set intersection (∩) uses the `intersection()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.intersection(set_b_)
    print(set3) 

Set difference (\\) uses the `difference()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.difference(set_b_)
    print(set3) 

---

## Questions

### 1. Check your understanding

Calculate the following, e,g, 

|    | Expression | Answer |
|----| ------ | -------|
| 0. | <label for ="example">{a, b} ∪ {b, c}</label> | \{ <input type="text" id="example" value="a, b, c" disabled/> \} |

##### 1. Union

|    | Expression | Answer | |
|----| ------ | ------- |--|
| 1. | <label for ="q11">{1, 3, 4} ∪ {1, 2, 3, 5, 7, 9}</label> | \{ <input type="text" id="q11" data-answer-set="1,2,3,4,5,7,9" /> \} | <span id="q11c" style="display:inline-block"></span> |
| 2. | <label for ="q12">{rich tea, digestive, jammy dodger} ∪ Ø</label> | \{ <input type="text" id="q12" data-answer-set="" /> \} | <span id="q12c" style="display:inline-block"></span> |
| 3. | <label for ="q13">{a, b, c, d} ∪ {a, b, c, d}</label> | \{ <input type="text" id="q13" data-answer-set="a,b,c,d" /> \} | <span id="q13c" style="display:inline-block"></span> |
| 4. | <label for ="q14">{a, b, c, d} ∪ {1, 2, 3, 4}</label> | \{ <input type="text" id="q14" data-answer-set="a,b,c,d,1,2,3,4" /> \} | <span id="q14c" style="display:inline-block"></span> |

<script src="/assets/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 2. Intersection

|    | Expression | Answer | |
|----| ------ | ------- |--|
| 1. | <label for ="q21">{1, 3, 4} ∩ {1, 2, 3, 5, 7, 9}</label> | \{ <input type="text" id="q21" data-answer-set="1,3"/> \} | <span id="q21c" style="display:inline-block"></span> |
| 2. | <label for ="q22">{rich tea, digestive, jammy dodger} ∩ Ø</label> | \{ <input type="text" id="q22" data-answer-set=""/> \} |  <span id="q22c" style="display:inline-block"></span> |
| 3. | <label for ="q23">{a, b, c, d} ∩ {a, b, c, d}</label> | \{  <input type="text" id="q23" data-answer-set="a,b,c,d"/> \}|  <span id="q23c" style="display:inline-block"></span> |
| 4. | <label for ="q24">{a, b, c, d} ∩ {d, c, b, a}</label> | \{  <input type="text" id="q24" data-answer-set="a,b,c,d"/> \} | <span id="q24c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Difference

|    | Expression | Answer |
|----| ------ | ------- |
| 1. | <label for ="q31">{1, 3, 4} \ {1, 2, 3, 5, 7, 9}</label> | \{ <input type="text" id="q31" data-answer-set="4"/> \} |  <span id="q31c" style="display:inline-block"></span> |
| 2. | <label for ="q32">{rich tea, digestive, jammy dodger}\Ø</label> | \{ <input type="text" id="q32" data-answer-set="rich tea, digestive, jammy dodger" /> \} |  <span id="q32c" style="display:inline-block"></span> |
| 3. | <label for ="q33">{a, b, c, d} \ {a, b, c, d}</label> | \{ <input type="text" id="q33" data-answer-set="" /> \} |  <span id="q33c" style="display:inline-block"></span> |
| 4. | <label for ="q34">{a, b, c, d} \ {d, c, b, a}</label> | \{ <input type="text" id="q34" data-answer-set="" /> \} |  <span id="q34c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

---

## Summary

In this section we have learned about the operations you can perform on sets. In the next we are going to learn about [DeMorgan's Laws](../demorgans-laws).