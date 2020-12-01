---
title: Conjunction and Disjunction
permalink: /course/conjunction-disjunction/
---

We have already seen negation in propositional logic (`¬`). Negation flips a truth value from true to false, or from false to true. In this section we will look at two more logical operators: **conjunction** (`∧`) and **disjunction** (`∨`)

## Six-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/O5Bn3WNITy4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/O5Bn3WNITy4)

---

## Key Points

* A **truth table** is a way of writing out all the possible values for a logical expression.
* In a truth table, you write every combination of values for the atomic propositions in an expression, then work out from these the values for the expression as a whole - or, if the expression is complicated, each step in working it out.
* **Conjunction** is the logical version of "and". A conjunction `p∧q` is true if and only if both `p` and `q` are true, otherwise it is false.
* **Disjunction** is the logical version of "or". A disjunction `p∧q` is false if and only if both `p` and `q` are false, otherwise it is true.

#### Truth table for conjunction

| p | q | p∧q |
|---|---|-----|
| T | T | T   |
| T | F | F   |
| F | T | F   |
| F | F | F   |

#### Truth table for disjunction

| p | q | p∨q |
|---|---|-----|
| T | T | T   |
| T | F | T   |
| F | T | T   |
| F | F | F   |

---

## Logical operators in Python

In Python many statements resolve to either `True` or `False`. For example `a == 0` is such a statement. We might use them in an **if statement**, such as:

    if (a == 0)
        print ("A is zero")

We can combine such statements using logical operators. In Python we use `and` for the logical operator `∧` (**conjunction**). For example `(a == 0) and (b < 7)`. This is only true if **both** `a == 0` and `b < 7` are true.

For **disjunction** (`v`) we use `or`, such as in: `(a == 0) or (b < 7)`. This is true if **either** `a == 0` or `b < 7` are true (or both).

For **negation** (`¬`) we use `not`, such as `not (a == 0)`

In other languages these are commonly represented by the symbols `&&`, `||` and `!` respectively, such as in Java.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSLogicalOperators?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

Work out the truth value for the following conjunctions:

##### 1. Conjunction

Calculate the truth values for the following logical propositions:

|    | Expression | True | False | |
|----| ------ | ------- | ----- | -|
| 1. | <label for ="q11"> ¬ (true ∧ false)</label>  | <input type="radio" name="q11" id="q11t" data-answer value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> |  <span id="q11c" style="display:inline-block"></span> |
| 2. | <label for ="q12">¬ (true ∧ false) ∧ ¬ (false)</label> | <input type="radio" name="q12" id="q12t"  data-answer value="t"/> | <input type="radio" name="q12" id="q12f" value="f"/> |<span id="q12c" style="display:inline-block"></span> |
| 3. | <label for ="q13">¬ (false ∧ p) ∧ true</label>| <input type="radio" name="q13" id="q13t"  data-answer value="t"/> | <input type="radio" name="q13" id="q13f" value="f"/> |<span id="q13c" style="display:inline-block"></span> |
| 4. | <label for ="q14">¬ (true) ∧ true</label> | <input type="radio" name="q14" id="q14t" value="t"/> | <input type="radio" name="q14" id="q14f"  data-answer value="f"/> |<span id="q14c" style="display:inline-block"></span> |
| 5. | <label for ="q15">¬ (true ∧ p) ∧ ¬( true)</label> | <input type="radio" name="q15" id="q15t" value="t"/> | <input type="radio" name="q15" id="q15f" data-answer value="f"/> |<span id="q15c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/js/check.js"></script>

##### 2. Disjunction

Work out the truth value for the following disjunctions: 

|    | Expression | True | False | |
|----| ------ | ------- | ----- | -|
| 1. | <label for ="q21">(1 + 1 = 2) ∨ (1 > 0)</label>  | <input type="radio" name="q21" id="q21t"  data-answer value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <span id="q21c" style="display:inline-block"></span> |
| 2. | <label for ="q22">(1 < 0) ∨ (3 > 0)</label> | <input type="radio" name="q22" id="q22t"  data-answer value="t"/> | <input type="radio" name="q22" id="q22f" value="f"/> |<span id="q22c" style="display:inline-block"></span> |
| 3. | <label for ="q23">¬ (1 + 1 = 3) ∨ (1 > 0)</label>| <input type="radio" name="q23" id="q23t" data-answer value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> | <span id="q23c" style="display:inline-block"></span> |
| 4. | <label for ="q24">(0 ≤ 0) ∨ (3 + 2 + 1 = 6)</label> | <input type="radio" name="q24" id="q24t" data-answer value="t"/> | <input type="radio" name="q24" id="q24f" value="f"/> | <span id="q24c" style="display:inline-block"></span> |
| 5. | <label for ="q25">¬¬ (1 + 1 = 2) ∨ (1 > 0)</label> | <input type="radio" name="q25" id="q25t" data-answer value="t"/> | <input type="radio" name="q25" id="q25f" value="f"/> | <span id="q25c" style="display:inline-block"></span> |
| 6. | <label for ="q26">(3 + 4 ≠ 7) ∨ ¬ (1 > 0)</label> | <input type="radio" name="q26" id="q26t" value="t"/> | <input type="radio" name="q26" id="q26f" data-answer value="f"/> | <span id="q26c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Truth tables

Create truth tables below, using the following example as a guide

######  Truth table for ¬(p∧q):

| p | q | p∧q | ¬(p∧q) |
|---|---|-----|--------|
| T | T | T   | F |
| T | F | F   | T |
| F | T | F   | T |
| F | F | F   | T |

###### Truth table for ¬(p∨q):

| p | q | p∨q | ¬(p∨q) |
|---|---|-----|--------|
| T | T | <input type="text" id="q31" data-answer="T"/> <span id="q31c" style="display:inline-block"></span> |  <input type="text" id="q32" data-answer="F"/> <span id="q32c" style="display:inline-block"></span> |
| T | F | <input type="text" id="q33" data-answer="T"/> <span id="q33c" style="display:inline-block"></span> |  <input type="text" id="q34" data-answer="F"/> <span id="q34c" style="display:inline-block"></span> |
| F | T | <input type="text" id="q35" data-answer="T"/> <span id="q35c" style="display:inline-block"></span> |  <input type="text" id="q36" data-answer="F"/> <span id="q36c" style="display:inline-block"></span> |
| F | F | <input type="text" id="q37" data-answer="F"/> <span id="q37c" style="display:inline-block"></span> |  <input type="text" id="q38" data-answer="T"/> <span id="q38c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

###### Truth table for (¬p) ∨ (¬q):

| p | q | ¬p | ¬q | (¬p) ∨ (¬q) |
|---|---|----|----| ----------- |
| T | T | <input type="text" id="q41" data-answer="F"/> <span id="q41c" style="display:inline-block"></span> | <input type="text" id="q42" data-answer="F"/> <span id="q42c" style="display:inline-block"></span> | <input type="text" id="q49" data-answer="F"/> <span id="q49c" style="display:inline-block"></span> |
| T | F | <input type="text" id="q43" data-answer="F"/> <span id="q43c" style="display:inline-block"></span> | <input type="text" id="q44" data-answer="T"/> <span id="q44c" style="display:inline-block"></span> | <input type="text" id="q53" data-answer="T"/> <span id="q53c" style="display:inline-block"></span> |
| F | T | <input type="text" id="q45" data-answer="T"/> <span id="q45c" style="display:inline-block"></span> | <input type="text" id="q46" data-answer="F"/> <span id="q46c" style="display:inline-block"></span> | <input type="text" id="q51" data-answer="T"/> <span id="q51c" style="display:inline-block"></span> |
| F | F | <input type="text" id="q47" data-answer="T"/> <span id="q47c" style="display:inline-block"></span> | <input type="text" id="q48" data-answer="T"/> <span id="q48c" style="display:inline-block"></span> | <input type="text" id="q52" data-answer="T"/> <span id="q52c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4','q5')">Check Answers</a>

##### 4. Exclusive Or

The Exclusive or operator `⊕` has the following truth table:

| p | q | p⊕q |
|---|---|-----|
| T | T | F   |
| T | F | T   | 
| F | T | T   |
| F | F | F   |

Calculate the truth values for the following logical propositions:

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q61"> ¬ (true ⊕ false)</label>  | <input type="radio" name="q61" id="q61t" value="t"/> | <input type="radio" name="q61" id="q61f" data-answer value="f"/> | <span id="q61c" style="display:inline-block"></span> |
| 2. | <label for ="q62">¬ (true ⊕ false) ⊕ ¬ (false)</label> | <input type="radio" name="q62" id="q62t" value="t"/> | <input type="radio" name="q62" id="q62f" data-answer value="f"/> | <span id="q62c" style="display:inline-block"></span> |
| 3. | <label for ="q63">¬ (false ⊕ false) ⊕ true</label>| <input type="radio" name="q63" id="q63t" value="t"/> | <input type="radio" name="q63" id="q63f" data-answer value="f"/> | <span id="q63c" style="display:inline-block"></span> |
| 4. | <label for ="q64">¬¬(true) ⊕ true</label> | <input type="radio" name="q64" id="q64t" value="t"/> | <input type="radio" name="q64" id="q64f" data-answer value="f"/> | <span id="q64c" style="display:inline-block"></span> |
| 5. | <label for ="q65">¬ (true ⊕ p) ⊕ ¬(p)</label> | <input type="radio" name="q65" id="q65t" data-answer value="t"/> | <input type="radio" name="q65" id="q65f" value="f"/> | <span id="q65c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q6')">Check Answers</a>

---

## Summary

In this section we have learned four more logical operators: conjunction (`∧`), disjunction (`∨`).

* You should be able to construct truth tables for logical statements from the truth values of their component propositions.
* You should be able to use conjunction, disjunction, and negation, and recognise their symbols.
* You should be able to write out the truth tables for conjunction, disjunction, and negation.

In the next section we will find out about two more logical operators [implication, and equivalence](../implication/).