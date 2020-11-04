---
title: Proof by Contradiction
permalink: /course/proof-by-contradiction/
---

In a proof by contradiction, we assume the negation of the statement we are trying to prove. Then we try and demonstrate a contradiction, showing that our original statement must have been true after all.

Watch the video and then answer the questions below.

## Five-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/EgGuT6SxtCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/EgGuT6SxtCk)

---

## Key Points

Proof by contradiction has the following form: We want to prove a proposition `P`. We assume `¬P`, and from this attempt to find a contradiction `Q ∧ ¬Q` (or any other situation that is logically impossible). This shows that `¬P` must be false, and therefore `P` must be true.

### Example Proof

**Theorem:** The square root of 2 is an irrational number.

**Proof:** Assume that `sqrt(2)` is rational. Therefore `sqrt(2) = a/b` (where a, b is in lowest terms, i.e. can't be reduced any further, no common terms)

<code>2 = a<sup>2</sup> / b<sup>2</sup></code>

<code>2b<sup>2</sup> = a<sup>2</sup></code> Therefore, because <code>a<sup>2</sup></code> is equal to two times something, <code>a<sup>2</sup></code> must be even. Therefore `a` is even (if you're not convinced, feel free to prove this step yourself). If `a` is even, the there is some `k` such that `a = 2k`.

Therefore, <code>2b<sup>2</sup> = (2k)<sup>2</sup>` 

<code>2b<sup>2</sup> = 4k<sup>2</sup></code>

<code>b<sup>2</sup> = 2k<sup>2</sup></code> Therefore <code>b<sup>2</sup></code> is even. Therefore, just like as showed with a above, `b` must be even.

If `a` and `b` are even, then `a/b` is not a fraction in lowest terms, as both top and bottom could be divided by `2`. This contradicts our assumption that `a/b` is in lowest terms.

By assuming `sqrt(2)` is rational we conclude by contradiction that `sqrt(2)` is not rational, therefore `sqrt(2)` is irrational. ■

---

## Questions

### 1. Check your knowledge

<script src="/assets/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

### 2. On paper

##### Prove some stuff

1. Using a proof by contradiction, show that if `a >= 2` and `b` are integers, either `a` does not divide `b` or `a` does not divide `b + 1`. (Remember from the questions in [part 1](../intro-to-proof/) that if `n` divides `a` then `a = ni`)
2. Using a proof by contradiction, show that there exists no positive integer `n` such that <code>2n < n<sup>2</sup> < 3n</code>

---

## Summary

In this section we have learned about proof by contradiction.

* You should know how proof by contradiction works, and be able to use it for simple proofs.

In the next section, we will look at another kind of proof, [proof by induction](../proof-by-induction).