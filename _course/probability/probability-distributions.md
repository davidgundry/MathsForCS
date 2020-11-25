---
title: Probability Distributions
permalink: /course/probability-distributions/
---

In this section we're going to learn about some common probability distributions

Watch the video and then answer the questions below.

## Thirteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/j65hvDbHtq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/j65hvDbHtq8)

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

### Discrete Random Variables

A variable that has a countable number of possible values is called a **discrete random variable** If you roll a dice, there are a countable number of possible values:
    
    ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

The list of probabilities for each value is the **probability function** or **probability mass function**. This gives its **probability distribution**. The list of probabilities must add up to 1.

Discrete probability distributions include:

* Binomial distribution
* Poisson distribution

### Continuous Random Variables

A variable that could take an infinite (continuous) number of values is a **continuous random variable**. For example, the height of a random student might be a continuous random varible.

It is represented by the area under a curve, or integral. This curve is a **probability density function**. The area under the curve adds up to 1. There are an infinite number of possible values, so the probability of any single value is 0.

Continuous probability distributions include:

* Normal distribution
* Exponential distribution

### Uniform Distribution

All outcomes are equally likely. Like rolling a fair dice.


![Normal distribution defined by mean and standard deviation](/assets/img/uniform.png)

In the case of a discrete uniform distribution, if there are \\( n \\) outcomes, the probability for each outcome is:

<p class="math">\[ P(X=x)= \frac{1}{n} \]</p>

In the case of a uniformly distributed variable that takes values between \\( a \\) and \\( b \\), its probability density function is:

<p class="math">\[ f(x) = \begin{cases} 
      \frac{1}{b-a} & a \leq x \leq b \\
      0 & x \lt b \textrm{ or } x \gt b 
   \end{cases} \]</p>

### Binomial Distribution

Models the number of successes for boolean data: coin flips, yes/no questions, etc.

Its probability mass function is the following:

<p class="math">\[ P(X=x)=^nC_x \times p^x \times (1-p)^{(n-x)} \]</p>


### Normal Distribution

Also known as the **Gaussian** distribution. The classic bell curve. Very common in real-world data.

![Normal distribution defined by mean and standard deviation](/assets/img/normal-dist.png)

It is defined by its mean \\( \\mu \\) and standard deviation \\( \\sigma \\). These are the only two parameters you need to know to plot a normal distribution. As it is defined by parameters, it is a **parametric distribution**.

It's probability density function is the following:

<p class="math">\[ f(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}(\frac{x - \mu}{\sigma})^2} \]</p>

Which looks complicated, but remember it's just a function of \\( \\mu \\) and \\( \\sigma \\).

Remember, because it's continuous, if you wanted to find the probability of a range of values, you'd have to use integration to find the area under the curve.

---

## Questions

### 1. Check your understanding

|    | Expression | Discrete | Continuous | |
| -- | ---------- | ---- | ----- |--|
| 1. | Rolling a biased dice  | <input type="radio" name="q11" id="q11t" data-answer value="t"/> | <input type="radio" name="q11" id="q11f" value="f"/> | <span id="q11c" style="display:inline-block"></span> |
| 2. | Java's `Math.random()` | <input type="radio" name="q12" id="q12t" value="t"/> | <input type="radio" name="q12" id="q12f" data-answer  value="f"/> | <span id="q12c" style="display:inline-block"></span> |
| 3. | A random integer `0-100` | <input type="radio" name="q13" id="q13t" data-answer value="t"/> | <input type="radio" name="q13" id="q13f"  value="f"/> | <span id="q13c" style="display:inline-block"></span> |
| 4. | A binomial distribution | <input type="radio" name="q14" id="q14t" data-answer  value="t"/> | <input type="radio" name="q14" id="q14f" value="f"/> | <span id="q14c" style="display:inline-block"></span> |
| 5. | A normal distribution | <input type="radio" name="q15" id="q15t" value="t"/> | <input type="radio" name="q15" id="q15f" data-answer value="f"/> | <span id="q15c" style="display:inline-block"></span> |

<script src="/assets/check.js"></script>
<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

1. <label for ="q21">What is the liklihood of getting `1` on a `6` sided dice (as a fraction)?</label> <input type="text" id="q21" data-answer="1/6"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">What is the liklihood of getting `0.5` on a continuous uniform distribution of numbers from `0` to `1`</label> <input type="text" id="q22" data-answer="0"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">In a normal distribution, about 95% of the data is within how many standard deviations of the mean?</label> <input type="text" id="q23" data-answer="2"/> <span id="q23c" style="display:inline-block"></span>
3. <label for ="q24">What do the probabilities in a probability mass function sum to?</label> <input type="text" id="q24" data-answer="1"/> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


---

## Summary

In this section we have learned about probability distibutions.

In the next section we get on to [probability trees](../probability-trees).