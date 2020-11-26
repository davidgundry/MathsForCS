---
title: Challenges
permalink: /course/descriptive-statistics-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Experiment

We are going to do an experiment to gather some data. In the experiment you will play a game for 5 minutes. After this time you will complete a questionnaire.

I will send you a link to the experiment during in the practical.

After everyone has completed the experiment, we will process the data and generate various graphs and descriptive statistics.

We will be using a spreadsheet program such as LibreOffice Calc or Microsoft Excel. We will also be using [Plotly Chart Studio](https://plotly.com/chart-studio/). There are various dedicated statistics packages such as R, SPSS, and NumPy. Due to their complexity, we're not going to use them for this practical.

### Task 1

We will start by processing the raw data using a spreadsheet program. I will send you the experiment data once it has been collected. The first stage of any data analysis is transforming the data into a usable form.

You will have data for. There are 31 questions, each scored 1-5. There is also an additional yes/no question giving the experimental condition the participant was in. The rows of your table will contain the participant's data. The columns will be the answers to a particular question.

You need to create a new column for the total immersion score and calculate it for each participant using a spreadsheet formula. To do this find the mean of the questions answers. However, in this calculation some of the values need to be reversed (i.e. the question is asked the opposite way around, and so you need to flip the answers.) As the scale is out of 5, the reversed value is `6-x`. The questions to reverse are:

    Q6, Q8, Q9, Q10, Q18, Q20

The IEQ is made up of 5 components. For each of these components, create a new column and label it with the component name. Use a formula to calculate the mean of the questions listed below for each participant. Questions marked with `r` should be reversed before this calculation.

1. **Cognitive involvement:** questions 1, 2, 3, 4, 19, 21, 22, 25, 29
2. **Emotional involvement:** questions 13, 23, 24, 27, 30, 31
3. **Real world dissociation:** questions 5, 6r, 7, 8r, 9r, 12, 14
4. **Challenge:** questions 17, 18r, 20r, 26
5. **Control:** questions 10r, 11, 15, 16, 28

### Task 2

Copy your data into [Plotly Chart Studio](https://plotly.com/chart-studio/). Right-click on each column header and select `Headers > Rename header` to name it with the name of the data column. Do this for the main columns:

1. Condition
2. Total Immersion
3. Cognitive involvement
4. Emotional involvement
5. Real world dissociation
6. Challenge
7. Control

### Task 3

Create the following plots to explore what your data looks like. Save interesting plots by taking a screenshot (exporting images requires you to be signed in).

1. Bar chart of experimental condition (how many people in each condition?)
2. Histogram of total immersion score (what does the distribution of the data look like?)
3. Histograms of components of immersion (what do these distributions look like?)

Have a look at some of these for each experimental condition.

**To make a graph (trace):** In Plotly Chart Studio, Click **+Trace**. You can choose the graph type, and the columns of data it is going to draw its values from.

**To create a graph of the data from only one codition.** Go to `Transforms` and select **+Transform** for your trace. Select `Filter`. Under `Target` select experimental condition. Under `Operator` select `include values`. In values put in the string used for one of the experimental conditions.

**To label your traces.** Go to `Style > Traces` and give them a name.

### Task 4

Create a box plot trace for the Total Immersion variable. Do this for each experimental condition and place them side-by-side. Do we see much difference between the conditions?

### Task 5

Create scatter plots for the five components of the IEQ. Do you see any correlation? Positive? Negative? Strong? Weak?

Once you've created your scatter traces go to `Analyse > Curve Fitting`. Select **+Fit** and pick your scatter trace.

To perform a linear regression, select `Function Family = Linear` (or `1st order`). This will find the line of best fit for your data. What sort of relationship does this show between your variables?

Explore the different options for fitting functions to your data. 

### Task 6

Calculate the following variables, which we will need in two weeks time for our inferrential statistics practical:

* Mean for treatment and control groups
* Standard Deviation for treatment and control groups
* Median, quartiles and inter-quartile range for each condition

You may want to use an online tool or write a script to calculate these for you. Boxplots in Plotly show you the median and quartiles if you hover over them.

### Task 7

Write a function in Java to calculate **Pearson's r**. This should take two arrays of data corresponding to `x` and `y` in the formula below and return `r`.

Now use your function to calculate `r` for the IEQ components of the data we have collected.

<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<p class="math">\[ r = \frac{\sum{(x_i - \overline{x})(y_i - \overline{y})}}{\sqrt{\sum(x_i - \overline{x})^2\sum(y_i - \overline{y})^2}} \]</p>

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSDescriptiveStatsPearsonsR?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>