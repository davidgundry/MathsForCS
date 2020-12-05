---
title: Z Scores
permalink: /course/z-scores/
---

In this section we will look at what an inferential statistic is, and the form they usually take. While there are loads of different formulas for different tests, they generally share the same general approach.

Watch the video and then answer the questions below.

## Sixteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Ko2s180NBpg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Ko2s180NBpg)


---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

The general form of an inferential statistic is usually like this:

<p class="math">\[ \frac{\textrm{observed} - \textrm{expected}}{\textrm{typical variation}} \]</p>

This gives us a number which expresses the **difference from what we expected** proportional to **what variation we would typcially expect**.

Different **test statistics** are defined in this way, such as the z-statistic and the t-statistic. To interpret the liklihood of achiving a particular value, you need to look where that value falls on **the probability distribution for that statistic**.

The z-distribution is a normal distribution with a mean of 0 and a standard deviation of 1. So a z statistic of 2 is equivalent to being 2 standard deviations away from the mean, or in the most extreme 5% of the data.


### Picking a single value from a normal distribution

If you've caught a fish (a single value) and you want to compare its size to a population mean, then we use the following form of the formula:

<p class="math">\[ z = \frac{x - \mu}{\sigma} \]</p>

Where \\( x \\) is the size of the fish caught (obsered), and \\( \\mu \\) is the population mean (expected). Here our **sampling distribution** is the same as the population distribution (our observed value represents 1 fish, and our population is a population of fish). Therefore, the typical variation we expect is equal to \\( \\sigma \\), where \\( \\sigma \\) is the population standard deviation.

This gives a z-statistic which is interpreted using the z-distribution.

### Picking a group mean from a distribution of group means

Say we catch 100 fish and find the average size, and compare that average to the population mean. When we average over a group of fish, we are no longer sampling directly from the population of fish. Instead our **sampling distribution** is of **means of groups of fish**, (where \\( n \\) is our group size).

<p class="math">\[ z = \frac{\overline{X} - \mu}{\frac{\sigma}{\sqrt{n}}} \]</p>

This gives a z-statistic which is interpreted using the z-distribution.

---

## Questions

### 1. Check your understanding

##### 1. What is your sampling distribution?

|    | Expression | The population distribution | Group means | Differences in group means | |
| -- | ---------- | ---- | ----- |--|
| 1. | You compare your IQ to the population  | <input type="radio" name="q11" id="q11t" data-answer value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> | <input type="radio" name="q11" id="q11d" value="d"/> | <span id="q11c" style="display:inline-block"></span> |
| 2. | You compare the average height of children in a class against an estimate for the population | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" data-answer  value="f"/> | <input type="radio" name="q12" id="q12d" value="d"/> | <span id="q12c" style="display:inline-block"></span> |
| 3. | You catch a big fish and compare it against a population mean | <input type="radio" name="q13" id="q13t" value="t" data-answer/> | <input type="radio" name="q13" id="q13f" value="f"/> | <input type="radio" name="q13" id="q13d" value="d"/> | <span id="q13c" style="display:inline-block"></span> |
| 4. | A factory produces pipes. You select one pipe from that day's production and compare its thickness against a benchmark value | <input type="radio" name="q14" id="q14t" data-answer value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> | <input type="radio" name="q14" id="q14d" value="d"/> | <span id="q14c" style="display:inline-block"></span> |
| 5. | A factory produces pipes. You compare the average thickness for the day's production against a benchmark value | <input type="radio" name="q15" id="q15t" value="t"/> | <input type="radio" name="q15" id="q15f" data-answer value="f"/> | <input type="radio" name="q15" id="q15d" value="d"/> | <span id="q15c" style="display:inline-block"></span> |
| 6. | You measure the average number of frogs per square meter in two different wetland habitats and compare the results | <input type="radio" name="q16" id="q16t" value="t"/> | <input type="radio" name="q16" id="q16f" value="f"/> | <input type="radio" name="q16" id="q16d" data-answer value="d"/> | <span id="q16c" style="display:inline-block"></span> |

<script src="/assets/js/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

##### 2. Pick the appropriate statistical test formula

|    | Expression | \\( z = \\frac{x - \\mu}{\\sigma} \\) | \\( z = \\frac{\\overline{X} - \\mu}{\\frac{\\sigma}{\\sqrt{n}}} \\) | |
| -- | ---------- | ---- | ----- |--|
| 1. | Is my score on a standardised test higher than average?  | <input type="radio" name="q21" id="q21t" data-answer value="t"/> | <input type="radio" name="q21" id="q21f" value="f"/> | <span id="q21c" style="display:inline-block"></span> |
| 2. | Are the scores of a class on the same test higher than average? | <input type="radio" name="q22" id="q22t" value="t"/> | <input type="radio" name="q22" id="q22f" data-answer  value="f"/> | <span id="q22c" style="display:inline-block"></span> |
| 3. | I generate numbers from a normal distribution. I get 100 surprisingly low values and think there is a bug in my code  | <input type="radio" name="q23" id="q23t" value="t"/> | <input type="radio" name="q23" id="q23f" data-answer  value="f"/> | <span id="q23c" style="display:inline-block"></span> |
| 4. | I think a particular person has an unusually high IQ | <input type="radio" name="q24" id="q24t" data-answer value="t"/> | <input type="radio" name="q24" id="q24f" value="f"/> | <span id="q24c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

##### 3. Is this significant?

Assume signficance means 95% liklihood that the result was not chance.

|    | Expression | Yes | No | |
| -- | ---------- | ---- | ----- |--|
| 1. | z = 0.5  | <input type="radio" name="q31" id="q31t" value="t"/> | <input type="radio" name="q31" id="q31f" data-answer value="f"/> | <span id="q31c" style="display:inline-block"></span> |
| 2. | p = 0.03 | <input type="radio" name="q32" id="q32t" data-answer value="t"/> | <input type="radio" name="q32" id="q32f"  value="f"/> | <span id="q32c" style="display:inline-block"></span> |
| 3. | z = 2  | <input type="radio" name="q33" id="q33t" data-answer value="t"/> | <input type="radio" name="q33" id="q33f"  value="f"/> | <span id="q33c" style="display:inline-block"></span> |
| 4. | z = 25 | <input type="radio" name="q34" id="q34t" data-answer value="t"/> | <input type="radio" name="q34" id="q34f" value="f"/> | <span id="q34c" style="display:inline-block"></span> |
| 5. | p = 2 | <input type="radio" name="q35" id="q35t" value="t"/> | <input type="radio" name="q35" id="q35f" data-answer value="f"/> | <span id="q35c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

### 2. Implementing the Z-Test

Implement one of the following functions to perform and display the result of a z-test. Choose from one of the following:

1. Take an arrays of numbers, a population mean, and a population standard deviation.
2. Take a single measurement, a population mean, and a population standard deviation.

Your function should print to `System.out`:

1. The calculated z statistic
2. Whether or not the result is significant
3. The effective alpha level used in the test

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSInferentialStatisticsZTest?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we learned the basics of how inferential statistics works by looking at the z test.

* You should be able to identify when the z-test would be used
* You should know the general formula that inferential statistics commonly take
* You should be able to identify your sampling distribution

Once you've completed the questions, you can move on to the next section about a very commonly used statistical test, called [the t-test](../t-test/).