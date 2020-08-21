---
title: Logical Operators
permalink: /course/logical-operators/
---

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)


## Logical operators in Python

In Python, 

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmaticModulusDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## Questions

### 1. Check your understanding

Work out the truth value for the following conjunctions:

1. (1 + 1 = 2) ∧ (1 > 0)
2. (1 < 0) ∧ (3 > 0)
3. (¬ 1 + 1 = 3) ∧ (1 > 0)
4. (0 ≤ 0) ∧ (3 + 2 + 1 = 6)
5. (¬¬ 1 + 1 = 2) ∧ (1 > 0)
6. (3 + 4 ≠ 20) ∧ (¬ 1 > 0)

Calculate the truth values for the following logical propositions:

1. ¬ (true ∧ false)
2. ¬ (true ∧ false) ∧ ¬ (false)
3. ¬ (false ∧ p) ∧ true
4. ¬ (true) ∧ true
5. ¬ (true ∧ p) ∧ ¬( false)

Calculate the truth values for the following logical propositions:

1. (¬ (true) ∧ p) ∧ q
2. p ∧ (false ∧ q)

Work out the truth value for the following conjunctions: 

1. (1 + 1 = 2) ∨ (1 > 0)
2. (1 < 0) ∨ (3 > 0)
3. ¬ (1 + 1 = 3) ∨ (1 > 0)
4. (0 ≤ 0) ∨ (3 + 2 + 1 = 6)
5. ¬¬ (1 + 1 = 2) ∨ (1 > 0)
6. (3 + 4 ≠ 7) ∨ ¬ (1 > 0)

Create truth tables for the following, using the example below as a guide

Truth table for ¬(p∧q):

| p | q | p∧q | ¬(p∧q) |
|---|---|-----|--------|
| T | T | T   | F |
| T | F | F   | T |
| F | T | F   | T |
| F | F | F   | T |

1. ¬(p ∨ q)
2. (¬p) ∨ (¬q)


The Exclusive or operator has the following truth table:

| p | q | p⊕q |
|---|---|-----|
| T | T | F   |
| T | F | T   | 
| F | T | T   |
| F | F | F   |

Do some stuff with exclusive or...

## Summary

In this section we have learned about logical operators. In the next section we will find out about [proof propositional logic](./proof/).