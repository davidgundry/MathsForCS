---
title: Quantification
permalink: /course/quantifiers/
---

We can go from talking about sets to talking about particular elements of sets with the help of **quantifiers**. In English, a quantifier is a world like `most`, as in `most dogs are happy`. Quantifiers are particularly used in **first order logic**. The most important quantifiers in logic are the Universal (∀) (read "for all") and the Existential (∃) (read "there exists some"). 

Watch the video and then answer the questions below.

## Video not yet available

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Questions

### 1. Check your understanding

Given the sets `A`, `B`, and `C` below, are the following expressions true:

    A = { 4, 5, 6}
    B = { 4, 5 }
    C = Ø

##### 1. Existential 

<table>
    <tr><th></th><th>Expression</th><th>True</th><th>False</th><th></th></tr>
    <tr><td>1.</td> <td>\( \exists x \in A.x \geq 5 \)</td><td> <input type="radio" name="q11" id="q11t" data-answer value="t"/> </td> <td> <input type="radio" name="q11" id="q11f" value="f"/> </td><td> <span id="q11c" style="display:inline-block"></span> </td> </tr>
    <tr><td>2.</td><td>\( \exists x \in A.x \in B  \)</td><td>  <input type="radio" name="q12" id="q12t" data-answer  value="t"/> </td><td> <input type="radio" name="q12" id="q12f"  value="f"/> </td><td> <span id="q12c" style="display:inline-block"></span> </td></tr>
    <tr><td>3.</td><td> \( \exists x \in C.x \in A \)</td><td>  <input type="radio" name="q13" id="q13t" value="t"/> </td><td> <input type="radio" name="q13" id="q13f" data-answer value="f"/> </td><td> <span id="q13c" style="display:inline-block"></span> </td></tr>
    <tr><td>4.</td><td> \( \exists x \in B.x \in A \)</td><td>  <input type="radio" name="q14" id="q14t" data-answer  value="t"/> </td><td> <input type="radio" name="q14" id="q14f" value="f"/> </td><td> <span id="q14c" style="display:inline-block"></span> </td></tr>
</table>

<script src="/assets/js/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 2. Universal 

<table>
    <tr><th></th><th>Expression</th><th>True</th><th>False</th><th></th></tr>
    <tr><td>1.</td> <td> \( \forall x \in A.x \geq 5 \)  </td><td> <input type="radio" name="q21" id="q21t" value="t"/> </td><td>  <input type="radio" name="q21" id="q21f" data-answer value="f"/> </td><td> <span id="q21c" style="display:inline-block"></span> </td> </tr>
    <tr><td>2.</td> <td> \( \forall x \in A.x \in B  \) </td><td>  <input type="radio" name="q22" id="q22t" value="t"/>  </td><td>  <input type="radio" name="q22" id="q22f" data-answer  value="f"/>  </td><td>  <span id="q22c" style="display:inline-block"></span> </td> </tr>
    <tr><td>3.</td> <td> \( \forall x \in C.x \in A \)  </td><td>  <input type="radio" name="q23" id="q23t" data-answer value="t"/>  </td><td>  <input type="radio" name="q23" id="q23f" value="f"/>  </td><td>  <span id="q23c" style="display:inline-block"></span> </td> </tr>
    <tr><td>4.</td> <td> \( \forall x \in B.x \in A \)  </td><td>  <input type="radio" name="q24" id="q24t" data-answer  value="t"/> </td><td>  <input type="radio" name="q24" id="q24f" value="f"/>  </td><td>  <span id="q24c" style="display:inline-block"></span> </td> </tr>
</table>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Multiple Quantification

<table>
    <tr><th></th><th>Expression</th><th>True</th><th>False</th><th></th></tr>
    <tr><td>1.</td> <td> \( \exists x \in A . \exists y \in B . x = y \)  </td><td> <input type="radio" name="q31" id="q31t" data-answer value="t"/> </td><td>  <input type="radio" name="q31" id="q31f" value="f"/> </td><td> <span id="q31c" style="display:inline-block"></span> </td> </tr>
    <tr><td>2.</td> <td> \( \forall x \in A . \exists y \in B . x = y \) </td><td>  <input type="radio" name="q32" id="q32t" value="t"/>  </td><td>  <input type="radio" name="q32" id="q32f" data-answer  value="f"/>  </td><td>  <span id="q32c" style="display:inline-block"></span> </td> </tr>
    <tr><td>3.</td> <td> \( \exists x \in C . \forall y \in A . x = y \)  </td><td>  <input type="radio" name="q33" id="q33t"  value="t"/>  </td><td>  <input type="radio" name="q33" id="q33f" data-answer value="f"/>  </td><td>  <span id="q33c" style="display:inline-block"></span> </td> </tr>
    <tr><td>4.</td> <td> \( \forall x \in C . \exists y \in A . x = y \)  </td><td>  <input type="radio" name="q34" id="q34t" data-answer  value="t"/> </td><td>  <input type="radio" name="q34" id="q34f" value="f"/>  </td><td>  <span id="q34c" style="display:inline-block"></span> </td> </tr>
</table>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>


##### 4. Quantifiers, Sets and Logic 

<table>
    <tr><th></th><th>Expression</th><th>True</th><th>False</th><th></th></tr>
    <tr><td>1.</td> <td> \( ( \neg \exists x . x \in A ) \iff ( \forall x . x \notin A ) \)  </td><td> <input type="radio" name="q41" id="q41t" data-answer value="t"/> </td><td>  <input type="radio" name="q41" id="q41f" value="f"/> </td><td> <span id="q41c" style="display:inline-block"></span> </td> </tr>
    <tr><td>2.</td> <td> \(  \exists x \in A . \exists y \in B . x = y  \) </td><td>  <input type="radio" name="q42" id="q42t" value="t"/>  </td><td>  <input type="radio" name="q42" id="q42f" data-answer  value="f"/>  </td><td>  <span id="q42c" style="display:inline-block"></span> </td> </tr>
    <tr><td>3.</td> <td> \(  \)  </td><td>  <input type="radio" name="q43" id="q43t" data-answer value="t"/>  </td><td>  <input type="radio" name="q43" id="q43f" value="f"/>  </td><td>  <span id="q43c" style="display:inline-block"></span> </td> </tr>
    <tr><td>4.</td> <td> \(  \)  </td><td>  <input type="radio" name="q44" id="q44t" data-answer  value="t"/> </td><td>  <input type="radio" name="q44" id="q44f" value="f"/>  </td><td>  <span id="q44c" style="display:inline-block"></span> </td> </tr>
</table>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>




---

## Summary

In this section we have learned about the operations you can perform on sets.