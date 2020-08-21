---
title: Set Operations
permalink: /course/set-operations/
---

## Seven-minute lecture

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/X_f8upZKcKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/X_f8upZKcKc)

## Set Operations in Python

Helpfully, Python contains all the basic set operations built in.

Set union (∪) uses the `union()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.union(set_b_)
    print(set3) 

Set intersection (∩) uses the `intersection()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.intersection(set_b_)
    print(set3) 

Set difference (\) uses the `difference()` method.

    set_a = {"a", "b", "c"}
    set_b = {"b", "c", "d"}
    set_c = set_a.difference(set_b_)
    print(set3) 

## Questions

### 1. Check your understanding

Calculate the following, e,g, 

|    | Expression | Answer |
|----| ------ | -------|
| 0. | <label for ="example">a, b, ∪ b, c</label> | <input type="text" id="example" value="a, b, c" disabled/> |

#### Union

|    | Expression | Answer |
|----| ------ | ------- |
| 1. | <label for ="q1">1, 3, 4 ∪ 1, 2, 3, 5, 7, 9</label> | <input type="text" id="q1" /> |
| 2. | <label for ="q1">{rich tea, digestive, jammy dodger} ∪ Ø</label> | <input type="text" id="q1" /> |
| 3. | <label for ="q1">a, b, c, d ∪ a, b, c, d</label> | <input type="text" id="q1" /> |
| 4. | <label for ="q1">a, b, c, d ∪ {1, 2, 3, 4, }</label> | <input type="text" id="q1" /> |

#### Intersection

|    | Expression | Answer |
|----| ------ | ------- |
| 1. | <label for ="q1">1, 3, 4 ∩ 1, 2, 3, 5, 7, 9</label> | <input type="text" id="q1" /> |
| 2. | <label for ="q1">{rich tea, digestive, jammy dodger} ∩ Ø</label> | <input type="text" id="q1" /> |
| 3. | <label for ="q1">a, b, c, d ∩ a, b, c, d</label> | <input type="text" id="q1" /> |
| 4. | <label for ="q1">a, b, c, d ∩ {d, c, b, a}</label> | <input type="text" id="q1" /> |

#### Difference

|    | Expression | Answer |
|----| ------ | ------- |
| 1. | <label for ="q1">1, 3, 4 \ 1, 2, 3, 5, 7, 9</label> | <input type="text" id="q1" /> |
| 2. | <label for ="q1">{rich tea, digestive, jammy dodger}\Ø</label> | <input type="text" id="q1" /> |
| 3. | <label for ="q1">a, b, c, d \ a, b, c, d</label> | <input type="text" id="q1" /> |
| 4. | <label for ="q1">a, b, c, d \{d, c, b, a}</label> | <input type="text" id="q1" /> |

## Summary

In this section we have learned about the operations you can perform on sets. In the next section we learn about how sets relate to each other using [subsets and supersets](./subsets-and-supersets/).