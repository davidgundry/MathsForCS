---
title: Time Functions
permalink: /course/time-functions/
---

One key property we want algorithms to have is to be **efficient**, i.e. to use the fewest resources possible. This is most commonly considered with respect to time. But how do we work out how long an algorithm takes to run?

In this video I show how to find a time function for an algorithm.

## Eleven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/T2dk9IywGbk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/T2dk9IywGbk)

---

## Key Points

* Each **primative operation**, like adding two numbers, takes some amount of time
* By adding up how many of each type of operation we need to perform, we can build up a function that expresses how long an algorithm will take
* But the actual time will depend on lots of assumptions about the time taken for each primative operation.
* When adding the time for loops we need to use **summations**. We'll see summations in the fourth section in this topic.

---

## Questions

### 1. Check your understanding

Given the time functions:

1. <code>T(A) = 6n + 3</code>
2. <code>T(B) = 3n<sup>2</sup> + 2n + 1</code>
3. <code>T(C) = 3<sup>n</sup></code>

Work out `T(A)`, `T(B)`, and `T(C)` for values of `n = 1, 2, 3, 4`. Then use your answers to say which the most and least efficient function is for each value of `n`.

##### Most efficient

| `n`  | A | B | C | |
| -- | ---- | ---- |------|- |
| 1 | <input type="radio" name="q51"  value="a"/> | <input type="radio" name="q51" value="b"/> | <input type="radio" name="q51" data-answer value="c"/> | <span id="q51c" style="display:inline-block"></span> |
| 2 | <input type="radio" name="q52" value="a"/> | <input type="radio" name="q52" value="b"/> | <input type="radio" name="q52" data-answer value="c"/> | <span id="q52c" style="display:inline-block"></span> |
| 3 | <input type="radio" name="q53" data-answer value="a"/> | <input type="radio" name="q53" value="b"/> | <input type="radio" name="q53" value="c"/> | <span id="q53c" style="display:inline-block"></span> |
| 4 | <input type="radio" name="q54" data-answer value="a"/> | <input type="radio" name="q54" value="b"/> | <input type="radio" name="q54" value="c"/> | <span id="q54c" style="display:inline-block"></span> |

##### Least efficient

| `n`  | A    | B    | C    |  |
| -- | ---- | ---- |------|- |
| 1 | <input type="radio" name="q55" data-answer value="a"/> | <input type="radio" name="q55" value="b"/> | <input type="radio" name="q55" value="c"/> | <span id="q55c" style="display:inline-block"></span> |
| 2 | <input type="radio" name="q56"  value="a"/> | <input type="radio" name="q56" data-answer value="b"/> | <input type="radio" name="q56" value="c"/> | <span id="q56c" style="display:inline-block"></span> |
| 3 | <input type="radio" name="q57" value="a"/> | <input type="radio" name="q57" data-answer value="b"/> | <input type="radio" name="q57" value="c"/> | <span id="q57c" style="display:inline-block"></span> |
| 4 | <input type="radio" name="q58"  value="a"/> | <input type="radio" name="q58" value="b"/> | <input type="radio" name="q58" data-answer value="c"/> | <span id="q58c" style="display:inline-block"></span> |


<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5')">Check Answers</a>
<script src="/assets/js/check.js"></script>

### 2. Work out time functions

Work out the time function for the following algorithms written in pseudo-code. Assume each primative operation takes `t` time. When you've got an answer, click "Show answer" to compare with my answer. If we differ slightly in what we're counting as an operation, that's okay.

    1. Function arrayContains(array : N[], t : N): B
    2.     f := false
    3.     foreach i in array do
    4.         if (i == t)
    5.             f := true
    5.     end for
    6.     return f

<div id="hide2" style="display: none">

<table>
<tr><th>line</th><th>time</th> </tr>
<tr><td> 2 </td><td> t </td></tr>
<tr><td> 3 </td><td> t </td></tr>
<tr><td> 4 </td><td> nt </td></tr>
<tr><td> 5 </td><td> nt </td></tr>
</table>

<code>T(arrayContains) = 2t + 2nt</code>

</div>

<a class="btn btn-primary" type="submit" onClick="document.querySelector('#hide2').style.display='block'">Show Answers</a>

    1. Procedure reverseArray(a : array [0..n-1] ): N
    2.     start := 0
    3.     end := length(a)-1
    4.     while (start < end) do
    5.          tmp := a[start]
    6.          a[start] = a[end]
    7.          a[end] = tmp
    8.          start++
    9.          end--
    10.    end while

<div id="hide1" style="display: none">

<table>
    <tr><th>line</th><th>time</th> </tr>
    <tr><td>2 </td><td> t </td></tr>
    <tr><td>3 </td><td> 2t </td></tr>
    <tr><td>4 </td><td> 2t </td></tr>
    <tr><td>5 </td><td> t*(n/2) </td></tr>
    <tr><td>6 </td><td> t*(n/2) </td></tr>
    <tr><td>7 </td><td> t*(n/2) </td></tr>
    <tr><td>8 </td><td> t*(n/2) </td></tr>
    <tr><td>9 </td><td> t*(n/2) </td></tr>
</table>

<code>T(reverseArray) = 5t*(n/2) + 5t</code>

<p>Why are we doing the loop (n/2) times? At first <code>start</code> and <code>end</code> have a difference of <code>n</code>. Each time through the loop, we are incremending <code>start</code> by 1 and decrementing <code>end</code> by 1. We're effectively taking steps of <code>2</code> each time instead of <code>1</code>. Rather than looping <code>n</code> times, we are going to loop only half that.</p>

</div>

<a class="btn btn-primary" type="submit" onClick="document.querySelector('#hide1').style.display='block'">Show Answers</a>



---

## Summary

In this section we saw how time functions can be found for algorithms. 

* You should be able to work out the time function for simple algorithms

Time functions let us analyse how long an algorithm will take, but it requires lots of assumptions that makes it hard to compare different algorithms. In the next section we learn about [asymptotic complexity](../asymptotic-complexity/) and Big Oh notation, which gives us a way to simplify these time functions to make comparison possible