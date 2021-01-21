---
title: Proof
permalink: /course/intro-to-proof/
---

What is a **proof**? It's a way of showing that some belief we have about a relationship between mathematical objects is always true (for a given set of assumptions). In this video I introduce proof and some terminology used for talking about proofs.

Watch the video and then answer the questions below.

## Eleven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/BN_7p9-PFqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/BN_7p9-PFqk)

You can find [the slides here](/assets/slides/proof/intro.pdf) and also as [.odp](/assets/slides/proof/intro.odp).


---

## Key Points

### Definitions

* A **definition** gives names to particular mathematical objects to allow us to refer to them, like "Let a be an integer", or "Let S(n) be the sum of the first n natural numbers"
* An **axiom**, or **postulate** is something you assume to be true before you begin your proof, and that you do not attempt to prove.
* A **conjecture** is something we think might be right - something that is interesting enough to try and prove.
* A **theorem** is a conjecture that has a proof - so long as the proof is valid, theorems must be true.
* A **proof** is a mathematical argument that a theorem is true, or it is the activity of creating such an argument.
* A **lemma** is intermediary conclusion that is proved as part of proving a theorem.
* A **corollary** is something that follows directly once a theorem has been proved.

It's also useful to know that:

* An even number (integer) `m` can be written as `m = 2k` for some (integer) `k`.
* An odd number (integer) `m` can be written as `m = 2k + 1` for some (integer) `k`.

### Direct Proof

A direct proof is a series of steps that takes us from what we have assumed to our conclusion. They make use of modus ponens.

**Modus Ponens** is the most basic form of logical argument. It has two premises (`P1` and `P2` below) and a conclusion (`C`)

    P1:  If P then Q
    P2:  P is true
    C:   Q is true

In propositional logic, this would be `(P ⇒ Q) ∧ P ⇔ Q`. 

For example, to attempt to construct a direct prove the conjecture "if `x` is odd, <code>x<sup>2</sup></code> is odd", you would work forwards from the antecedent "`x` is odd" until you can prove the consequent "<code>x<sup>2</sup></code> is odd".

#### Example Proof

**Theorem:** If `x` is an odd number <code>x<sup>2</sup></code> is an odd number.

**Proof**: Let `x` be an integer. If `x` is odd, then `x = 2k + 1`.

Thus, <code>x<sup>2</sup> = (2k + 1)<sup>2</sup></code>

<code>x<sup>2</sup> = 4k<sup>2</sup> + 4k + 1</code>

As <code>4k<sup>2</sup> + 4k</code> is divisible by 2, it is an even number. Therefore, as we add 1 to get <code>4k<sup>2</sup> + 4k + 1 = x<sup>2</sup></code>, this must be an odd number ■ 

---

## Questions

### 1. Check your knowledge

In which of the following cases would direct proof be appropriate?

2. <input type="checkbox" id="q31" data-answer="true" /> <label for ="q31">If `m` is even and `n` is a positive integer, <code>m<sup>n</sup></code> is even</label> <span id="q31c" style="display:inline-block"></span>
3. <input type="checkbox" id="q32" data-answer="true"/> <label for ="q32">If `x = 0`, <code>x<sup>2</sup> = -x<sup>2</sup></code></label> <span id="q32c" style="display:inline-block"></span>
4. <input type="checkbox" id="q33" data-answer="false"/> <label for ="q33">the square root 2 is an irrational number</label> <span id="q33c" style="display:inline-block"></span>

<script src="/assets/js/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

### 2. On paper

##### Spot the error in the following proof

**"Theorem":** `1 = 2`

**"Proof":** Let `a = b`. Then

<code>ab = a<sup>2</sup></code>

<code>a<sup>2</sup> + ab = a<sup>2</sup> + a<sup>2</sup></code>

<code>a<sup>2</sup> + ab = 2a<sup>2</sup></code>

<code>a<sup>2</sup> + ab − 2ab = 2a<sup>2</sup> − 2ab</code>

<code>a<sup>2</sup> − ab = 2a<sup>2</sup> − 2ab</code>

<code>1(a<sup>2</sup> − ab) = 2(a<sup>2</sup> − ab)</code>

Dividing both sides of the equation by a `2 − ab`, we get

`1 = 2` ∎

##### Prove the following

1. If `m^2` is even, then `m` is even
2. If `m` is odd, then `m^2` is odd

##### Divisibiliy Proof

A number, `n` is said to be **divide** another number `a` (written `n | a`, or "b divides a") if there is some natural number `i` such that `ni = a`. In other words, `n` divides `a` if and only if there is a whole number you can multiply by `n` to get `a`. Here `i` is just a variable - we could use a different one if we wish.

That means in a proof where we are trying to show `n | a`, we can replace it with the formula `a = ni`.

1. For the given `n`, `a`, show `n|a` by finding an `i` with `a = ni`. For example, to show that `9 | 36`, we can observe that `9i = 36` where `i=4`
    1. `6|18`
    2. `-5|30`
    3. `3|-9`
    4. `-10|−100`
    5. `1|34`
2. Prove, directly from the definition of `|`, that for any integer `x≠0`, `x|0`, `1|x` and `x|x`.
2. Let `a` and `b` be integers where `a≠0`. Prove that if `a | b`, then <code>a<sup>2</sup> | b <sup>2</sup></code>.

---

## Summary

In this section we have learned about proof.

* You should be able to recognise where direct proof may be appropriate, and use it to prove simple theorems.
* You should be able to use the definition of odd and even numbers in proofs.

In the next section, we will look at another technique for proof, [proof by cases](../proof-by-cases).