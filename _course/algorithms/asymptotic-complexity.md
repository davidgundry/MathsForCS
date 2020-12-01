---
title: Asymptotic Complexity
permalink: /course/asymptotic-complexity/
---

We want to be able to compare time functions for different algorithms without worrying about how long each primitive operation takes. Asymptotic Complexity gives us a way to do this. Basically, we ask what our time function would look like if our input was really, really big, and ignore the small stuff.

Watch the video and then answer the questions below.

## Twenty-minute video

**Note**: In the video get muddled and say that the algorithm that takes more time is more efficient. Obviously, the algorithm which takes _less_ time is more efficient.  

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/FJhmf_Y6ClA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/FJhmf_Y6ClA)

---

## Key Points

* A polynomial is an expression like <code>2x<sup>2</sup> + 4x + 7</code>.
* To find the time complexity of an algorithm, we look at how its time function grows
* For polynomial time functions, their rate of growth is the same as the order of the polynomial, which is the highest power in the expression. The polynomail above is a second-order polynomial, because its highest power is 2.
* We group algorithms into groups based on their complexity

### Common Time Complexities

* **O(1)** is **constant time**, i.e. the time doesn't change with the size of input
* **O(n)** is **linear time**, i.e. the time is a linear function of the size of input (an input twice as big takes twice as long)
* **O(n<sup>2</sup>)** is **quadratic time**, so the time goes up with the square of the size of input.
* **O(log n)** is **logarithmic time**
* **O(2<sup>n</sup>)** is **exponential time**
* And there are others

---

## Questions

### 1. Check your understanding

##### 1. Common Complexities

Assign each to its eqivalent time complexity

|    | Expression | O(1) | O(log n) | O(n) | O (n log n) | O(n<sup>2</sup>) | O(n<sup>3</sup>) | O(2<sup>n</sup>) | |
| -- | ---------- | ---- | ----- |----- |----- |----- |----- |----- |--|
| 1. | O(7 + 3)   | <input type="radio" data-answer name="q51"/> | <input type="radio" name="q51"/> | <input type="radio" name="q51"/> | <input type="radio" name="q51"/> | <input type="radio" name="q51"/> | <input type="radio" name="q51"/> | <input type="radio" name="q51"/> | <span id="q51c" style="display:inline-block"></span> |
| 2. | O(3n + 6)   | <input type="radio" name="q52"/> | <input type="radio" name="q52"/> | <input type="radio" data-answer name="q52"/> | <input type="radio" name="q52"/> | <input type="radio" name="q52"/> | <input type="radio" name="q52"/> | <input type="radio" name="q52"/> | <span id="q52c" style="display:inline-block"></span> |
| 3. | O(5n<sup>2</sup> + 3n + 6)   | <input type="radio" name="q53"/> | <input type="radio" name="q53"/> | <input type="radio" name="q53"/> | <input type="radio" name="q53"/> | <input type="radio" data-answer name="q53"/> | <input type="radio" name="q53"/> | <input type="radio" name="q53"/> | <span id="q53c" style="display:inline-block"></span> |
| 4. | O(n<sup>3</sup> + 4n<sup>2</sup> + 6n + 6)   | <input type="radio" name="q54"/> | <input type="radio" name="q54"/> | <input type="radio" name="q54"/> | <input type="radio" name="q54"/> | <input type="radio" name="q54"/> | <input type="radio" data-answer name="q54"/> | <input type="radio" name="q54"/> | <span id="q54c" style="display:inline-block"></span> |
| 5. | O(5 log (n/2))   | <input type="radio" name="q55"/> | <input type="radio" data-answer name="q55"/> | <input type="radio" name="q55"/> | <input type="radio" name="q55"/> | <input type="radio" name="q55"/> | <input type="radio" name="q55"/> | <input type="radio" name="q55"/> | <span id="q55c" style="display:inline-block"></span> |
| 6. | O(7n log n)   | <input type="radio" name="q56"/> | <input type="radio" name="q56"/> | <input type="radio" name="q56"/> | <input type="radio" data-answer name="q56"/> | <input type="radio" name="q56"/> | <input type="radio" name="q56"/> | <input type="radio" name="q56"/> | <span id="q56c" style="display:inline-block"></span> |
| 7. | O(6n<sup>3</sup> log n + 2<sup>n</sup>)   | <input type="radio" name="q57"/> | <input type="radio" name="q57"/> | <input type="radio" name="q57"/> | <input type="radio" name="q57"/> | <input type="radio" name="q57"/> | <input type="radio" name="q57"/> | <input type="radio" data-answer name="q57"/> | <span id="q57c" style="display:inline-block"></span> |

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5')">Check Answers</a>
<script src="/assets/js/check.js"></script>

##### 2. Graphs

Match the function to the graph. You might want to use [this online calculator](https://www.desmos.com/calculator) to help

<script src="https://unpkg.com/d3@3/d3.min.js"></script>
<script src="https://unpkg.com/function-plot@1/dist/function-plot.js"></script>

<p style="width: 100%;">
    <span id="linear"></span>
</p>

1. <input type="radio" data-answer name="q11"/> y = x
2. <input type="radio" name="q11"/> y = x<sup>2</sup>
3. <input type="radio" name="q11"/> y = 2<sup>x</sup>
4. <input type="radio" name="q11"/> y = log x
5. <input type="radio" name="q11"/> y = 1
5. <input type="radio" name="q11"/> y = n log n
<span id="q11c" style="display:inline-block"></span>

<p style="width: 100%;">
    <span id="quadratic"></span>
</p>

1. <input type="radio" name="q21"/> y = x
2. <input type="radio" data-answer name="q21"/> y = x<sup>2</sup>
3. <input type="radio" name="q21"/> y = 2<sup>x</sup>
4. <input type="radio" name="q21"/> y = log x
5. <input type="radio" name="q21"/> y = 1
5. <input type="radio" name="q21"/> y = n log n
<span id="q21c" style="display:inline-block"></span>

<p style="width: 100%;">
    <span id="nlogn"></span>
</p>

1. <input type="radio" name="q31"/> y = x
2. <input type="radio" name="q31"/> y = x<sup>2</sup>
3. <input type="radio" name="q31"/> y = 2<sup>x</sup>
4. <input type="radio" name="q31"/> y = log x
5. <input type="radio" name="q31"/> y = 1
5. <input type="radio" data-answer name="q31"/> y = n log n
<span id="q31c" style="display:inline-block"></span>

<p style="width: 100%;">
    <span id="log"></span>
</p>

1. <input type="radio" name="q41"/> y = x
2. <input type="radio" name="q41"/> y = x<sup>2</sup>
3. <input type="radio" name="q41"/> y = 2<sup>x</sup>
4. <input type="radio" data-answer name="q41"/> y = log x
5. <input type="radio" name="q41"/> y = 1
5. <input type="radio" name="q41"/> y = n log n
<span id="q41c" style="display:inline-block"></span>

<p style="width: 100%;">
    <span id="constant"></span>
</p>

1. <input type="radio" name="q61"/> y = x
2. <input type="radio" name="q61"/> y = x<sup>2</sup>
3. <input type="radio" name="q61"/> y = 2<sup>x</sup>
4. <input type="radio" name="q61"/> y = log x
5. <input type="radio" data-answer name="q61"/> y = 1
5. <input type="radio" name="q61"/> y = n log n
<span id="q61c" style="display:inline-block"></span>

<script>
    window.functionPlot({
    target: '#linear',
    disableZoom: true,
    data: [{
        fn: 'x'
    }]
    })
    window.functionPlot({
    target: '#quadratic',
    disableZoom: true,
    data: [{
        fn: 'x^2'
    }]
    })
    window.functionPlot({
    target: '#nlogn',
    disableZoom: true,
    data: [{
        fn: 'x*log(x)'
    }]
    })
    window.functionPlot({
    target: '#log',
    disableZoom: true,
    data: [{
        fn: 'log(x)'
    }]
    })
    window.functionPlot({
        
    target: '#constant',
    disableZoom: true,
    data: [{
        fn: '1'
    }]
    })
</script>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2','q3','q4','q6',)">Check Answers</a>
<script src="/assets/js/check.js"></script>



---

## Summary

In this section we have learned the fundamentals of asymptotic complexity. Using Big Oh notation we can simplify our time functions to compare the efficiency of different algorithms.

* You should recognise common time complexities and know what they mean
* You should be able to order time complexities  from smallest to biggest
* You should be able to identify the time complexity of an algorithm from its time function

In the next section we are going to learn some maths important for calculating time functions for many algorithms: [summation](../summation/).