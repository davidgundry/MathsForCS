---
title: Neural networks
permalink: /course/neural-networks/
---

_In this video I'm going to be talking - **at a very high level** - about how graphs can be used for working in different problem domains. Rather than focusing on formalism or definitions, I want to show you how graphs can be used. Hopefully this will help you use graphs to solve problems that you encounter._

In this video we'll be seeing how graphs allow the complexity of Neural Networks.

**Important:** You will not be tested on the problem domain! I do not expect you to learn about neural networks. If this video is helpful to you, great! If not, don't worry about it!

## Eleven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/_zT8k9Xcq18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/_zT8k9Xcq18)

---

## Key Points

### Neural networks

1. A neural network is a network (graph) of nodes ("neurons") that each perform a simple function.
2. Each neuron takes the weighted sum of its inputs, and outputs a value
3. By combining these together in complex ways, and with the correct weights, you can solve incredibly difficult problems
4. Algorithms have been written that allow a neural network to learn it's own weights - so they get better with training.

### Weighted graphs

1. In a **weighted graph**, edges are associated with a weight or a value.
2. The weight might represent importance, or capacity, or strength, or some other property.
3. Weighted graphs help with solving problems like finding the maximum flow through a network of pipes. 

---

## Questions

### Check your Understanding

Which of the following problems could be represented using a weighted graph>? <span id="q21c" style="display:inline-block"></span>

1. <input type="checkbox" id="q21" data-answer="true" /> <label for ="q21">Finding the max flow through a network of pipes</label> <span id="q21c" style="display:inline-block"></span>
2. <input type="checkbox" id="q22" data-answer="true" /> <label for ="q22">Modeling the strength of connections between users of a social network</label> <span id="q22c" style="display:inline-block"></span>
3. <input type="checkbox" id="q23" data-answer="true"/> <label for ="q23">A game AI finding a route across a game map with varied terrain types</label> <span id="q23c" style="display:inline-block"></span>
4. <input type="checkbox" id="q24" data-answer="false"/> <label for ="q24">Modeling natural langauge syntax</label> <span id="q24c" style="display:inline-block"></span>
5. <input type="checkbox" id="q25" data-answer="true"/> <label for ="q25">Routing packets over a computer network</label> <span id="q25c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

<script src="/assets/check.js"></script>

---

## Summary

In this section we saw how neural networks make use of graphs to combine simple functional components to solve difficult tasks.

In the final section we are going to see how trees can be used in [game engines](../game-object-trees).