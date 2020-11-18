---
title: Hypothesis Testing
permalink: /course/hypothesis-testing/
---

Inferential statistics are used for testing **hypotheses** - statements about how the world might be, e.g. "Driverless cars have fewer crashes than conventional cars". We don't know if this is true or not until we collect data to test it. 

Watch the video and then answer the questions below.

## Video not yet available

---

## Key Points

### Hypotheses

* Our **alternate hypothesis** is the hypothesis we're testing, e.g. "Driverless cars have fewer crashes than conventional cars"
* Our **null hypothesis** says there is no effect, e.g. "Driverless cars have about the same number of crashes as conventional cars."

### P-Values

* A **p-value** tells us the liklihood our results were the result of chance.
* We compare it against our **alpha** (`α`) value, which is usually `α = 0.05`.
* If `p < α`, then our results are **statistically significant**.

### Errors

* A **Type I** error is falsely rejecting the null hypothesis.
* A **Type II** error is falsely accepting the null hypothesis.
* The likelihood of making a Type II error is called beta `β`. It is related to the **power** of the experiment `power = 1 - β`

### Effect Size

* Our **effect size** is how big the effect we have detected is.

---

## Questions

### 1. Check your understanding

##### 1. P-values

Assuming a conventional value for `α = 0.05`, say which of the following p-values are statistically significant:

1. <input type="checkbox" id="q11" data-answer="false" /><label for="q11">0.12</label> <span id="q11c" style="display:inline-block"></span>
2. <input type="checkbox" id="q12" data-answer="true" /><label for="q12">0.04</label> <span id="q12c" style="display:inline-block"></span>
3. <input type="checkbox" id="q13" data-answer="false"/><label for="q13">0.96</label> <span id="q13c" style="display:inline-block"></span>
4. <input type="checkbox" id="q14" data-answer="true" /><label for="q14">0.012</label> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Power

1. You run an experiment to test if there is an effect of violence in video games using a statistical power of `0.4`. You get a null result (i.e. you do not reject the null hypothesis). Is this interesting?

<label for ="q21t">Yes</label> <input type="radio" name="q21" id="q21t" value="t"/> 
<label for ="q21f">No</label> <input type="radio" name="q21" id="q21f" data-answer value="f"/> <span id="q21c" style="display:inline-block"></span>

2. You run the experiment again with a statistical power of `0.9` and get a null result. Is this interesting?

<label for ="q22t">Yes</label> <input type="radio" name="q22" id="q22t" data-answer  value="t"/> 
<label for ="q22f">No</label> <input type="radio" name="q22" id="q22f" value="f"/> <span id="q22c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Multiple Testing

The bonferoni correction is a way of adjusting the level of `α` if you are doing multiple testing. The `α` for each experiment is set to `α/m`, where `α` is your overall alpha, and `m` is the number of experiments you are running.

1. <label for ="q31">Imagine you ran 3 experiments using an overall `α = 0.05`, what should be your per-experiment `α`? </label> <input type="text" id="q31" data-answer="0.16"/> <span id="q31c" style="display:inline-block"></span>

2. You run 8 significance tests maintaining an overall `α = 0.05`. You get a p-value for one test of `0.006`. Should you claim significance?
<br /><label for ="q42t">Yes</label> <input type="radio" name="q42" id="q42t" data-answer  value="t"/>  <label for ="q42f">No</label> <input type="radio" name="q42" id="q42f" value="f"/> <span id="q42c" style="display:inline-block"></span>

3. You run two experiments on video game addiction using a questionnaire to measure addiction. One checks if time played has an effect. The other checks if game type has an effect. You use the same data for both. You get results of `p=0.041` and `p=0.062`. Should you claim a significant result?
<br /><label for ="q43t">Yes</label> <input type="radio" name="q43" id="q43t" value="t"/>  <label for ="q43f">No</label> <input type="radio" name="q43" id="q43f" data-answer value="f"/> <span id="q43c" style="display:inline-block"></span>

4. You use the same data to run two experiments with unrelated hypotheses. Do you need to adjust `α` due to multiple testing? 
<br /><label for ="q41t">Yes</label> <input type="radio" name="q41" id="41t" value="t"/> <label for ="q41f">No</label> <input type="radio" name="q41" id="q41f" data-answer value="f"/> <span id="q41c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3', 'q4')">Check Answers</a>

### 2. Maths to Code Practice

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

The formula for Cohen's _d_ (for equal sized groups) is as follows

<p class="math">\(d = \frac{M_2 - M_1}{SD_{pooled}} \)</p>

Where 

<p class="math">\( SD_{pooled} = \sqrt{ \frac{ SD_1^{ 2} + SD_2^{ 2} }{2}} \)</p>

Write a function in Java that takes two number arrays of equal length and returns _d_.

You might want to look at my code for calculating standard deviation from the [maths to code lecture](../maths-to-code).

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSInferentialStatisticsCohensD?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we have learned about hypothesis testing. Once you've completed the questions, you can move on to the next section, where we will look at a popular statistical test called the [Student's t-test](../t-test/).
