---
title: Challenges
permalink: /course/inferential-statistics-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

---

## Significance

We have seen how to calculate `z` and `t` scores. However, when reporting our experiments we need to turn them into `p` values. Either we can calculate the accurate p value (complicated), or we can use a table to look it up!

### Task 1: Example

The mean and standard deviation of the age of a mother at the birth of their first child in England and Wales are:

| Mean | 28.8 | [Source](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/bulletins/birthcharacteristicsinenglandandwales/2017) |
| SD | 5.91  |[Source](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/adhocs/009572standarddeviationofthemeanageofmotherat1st2nd3rd4thand5thbirth1969to2017englandandwales) |

In a study of 100 first time mothers from a university town it is found that the mean age of first birth is 30.12. Should we conclude that this difference is statistically significant?

1. Calculate the appropriate statistic.

### Task 2: Z Scores to P Values

To convert a z-score to a p value we need to look up the z score in a table appropriate for the kind of test we're doing.

* [One tailed test table](https://www.ztable.net/)
* [Two tailed test table](https://www.sjsu.edu/faculty/gerstman/StatPrimer/z-two-tails.pdf).

This table shows us p values for different z scores. If we have a score of `1.142` we would check the tenths `1.1` row and the hundredths `0.04` column. If we were using the two-tailed z table, the answer would be `0.25429`. This would be our p value. Not significant.

* If we're doing a one tailed test we need to use the correct table, depending on whether we expect a positive or negative result. 
* In a two-tailed test, if our score is negative, that just indicates our value is smaller than the mean. We ignore the sign when using the two-tailed table.

If we wanted to check if we had achieved significance at 0.05 without finding the p value, we find the z-score corresponding to a p value of 0.05. This z score is called a **critical threshold**. If our hypothesis tests' z score is greater in magnitude than this critical threshold, we have a significant result. 

1. What is the critical threshold for z at an alpha of 0.05 using a two tailed test?
2. What is the critical threshold for z at an alpha of 0.05 using a one tailed test assuming a negative effect?
3. What is the critical threshold for z at an alpha of 0.05 using a one tailed test assuming a postive effect?
4. Does the experiment described above achieve significance?

### Task 3: T Scores to P Values and Degrees of Freedom

To convert a T score to a p value, we need a [table of t scores](https://t-tables.net/). With this we can find critical values for different common alpha levels for the t statistic.

To use this table we need to know our find our degrees of freedom. Why? Because the shape of the t distribution depends on the sample size \\( n \\).

The degrees of freedom in a t test are equal to \\(n - 1 \\) for a one-sample t test, and \\( n - 2 \\) for a two-sample t test.

Imagine we measure the length of `10` _Holopleura_, a genus of Longhorn Beetle in a particular tree. Suppose that our results show a mean length of `1.34 cm` and a standard deviation of `0.45 cm`. Our field guide says that such beetles have a mean length of `1 cm`. Is this a significant result?

1. Should we use a one-tailed test or a two-tailed test?
2. Calculate the t statistic
3. Calculate the degrees of freedom
4. What alpha level is our result significant at? e.g. \\( p < 0.1, p < 0.05, p < 0.01 \\)

---

## Effect Size

When we do a parametric test (i.e. one that assumes a normal distribution in our data), we can calculate the effect size. If we can, we should, because effect sizes are very useful to know. Cohen's D is a common measure of effect size expressed in terms of standard deviations.

### Task 4: Cohen's D

1. Calculate the effect size for the birth age experiment
2. How would this be conventionally described?
3. Calculate the effect size for the _Holopleura_ experiment
4. How would this be conventionally described?

#### Cohens D for a Z Test

<p class="math">\( d = \frac{\overline{x} - \mu}{\sigma} \)</p>

#### For a T Test

<p class="math">\(d = \frac{\overline{X}_2 - \overline{X}_1}{SD_{pooled}} \)</p>

Here \\( \\overline{X}_1 \\) and \\( \\overline{X}_2 \\) are the group means.

If you have equal sized groups:

<p class="math">\( SD_{pooled} = \sqrt{ \frac{ SD_1^{ 2} + SD_2^{ 2} }{2}} \)</p>

Otherwise:

<p class="math">\( SD_{pooled} = \sqrt{ \frac{ (n_1 - 1) \times SD_1^2 + (n_2 - 1) \times SD_2^2 }{n_1 + n_2 - 2}} \)</p>

Where \\( n_1 \\) and \\( n_1 \\) are the sample sizes of each group and \\( SD_1 \\) and \\( SD_2 \\) are the standard deviations of each group.

#### Conventional values

Interpret the result against these conventional values:

| Cohen's D | Conventional description |
| ----------- | ------------------------ |
| \\(d = 0.2\\) |	Small effect |
| \\(d = 0.5\\) |	Medium effect|
| \\(d = 0.8\\) |	Large effect|

---

## Chi Squared

Another common statistical test is the Chi Squared Test. This is for comparing counts of nominal variables.

<p class="math">\[ \chi^2 = \sum_{i=1}^{n} \frac{(O_i - E_i)^2}{E_i} \]</p>

Where \\( O_i \\) is an observed value, \\( E_i \\) is an expected value, and \\( n \\) is the number of such values.

Imagine I ask 100 people For their favorite size of dice. I have 5 observed values. Imagine I expected people to have no prefrence, my expected values would be that 1/5 of the sample liked each type of dice.

|         | d4 | d6 | d10 | d12 | d20|
|-------- |--- |----|----|-----|-----|
| **Observed** | 5 | 50 | 10 | 15  | 20 |
| **Expected** | 20 | 20| 20 | 20 | 20 |

Here our degrees of freedom are 5 - 1 = 4.

Once you've got a \\( \\chi^2 \\) value, you can look up the p value [in a table](https://www.mathsisfun.com/data/chi-square-table.html).

### Task 5: Chi-Squared Example

1. What is the  \\( \\chi^2 \\) for the above data?
2. What is the p value?
3. What does this tell us about people's preferences with regards to dice?

### Task 6: Comparing groups

I can also use the Chi Squared Test to compare two different groups. The groups might be men and women, gamers and non-gamers, people treated with drug A or B, and so on. The outcomes might be if they prefer chocolate or vanilla ice cream, whether or not they own a pony, and so on.

| | Outcome A | Outcome B | Sum |
|-|-----------|-----------| --- |
|**Group A**| 10  | 20 |  10+20 = 30|
|**Group B**| 15  | 5 | 15 + 5 = 20|
| **Sum**   | 10+15 = 25 | 20+5 = 25 | 50|

We have an obvserved value per Group/Outcome pair. We find an expected value for each observed value by working out, given the number of participants in each group and outcome, how many we would expect to have in that pair if they were distributed randomly.

Here the degrees of freedom are \\(df = ( rows -1) \times (columns -1)\\).

What would the expected value look like? Try and work this out yourself before taking a look at a [step by step walkthrough](https://www.mathsisfun.com/data/chi-square-test.html) if you're stuck.

1. What is the  \\( \\chi^2 \\) for the above data?
2. What is the p value?
3. What does this tell us about the two groups?
