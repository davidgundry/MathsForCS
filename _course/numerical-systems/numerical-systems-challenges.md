---
title: Challenges
permalink: /course/numerical-systems-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! We will be working on these challenges in the lab session for this topic. If you do not complete them in the lab it is recommended that you finish them in your own time.

## Creating a URL Shortener

URL shorteners take a long URL like this one: [example.com/this-is-a-very-long-url?with=some&get=parameters&as=well](example.com/this-is-a-very-long-url?with=some&get=parameters&as=well) and return something much more manageable, like this: [https://bit.ly/31Kb7nP](https://bit.ly/31Kb7nP).

One way of doing this is to store a dictionary of URLs and numerical ids. When a user makes a request to `<yourserver>/<number>`, it redirects them to the URL matching that number.

The example code for this challenge provides bare-bones functionality for a URL shortener that assigns each URL a successive decimal number. So a url like: `www.example.com` would be `0`, then the next url such as `www.example.org` would be `1`. And so on.

Run the code in Replit. This will start a webserver. Then navigate to the URL shown in the Replit demo window. Append `/set/<url-to-shorten>` to the URL to store an URL with a new ID. Append `/<id>` to the URL to get the previously-stored shortened url with that ID.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSNumericalSystemsURLShortener?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Questions

1. As of August 2018, the URL shortening service [Bitly](https://bitly.com/) has shortened over 37.5 billion URLs [(Wikipedia)](https://en.wikipedia.org/wiki/Bitly). Using the code above, how long would the 37.5 billionth ID be?

2. Bitly uses 7 character strings for its ids. How do you think they achieve this?

### Task

Improve the code above to minimise the length of each ID by representing them in a number system other than decimal. You only need to worry about changing the contents of the `newID()` function.

1. Start off by representing IDs as hexadecimal. How much does this shorten your IDs? How long would the 37.5 billionth URL be?

2. Once you've done that, see if you can use another number system or encoding that shortens the ID even more. The goal is to come up with the shortest representation possible.

3. Once you've done that, polish up the functionality of your app and make it pretty.

Remember, not all ASCII characters are safe to transmit over the web in a URL. Many characters need to be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding), which takes up a lot more space.
