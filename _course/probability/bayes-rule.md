---
title: Bayes Rule
permalink: /course/bayes-rule/
---

In this section we're going to learn about Bayes Rule, which was named after Reverend Thomas Bayes, apparently.

There are two videos for this section. The first introduces Bayes' Rule, the second is a worked example.

#### Twenty five-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/DsOJ4xlnZmk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/DsOJ4xlnZmk)

#### Ten-minute example

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/uUOSPFl7t0c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/uUOSPFl7t0c)

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

We can use Bayes' rule to iteratively update our beliefs about the world. This is one of the techniques used in machine learning.

We have a hypothesis H and new evidence E.

* Our **prior probability** (\\( P(H) \\)) is how likely we think H is _before_ our new evidence.
* We want to work out the **posterior probability** (\\( P(H \| E) \\)) of our hypothesis _after_ the new evidence

We also need to know:

* the probability that our evidence itself is true (\\( P(E) \\) )
* how likely the evidence is if our hypothesis is true (\\( P(E\|H) \\))

Using Bayes rule we can find our posterior: \\(P(H\|E)= \frac{ P(E\|H) \times P(H)}{P(E)}  \\)

We often want to make use of the Law of Total Probability

<p class="math">\[ P(H_1|E)= \frac{ P(E|H_1) \times P(H_1)}{\sum_{i} P(E | H_i) \times P(H_i)} \]</p>

---


## Questions

### 1. Question Generator

<script src="/assets/proofparty.js"></script>

<div id="target"></div>
<div id="answer" style="display: none; background-color: yellow;" class="math"></div>
<a id="answerbutton" class="btn btn-primary" type="submit" onClick="showAnswer('answer')">Show Answer</a>
<br />
<a class="btn btn-primary" type="submit" onClick="generateBayes('target')">Simple</a>
<br />
<a class="btn btn-primary" type="submit" onClick="generateBayes2('target')">Complex</a>

<script>
generateBayes = function(target)
{
    let p = proofparty.bayes();
    let str = p.question;
    const node = document.getElementById(target);
    MathJax.typesetClear([node]);
    node.innerHTML = str;
    MathJax.typesetPromise([node]).then(() => {
     // the new content is has been typeset
    });

    document.getElementById("answer").style.display="none";
    document.getElementById("answer").innerHTML = p.answer;
}
generateBayes2 = function(target)
{
    let p = proofparty.bayes2();
    let str = p.question;
    const node = document.getElementById(target);
    MathJax.typesetClear([node]);
    node.innerHTML = str;
    MathJax.typesetPromise([node]).then(() => {
     // the new content is has been typeset
    });

    const ansNode = document.getElementById("answer");
    MathJax.typesetClear([ansNode]);
    ansNode.innerHTML = p.answer;
    MathJax.typesetPromise([ansNode]).then(() => {
     // the new content is has been typeset
    });

    document.getElementById("answer").style.display="none";
}
generateBayes("target");
showAnswer = function(target)
{
    const node = document.getElementById(target);
    node.style.display='block';
}
</script>

---

## Summary

In this section we have learned about Bayes Rule.


You can now move on to the [probability challenges](../probability-challenges).