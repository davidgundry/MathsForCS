---
title: The Modulus Operator
permalink: /course/modulus/
---

We will learn about the modulus operator. The modulus operator (**mod** or **%**) finds the **remainder** of two numbers. `6 mod 4 = 2`, because 6 divides into 4 once with a remainder of 2. It's a bit like maths on a 12 hour clock: at 11 o'clock, if you add 2 hours, you get 1 o'clock, because `11 + 2 mod 12 = 1`.

Watch the video and then answer the questions below.

## Six-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Modulus in Python

In Python, you can find the modulus of two numbers, or the remainder of two numbers, by using the percent-sign (**%**). For example:

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmaticModulusDemo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Questions

### 1. Check your understanding

##### Modulus

Give an answer for each of the following, without using Python:

1. <label for ="q11">17 mod 5</label> <input type="text" id="q11" data-answer="2"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">20 mod 3</label> <input type="text" id="q12" data-answer="2"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">-3 mod 11</label> <input type="text" id="q13" data-answer="8"/> <span id="q13c" style="display:inline-block"></span>
4. <label for ="q14">25 mod 5</label> <input type="text" id="q14" data-answer="0"/> <span id="q14c" style="display:inline-block"></span>
5. <label for ="q15">7 mod 11</label> <input type="text" id="q15" data-answer="7"/> <span id="q15c" style="display:inline-block"></span>
6. <label for ="q16">11 mod 11</label> <input type="text" id="q16" data-answer="0"/> <span id="q16c" style="display:inline-block"></span>
7. <label for ="q17">-1 mod 11</label> <input type="text" id="q17" data-answer="1"/> <span id="q17c" style="display:inline-block"></span>
8. <label for ="q18">-11 mod 11</label> <input type="text" id="q18" data-answer="0"/> <span id="q18c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>


##### Congruance

Check the boxes for those values that are congruant modulo 43

1. <input type="checkbox" id="q21" data-answer="true" /> <label for ="q21">13</label> <span id="q21c" style="display:inline-block"></span>
2. <input type="checkbox" id="q21" data-answer="false" /> <label for ="q21">47</label> <span id="q21c" style="display:inline-block"></span>
3. <input type="checkbox" id="q21" data-answer="true" /> <label for ="q21">56</label> <span id="q21c" style="display:inline-block"></span>
4. <input type="checkbox" id="q21" data-answer="false" /> <label for ="q21">11</label> <span id="q21c" style="display:inline-block"></span>
5. <input type="checkbox" id="q21" data-answer="true" /> <label for ="q21">99</label> <span id="q21c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

### 2. Allocating players

Imagine you are writing code to allocate players in an online team-based multiplayer game. The game is played in games of 5v5 players. Any unalocated players must wait in a lobby for more players to log on.

1. Write a function in Python that takes the total number of players and returns the number of games.
2. Write a function in Python that takes the total number of players and returns the number of players waiting in the lobby

---

## Summary

In this section we learned about the modulus operator and how to use it in Python. Once you've completed the questions, you can move on to the next section on [modular arithmatic and cyphers](../cyphers).