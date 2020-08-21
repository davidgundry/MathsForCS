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

1. Is this graph cyclic or acyclic?
2. Is this graph connected or unconnected?
3. What is the degree of node `n3`?
4. What is the maximum degree `Δ(G)` of the graph?
5. What is the minimum degree `δ(G)`of the graph?


##### 2. Graph 2

Look at the graph and answer the questions below

1. Is this graph cyclic or acyclic?
2. Is this graph connected or unconnected?
3. What is the degree of node `n3`?
4. What is the maximum degree `Δ(G)` of the graph?
5. What is the minimum degree `δ(G)`of the graph?

##### 3. Degree

Let `G` be a graph, with vertexes of degree `2,3,2,0,1,2`. Is `G` a connected graph?

##### 4. Adjacency Matrix

Look at the following adjacency matrix for a graph.

|    | p | n2 | n3 | n4 |
| p  |   |    | 1  |    |
| n2 |   |    | 1  |  1 |
| n3 | 1 | 1  |    |    |
| n4 |   | 1  |    |    |

1. What is the degree of node n2?
1. What is the degree of node n3?
1. What is the degree of node n4?

### 2. Implementing a graph

Using the provided code above, implement a graph in Python.

Extend the implementation with the following:
1. Add a `degree` function on the `Node` class

### 3. Adjacency Matrix

Write a function in Python that returns an adjacency matrix for a given graph.

### 4. Maximum and Minimum Degree

Write a function in Python that calculates the maximum and minimum degree of a graph

---

## Summary

In this section we have learned about graphs. In the [next section](../directed-graphs/) we will discover what happens when you make edges only one-way. You get a **directed graph**.