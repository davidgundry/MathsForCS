---
title: Modular Inverse
permalink: /course/modular-inverse/
---

In order to be able to do modular division, we need to calculate the modular multiplicative inverse. In this video I introduce the additive inverse and the multiplicative inverse. Then I talk about how to the mutliplicative inverse to do modular division.

Watch the video and then answer the questions below.

## Ten-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

---

## Key Points

### Additive Inverse

* The additive inverse of a number is what you need to add to get 0.
* Usually, the additive inverse of a number `a` is `-a`.
* Under a modulus of `n`, the additive inverse of a number `a` is `-a mod n`

### Multiplicative Inverse

* The multiplicative inverse of a number is what you need to multiply by to get 1.
* The multiplicative inverse of `a` is written as <code>a<sup>-1</sup></code>
* Usually, for a number `a` this is `1/a`, because `a * 1/a = 1`
* Under a modulus however, this will be whatever numnber you multiply by to get 1, after finding the modulus.

### Modular Division
* Instead of dividing by a number, we can multiply by its inverse: <code>a/b = a*b<sup>-1</sup></code>
* Usually, to do `4/4` we could instead do `4(1/4)`, or <code>4 * 4<sup>-1</sup></code>
* However, under modulus, we must instead multiply by the modular multiplicative inverse.

---

## Questions

### 1. Check your understanding

Find the modular inverse of the following:

1. <label for ="q11"> 4 (mod 11)</label> <input type="text" id="q11" data-answer="3"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12"> 3 (mod 7)</label> <input type="text" id="q12" data-answer="5"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13"> 5 (mod 9)</label> <input type="text" id="q13" data-answer="2"/> <span id="q13c" style="display:inline-block"></span>

Is there a modular inverse of the following?

1. <input type="checkbox" id="q21" data-answer="true"/> <span id="q21c" style="display:inline-block"></span> <label for ="q21">7 (mod 11)?</label> 
2. <input type="checkbox" id="q22" data-answer="false"/> <span id="q22c" style="display:inline-block"></span> <label for ="q22">6 (mod 9)?</label> 
3. <input type="checkbox" id="q23" data-answer="false"/> <span id="q23c" style="display:inline-block"></span> <label for ="q23">9 (mod 12)?</label> 

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2')">Check Answers</a>
<script src="/assets/check.js"></script>

---

## Summary

In this section we have learned how to find the additive and multipliative inverse under modulus, and use this to do modular division. Now you can move on to the [modular arithmetic challenges](../modular-challenges).