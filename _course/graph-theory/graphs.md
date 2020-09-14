---
title: Graphs
permalink: /course/graphs/
---

What is a **graph**? A graph is a set of **vertices** (or nodes) joined by **edges**. Graphs are used as a simple way of thinking about more complex real-world systems such as road networks. By simpliying down to mathematical concepts we can find general solutions to all sorts of graph-theoretic problems!

In this video I introduce the concept of graphs in the context of game levels. Watch the video and then answer the questions below.

## Ten-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

1. A **graph** (G) is a set of **vertices** (V) and a set of **edges** (E)
2. We can represent all sorts of things as graphs: game levels, road networks, social networks, computer networks...
4. A graph is **connected** if there is a path from every point to every other point
5. A graph is **cyclic** if there are some paths that get you back where you started
6. The **degree** of a **node** is the number of edges coming from that node.
7. The **maximum degree** (`Δ(G)`) of a graph `G` is the highest degree of any node in the graph
8. The **minimum degree** (`δ(G)`) of a graph `G` is the smallest degree of any node in the graph

---

## Graphs in Python

There is no inbuilt implementation of a graph in Python. There is too much variation in how you might want to use a graph for that to be useful. So you will need to make your own. I will show one way of implementing a graph below. 

We will need two classes: `Node` and `Edge`. The `Node` class represents a vertex in the graph. Each `Node` has an array (or Set if you prefer) of `Edges`. Each `Edge` stores two `Node`s.

...


---

## Questions

### 1. Check your knowledge

##### 1. Graph 1

Look at the graph and answer the questions below

<label for ="q11t">Cyclic</label> <input type="radio" name="q11" id="q11t" value="t"/> 
<label for ="q11f">Acyclic</label> <input type="radio" name="q11" id="q11f" data-answer value="f"/> <span id="q11c" style="display:inline-block"></span>

<label for ="q12t">Connected</label> <input type="radio" name="q12" id="q12t" value="t"/>
<label for ="q12f">Unconnected</label> <input type="radio" name="q12" id="q12f" data-answer value="f"/> <span id="q12c" style="display:inline-block"></span>

2. <label for ="q21"> What is the degree of node `n3`?</label> <input type="text" id="q21" data-answer=""/> <span id="q21c" style="display:inline-block"></span>
3. <label for ="q22"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q22" data-answer=""/><span id="q22c" style="display:inline-block"></span>
4. <label for ="q23"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q23" data-answer=""/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Graph 2

Look at the graph and answer the questions below

<label for ="q51t">Cyclic</label> <input type="radio" name="q51" id="q51t" value="t"/>
<label for ="q51f">Acyclic</label> <input type="radio" name="q51" id="q51f" data-answer value="f"/> <span id="q51c" style="display:inline-block"></span>

<label for ="q52t">Connected</label> <input type="radio" name="q52" id="q52t" value="t"/>
<label for ="q52f">Unconnected</label> <input type="radio" name="q52" id="q52f" data-answer value="f"/> <span id="q52c" style="display:inline-block"></span>

2. <label for ="q61"> What is the degree of node `n3`?</label> <input type="text" id="q61" data-answer=""/>  <span id="q61c" style="display:inline-block"></span>
3. <label for ="q62"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q62" data-answer=""/> <span id="q62c" style="display:inline-block"></span>
4. <label for ="q63"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q63" data-answer=""/> <span id="q63c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5','q6')">Check Answers</a>

##### 3. Degree

Let `G` be a graph, with vertexes of degree `2,3,2,0,1,2`. Is `G` a connected graph?

<label for ="q3t">Yes</label> <input type="radio" name="q3" id="q3t" value="t"/>
<label for ="q3f">No</label> <input type="radio" name="q3" id="q3f" data-answer value="f"/> <span id="q3c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 4. Adjacency Matrix

Look at the following adjacency matrix for a graph.

|    | p | n2 | n3 | n4 |
|----|---|----|----|----|
| p  |   |    | 1  |    |
| n2 |   |    | 1  |  1 |
| n3 | 1 | 1  |    |    |
| n4 |   | 1  |    |    |

1. <label for ="q41">What is the degree of node n2?</label> <input type="text" id="q41" data-answer="2"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">What is the degree of node n3?</label> <input type="text" id="q42" data-answer="2"/> <span id="q42c" style="display:inline-block"></span>
3. <label for ="q43">What is the degree of node n4?</label> <input type="text" id="q43" data-answer="1"/> <span id="q43c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

---

## Summary

In this section we have learned about graphs. In the [next section](../directed-graphs/) we will discover what happens when you make edges only one-way. You get a **directed graph**.