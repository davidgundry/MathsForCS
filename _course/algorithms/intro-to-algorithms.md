---
title: Algorithms
permalink: /course/intro-to-algorithms/
---

An algorithm is a set of instructions to follow for solving a problem. There is no formal definition of "algorithm", but there are some desirable properties of algorithms.

## Ten-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/D4uFl_yP148" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/D4uFl_yP148)

---

## Key Points

* An algorithm is a method for solving a problem.
* Algorithms are often expresed in **pseudocode**

### Properties of Algorithms

* An algorithm is **definite** (definiteness) if it has a precice and unambious meaning
* An algorithm is **bounded** if it terminates for any legal input
* It is **correct** if it solves the problem it is supposed to
* It is **efficient** if it solves the problem using the fewest resources possible (such as time, memory)

### Pseudo-code

Pseudo-code is a tool for communicating how an algorithm works clearly. There is no definitive style for pseudo-code, but there are several standards that have been proposed. It looks a bit like code, but the important thing is to clearly express the logic of what the algorithm is doing.

Euclid's Algorithm for finding the greatest commmon denomonator is a well-known algorithm. It was devised by Euclid (c. 300 BC), though he didn't write it in in pseudo-code. The pseudo-code for Euclid's algorithm might look a bit like this: 

    Function GCD(m, n : N ) : N
        if m < n then
            (m, n) := (n, m)
        end if
        while n != 0 do
            (m, n) := (n, m mod n)
        end while
        return m


---

## Questions

### 1. Implementing Euclid's Algorithm

Implement Euclid's Algorithm in Python from the pseudo-code above. Test your implementation to ensure it always returns the greatest common denomonator of two numbers.

### 2. Working out what an algorithm does

Here is an algorithm written using pseudo-code. It is a procedure so it does not return a value, but rather modifies the values that are passed to it. It takes an array called `A`.

    Procedure B(A: array)
        i := 1
        while i < length(A)
            j := i
            while j > 0 and A[j-1] > A[j]
                swap A[j] and A[j-1]
                j := j - 1
            end while
            i := i + 1
        end while

Work through the algorithm step-by-step, using a table as shown in the video. Then answer the following questions using simple English answers:

1. What problem does this algorithm solve?
2. How does it solve it?
3. Do you think this algorithm is efficient? Why (not)?

### 3. Writing pseudo-code

Write an algorithm in pseudo-code to solve the following problem:

    Find the largest number in an array of numbers.

Psuedo-code should be clear and use indendation. There is no standard, but it is a good idea to model your pseudo-code on what you have seen above.

---

## Summary

In this section we were introduced to algorithms and saw some of their (desirable) properties. These include correctness, definiteness, boundedness, and efficiency. We also saw that algorithms are usually written using pseudo-code.

* You should understand the basic properties of algorithms
* You should be able to implement algorithms from pseudo-code
* You should be able to write algorithms in pseudo-code

In the next section we're going to start exploring how to compare the efficiency of different algorithms by using [time functions](../time-functions).
