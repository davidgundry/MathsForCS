---
title: Implication and Equivalence
permalink: /course/implication/
---

We have now seen three logical operators in propositoinal logic: conjunction (`∧`), disjunction (`∨`), and negation (`¬`). In this section we will look at two more: **implication** (`⇒`), and **equivalence** (`⇔`).

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

### Implication

Implication roughly means "if p then q".

When the left-hand side of the implication is false, then the result is always true. Thus `false ⇒ true` is true. This is counterintuitive. When a statement like this is found to be true, it is said to be **vacuously true**.

#### Truth table for implication

| p | q | p⇒q |
|---|---|-----|
| T | T | T   |
| T | F | F   |
| F | T | T   |
| F | F | T   |

### Equivalence

Equivalence, or the biconditional, roughly means "if and only if".

Two propositions `p` and `q` are equivalent if and only if they both have the same truth value.

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

|    | Expression | True | False | |
|----| ------ | ------- | ----- |--| 
| 1. | <label for ="q11">true ⇒ false</label>  | <input type="radio" name="q11" id="q11t" value="t"/> | <input type="radio" name="q11" id="q11f" data-answer value="f"/> | <span id="q11c" style="display:inline-block"></span> |
| 2. | <label for ="q12">false ⇒ true</label> | <input type="radio" name="q12" id="q12t" data-answer value="t"/> | <input type="radio" name="q12" id="q12f" value="f"/> | <span id="q12c" style="display:inline-block"></span> |
| 3. | <label for ="q13">¬ (false ∧ true) ⇒ true</label>| <input type="radio" name="q13" id="q13t" data-answer value="t"/> | <input type="radio" name="q13" id="q13f" value="f"/> | <span id="q13c" style="display:inline-block"></span> |
| 4. | <label for ="q14">¬ (true ∨ false) ⇒ ¬(false)</label> | <input type="radio" name="q14" id="q14t" data-answer value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> | <span id="q14c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Equivalence

Work out the truth value for the following equivalences: 

|    | Expression | True | False | |
|----| ------ | ------- | ----- | --|
| 1. | <label for ="q21">true ⇔ true</label>  | <input type="radio" name="q21" id="q21t" data-answer value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <span id="q21c" style="display:inline-block"></span> |
| 2. | <label for ="q22">false ∨ true ⇔ false</label> | <input type="radio" name="q22" id="q22t" value="t"/> | <input type="radio" name="q22" id="q22f"  data-answer value="f"/> |<span id="q22c" style="display:inline-block"></span> |
| 3. | <label for ="q23">(false ⇒ true) ⇔ ¬ (false)</label>| <input type="radio" name="q23" id="q23t"  data-answer value="t"/> | <input type="radio" name="q23" id="q23f" value="f"/> | <span id="q23c" style="display:inline-block"></span> |
| 4. | <label for ="q24">true ⇔ (true ⇒ false) </label> | <input type="radio" name="q24" id="q24t" value="t"/> | <input type="radio" name="q24" id="q24f" data-answer value="f"/> | <span id="q24c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Vacuous Truth

Which of the following statements are vacuously true? 

1. <input type="checkbox" id="q31" data-answer="true"/> <span id="q31c" style="display:inline-block"></span> <label for ="q31">If Pandas are reptiles, then they eat bamboo</label> 
2. <input type="checkbox" id="q32" data-answer="false"/> <span id="q32c" style="display:inline-block"></span> <label for ="q32">If `1 = 1`, then `1 > 0`</label> 
3. <input type="checkbox" id="q33" data-answer="true"/> <span id="q33c" style="display:inline-block"></span> <label for ="q33">If Paris is in Belgium, then unicorns exist</label> 
3. <input type="checkbox" id="q34" data-answer="true"/> <span id="q34c" style="display:inline-block"></span> <label for ="q33">All even prime numbers other than 2 are greater than 7</label> 


<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 4. Tautology and Contradiction

Which of the following statements are tautologies and which are contradictions?

|    | Expression | Tautology | Contradiction | |
| -- | ---------- | ---- | ----- | -- |
| 1. | p ⇔ ¬p | <input type="radio" name="q41" id="q41t" value="t"/> | <input type="radio" name="q41"  data-answer id="q41f" value="f"/> | <span id="q41c" style="display:inline-block"></span> |
| 2. | p ⇒ p ∨ q  | <input type="radio" name="q42" id="q42t"  data-answer value="t"/> | <input type="radio" name="q42" id="q42f" value="f"/> | <span id="q42c" style="display:inline-block"></span> |
| 3. | p ∧ ¬p  | <input type="radio" name="q43" id="q43t" value="t"/> | <input type="radio" name="q43" id="q43f"  data-answer value="f"/> | <span id="q43c" style="display:inline-block"></span> |
| 4. | p ⇔ (p ⇒ false) | <input type="radio" name="q44" id="q44t" value="t"/> | <input type="radio" name="q44" id="q44f"  data-answer value="f"/> | <span id="q44c" style="display:inline-block"></span> |
| 5. | (p ⇒ q) ⇔ (¬p ∨ q) | <input type="radio" name="q45" id="q45t" data-answer value="t"/> | <input type="radio" name="q45" id="q45f" value="f"/> | <span id="q45c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>


---

## Summary

In this section we have learned two more logical operators: **implication** (`⇒`), and **equivalence** (`⇔`).

* You should be able to use and construct the truth tables for implication and equivalence.
* You should know what it means for a proposition to be tautological or a contradiction.
* You should know what it means for a proposition to be vacuously true.

In the next section we will find out about [bitwise operators](../bitwise-operators).