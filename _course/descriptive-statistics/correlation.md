---
title: Correlation
permalink: /course/correlation/
---

In this section we're going to learn about **correlation**, which is not - as you may know - **causation**.

### Video not yet available

---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Key Points

* **Correlation** is not **causation**.
* There are different measures of correlation, but they express correlation as a value between `-1` (**perfect negative correlation**) and `1` (**perfect positive correlation**)
* A correlation of `0` means there is no correlation at all between the variables

### Scatterplots

You can use a scatterplot to eyeball correlation.

<div id="scatter"></div>

<a class="btn btn-primary" type="submit" onClick="regenerate('positive')">Positive</a> <a class="btn btn-primary" type="submit" onClick="regenerate('negative')">Negative</a> <a class="btn btn-primary" type="submit" onClick="regenerate('none')">No Correlation</a>

<script>
regenerate = function(type)
{
    var x = new Array(100);
    var y = new Array(100);
    var g = Math.random();
    var r = Math.random()*3;
    for (let i=0;i<100;i++)
    {
        x[i] = Math.random()*10 - 5;
        if (type === "positive")
            y[i] = g*x[i] + (Math.random()*r)-r/2;
        else if (type === "negative")
            y[i] = -g*x[i] + (Math.random()*-r)+r/2;
        else if (type === "none")
            y[i] = Math.random()*10 - 5;
    }

    var trace1 = {
    x: x,
    y: y,
    mode: 'markers',
    type: 'scatter'
    };

    var data = [trace1];

    Plotly.newPlot('scatter', data);
}
regenerate("positive");

</script>

### Pearson's r

Pearson's r gives a measure of correlation for parametric data. It checks if there is a **linear relationship** between variables.

It's also called the **product-moment correlation co-efficient**.

<p class="math">\[ r = \frac{\sum{(x_i - \overline{x})(y_i - \overline{y})}}{\sqrt{\sum(x_i - \overline{x})^2\sum(y_i - \overline{y})^2}} \]</p>

### Spearman's Rho

Spearman's Rho gives a measure of correlation for **non-parametric** data. It checks if there is a **monotonic relationship** between variables (i.e, as `x` increases, `y` increases), but perhaps by a non-linear amount.

To do this, it basically calculates _Pearson's r_ on the **ranks** of the variables. (i.e. you only care about the order of the values in relation to one another, not the exact values)

### Linear Regression

Linear regression tries to find a **linear model**, or function that relates the two variables with the minimum error.

A linear relationship is a straight line, which has the equation:

<p class="math">\[\ y = a + bx \]</p>

(Which means the `y` value for a point on the line is going to be `b` times the `x` value plus `a`. `a` here is also known as the **intercept** and `b` is also known as the **gradient**)

To find the values for a and b in this equation, we can used the least squares method. The formulas for that method are these:

<p class="math">\[ b = \frac{\sum{(x_i - \overline{x})(y_i - \overline{y})}}{\sum{(x_i - \overline{x})^2}} \]</p>

<p class="math">\[ a = \overline{y} - b\overline{x} \]</p>


---

## Questions

### 1. Check your understanding

Does this show a correlation between the two variables?

---

## Summary

In this section we have learned about data visualisation.

* You should know what correlation is.
* You should be able to identify correlations on a scatterplot.
* You should know what Pearson's r, Spearman's ρ, and linear regression are and roughly how they work.
* You should be able to look these methods up if you need to use them.

You may now move on to the [descriptive statistics challenges](../descriptive-statistics-challenges/)