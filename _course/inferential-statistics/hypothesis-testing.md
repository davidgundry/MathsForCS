---
title: Hypothesis Testing
permalink: /course/hypothesis-testing/
---

Inferential statistics are used for testing **hypotheses** - statements about how the world might be, e.g. "Driverless cars have fewer crashes than conventional cars". We don't know if this is true or not until we collect data to test it. 

Watch the video and then answer the questions below.

## Fifteen-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

## Key Points

* Our **alternate hypothesis** is the hypothesis we're testing, e.g. "Driverless cars have fewer crashes than conventional cars"
* Our **null hypothesis** says there is no effect, e.g. "Driverless cars have about the same number of crashes as conventional cars."
* A **p-value** tells us the liklihood our results were the result of chance.
* We compare it against our **alpha** (`α`) value, which is usually `α = 0.05`.
* If `p < α`, then our results are **statistically significant**.
* A **Type I** error is falsely rejecting the null hypothesis.
* A **Type II** error is falsely accepting the null hypothesis.
* The likelihood of making a Type II error is called beta `β`. It is related to the **power** of the experiment `power = 1 - β`
* Our **effect size** is how big the effect we have detected is.

## Questions

### 1. Check your understanding

##### 1. P-values

Assuming a conventional value for `α = 0.05`, say which of the following p-values are statistically significant:

1. <input type="checkbox" id="q11" data-answer="true" /><label for ="q11">0.12</label> <span id="q11c" style="display:inline-block"></span>
2. <input type="checkbox" id="q12" data-answer="true" /><label for ="q12">0.04</label> <span id="q12c" style="display:inline-block"></span>
3. <input type="checkbox" id="q13" data-answer="true" /><label for ="q13">0.96</label> <span id="q13c" style="display:inline-block"></span>
4. <input type="checkbox" id="q14" data-answer="true" /><label for ="q14">0.012</label> <span id="q14c" style="display:inline-block"></span>

##### 2. Power

1. You run an experiment to test if there is an effect of violence in video games using a statistical power of `0.4`. You get a null result (i.e. you do not reject the null hypothesis). Is this interesting?

<label for ="q11t">Yes</label> <input type="radio" name="q21" id="q21t" value="t"/> 
<label for ="q11f">No</label> <input type="radio" name="q21" id="q21f" data-answer value="f"/> <span id="q21c" style="display:inline-block"></span>

2. You run the experiment again with a statistical power of `0.9` and get a null result. Is this interesting?

<label for ="q22t">Yes</label> <input type="radio" name="q22" id="q22t" value="t"/> 
<label for ="q22f">No</label> <input type="radio" name="q22" id="q22f" data-answer value="f"/> <span id="q22c" style="display:inline-block"></span>

##### 3. Multiple Testing

The bonferoni correction is a way of adjusting the level of `α` if you are doing multiple testing. The `α` for each experiment is set to `α/m`, where `α` is your overall alpha, and `m` is the number of experiments you are running.

1. <label for ="q31">Imagine you ran 3 experiments using an overall `α = 0.05`, what should be your per-experiment `α`? </label> <input type="text" id="q31" data-answer=""/> <span id="q31c" style="display:inline-block"></span>

2. <label for ="q32">You run 8 experiments maintaining an overall `α = 0.05`. You get a p-value for one experiment of `0.006`. Should you claim significance? </label> <input type="text" id="q32" data-answer=""/> <span id="q32c" style="display:inline-block"></span>

3. <label for ="q33">You run two experiments on video game addiction using a questionnaire to measure addiction. One checks if time played has an effect. The other checks if game type has an effect. You use the same data for both. You get results of `p=0.41` and `p=0.62`. Should you claim a significant result?</label> <input type="text" id="q33" data-answer=""/> <span id="q33c" style="display:inline-block"></span>

4.  <label for ="q34">You use the same data to run two experiments with unrelated hypotheses. Do you need to adjust `α` due to multiple testing? </label> <input type="text" id="q34" data-answer=""/> <span id="q34c" style="display:inline-block"></span>

### 2. Calculating Cohen's _d_

The formula for Cohen's _d_ (for equal sized groups) is as follows: `d = (M<sub>1</sub> - M<sub>2</sub>) / SD<sub>pooled</sub>`

Where SD<sub>pooled</sub> is `sqrt((SD<sub>1</sub><sup>2</sup> + SD<sub>2</sub><sup>2</sup>)/2)`

Write a function in Python that takes two number arrays of equal length and returns _d_.

## Summary

In this section we have learned about hypothesis testing. Once you've completed the questions, you can move on to the next section, where we will look at a popular statistical test called the [Student's t-test](../t-test/).
