---
title: Data Visualisation
permalink: /course/data-visualisation/
---

In this section we're going to learn about data visualisation.

### Video not yet available

---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>


## Key Points

Data visualisation is important to help other people (and yourself) understand your data. In the academic literature there are standard ways certain types of data are represented.

### Bar charts
* Compares values on a common scale
* Shows the ratio between values
* Appropriate for categorical variables

<div id="bar-chart"></div>

<script>
var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

Plotly.newPlot('bar-chart', data);
</script>

### Histogram
* Like a bar chart, but continuous values are grouped into bins
* Appropriate for continuous variables

<div id="histogram"></div>

<script>
    var x = [];
for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

var trace = {
    x: x,
    type: 'histogram',
  };
var data = [trace];
Plotly.newPlot('histogram', data);
</script>

### Box plots
* Visualises distribution of data
* Shows mean, upper quartile, lower quartile, and highest and lowest values
* Commonly used for illustrating hypothesis tests

<div id="boxplot"></div>

<script>
var y0 = [];
var y1 = [];
for (var i = 0; i < 50; i ++) {
	y0[i] = Math.random()*10;
	y1[i] = Math.random()*10 + 2.5;
}

var group1 = {
  y: y0,
  type: 'box'
};

var group2 = {
  y: y1,
  type: 'box'
};

var data = [group1, group2];

Plotly.newPlot('boxplot', data);
</script>


### Pie charts
* Shows proportions of a whole
* Looks nice
* Hard to visually compare values and generally avoided in the research literature


<div id="pie-chart"></div>

<script>
var data = [{
  values: [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)],
  labels: ['Dogs', 'Cats', 'No Pet'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('pie-chart', data, layout);

</script>

### Scatterplot

<div id="scatter"></div>

<script>

    var x = new Array(100);
    var y = new Array(100);
    var g = Math.random()-0.5;
    var r = Math.random()*3;
    for (let i=0;i<100;i++)
    {
        x[i] = Math.random()*10;
        y[i] = g*x[i] + (Math.random()*r)-r/2;
    }

    var trace1 = {
    x: x,
    y: y,
    mode: 'markers',
    type: 'scatter'
    };

    var data = [trace1];

    Plotly.newPlot('scatter', data);

</script>


### And More

There are loads of variations of these kinds of chart, and there are loads more.

---

## Questions

### 1. Check your understanding

Does this show a correlation between the two variables?

<div id="scatter"></div>

<a class="btn btn-primary" type="submit" onClick="regenerate()">Generate</a>

<script>
regenerate = function()
{
    var x = new Array(100);
    var y = new Array(100);
    var g = Math.random();
    var r = Math.random()*3;
    for (let i=0;i<100;i++)
    {
        i%2 * 50
        x[i] = i%2 * i + Math.random()*10;
        y[i] = i%2 * i + Math.random()*10;
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
regenerate();

</script>

---

## Summary

In this section we have learned about data visualisation.

* You should be able to draw bar charts, histograms and box plots

You may now move on to the [descriptive statistics challenges](../descriptive-statistics-challenges/)