---
title: Modular Inverse
permalink: /course/modular-inverse/
---

In order to be able to do **modular division**, we need to calculate the **modular multiplicative inverse**. In this video I introduce the **additive inverse** and the **multiplicative inverse**. Then I talk about how to use the mutiplicative inverse to do modular division.

It's a bit unexpected, but it makes sense once you've got it.

Watch the video and then answer the questions below.

## Eight-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/pwzVH6IgvSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/pwzVH6IgvSw)

---

## Key Points

### Additive Inverse

* The additive inverse of a number is **what you need to add to get 0**.
* Usually, the additive inverse of a number `a` is `-a`, because `a + (-a) = 0`
* Under a modulus of `n`, the additive inverse of a number `a` is `-a mod n`

### Multiplicative Inverse

* The multiplicative inverse of a number is **what you need to multiply by to get 1**.
* The multiplicative inverse of `a` is written as <code>a<sup>-1</sup></code>
* Usually, for a number `a` this is `1/a`, because `a * 1/a = 1`
* Under a modulus however, this will be whatever number you multiply by to get 1, after finding the modulus.
* The modular multiplicative inverse is only defined **if the divisor and the modulus are coprime**

### Modular Division
* Instead of dividing by a number, we can multiply by its inverse: <code>a/b = a*b<sup>-1</sup></code>
* Usually, to do `4/4` we could instead do `4(1/4)`, or <code>4 * 4<sup>-1</sup></code>
* However, under modulus, we must instead multiply by the modular multiplicative inverse.

---

## Questions

### 1. Check your understanding

##### 1. Additive Inverse

What is the additive inverse of:

1. <label for ="q31">8</label> <input type="text" id="q31" data-answer="-8"/> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">-1</label> <input type="text" id="q32" data-answer="1"/> <span id="q32c" style="display:inline-block"></span>
3. <label for ="q33">2n</label> <input type="text" id="q33" data-answer="-2n"/> <span id="q33c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Modular Additive Inverse

What is the additive inverse (modulo 5) of:

1. <label for ="q41">4</label> <input type="text" id="q41" data-answer="1"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">2</label> <input type="text" id="q42" data-answer="3"/> <span id="q42c" style="display:inline-block"></span>
3. <label for ="q43">0</label> <input type="text" id="q43" data-answer="0"/> <span id="q43c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

##### 3. Multiplicative Inverse

What is the multiplicative inverse of the following: (give your answers in decimal)

1. <label for ="q51">2</label> <input type="text" id="q51" data-answer="0.5"/> <span id="q51c" style="display:inline-block"></span>
2. <label for ="q52">-1</label> <input type="text" id="q52" data-answer="-1"/> <span id="q52c" style="display:inline-block"></span>
3. <label for ="q53">20</label> <input type="text" id="q53" data-answer="0.05"/> <span id="q53c" style="display:inline-block"></span>

##### 4. Modular Multiplicative Inverse

Find the modular inverse of the following:

1. <label for ="q11"> 4 (mod 11)</label> <input type="text" id="q11" data-answer="3"/> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12"> 3 (mod 7)</label> <input type="text" id="q12" data-answer="5"/> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13"> 5 (mod 9)</label> <input type="text" id="q13" data-answer="2"/> <span id="q13c" style="display:inline-block"></span>

Is there a modular inverse of the following?

1. <input type="checkbox" id="q21" data-answer="true"/> <span id="q21c" style="display:inline-block"></span> <label for ="q21">7 (mod 11)?</label> 
2. <input type="checkbox" id="q22" data-answer="false"/> <span id="q22c" style="display:inline-block"></span> <label for ="q22">6 (mod 9)?</label> 
3. <input type="checkbox" id="q23" data-answer="false"/> <span id="q23c" style="display:inline-block"></span> <label for ="q23">9 (mod 12)?</label> 

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1', q2')">Check Answers</a>

### 2. Additive Inverse Function

Write a function in Python `additive_inverse(a, n)` that returns the additive inverse of the number `a`, modulo `n`.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSModularArithmeticAdditiveInverse?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

## Summary

In this section we have learned how to find the **additive and multipliative inverse under modulus**, and use this to do **modular division**. 

* You should be able to find the additive and multiplicative inverses of a number, including in modular arithmetic.
* You should know when the multiplicative inverse is defined in modular arithmetic.
* You should be able to do division in modular arithmetic.

Now you can move on to the [modular arithmetic challenges](../modular-challenges).