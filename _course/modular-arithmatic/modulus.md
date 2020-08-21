---
title: The Modulus Operator
permalink: /course/modulus/
---

We will learn about the modulus operator. The modulus operator (**mod** or **%**) finds the **remainder** of two numbers. `6 mod 4 = 2`, because 6 divides into 4 once with a remainder of 2. It's a bit like maths on a 12 hour clock: at 11 o'clock, if you add 2 hours, you get 1 o'clock, because `11 + 2 mod 12 = 1`.

Watch the video and then answer the questions below.

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

## Modulus in Python

In python, you can find the modulus of two numbers by using the percent-sign (**%**). For example:

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmaticModulusDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Questions

### 1. Check your understanding

Give an answer for each of the following, without using Python:

1. <label for ="q1">17 mod 5</label> <input type="text" id="q1" /> 	 (2)
2. <label for ="q2">20 mod 3</label> <input type="text" id="q1" /> 	 (2)
3. <label for ="q3">-3 mod 11</label> <input type="text" id="q1" /> 	 (8)
4. <label for ="q4">25 mod 5</label> <input type="text" id="q1" /> 	 (0)
5. <label for ="q5">7 mod 11</label> <input type="text" id="q1" /> 	 (7)
6. <label for ="q6">11 mod 11</label> <input type="text" id="q1" /> 	 (0)
7. <label for ="q7">-1 mod 11</label> <input type="text" id="q1" /> 	 (1)
8. <label for ="q8">-11 mod 11</label> <input type="text" id="q1" /> 	 (0)

 <input type="submit" value="Check Answers" />

### 2. Allocating players

Imagine you are writing code to allocate players in an online team-based multiplayer game. The game is played in games of 5v5 players. Any unalocated players must wait in a lobby for more players to log on.

1. Write a function that takes the total number of players and returns the number of games.
2. Write a function that takes the total number of players and returns the number of players waiting in the lobby

**Challenge**: each player has a rank between 0-10. Games can only be played by players of the same rank. 

3. Write a function that takes an array of player ranks and returns an array giving the number of games for each rank
4. Write a function that takes an array of player ranks and returns an array giving the number of players waiting in the lobby of that rank.
5. Write a function that takes an array of player ranks and returns the total number of games of any rank
6. Write a function that takes an array of player ranks and returns the total number of players of any rank waiting in the lobby


### 3. Stock skimming

You are writing code for a stock broker. A client puts in an order to by £x of a given stock, which costs £y per share. (You cannot by fractional shares.) As the broker expects any unspent money to be returned to the client, and the client expects to pay £x, you come up with a scheme to skim the unspent money off for yourself (do not do this).

Write a function to calculate the amount of money you can skim off on a transaction of £x for shares that cost £y each.

**Challenge**: The only way to skim the money off is to use it to buy other shares. Write a function that takes an array of share prices and the amount of money to spend, and returns an array populated with the number of shares in that stock to buy.

## Summary

In this section we learned about the modulus operator and how to use it in Python. Once you've completed the questions, you can move on to the next section on [modular arithmatic and cyphers](cyphers).