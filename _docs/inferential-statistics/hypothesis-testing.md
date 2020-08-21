---
title: Hypothesis Testing
permalink: /docs/hypothesis-testing/
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

1. 0.12
2. 0.04
3. 0.96
4. 0.012

##### 2. Power

1. You run an experiment to test if there is an effect of violence in video games using a statistical power of `0.4`. You get a null result (i.e. you do not reject the null hypothesis). Is this interesting?
2. You run the experiment again with a statistical power of `0.9` and get a null result. Is this interesting?

##### 3. Multiple Testing

The bonferoni correction is a way of adjusting the level of `α` if you are doing multiple testing. The `α` for each experiment is set to `α/m`, where `α` is your overall alpha, and `m` is the number of experiments you are running.

1. Imagine you ran 3 experiments using an overall `α = 0.05`, what should be your per-experiment `α`?
2. You run 8 experiments maintaining an overall `α = 0.05`. You get a p-value for one experiment of `0.006`. Should you claim significance?
3. You run two experiments on video game addiction using a questionnaire to measure addiction. One checks if time played has an effect. The other checks if game type has an effect. You use the same data for both. You get results of `p=0.41` and `p=0.62`. Should you claim a significant result?
4. You use the same data to run two experiments with unrelated hypotheses. Do you need to adjust `α` due to multiple testing?

### 2. Calculating Cohen's _d_

The formula for Cohen's _d_ (for equal sized groups) is as follows: `formlua!`

Write a function in Python that takes two number arrays of equal length and returns _d_.

## Summary

In this section we have learned about hypothesis testing. Once you've completed the questions, you can move on to the next section, where we will look at a popular statistical test called the [Student's t-test](../t-test/).
