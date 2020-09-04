---
title: Implication and Equivalence
permalink: /course/implication/
---

We have now seen three logical operators in propositoinal logic: conjunction (`∧`), disjunction (`∨`), and negation (`¬`). In this section we will look at two more: implication (`⇒`), and equivalence (`⇔`).

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

### Implication

Implication roughly means "if p then q".

When the left-hand side of the implication is false, then the result is always true. Thus `false ⇒ true` is true. This is counterintuitive. When a statement like this is found to be true, it is said to be "vacuously true".

#### Truth table for implication

| p | q | p⇒q |
|---|---|-----|
| T | T | T   |
| T | F | F   |
| F | T | T   |
| F | F | T   |

### Equivalence

Equivalence roughly means "is the same as".

Two propositions `p` and `q` are equivlant if and only if they both have the same truth value.

#### Truth table for equivalence

| p | q | p⇔q |
|---|---|-----|
| T | T | T   |
| T | F | F   |
| F | T | F   |
| F | F | T   |

---

## Questions

### 1. Check your understanding

##### 1. Implication

Calculate the truth values for the following implications:

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31">true ⇒ false</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> |
| 2. | <label for ="q32">false ⇒ true</label> | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> |
| 3. | <label for ="q33">¬ (false ∧ true) ⇒ true</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> |
| 4. | <label for ="q34">¬ (true ∨ false) ⇒ ¬(false)</label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Equivalence

Work out the truth value for the following equivalences: 

|    | Expression | True | False |
|----| ------ | ------- | ----- |
| 1. | <label for ="q31">true ⇔ true</label>  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" value="f"/> |
| 2. | <label for ="q32">false ∨ true ⇔ false</label> | <input type="radio" name="q32" id="q32t" value="t"/> | <input type="radio" name="q32" id="q32f" value="f"/> |
| 3. | <label for ="q33">(false ⇒ true) ⇔ ¬ (false)</label>| <input type="radio" name="q33" id="q33t" value="t"/> | <input type="radio" name="q33" id="q33f" value="f"/> |
| 4. | <label for ="q34">true ⇔ (true ⇒ false) </label> | <input type="radio" name="q34" id="q34t" value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

---

## Summary

In this section we have learned four more logical operators: conjunction (`∧`), disjunction (`∨`), implication, and equivalence.. In the next section we will find out about [bitwise operators](../bitwise-operators).