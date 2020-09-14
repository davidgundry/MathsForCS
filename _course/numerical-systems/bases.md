---
title: Converting Between Bases
permalink: /course/bases/
---

Now we know about different bases such as binary (base 2), decimal (base 10), and hexadecimal (base 16), we will learn how to **convert between these different bases**. Converting between these bases means we can take a number written in one number system and write it in another.

This is important if we want to be able to, for example, work with emedded systems, or convert colours written as decimal RGB (red, green, blue) values to hexadecimal.

Watch the video and then answer the questions below.

## Six-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/gUZPNPjQKB4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/gUZPNPjQKB4)

---

## Key Points

### Decimal to Binary

To convert from decimal to binary, we **repeatedly divide by 2**. Each time, **the remainder becomes the next least significant binary digit**. We divide by 2 because we converting into base 2 (binary). To convert into hexadecimal, use the same process, but instead of dividing by 2, divide by 16. If we wanted to convert into base `n` we would divide by `n`.

See the example below, where we show how to convert `140` from decimal into binary, getting the answer `10001100`.

    140 / 2 = 70 r 0
    70  / 2 = 35 r 0
    35  / 2 = 17 r 1
    17  / 2 = 8  r 1
    8   / 2 = 4  r 0
    4   / 2 = 2  r 0
    2   / 2 = 1  r 0
    1   / 2 = 0  r 1
    ---------------
    10001100
    ---------------


### Binary to Hexadecimal

Because each hexadecimal digit can be 16 different values, we need 4 binary bits to store it, as <code>2<sup>4</sup> = 16</code> (and <code>log<sub>2</sub> 16 = 4</code>). So to convert binary to hexadecimal, we group our bits into quartets (fours) and then convert each quartet to its value in hexadecimal.

Below we show this grouping into four to convert `10001100` to hexadecimal, getting the answer `8C`

    Binary:      1000 1100
    Decimal:     8    12
    Hexadecimal: 8    C

To go the other way, (i.e. from hexadecimal to binary) follow the process in reverse. Convert each hexadecimal digit into binary, and then concatenate them together.

If we wanted to convert binary to another numerical base **that is a power of 2**, e.g. `8` or `32`, we can group the bits differently, e.g. into `3`s or `5`s.

---

## Questions

### 1. Check your understanding

Use pen and paper to convert the following numbers, then check your answers here.

##### 1. Binary To Decimal
1. <label for ="q11">11001011</label> <input type="text" id="q11" data-answer="203" /> <span id="q11c" style="display:inline-block"></span>
2. <label for ="q12">00110101</label> <input type="text" id="q12" data-answer="53" /> <span id="q12c" style="display:inline-block"></span>
3. <label for ="q13">10000011</label> <input type="text" id="q13" data-answer="131" /> <span id="q13c" style="display:inline-block"></span>
4. <label for ="q14">10001111</label> <input type="text" id="q14" data-answer="143" /> <span id="q14c" style="display:inline-block"></span>
5. <label for ="q15">11100011</label> <input type="text" id="q15" data-answer="227" /> <span id="q15c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/check.js"></script>

##### 2. Hex to decimal
1. <label for ="q21">0x45</label> <input type="text" id="q21" data-answer="69"  /> <span id="q21c" style="display:inline-block"></span>
2. <label for ="q22">0xFA</label> <input type="text" id="q22" data-answer="250"  /> <span id="q22c" style="display:inline-block"></span>
3. <label for ="q23">0x5D</label> <input type="text" id="q23" data-answer="93"  /> <span id="q23c" style="display:inline-block"></span>
4. <label for ="q24">0x99</label> <input type="text" id="q24" data-answer="153"  /> <span id="q24c" style="display:inline-block"></span>
5. <label for ="q25">0x03</label> <input type="text" id="q25" data-answer="3"  /> <span id="q25c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>


##### 3. Binary to hex

Do not include a prefix or leading zeroes. Enter values in CAPS.

1. <label for ="q31">11001100</label> <input type="text" id="q31" data-answer="CC"  /> <span id="q31c" style="display:inline-block"></span>
2. <label for ="q32">11110001</label> <input type="text" id="q32" data-answer="F1"  /> <span id="q32c" style="display:inline-block"></span>
3. <label for ="q33">00110001</label> <input type="text" id="q33" data-answer="31"  /> <span id="q33c" style="display:inline-block"></span>
4. <label for ="q34">11000010</label> <input type="text" id="q34" data-answer="C2"  /> <span id="q34c" style="display:inline-block"></span>
5. <label for ="q35">10100100</label> <input type="text" id="q35" data-answer="A4"  /> <span id="q35c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>


##### 4. Hex to Binary

Do not include a prefix or leading zeroes.

1. <label for ="q41">0x5A</label> <input type="text" id="q41" data-answer="1011010"  /> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">0xCC</label> <input type="text" id="q42" data-answer="11001100"  /> <span id="q42c" style="display:inline-block"></span>
3. <label for ="q43">0x97</label> <input type="text" id="q43" data-answer="10010111"  /> <span id="q43c" style="display:inline-block"></span>
4. <label for ="q44">0x40</label> <input type="text" id="q44" data-answer="1000000"  /> <span id="q44c" style="display:inline-block"></span>
5. <label for ="q45">0x07</label> <input type="text" id="q45" data-answer="111"  /> <span id="q45c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

##### 5. Decimal to other bases

Convert the number in decimal to the base shown. Enter letters in CAPS.

1. <label for ="q51">53 to base 5</label> <input type="text" id="q51" data-answer="203"  /> <span id="q51c" style="display:inline-block"></span>
2. <label for ="q52">67 to base 13</label> <input type="text" id="q52" data-answer="5B"  /> <span id="q52c" style="display:inline-block"></span>
3. <label for ="q53">21 to base 7</label> <input type="text" id="q53" data-answer="30"  /> <span id="q53c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5')">Check Answers</a>


##### 5. Binary to other bases

Convert the number from binary straight to the base shown. Enter letters in CAPS.

1. <label for ="q61">1011 to base 4</label> <input type="text" id="q61" data-answer="23"  /> <span id="q61c" style="display:inline-block"></span>
2. <label for ="q62">011011 to base 8</label> <input type="text" id="q62" data-answer="33"  /> <span id="q62c" style="display:inline-block"></span>
3. <label for ="q63">10101110 to base 32</label> <input type="text" id="q63" data-answer="5E"  /> <span id="q63c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q6')">Check Answers</a>


---

## Summary

In this section we have learned how to convert between different bases.

* You should be able to convert straight between any of binary, decimal, and hexadecimal.
* You should be able to convert from decimal to any numerical base.
* You should be able to convert straight from binary to any power-of-two base.

In the next section we will start looking at how to do binary arithmatic, beginning with [addition and subtraction](../binary-addition/) of binary numbers.