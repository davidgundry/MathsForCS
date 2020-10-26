---
title: Search Trees
permalink: /course/search-trees/
---

_In this video I'm going to be talking - **at a very high level** - about how graphs can be used for working in different problem domains. Rather than focusing on formalism or definitions, I want to show you how graphs can be used. Hopefully this will help you use graphs to solve problems that you encounter._

In this video we'll be seeing how trees are used for reasoning about game states in game AI.

**Important:** You will not be tested on the problem domain! I do not expect you to learn about game trees or AI! If this video is helpful to you, great! If not, don't worry about it!

## Eight-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/uK2JE8gYyVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/uK2JE8gYyVY)

---

## Key Points

1. A game state (the state of everything in the game) can be represented as a node in a **tree**. The edges represent the actions that can be taken in that state.
2. This representation allows us to search for **paths** through the game tree from our starting state to a goal state.
3. The complexity of a game (how hard it is to solve with tree search) is related to the **branching factor** - how many possible successor states (children) there are for each state (node).
4. In a tree, a node has a **parent** (i.e. the node it branched out from) and **children** (the nodes the branch out from it)
5. The **terminal nodes** of the tree are the ones at the end. They also called the **leaves**.
6. The **non-termainal nodes** are the nodes in the middle.

---

## Summary

In this section we saw how trees can be used for game AI by repesenting game states as vertices and actions as edges.

In the next section we are going to see another application of graphs to AI, this time to we'll look at [neural networks](../neural-networks).