---
title: Challenges
permalink: /course/set-theory-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Set Theory Question Generator

Click "Generate" to generate a list of questions. Copy them to a separate file and then give answers for each of them. If you don't know how to do a question, look it up in the lecture notes or ask me. Keep going until you feel confident in answering all of the questions that appear.

<div id="set-theory-questions"></div>

<a class="btn btn-primary" type="submit" onClick="generateSetTheoryQuestions('set-theory-questions')">Generate</a>

<script>
generateSetTheoryQuestions = function(name)
{
    var target = document.querySelector("#"+name);
    var binaryOperations = ["∩", "∪", "\\", "x","⊆","⊂","⊄","⊇","⊃","⊅","="];
    var uniaryOperations  = ["P", "#"]

    let op = randomIn(binaryOperations);
    let str = "<ol><li>" + generateSet() + " " + op + " " + generateSet() + "</li>";
    for (let i=0;i<11;i++)
    {
        if (Math.random() < 0.7)
        {
            let op = randomIn(binaryOperations);
            str += "<li>" + generateSet() + " " + op + " " + generateSet() + "</li>";
        }
        else if (Math.random() > 0.5)
            str += "<li> | " + generateSet() + " | </li>";
        else
            str += "<li> Pow(" + generateSet() + ") </li>";
    }
    str += "</ol>";
    target.innerHTML = str;
}

generateSet = function()
{
    let alphabet = "abcd";
    let str = "{";
    let used = [];
    let a = randomIn(alphabet);
    used.push(a);
    str += " " + a;
    let count = Math.round(Math.random()*4);
    let length = 0;
    while (length < count)
    {
        let a = randomIn(alphabet);
        console.log(a);
        if (used.indexOf(a) === -1)
        {
            str += ", " + a;
            used.push(a);
            length++;
        }
        length+=0.1;
    }
    str += " }";
    return str;
}

randomIn = function(array)
{
    let val = Math.floor(Math.random() * array.length);
    return array[val];
}

generateSetTheoryQuestions('set-theory-questions')
</script>

## Implementing Sets

Java only has a very limited set interface. It is not sufficient if we want to perform standard set theory operations such as intersection and union.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSSetTheoryChallenge?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Task 1

Implement a `Set` class that provides the following interface:

* `int cardinality()` - Returns the number of elements in the Set
* `boolean subset(Set b)` - Returns true if this set is a subset of set `b`.
* `boolean superset(Set b)` - Returns true if this set is a superset of set `b`.
* `Set union(Set b)` - Returns a new set that is the union if this set and the provided set `b`
* `Set intersection(Set b)` - Returns a new set that is the intersection of this set and the provided set `b`
* `Set difference(Set b)` - Return a set representing the set-theoretic difference between this set and a provided set `b`.


### Task 2

The power set of a set is the set of all its subsets. For example, the power set of the set `{1, 2, 3}` is `{ Ø, {1}, {2}, {3}, {1,2}, {2,3}, {1,2,3} }`

Add a method `Set powerSet()` to your class which returns the power set of this set.

