---
title: Binary Multiplication
permalink: /course/binary-multiplication/
---

Binary multiplication and division. Actually a lot easier than it sounds. It's like long multiplication and long division, but with far fewer numbers to worry about, as you only have to deal with 1s and 0s.

Watch the video and then answer the questions below.

## Fourteen-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/VsgEDYCPZfA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/VsgEDYCPZfA)

---

## Key Points

### Binary Multiplication

* Binary multiplication is a addition with a series of shifts.
* We write it out as long-form multiplication.
* We multiply each digit in the bottom number by every digit in the top number in turn, and write the answers in a row. Make sure you put the answers in the right column!
* Once we've multiplied each pair of digits, we add up the rows to get our answer.

       101
    x   10
    ------
       000
    + 1010
    ------
      1010

### Binary Division

* Binary division involves comparing pairs of numbers and subtraction.
* Set it up like a long division problem.


    1011010 / 10 = 0101101

         0101101
         -------
    10 | 1011010
        - 10
         --------
           011
        -   10
          -------
            010
        -    10
           ------
             0010
        -      10
              ---
                0

---

## Questions

### 1. Check your understanding

Use pen and paper to simplify the following expressions, then check your answers here.

Write your answers in binary. Do not use a prefix or any leading zeroes in your answers.

##### 1. Multiplication

1. <label for ="q11">11 * 10</label> <input type="text" id="q11" data-answer=""/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">1101 * 101</label> <input type="text" id="q12" data-answer=""/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">10011 * 111</label> <input type="text" id="q12" data-answer=""/> <span id="q13c" style="display:inline-block"></span>
4. <label for ="q14">1100 * 1011</label> <input type="text" id="q14" data-answer=""/> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Division

1. <label for ="q21">1001 / 101</label> <input type="text" id="q21" data-answer=""/> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">1001 / 101</label> <input type="text" id="q22" data-answer=""/> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">1001 / 101</label> <input type="text" id="q23" data-answer=""/> <span id="q23c" style="display:inline-block"></span>
4. <label for ="q24">1001 / 101</label> <input type="text" id="q24" data-answer=""/> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


---

## Summary

In this section we learned multiplication and division with binary numbers.

You can now move on to the [challenges](../numerical-systems-challenges/) for this topic.