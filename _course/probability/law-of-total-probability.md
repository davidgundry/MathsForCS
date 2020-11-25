---
title: Law of Total Probability
permalink: /course/law-of-total-probability/
---

In this section we're going to discover the Law of Total Probability.

Watch the video and then answer the questions below.

## Ten-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/vCrbBn1tKQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/vCrbBn1tKQA)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

### Partition

A partition is a way of subdividing a set into partitions \\( B_1 \\), \\( B_2 \\), ..., \\( B_n \\) that are:
1. disjoint (i.e. there is no overal between \\( B_i \\) and \\( B_j \\), or in other words \\( B_i \\cap Bj = \\emptyset \\))
2. collectively exhaustive (i.e. together they contain everything in the set)

We can often partition our sample space. For example, if we have an experiment \\( S \\) where we pick a ball from a random bag out of three bags, we can draw from either \\( B_1 \\), \\( B_2 \\), or \\( B_3 \\). As there are no other outcomes in our experiment, these would be partitions of our sample space.

Any other event in the sample space \\( A \\) (e.g. the ball being red) would overlap one or more of these partitions. Then we can work out \\( P(A) \\) as follows:

### Law of Total Probability

If \\( B_1 \\), \\( B_2 \\), \\( B_3 \\), \\( \\cdots \\) is a partition of the sample space \\( S \\), then for any event \\( A \\) we have 

<p class="math">\[ P(A) = \sum_{i}P(A \cap B_i) = \sum_{i} P(A | B_i) \times P (B_i) \]</p>

---

## Questions

### 1. Question Generator

<script src="/assets/proofparty.js"></script>

<div id="target"></div>
<div id="answer" style="display: none; background-color: yellow;" class="math"></div>
<a class="btn btn-primary" type="submit" onClick="generateTotalLaw('target')">Generate</a>
<br />
<a id="answerbutton" class="btn btn-primary" type="submit" onClick="showAnswer('answer')">Show Answer</a>
<br />


<script>
generateTotalLaw = function(target)
{
    let p = proofparty.totalLaw();
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
generateTotalLaw("target");
showAnswer = function(target)
{
    const node = document.getElementById(target);
    node.style.display='block';
}
</script>

---

## Summary

In this section we saw the law of total probability.

In the next section we get on to [Bayes' rule](../bayes-rule).