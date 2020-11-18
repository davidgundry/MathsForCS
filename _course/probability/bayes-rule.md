---
title: Bayes Rule
permalink: /course/bayes-rule/
---

In this section we're going to learn about Bayes Rule, which was named after Reverend Thomas Bayes, apparently.

Watch the video and then answer the questions below.

## Video not yet available

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

Bayes' rule uses conditional probabilities to find the probability of A given B when we know \\( P(B\|A) \\), but don’t know \\( P(A \\cap B ) \\). 

<p class="math">\( P(A|B) = \frac{ P(B|A) \times P(A) }{P(B)}  \)</p>

This is a rearragement of the formula for conditional probability \\( P(A \\cap B) = P(A\|B) \\times P(B) \\)

### Applying Bayes' Rule

**Question:** What is the liklihood that a student who passed their exam had revised? Assuming:

* Half of students revise
* Half of students pass their exam
* Of those who revise, 80% passed their exam

**Answer:** We can use Bayes's Rule to solve this question.

* \\(P(Revise) = 0.5 \\)
* \\(P(Pass) = 0.5 \\)
* \\(P(Pass \| Revise) = 0.8 \\)

<p class="math">\[ \frac{ P(Pass|Revise) \times P(Revise)}{P(Pass)} = \frac{ 0.8 \times 0.5}{0.5} = 0.8\]</p>

Therefore \\( P(Revise\|Pass) = 0.8 \\)


### Thinking like a Bayesian

We have a hypothesis H and new evidence E.

* Our **prior probability** (\\( P(H) \\)) is how likely we think H is _before_ our new evidence.
* We want to work out the **posterior probability** (\\( P(H \| E) \\)) of our hypothesis _after_ the new evidence

We also need to know:

* the probability that our evidence itself is true (\\( P(E) \\) )
* how likely the evidence is if our hypothesis is true (\\( P(E\|H) \\))

Using Bayes rule we can find our posterior: \\(P(H\|E)= \frac{ P(E\|H) \times P(H)}{P(E)}  \\)


---

## Questions

### 1. Check your understanding



---

## Summary

In this section we have learned about Bayes Rule.