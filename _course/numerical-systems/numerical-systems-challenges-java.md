---
title: Challenges (Java)
permalink: /course/numerical-systems-challenges-java/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

Open the Replit embedded below. Click "Fork" to save it to your own Replit account. Then share your replit with me by clicking "Share" and inviting me (`davidgundry` on Replit).

## Functions for a URL Shortener

URL shorteners take a long URL like this one: [example.com/this-is-a-very-long-url?with=some&get=parameters&as=well](example.com/this-is-a-very-long-url?with=some&get=parameters&as=well) and return something much more manageable, like this: [https://bit.ly/31Kb7nP](https://bit.ly/31Kb7nP).

The example code provides a simple class that could be used by such a URL shortener. You add urls to an array by calling the `public String set(String url)` method. It saves each URL in an ArrayList and returns the index of the url in the list as the ID. So your first url would be `0`, then the next url would be `1`. And so on. Then, once a ID has been assigned, you can get the URL for that ID by calling the `public String get(String id)` method.

Note that the code calls the `numberToID(int number)` function to convert the array index into a string to return to the user. It calls the `IDToNumber(String id)` function to convert an ID to an array index. At the moment, both of these just convert the integer to a (decimal) string, and back to an integer.

Run the code in Replit. The demo code in the method `public static void main(String[] args)` runs and sets some URLs and retrieves them by ID.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSNumericalSystemsJavaChallenge?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Questions

1. As of August 2018, the URL shortening service [Bitly](https://bitly.com/) has shortened over 37.5 billion URLs [(Wikipedia)](https://en.wikipedia.org/wiki/Bitly). Using the code above, how long would the 37.5 billionth ID be?

2. Bitly uses 7 character strings for its ids. How do you think they achieve this?

### Task

**Improve the code above to minimise the length of each ID by representing them in a number system other than decimal.** To start off with, you only need to worry about changing the contents of the `numberToID()` and `IDToNumber()` functions.

1. Start off by representing IDs as hexadecimal. How much does this shorten your IDs? How long would the 37.5 billionth URL be?

2. Once you've done that, see if you can use another number system or encoding that shortens the ID even more. The goal is to come up with the shortest representation possible.

3. (**Optional** - extra programming challenge), giving urls successive numbers makes it easy to guess what other peoples' shortened URLs will be. Rewrite your code to assign numerical ids in a random order.


Remember, not all ASCII characters are safe to transmit over the web in a URL. Many characters need to be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding), which takes up a lot more space.
