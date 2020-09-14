---
title: Challenges
permalink: /course/set-theory-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Implementing Sets

Python already has a built-in implementation for Sets, but many programming langauges do not.

The goal is to implement a `Set` class. That provides the following interface:

* `cardinality(self)` - Returns the number of elements in the Set
* `powerSet(self)` - Returns the power set of this set.
* `union(self, b)` - Returns a new set that is the union if this set and the provided set `b`
* `intersection(self, b)` - Returns a new set that is the intersection of this set and the provided set `b`
* `difference(self, b)` - Return a set representing the set-theoretic difference between this set and a provided set `b`.
* 

A Replit project is provided below. This contains tests for each of the above function.

