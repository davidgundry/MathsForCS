---
title: Challenges
permalink: /course/proof-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Theorem Generator

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/assets/proofparty.js"></script>

Use this theorem generator to generate theorems for you to prove. I _think_ it will only generate ones that are provably correct. However, if one doesn't seem right, or you can't solve it after trying, make a note of it and move on.

To prove them, you will need to use Direct Proof, Proof by Cases, or Proof by Induction. Save your proofs so you can look back at them later. Sometimes it generates trivial theorems by chance, so don't be confused if it seems too obvious!

Prove the following conjecture:

<div id="proofQuestions" class="math"></div>
<br />
<a class="btn btn-primary" type="submit" onClick="generateProofQuestions('proofQuestions')">Generate</a>


<script>
generateProofQuestions = function(target)
{
    let str = proofparty.random();
    const node = document.getElementById(target);
    MathJax.typesetClear([node]);
    node.innerHTML = str;
    MathJax.typesetPromise([node]).then(() => {
     // the new content is has been typeset
    });
}
generateProofQuestions('proofQuestions')
</script>