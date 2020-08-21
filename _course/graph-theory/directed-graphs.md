---
title: Directed Graphs
permalink: /course/directed-graphs/
---

Sometimes connections in a graph are one-way: imagine roads in a one-way system. Such a graph is called a **directed graph**. We will learn about directed graphs and what we can do with them.

Watch the video and then answer the questions below.

## Ten-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

1. Graphs can be **directed** or **undirected**.
2. A **directed graph** has edges that only go one way. Edges in an **undirected graph** go both ways
3. Edges can be written as an ordered tuple `<n1,n2>`, where `n1` is the source node, and `n2` is the destination node.

---


## Questions

### 1. Check your knowledge

##### 1. Graph 1

Look at the graph and answer the questions below

1. Is this graph directed or undirected?
2. Is this graph cyclic or acyclic?
3. Is this graph connected or unconnected?
4. What is the degree of node `n1`?
5. What is the maximum degree `Δ(G)` of the graph?
6. What is the minimum degree `δ(G)`of the graph?

##### 2. Adjacency Matrix

Look at the following adjacency matrix for a directed graph: 'to' nodes are along the top, 'from' nodes are down the side.

|    | p | n2 | n3 | n4 |
| p  |   | 1  | 1  |    |
| n2 |   |    |    |  1 |
| n3 | 1 |    |    |    |
| n4 |   | 1  |    |  1 |

1. What is the degree of node n2?
2. What is the degree of node n3?
3. A loop is where a vertex connects to itself. There is a loop in this graph. On which node?

### 2. Implementing a graph

Extend your Python graph implementation to represent a directed graph.

---

## Summary

In this section we have learned about graphs.