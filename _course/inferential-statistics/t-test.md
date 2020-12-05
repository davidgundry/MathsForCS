---
title: Student's T-Test
permalink: /course/t-test/
---

We are going to learn about a common inferential statistic called the Student's T-Test (it was published under the psedonym 'Student'). It is a so-called **parametric** test, because it assumes your data follows a **normal distribution**.

Watch the video and then answer the questions below.

## Thirty four-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Hh8wehA0HSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Hh8wehA0HSY)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

* The t-test calculates the T statistic
* The T statistic can be converted to a p-value by comparing it to the t-distribution
* The t-test assumes our data is normally distributed
* T-tests can compare only up to two groups

### One-sample and paired t-test

If we want to compare **a group mean** against a known value (e.g the population mean \\( \\mu \\)), or a mean of a group of differences with a known value (e.g. (\\ \\mu = 0\\)), we use the following formula:

<p class="math">\[ t = \frac{\overline{x} - \mu}{\frac{s}{\sqrt{n}}} \]</p>

We use the t-test (as opposed to the z-test) when we don't know the population standard deviation \\( \\sigma \\), so we use the sample standard deviation \\( s \\). Because of the uncertainty in calculating \\( s \\), we get a t-statistic instead of a z-statistic, and have to compare it on a t-distribution.

### Two-sample t-test

If we want to compare **a differences between group means** (\\(\overline{x}_1 - \overline{x}_2\\)) against an expected difference (e.g. 0 as in the formula below), we use the following formula:

<p class="math">\[ t = \frac{(\overline{x}_1 - \overline{x}_2) - 0 }{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \]</p>

Where \\( \\overline{x}_1 \\) and  \\( \\overline{x}_2 \\) are the means of the two groups,  \\( n_1 \\) and \\( n_2 \\) are the number of observations in the two groups, and \\( s_1 \\) and \\( s_2 \\) are the standard deviations of the two groups.


---

## Questions

### 1. Check your understanding

##### 1. Pick the appropriate statistical test formula

|    | Expression | \\( z = \\frac{x - \\mu}{\\sigma} \\) | \\( z = \\frac{\\overline{X} - \\mu}{\\frac{\\sigma}{\\sqrt{n}}} \\) | \\( t = \\frac{\\overline{x} - \\mu}{\\frac{s}{\\sqrt{n}}} \\) | \\( t = \\frac{(\\overline{x}_1 - \\overline{x}_2) - 0 }{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}} \\) | |
| -- | ---------- | ---- | ----- |--|
| 1. | I compare the average height of two groups  | <input type="radio" name="q11" id="q11t"  value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> | <input type="radio" name="q11" id="q11d" value="d"/> | <input type="radio" name="q11" id="q11e" data-answer value="e"/> | <span id="q11c" style="display:inline-block"></span> |
| 2. | I compare a group's performance in a puzzle against a theoretical mean that assumes completely random behaviour | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f"   value="f"/> | <input type="radio" name="q12" id="q12d" data-answer value="d"/> | <input type="radio" name="q12" id="q12e" value="e"/> | <span id="q12c" style="display:inline-block"></span> |
| 3. | I assess the IQ of a group assuming \\( \\mu = 100, \\sigma = 15 \\)  | <input type="radio" name="q13" id="q13t" value="t"/> | <input type="radio" name="q13" id="q13f" data-answer value="f"/> | <input type="radio" name="q13" id="q13d" value="d"/> | <input type="radio" name="q13" id="q13e" value="e"/> | <span id="q13c" style="display:inline-block"></span> |
| 4. | I investigate if drinking coffee increases a participant's heart rate compared to a resting value | <input type="radio" name="q14" id="q14t" value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> | <input type="radio" name="q14" id="q14d" data-answer value="d"/> | <input type="radio" name="q14" id="q14e" value="e"/> | <span id="q14c" style="display:inline-block"></span> |
| 5. | I run a counterbalanced game enjoyment study. Each participant plays two games and rates each of them. I want to see if one game is more enjoyable than the other | <input type="radio" name="q15" id="q15t" value="t"/> | <input type="radio" name="q15" id="q15f" value="f"/> | <input type="radio" name="q15" id="q15d" data-answer value="d"/> | <input type="radio" name="q15" id="q15e" value="e"/> | <span id="q15c" style="display:inline-block"></span> |

<script src="/assets/js/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 2. Calculate the t statistic

I collect 10 sensor readings each from 2 sensors. I want to see if there is a difference between the means of their readings.

| Group 1 | Group 2 |
| ------- | ------- |
| 0.4 | 6.3 |
| 3.6 | -1.2 |
| 3.3 | -11.3 |
| 1.5 | -6.3 |
| -1.7 | -5 |
| 0.1 | -3.4 |
| 4.2 | 2.4 |
| -1.8 | 14.7 |
| 1.9 | -2.9 |
| -3.6 | 9.9 |

We should use a:

<label for ="q41f">One-Sample T-test</label> <input type="radio" name="q41" id="q41f" value="f"/>
<label for ="q41t">Paired T-test</label> <input type="radio" name="q41" id="q41t" value="t"/>
<label for ="q41d">Two-Sample T-test</label> <input type="radio" name="q41" id="q41d" data-answer value="d"/> <span id="q41c" style="display:inline-block"></span>

We get a t statistic of:

<label for ="q21">t = </label> <input type="text" id="q21" data-answer="0.18" /> (2 decimal places) <span id="q21c" style="display:inline-block"></span>

Here there are 20 data points. Because we "spend" 2 of them to calculate the mean for each group we are left with 18 **degrees of freedom** (df). We do a 2 tailed test against an \\( \\alpha = 0.05 \\). Look up our `t` and `df` in [a table of t-statistics for different alpha values](https://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf). If our t value is _larger_ than the one listed for our `t` and `df` we have significance.

Is our result significant?

<label for ="q31t">Yes</label> <input type="radio" name="q31" id="q31t" value="t"/>
<label for ="q31f">No</label> <input type="radio" name="q31" id="q31f" data-answer value="f"/> <span id="q31c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2', 'q3', 'q4')">Check Answers</a>


---

## Summary

In this section we have learned about sampling from a population and threats to validity involved. Once you've completed the questions, you can move on to the [inferential statistics challenges](../inferential-statistics-challenges/).