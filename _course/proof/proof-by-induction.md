---
title: Proof by Induction
permalink: /course/proof-by-induction/
---

Proof by induction is a technique that can be used to prove certain theorems. It's probably the most important proof technique in computer science. It works by proving a **base case**, and then proving what's called an **induction step**.

Watch the video and then answer the questions below.

## Four-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Z2EuIfNx10g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Z2EuIfNx10g)

You can find [the slides here](/assets/slides/proof/induction.pdf) and also as [.odp](/assets/slides/proof/induction.odp).

---

## Key Points

A proof by induction has two parts

1. Base case
2. Induction step

Our **base case** is where we show that our claim holds in a simple case, such as where `x = 1` or for the empty set. We pick a base case that is easy to prove. For example, we might prove `f(1) > 0`

In the **induction step**, we show how we can prove are claim holds in subsequent cases if we assume it holds in a simpler case. For example, imagine that we are able to prove that `f(k) > 0 ⇒ f(k+1) > 0`. In other words, if our claim `f(k)` holds for some value `k`, then it will hold for `k+1`

Now in our example, given the base case `f(1) > 0` and the induction step `f(k) > 0 ⇒ f(k+1) > 0`, we can prove `f(n) > 0` for all positive integers `n`. Why? Becase we've proved it in our base case for `f(1)`. If it's true for `f(1)`, then we know from our induction step that it must be true for `f(1+1) = f(2)`. Then if it's true for `f(2)`, from our induction step it is also proved for `f(2+1) = f(3)`. And so on, for all positive integers.

---

## Questions

### On Paper

##### Spot the error in the following proof

**Theorem:** Let `a`, `b`, and `c` be integers. If `bc` is divisible by `a`, then `b` is divisible by `a` and `c` is divisible by `a`.

**"Proof":** Assume `a = 3`, `b = 6`, and `c = 12`. Then `bc` is divisible by `a`, because `3` divides `72`. Now `b` is divisible by `a`, since `3` divides `6`, and `c` is divisible by `a`, since `3` divides `12`. Therefore, if `bc` is divisible by `a`, then `b` is divisible by `a` and `c` is divisible by `a`.

##### Prove the following

<code>n<sup>3</sup> + 2n</code> is divisible by 3, for a positive integer `n`. (Remember from the questions in [part 1](../intro-to-proof/) that if `n` divides `a` then `a = ni`) 

**Hint:** Start off with a base case where `n=1`, and plug that into the above formula to show it is divisible by 3. Then substitute `k+1` for n in the formula. Show that if you assume the conjecture is true for `n=k` it must be true for `n=k+1`

---

## Summary

In this section we have learned about proof by induction.

* You should be able to recognise proof by induction and use it for simple proofs.
* You should be able to identify some errors in proofs.

You can now move on to the [challenges](../proof-challenges) for this topic.