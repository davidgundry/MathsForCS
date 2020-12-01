---
title: Challenges (Java)
permalink: /course/numerical-systems-challenges-java/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

Open the Replit embedded below. Click "Fork" to save it to your own Replit account. Then share your replit with me by clicking "Share" and inviting me (`davidgundry` on Replit).

## Functions for a URL Shortener

**Update:** Model answers are available for [task 1](https://repl.it/@davidgundry/MathsForCSNumericalSystemsJavaChallengeModelAnswerHex) and [task 2](https://repl.it/@davidgundry/MathsForCSNumericalSystemsJavaChallengeModelAnswer2)

URL shorteners take a long URL like this one: [example.com/this-is-a-very-long-url?with=some&get=parameters&as=well](example.com/this-is-a-very-long-url?with=some&get=parameters&as=well) and return something much more manageable, like this: [https://bit.ly/31Kb7nP](https://bit.ly/31Kb7nP).

The example code provides a simple class that could be used by such a URL shortener. You add urls to an array by calling the `public String set(String url)` method. It saves each URL in an ArrayList and returns the index of the url in the list as the ID. So your first url would be `0`, then the next url would be `1`. And so on. Then, once a ID has been assigned, you can get the URL for that ID by calling the `public String get(String id)` method.

Note that the code calls the `numberToID(int number)` function to convert the array index into a string to return to the user. It calls the `IDToNumber(String id)` function to convert an ID to an array index. At the moment, both of these just convert the integer to a (decimal) string, and back to an integer.

Run the code in Replit. The demo code in the method `public static void main(String[] args)` runs and sets some URLs and retrieves them by ID.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSNumericalSystemsJavaChallenge?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Questions

1. As of August 2018, the URL shortening service [Bitly](https://bitly.com/) has shortened over 37.5 billion URLs [(Wikipedia)](https://en.wikipedia.org/wiki/Bitly). <label for ="q2">Using the code above, how long would the 37.5 billionth ID be?</label>  <input type="text" id="q2" data-answer="11"/> <span id="q2c" style="display:inline-block"></span>

2. Bitly uses 7 character strings for its ids. How do you think they achieve this?

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

### Task 1

**Improve the code above to minimise the length of each ID by representing them in a number system other than decimal.** To start off with, you only need to worry about changing the contents of the `numberToID()` and `IDToNumber()` functions.

Start off by representing IDs as hexadecimal. You might want to use the `Integer.toHexString()` and `Integer.parseInt()` functions. How much does this shorten your IDs? 

<label for ="q1">How many characters long would the 37.5 billionth URL be?</label> <input type="text" id="q1" data-answer="9"/> <span id="q1c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>
<script src="/assets/js/check.js"></script>

### Task 2

See if you can use another number system or encoding that shortens the ID even more. The goal is to come up with the shortest representation possible that can be used in a URL.  Remember, not all ASCII characters are safe to transmit over the web in a URL. Many characters need to be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding), which takes up a lot more space.

#### Here's a hint

Try converting the number to a base higher than 16. To do this, you will have to write code to convert to and from this base as there are no built in Java functions to do it. Look back at the lecture content on [how to convert from decimal to other bases](../bases/), and [from other bases back to decimal](../positional-notation/). You'll need to write functions similar to this to convert to your own base. You'll need to decide how many symbols your base has, and the symbols you will use, e.g. `0123456789ABCDEFGHIJK...`

#### Stuck? Try this.

Start off by writing a function that takes a number and returns a binary string.

The process is [described here](../bases/). You need to get a numerical value for each digit and then use `Integer.toString()` to convert that numerical value into a String. Then concatenate it all together. (You can concatenate strings like this: `String myString = "a" + "b"`). Don't forget to reverse the whole string at the end, to do this, you can use a `StringBuilder`:

    StringBuilder output = new StringBuilder(); 
    output.append(backwardsString); 
    output = output.reverse(); 
    return output.toString();

#### Now write a function to go the other way

Start off my writing a function to convert binary back to decimal. Remember you [multiply each digit by the value of its column](../positional-notation/).

You'll have to keep a running total, and loop through the binary string adding the correct value for each column.

#### Managed that?

Save a copy of your code. Now, rather than converting to binary (base 2) convert to something bigger. You will soon face the problem: how do you convert a number, e.g. 10 into a single character? You need some way of mapping numbers from `0` up to the size of your base `n` to characters.

You could use an array for this:

    String[] alphabet = {"0","1"}
    alphabet[0] ## equals "0"
    alphabet[1] ## equals "1"

How do you go from a character back to a number? One simple way would be to loop through the array until you find the character you are looking for, then return the index.


#### A bit more efficient (Optional - extra programming challenge)

Instead of appending each digit to a `String`, you could use an array of `char`. How long should your array be?

You might find this function to calculate the log of a number `x` with a given base `b` helpful:

    double log(int x, int b)
    {
        return Math.log(x) / Math.log(b);
    }


### Task 3 (Optional - extra programming challenge)

Giving urls successive numbers makes it easy to guess what other peoples' shortened URLs will be. Rewrite your code to assign numerical ids in a random order.


