---
title: Probability Basics
permalink: /course/probability-basics/
---

In this section we're going to learn how to work with probabilities.

**Probability** lets us model the liklihood that particular events will happen

There are three videos for this section. Watch them below 

---

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="/assets/js/venn.min.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


## Events

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/jEs9JkpZSI4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/jEs9JkpZSI4)


A **sample space** is the set of possible outcomes of an **experiment**. When rolling a dice, the sample space contains six outcomes:

    ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

An **event** is a set of **outcomes**. For example the event of rolling an even number on a dice contains three outcomes:

    ⚁ ⚃ ⚅ 

If all outcomes have equal chance of happening, the probability of an event is the number of favourable outcomes, divided by the total number of outcomes (e.g. `2/6`)

For example, if we're drawing red and blue balls from a bag, drawing a ball is an outcome. We might group these outcomes into a event `R` for drawing a red ball and an event `B` for drawing a blue ball. There are `10` outcomes in total: `6` red outcomes and `4` blue outcomes:

<div id="venn" width="100%" height="300px"></div>

Above, \\( P(R) = \frac{4}{10} \\) and \\( P(B) = \frac{6}{10} \\).

The chance that event `A` _doesn't_ happen is the same as the chance that _anything else happens_ instead. This is the same as:

<p class="math">\[ P(A') = 1 - P(A) \]</p> 

which in the example above means \\( P(R') = \frac{6}{10} \\) and \\( P(B') = \frac{4}{10} \\)

---

## Adding Probabilities

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/3a3lHU7NyiM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/3a3lHU7NyiM)

Events can overlap. The _intersection_ of the two events corresponds to the outcomes where the events both happen.

To find the chance that event `A` happens _or_ event `B` happens, you add up their probabilities and take away the chance they both happen.

<p class="math">\[ P(A \cup B) = P(A) + P(B) - P(B \cap A ) \]</p>

<div id="vennadd" width="100%" height="300px"></div>

In the example shown here, the probability of either A or B happening is given by \\( P(A \\cup B) = \\frac{(10+2)}{18} + \\frac{(6+2)}{18} - \\frac{2}{18} = 1 \\)

---

## Multiplying Probabilities

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/jv5bkaROQvk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/jv5bkaROQvk)


To find the chance of event `A` _given event `B`_ you find the chance that A and B co-occour and divide by the probability of B. Read the following "the probability of A given B":

<p class="math">\[ P(A | B) = \frac{ P(B \cap A) }{ P(B) } \]</p>

<div id="vennmult" width="100%" height="300px"></div>

In the venn diagram above, the probability \\( P(A \| B) = \\frac{2}{8} / \\frac{4}{8} = \\frac{2}{4} \\)

To find the chance that **two events co-occour** you multiply their the probability of event A occouring given B by the probability of B.

<p class="math">\[ P(A \cap B) = P(A | B) \times P(B) \]</p>

In venn diagram, the probability of both A and B happening is given by \\( P(A \\cap B) = \\frac{2}{4} \times \\frac{4}{8}= \\frac{2}{8} \\)

<script>
var setStart = [ {sets: ['A'], label: "4", size: 4}, 
             {sets: ['B'], label: "6", size: 6}];

var sets = [ {sets: ['A'], label: "10", size: 12}, 
             {sets: ['B'], label: "6",size: 8},
             {sets: ['A','B'], label: "2", size: 2}];

var setsMult = [ {sets: ['A'], label: "4", size: 6}, 
             {sets: ['B'], label: "2",size: 4},
             {sets: ['A','B'], label: "2", size: 2}];

setTooltip = function(div)
{
    var tooltip = d3.select("body").append("div")
        .attr("class", "venntooltip")
        .style("position", "absolute");

    div.selectAll("path")
        .style("stroke-opacity", 0)
        .style("stroke", "#fff")
        .style("stroke-width", 3)

    div.selectAll("g")
        .on("mouseover", function(d, i) {
            // sort all the areas relative to the current item
            venn.sortAreas(div, d);

            // Display a tooltip with the current size
            tooltip.transition().duration(400).style("opacity", .9);
            tooltip.text(d.size + " outcomes");

            // highlight the current path
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
                .style("stroke-opacity", 1);
        })

        .on("mousemove", function() {
            tooltip.style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })

        .on("mouseout", function(d, i) {
            tooltip.transition().duration(400).style("opacity", 0);
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
                .style("stroke-opacity", 0);
        });
}

var chart3 = venn.VennDiagram()
                 .height(300);

var div = d3.select("#venn")
div.datum(setStart).call(chart3);
setTooltip(div);

var chart = venn.VennDiagram()
                 .height(300);

var div = d3.select("#vennadd")
div.datum(sets).call(chart);
setTooltip(div);

var chart2 = venn.VennDiagram()
                 .height(300);

var div = d3.select("#vennmult")
div.datum(setsMult).call(chart2);
setTooltip(div);
</script>

---

## Random numbers in Java

You can generate a random number in Java using the `Math.random()` method from `java.lang.Math` package.

This gives you a number between 0 and 1. You can scale this manually to get a number in any range you like, as you can see in the demo below.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSProbabilityRandom?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Random numbers in Python

Generating random numbers in Python uses the `random` package.

    import random
    print(random.random()) # Generates a number between 0-1
    print(random.randint(1,6) # Generates an integer between 1-6 (inclusive)

---

## Questions

### 1. Check your understanding

You have a deck of 52 cards (4 suits, no jokers). What is the probability of drawing the following. Express your answers as a fraction in lowest terms.

1. <label for ="q11">The ace of hearts (🂱)</label> <input type="text" id="q11" data-answer="1/52"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">A heart (🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂽 🂾)</label> <input type="text" id="q12" data-answer="1/4"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">A face card (🂻 🂽 🂾 🂫 🂭 🂮 🃋 🃍 🃎 🃛 🃝 🃞)</label> <input type="text" id="q13" data-answer="3/13"/> <span id="q13c" style="display:inline-block"></span>
3. <label for ="q14">A joker (🃏)</label> <input type="text" id="q14" data-answer="0"/> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/js/check.js"></script>

You have a 12 sided dice. What is the probability of rolling the following. Express your answers as a fraction in lowest terms.

1. <label for ="q21">An even number</label> <input type="text" id="q21" data-answer="1/2"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">8 or more</label> <input type="text" id="q22" data-answer="5/12"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">A prime number</label> <input type="text" id="q23" data-answer="5/12"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>
<script src="/assets/js/check.js"></script>

You flip a coin twice. What is the probability of the following. Express your answers as a fraction in lowest terms.

1. <label for ="q31">Getting at least one heads</label> <input type="text" id="q31" data-answer="3/4"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">Getting two heads</label> <input type="text" id="q32" data-answer="1/4"/> <span id="q32c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>
<script src="/assets/js/check.js"></script>

You roll two 20-sided dice. What is the probability of the following. Express your answers as a fraction in lowest terms.

1. <label for ="q41">Rolling a 20 on the dice with the highest result</label> <input type="text" id="q41" data-answer="39/400"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">Rolling a 20 on the dice with the lowest result</label> <input type="text" id="q42" data-answer="1/400"/> <span id="q42c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>
<script src="/assets/js/check.js"></script>

### 2. Dice roller

Write a Java function `int dice(int count, int sides)` which simulates any number of dice rolls with a given number of sides. E.g. "roll 7 four-sided dice and return the sum"

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSProbabilityDice?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 3. Question Generator

The following is currently a bit broken as the labels don't change when you generate a new question. You can still hover over to see the number of outcomes in each subset. (I think) blue = A, orange = B, green = C.

<div id="vennQ"></div>
<div id="vennGen"></div>
<div id="vennA"></div>

<a class="btn btn-primary" type="submit" onClick="create()">Generate</a>
<br />
<a id="answerbutton" class="btn btn-primary" type="submit" onClick="showAnswer('vennA')">Show Answer</a>
<br />
<script src="/assets/js/proofparty.js"></script>

<script>
showAnswer = function(target)
{
    const node = document.getElementById(target);
    node.style.display='block';
}

create = function()
{
    let vennQ = proofparty["venn"]();
    const node = document.getElementById("vennQ");
    MathJax.typesetClear([node]);
    node.innerHTML = vennQ.question;
    MathJax.typesetPromise([node]).then(() => {
     // the new content is has been typeset
    });

    const answerNode = document.getElementById("vennA");
    answerNode.style.display='none';
    answerNode.innerHTML = vennQ.answer;

    var setsNew = [ {sets: ['A'], label: "" + (vennQ.a-vennQ.intersectionAB), size: vennQ.a}, 
                {sets: ['B'], label: "" + (vennQ.b-vennQ.intersectionAB), size: vennQ.b},
                {sets: ['C'], label: "" + vennQ.c, size: vennQ.c},
                {sets: ['A','B'], label: "" + vennQ.intersectionAB, size: vennQ.intersectionAB}];
    var chartNew = venn.VennDiagram()
    .height(300);

    var div = d3.select("#vennGen");
    div.datum(setsNew).call(chartNew);
    setTooltip(div);
}
create();
</script>

---

## Summary

In this section we have learned about how to work with probabilities.

* You should be able to determine the probabilities of simple events.
* You should be able to find the probabilities \\( P(A') \\), \\( P(A \\cup B ) \\), \\( P(A \\cap B ) \\), \\( P(A \| B ) \\)

In the next section we are going to look at [combinatorics](../combinatorics)