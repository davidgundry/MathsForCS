---
title: Challenges
permalink: /course/probability-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Probability in Game Design

Games very often involve probability. One of the challenges of designing a game is working with the components you have available (dice, cards, coins, tokens, random number generators) to give rise to a complex set of probabilities that are satisfying for the game.

For example, many games involve battles between two (or more) "units": _Top Trumps_, _Dungeons and Dragons_, _Warhammer_, _Magic the Gathering_, _Pokemon_, _Civilisation_, chess, go, etc. Even poker, blackjack, rummy, bridge, etc, are essentially battle games.

In such a game, you often want the probability that each unit wins to be "balanced", i.e. in games like chess you want to minimise first move advantage so that both players have an equal chance of winning. So if opponents of the same skill play one another, the probability each will win will be 50%.

Sometimes, you want the probability to depend on the "stats" of the unit. In _Top Trumps_ each card has a power level. In _Dungeons and Dragons_ each character or monster has a vast array of stats, which roughly correlate with their level or challenge rating. In _Magic the Gathering_ each player has a different deck of cards.

The probabilities can be resolved directly, like if you flip a coin and one person calls heads and the other calls tails. Alternatively, they can be resolved indirectly, such as in _Magic the Gathering_, where the overall result of the contest (the liklihood of each of two players of equal skill winning) is an extremely complicated combination of the cards in their decks.

### Instructions

The rules of the challenge are as follows: 

1. You may only use common game components: coins, dice, cards, etc. You can assume custom dice and cards (i.e. with different faces) if you like.
2. All of the rules you come up with must be expressed in a form easy to understand by humans.
3. Ideally, the rules should feel at least somewhat "gamey".
4. Once you have a solution to a problem, you must try and justify why it satisfies that problem. You can do this analytically (with maths) or empirically (with graphs). **Save these justifcations or graphs to share!**

In all of the cases the battles are simulated between 2 "units" and you should be able to simulate them. As this is not an AI course, you can keep the simualted strategies extremly simple. (e.g. in a _Dungeons and Dragons_ style game, all units only attack until they win or are killed.)

### Hints

You will want to think both analytically and empirically about the problem. Use your knowledge of probability to guide you. You should also write code to simulate non-trivial rulesets and generate data about win-rates.

The Java project below gives a framework for simulating battles. It can output data to `System.out` in 3 different tables. Copy paste this data into a spreadsheet package or in to [Plotly Chart Studio](https://plotly.com/chart-studio/) to analyse empirically.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSGameProbability?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Each of the problems/cases listed below are independent (you don't need to satisfy all of them at once!). 

### Warm Up

Each unit is defined only by an integer (1 to 10) representing it's "power level".

1. Each unit always has a 50% chance of winning.
2. A stronger unit is twice as likely to win as a weaker unit
3. The liklihood that a unit wins correlates with the difference in power level. 

### Advantage

The first unit (a) is the "attacking" unit and has a strategic advantage by going first. Try and achieve the following:

1. The attacking unit is more likely to win than the defending unit of equal power level.
2. The attacking unit is also more likely to win than a defending unit of slightly higher (+1) power level, but less likely to win than a defending unit of +2 or more power level.

### Difficulty Curve

1. Probability of beating a more powerful opponent falls of gradually. The battle is still competative (no more than 85% chance of winning) within +- 3 levels.
2. A unit with over 5 more power than its opponent almost always wins (95+%)
2. A unit with a power level of `k` is twice as likely to win when against a unit of power level `k-1`

### Resources

Many battle systems don't resolve the battle in a single "round" but repeat the battle mechanics multiple times. This is often achieved by each unit having resources such as "hitpoints" which are gradually reduced and the first to 0 loses. Resources are often used in games as they often make games more interesting and rewarding.

In the following, implement some kind of "round" structure within your battle, making use of a resource (e.g. hitpoints, strength, wealth, _Pokemon_). Keep track of the number of rounds a battle goes on for. Also, for all of these, stronger units should be more likely to win than weaker units, though there may be some advantage to the attacker that partially overpowers this.

1. Assign starting resources to each unit proportional to their power level, and achieve the requirements above directly from this.
2. Death-spiral: As a unit's resources decrease, they lose faster. (Justify in terms of the probabilities in the game, what causes this)
2. Rubber-banding: As a units resources decrease, they lose slower. (Justify in terms of the probabilities in the game, what causes this)

## Factorial

We're can implement factorial in two ways: recursively (you should have seen this already in the lecture notes), and using a loop. It is often more efficient to use a loop rather than recursion. However, the recursive definition can be more elegant.

<p class="math">\[ n! = \begin{cases} 
      0 & n = 0 \\
      (n-1)! & n \gt 0 
   \end{cases} \]</p>

Look back at the [combinatorics](../combinatorics) lecture notes at the Java code for calculating factorial recursively. Make sure you understand this. 

Then implement a `int factorial(int n)` function that returns the result of the n factorial, or \\( n! \\). Your code should make use of a `for` loop.

It might be helpful to think about another way that the factorial function can be written mathematically:

<p class="math">\[ n! = n \cdot (n-1) \cdot (n-2) \cdot (n-3) \cdots 3 \cdot 2 \cdot 1 \]</p>
