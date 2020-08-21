---
title: Probability Basics
permalink: /course/probability-basics/
---

In this section we're going to learn how to work with probabilities.

Watch the video and then answer the questions below.

## Seven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

* Probability lets us model the liklihood that particular events will happen
* If all outcomes have equal chance of happening, the probability of an event (e.g. rolling ⚀ or ⚅) is the number of favourable outcomes, divided by the total number of outcomes (e.g. `2/6`)
* If outcomes have an unequal chance of happening, you add up their probabilities (e.g. `1/6 + 1/6`)
* To find the chance that two events co-occour, you multiply their probabilities `P(B ∩ A) = P(A) * P(B)`
* To find the chance that either (or both) of two events occour, you add up their probabilities, and take away the chance they co-occour `P(A ∪ B) = P(A) + P(B) - P(B ∩ A)`

---

## Random numbers in Python

Generating random numbers in Python uses the `random` package.

    import random
    print(random.random()) # Generates a number between 0-1
    print(random.randint(1,6) # Generates an integer between 1-6 (inclusive)

---

## Questions

### 1. Check your understanding

You have a deck of 52 cards (4 suits, no jokers). What is the probability of drawing:

1. The ace of hearts (🂱)
2. A heart (🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾)
3. A face card (🂻 🂼 🂽 🂾 🂫 🂬 🂭 🂮 🃋 🃌 🃍 🃎 🃛 🃜 🃝 🃞)
4. A joker (🃏)

You have a 12 sided dice. What is the probability of rolling:

1. An even number
2. 8 or more
3. A prime number

You flip a coin. What is the probability of:

1. Getting at least one heads
2. Getting two heads

You roll two 20-sided dice. What is the probability of :

1. Rolling a 20 on the dice with the highest result
2. Rolling a 20 on the dice with the lowest result

### 2. Dice roller

Write a Python function to simulate any number of dice rolls with a given number of sides. E.g. to roll 7 four-sided dice and return the sum

---

## Summary

In this section we have learned about how to work with probabilities.