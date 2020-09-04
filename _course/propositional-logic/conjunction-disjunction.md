---
title: Conjunction and Disjunction
permalink: /course/conjunction-disjunction/
---

We have already seen negation in propositional logic (`¬`). Negation flips a truth value from true to false, or from false to true. In this section we will look at two more logical operators: conjunction (`∧`) and disjunction (`∨`)

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

A **truth table** is a way of writing out all the possible values for a logical expression. You write every combination of values for the atomic propositions in an expression, then work out from these the values for the expression as a whole - or, if the expression is complicated, each step in working it out.

### Conjunction

Conjunction is the logical version of "and". A conjunction `p∧q` is true if and only if both `p` and `q` are true, otherwise it is false.

#### Truth table for conjunction

| p | q | p∧q |
|---|---|-----|
| T | T | T   |
| T | F | F   |
| F | T | F   |
| F | F | F   |

### Disjunction

Conjunction is the logical version of "or". A disjunction `p∧q` is false if and only if both `p` and `q` are false, otherwise it is true.

#### Truth table for disjunction

| p | q | p∨q |
|---|---|-----|
| T | T | T   |
| T | F | T   |
| F | T | T   |
| F | F | F   |

### Exclusive Or

The Exclusive or operator has the following truth table:

| p | q | p⊕q |
|---|---|-----|
| T | T | F   |
| T | F | T   | 
| F | T | T   |
| F | F | F   |

---

## Logical operators in Python

In Python many statements resolve to either `True` or `False`. For example `a == 0` is such a statement. We might use them in an **if statement**, such as:

    if (a ==0)
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

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31"> ¬ (true ∧ false)</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> |
| 2. | <label for ="q32">¬ (true ∧ false) ∧ ¬ (false)</label> | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> |
| 3. | <label for ="q33">¬ (false ∧ p) ∧ true</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> |
| 4. | <label for ="q34">¬ (true) ∧ true</label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> |
| 5. | <label for ="q35">¬ (true ∧ p) ∧ ¬( false)</label> | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" value="f"/> |

##### 2. Disjunction

Work out the truth value for the following disjunctions: 

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31">(1 + 1 = 2) ∨ (1 > 0)</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> |
| 2. | <label for ="q32">(1 < 0) ∨ (3 > 0)</label> | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> |
| 3. | <label for ="q33">¬ (1 + 1 = 3) ∨ (1 > 0)</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> |
| 4. | <label for ="q34">(0 ≤ 0) ∨ (3 + 2 + 1 = 6)</label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> |
| 5. | <label for ="q35">¬¬ (1 + 1 = 2) ∨ (1 > 0)</label> | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" value="f"/> |
| 6. | <label for ="q36">(3 + 4 ≠ 7) ∨ ¬ (1 > 0)</label> | <input type="radio" name="q36" id="q36t" value="t"/> | <input type="radio" name="q36" id="q36f" value="f"/> |

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

###### Truth table for (¬p) ∨ (¬q):

| p | q | ¬p | ¬q | (¬p) ∨ (¬q) |
|---|---|----|----| ----------- |
| T | T | <input type="text" id="q41" data-answer="F"/> <span id="q41c" style="display:inline-block"></span> | <input type="text" id="q42" data-answer="F"/> <span id="q42c" style="display:inline-block"></span> | <input type="text" id="q49" data-answer="F"/> <span id="q49c" style="display:inline-block"></span> |
| T | F | <input type="text" id="q43" data-answer="F"/> <span id="q43c" style="display:inline-block"></span> | <input type="text" id="q44" data-answer="T"/> <span id="q44c" style="display:inline-block"></span> | <input type="text" id="q50" data-answer="T"/> <span id="q50c" style="display:inline-block"></span> |
| F | T | <input type="text" id="q45" data-answer="T"/> <span id="q45c" style="display:inline-block"></span> | <input type="text" id="q46" data-answer="F"/> <span id="q46c" style="display:inline-block"></span> | <input type="text" id="q51" data-answer="T"/> <span id="q51c" style="display:inline-block"></span> |
| F | F | <input type="text" id="q47" data-answer="T"/> <span id="q47c" style="display:inline-block"></span> | <input type="text" id="q48" data-answer="T"/> <span id="q48c" style="display:inline-block"></span> | <input type="text" id="q52" data-answer="T"/> <span id="q52c" style="display:inline-block"></span> |


---

## Summary

In this section we have learned four more logical operators: conjunction (`∧`), disjunction (`∨`). In the next section we will find out about two more logical operators [implication, and the biconditional](../implication/).