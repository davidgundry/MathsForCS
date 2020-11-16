---
title: Probability Basics
permalink: /course/probability-basics/
---

In this section we're going to learn how to work with probabilities.

Watch the video and then answer the questions below.

## Video not yet available

---

## Key Points

* **Probability** lets us model the liklihood that particular events will happen
* If all outcomes have equal chance of happening, the probability of an event (e.g. rolling ⚀ or ⚅) is the number of favourable outcomes, divided by the total number of outcomes (e.g. `2/6`)
* To find the chance that **two mutually exclusive events happen**, you add up their probabilities (e.g. `1/6 + 1/6`)
* To find the chance that **two events co-occour**, you multiply their probabilities `P(B ∩ A) = P(A) * P(B)`
* To find the chance that **either (or both) of two events occour**, you add up their probabilities, and take away the chance they co-occour `P(A ∪ B) = P(A) + P(B) - P(B ∩ A)`

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
<script src="/assets/check.js"></script>

You have a 12 sided dice. What is the probability of rolling the following. Express your answers as a fraction in lowest terms.

1. <label for ="q21">An even number</label> <input type="text" id="q21" data-answer="1/2"/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">8 or more</label> <input type="text" id="q22" data-answer="5/12"/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">A prime number</label> <input type="text" id="q23" data-answer="1/2"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>
<script src="/assets/check.js"></script>

You flip a coin. What is the probability of the following. Express your answers as a fraction in lowest terms.

1. <label for ="q31">Getting at least one heads</label> <input type="text" id="q31" data-answer="3/4"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">Getting two heads</label> <input type="text" id="q32" data-answer="1/4"/> <span id="q32c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>
<script src="/assets/check.js"></script>

You roll two 20-sided dice. What is the probability of the following. Express your answers as a fraction in lowest terms.

1. <label for ="q41">Rolling a 20 on the dice with the highest result</label> <input type="text" id="q41" data-answer="39/400"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">Rolling a 20 on the dice with the lowest result</label> <input type="text" id="q42" data-answer="1/400"/> <span id="q42c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>
<script src="/assets/check.js"></script>

### 2. Dice roller

Write a Java function `int dice(int count, int sides)` which simulates any number of dice rolls with a given number of sides. E.g. "roll 7 four-sided dice and return the sum"

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSProbabilityDice?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we have learned about how to work with probabilities.