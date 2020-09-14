---
title: Challenges
permalink: /course/propositional-logic-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## Binary Flags

### Background

In programming, a flag is a value that is true or false. Often the term 'flag' is used because the values are not stored as boolean values (True or False), but as part of a binary number. For example, I might write a program which stores 4 flags as a number. Flag A is set if my number contains a 1 if written in binary, flag B if it contains a 2, flag C if it contains a 4, and so on.

This can be very memory efficient in certain situations. For example, imagine that I have to store 8 boolean variables. If I created a class and stored each flag as a separate boolean value in this class, it would take 8 bytes to store one of these objects (ignoring any possive overhead from the class itself). This is because boolean variables are usually stored as 1 byte, even though they only store True or False. If instead I stored the value as 8 binary bits, I could encode it into a 1 byte number or character. This might not seem like much, but imagine I had to store a `1000x1000x1000` array of these objects: I've just reduced my memory footprint from 8GB to 1GB.

### Task

Imagine that I'm making a [voxel](https://en.wikipedia.org/wiki/Voxel)-3D game, a bit like Minecraft. I have to keep _lot_ of these blocks in memory. For every block, I want to store some values. Rather than store each block as an object defined by a class, I've decided it would be more efficient to store each block as a number.

### Part 1

Lets say I want to store 8 binary values per block.

Write functions to read and write each of these flags from a given number. One of these a `read_flag(a, n)` function takes an integer `a` and an integer `n` between 0 and 7 and returns the value of the `n`th flag on `a`. The other function is `set_flag(a, n, v)`, which sets the value of flag `n` on `a` to v, which is either `True` or `False`, and then returns the updated value of `a`.

(**Optional** - additional programming challenge) Instead of using a number to store the block data, [use a bytearray.](https://www.w3resource.com/python/python-bytes.php)

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSPropositionalLogicPart1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Part 2

I now want to store the following information about each block. Create a new Replit project and write a set of Python functions to read and write all of the values below, only using a single byte to store a block's data.

* I want to differentiate as many different "types" of block as possible: e.g. sand, stone, wood, earth, lava, etc. One type, 'bedrock' cannot be changed its original state at world gen.
* I want to store a boolean value as to whether it has changed since world gen (i.e. if it can be regenerated from seed or has to be saved)
* For lava, water (and any other flowing types), I want to store a flag to say whether its spread needs to be recalculated
* I want damage to persist over time, so I want to store 4 different damage states, from not damaged to very damaged. The 'bedrock' type cannot be damaged, nor can flowing types such as lava or water.

### Part 3

If you achieve this, work out how much more data you could encode while only using 1 byte per block. What potentially useful data could you store with this for a game? Can some of the data only be stored for certain types of block? Can you re-design your data encoding to allow for more useful data to be stored?