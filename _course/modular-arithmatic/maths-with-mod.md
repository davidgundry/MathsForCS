---
title: Maths with Modulus
permalink: /course/maths-with-mod/
---

In this section we will learn more about how modulus works.

Watch the video and then answer the questions below.

## Ten-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

## Questions

### 1. Check your understanding

Rewrite the following into the form: a mod b

1. <label for ="q1">(4 mod 8) + (22 mod 8)</label> <input type="text" id="q1" />
2. <label for ="q2">(4 mod 8) + (22 mod 8)</label> <input type="text" id="q2" /> 
3. <label for ="q3">(12 mod 4) – (3 mod 4 )</label> <input type="text" id="q3" />
4. <label for ="q4">(65 mod 12) – (42 mod 12)</label> <input type="text" id="q4" /> 
5. <label for ="q5">(6 mod 3) * (9 mod 3)</label> <input type="text" id="q5" />
6. <label for ="q6">(2 mod 8) * (6 mod 8)</label> <input type="text" id="q6" /> 

Find the modular inverse of the following:

7. <label for ="q7"> 4 mod 11</label> <input type="text" id="q7" />  (3)

8. <label for ="q8">Is there a modular inverse of 7 mod 11? Why (not)?</label> <input type="text" id="q8" /> 

<input type="submit" value="Check Answers" />

### 2. Mod Inverse

Write a `mod_inverse()` function

### 3. Decrypt Affine Cypher

Write a function that takes a string encrypted using an affine cypher, and values for a and k and returns the decrypted string. Leave any letter not in [a-zA-Z] untouched. You will need to use your `mod_inverse()` function.

## Summary

In this section we have learned how to do maths with modulus. In the next section we apply our knowledge to [base 64](../base64/).