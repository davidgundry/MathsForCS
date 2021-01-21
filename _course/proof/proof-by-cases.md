---
title: Proof by Cases
permalink: /course/proof-by-cases/
---

Proof by cases is a technique that can be used to prove certain theorems. The idea is that you break down a claim into an exhaustive set of sub-claims. For example, you might prove a property holds for all integers by demonstrating that it holds for all odd numbers and all even numbers. 

Watch the video and then answer the questions below.

## Ten-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/NZhnmXx-0XY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/NZhnmXx-0XY)

You can find [the slides here](/assets/slides/proof/cases.pdf) and also as [.odp](/assets/slides/proof/cases.odp).

---

## Key Points

I a proof by cases, you divide your proof into a set of cases that between them cover every eventuality that needs to be proved.

A proof by cases could be thought of in propositional logic like this. Say you're trying to prove the proposition `Q`. You find cases `P` and `¬P`, such that `P ⇒ Q` and `¬P ⇒ Q`. Then either `P` is true, in which case `Q` is true, or `¬P` is true, in which case `Q` is true. From this you have proved that `Q` must be true.

The cases you use to divide the situation will vary by problem, but they must be exhaustive. For example:

* an integer `x` is either odd or even
* a number is either rational or irrational
* `x > 0`, `x < 0`, `x = 0`
* a proposition is either true or false (also called the law of the excluded middle)

If all cases lead by implication to the statement to prove, you've proved it.

These proofs must be developed independantly. In other words, you cannot use a statement derived for one case in another case. For example if you have shown that `P ⇒ φ`, you cannot use the statement `φ` in your proof of `¬P ⇒ Q`, unless you independantly show that `¬P ⇒ φ`.

---

## Questions

### On paper

##### 1. Spot the error in the following proof

**"Theorem"**: Let `x` and `y` be real numbers. If `xy = 0`, then `x = 0` and `y = 0`.

**"Proof"**: There are two cases.

Case 1: If `x = 0`, then `xy = 0 · y = 0`.

Case 2: if `y = 0`, then `xy = x · 0 = 0`.

In either case, `xy = 0` ∎

##### 2. Spot the error in the following proof

**"Theorem"**: If `n | a`, then `a` is even.

**"Proof"**: There are two cases.

Case 1: If `n` is even, then `2ki = a`. Therefore `a` is even.

Case 2: If `n` is odd, then `i(2k+1) = a`, so `2ki+i = a` Therefore `a` is even.

Therefore `a` is even in both cases ∎

##### 3. Proof by exhaustion

Prove the following by exhaustion:

1. All two-digit binary numbers are less than 4.
2. No decimal digit requires more than one pen stroke to write.

Show that the following is not true by attempting proof by exhaustion

1. All the colours of the rainbow contain the letter `e`.

##### 4. Prove it yourself

Complete the following proof from the video yourself:

1. <code>3(2x + 2)<sup>2</sup> + 1</code> is odd for all `x`

Prove the following:

1. `2(2x +2)` is even for all `x`.

---

## Summary

In this section we have learned about the proof by cases technique.

* You should know how proof by cases works, and be able to use it for simple proofs.
* You should know how proof by exhaustion works, and be able to use it for simple proofs.
* You should be able to recognise a proof by cases.
* You should be able to spot simple errors in a proof by cases

In the next section, we will look at another kind of proof, [proof by contradiction](../proof-by-contradiction).