---
title: De Morgan's Laws
permalink: /course/demorgans-laws/
---

De Morgan's laws are a set of laws in logic, set theory, and other branches of mathematics. They allow us to write conjunction and disjunction, or set union and set intersection, solely is terms of the other. Basically, that "not dogs and cats" is the same as "not dogs or not cats". We will look at these laws in Set Theory.

Watch the video and then answer the questions below.

### Video not yet available

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

DeMorgans laws can be expressed in English as:

1. the complement of the union of two sets is the same as the intersection of their complements; and
2. the complement of the intersection of two sets is the same as the union of their complements.

They can be written formally in set theory as follows:

<p class="math">\[ (A \cap B)^C = A^C \cup B^C \]</p>
<p class="math">\[ (A \cup B)^C = A^C \cap B^C \]</p>

### De Morgans Laws in Propositional Logic

The same laws can be expressed in propositional logic

* Conjunction can be expressed using negation and disjunction.
* Disjunction can be expressed using negation and conjunction.

<p class="math">\[ \neg (P \wedge Q) \iff \neg P \vee \neg Q \]</p>
<p class="math">\[ \neg (P \vee Q) \iff \neg P \wedge \neg Q \]</p>

---

## Questions

### 1. Check your knowledge

##### Set example for De Morgan's Laws

Use the sets `A` and `B` with the Universe set `U`.

    A = { 1, 2, 3, 4 }
    B =       { 3, 4, 5, 6 }
    U = { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

1. <label for ="q21">(A ∪ B)<sup>c</sup></label> `{`<input type="text" id="q21" data-answer-set="7,8,9"/>`}` <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">A<sup>c</sup> ∩ B<sup>c</sup></label> `{`<input type="text" id="q22" data-answer-set="7,8,9"/>`}` <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">(A ∩ B)<sup>c</sup></label> `{`<input type="text" id="q23" data-answer-set="1,2,5,6,7,8,9"/>`}` <span id="q23c" style="display:inline-block"></span>
4. <label for ="q24">A<sup>c</sup> ∪ B<sup>c</sup></label> `{`<input type="text" id="q24" data-answer-set="1,2,5,6,7,8,9"/>`}` <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### Truth tables for De Morgan's Laws

| p | q | ¬(p∧q) | ¬p ∨ ¬q) |
|---|---|-----|--------|
| T | T | <input type="text" id="q31" data-answer="F"/> <span id="q31c" style="display:inline-block"></span> |  <input type="text" id="q32" data-answer="F"/> <span id="q32c" style="display:inline-block"></span> |
| T | F | <input type="text" id="q33" data-answer="T"/> <span id="q33c" style="display:inline-block"></span> |  <input type="text" id="q34" data-answer="T"/> <span id="q34c" style="display:inline-block"></span> |
| F | T | <input type="text" id="q35" data-answer="T"/> <span id="q35c" style="display:inline-block"></span> |  <input type="text" id="q36" data-answer="T"/> <span id="q36c" style="display:inline-block"></span> |
| F | F | <input type="text" id="q37" data-answer="T"/> <span id="q37c" style="display:inline-block"></span> |  <input type="text" id="q38" data-answer="T"/> <span id="q38c" style="display:inline-block"></span> |

| p | q | ¬(p∨q) | ¬p ∧ ¬q) |
|---|---|-----|--------|
| T | T | <input type="text" id="q41" data-answer="F"/> <span id="q41c" style="display:inline-block"></span> |  <input type="text" id="q42" data-answer="F"/> <span id="q42c" style="display:inline-block"></span> |
| T | F | <input type="text" id="q43" data-answer="F"/> <span id="q43c" style="display:inline-block"></span> |  <input type="text" id="q44" data-answer="F"/> <span id="q44c" style="display:inline-block"></span> |
| F | T | <input type="text" id="q45" data-answer="F"/> <span id="q45c" style="display:inline-block"></span> |  <input type="text" id="q46" data-answer="F"/> <span id="q46c" style="display:inline-block"></span> |
| F | F | <input type="text" id="q47" data-answer="T"/> <span id="q47c" style="display:inline-block"></span> |  <input type="text" id="q48" data-answer="T"/> <span id="q48c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3', 'q4')">Check Answers</a>
<script src="/assets/check.js"></script>


---

## Summary

In this section we were introduced to De Morgans laws.

Now you can move on to the [set theory challenges](../set-theory-challenges).