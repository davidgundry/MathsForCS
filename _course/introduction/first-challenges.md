---
title: Challenges
permalink: /course/first-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

## The MU-Puzzle

This puzzle is used as an example in the excelent book _Godel, Escher, Bach: An Eternal Golden Braid_ by Douglas Hofstadter. It involves a simple formal system, the MIU-system, the rules of which are quite simple.

You have a collection of strings. At first you only have the string `MI`.

There are four rules. Each rule lets you add a new string to your collection.

1. If you have a string that ends in `I`, then you can add a `U` on the end and have a new string, e.g. `MI ⇒ MIU`
2. If you have a string of the form `Mx` (where x stands for any string, you can have the new string `Mxx`
3. If the substring `III` occours anywhere in your string, you can replace it for `U`.
4. If the string `UU` occours anywhere in your string, you can replace it with ` ` (an empty string)

So, for example, I could start with `MI`, and derive the following strings

    MI
    MII (rule 2)
    MIIU (rule 1)
    MIIUIIU (rule 2)

Your goal is to add the string `MU` to your collection.

### Task

How can you get to `MU`? Start off by thinking inside the system. Start generating strings by applying the rules. What sort of patterns do you see?

After a while, you'll probably get fed up generating strings. Then start thinking about the system itself. By reasoning about the system, what does that tell us about the kinds of strings it can generate? What kind of strings _can't_ it generate? Reasoning like this may help you towards the solution.

Is it even possible to generate `MU`? How can you know?

While the MIU system is quite simple, once you get the hang of it, solving the MU-puzzle is pretty challenging! Don't be discouraged if you don't find it right away. I'll be talking about this puzzle a bit in the practical, so you should feel free to work collaboratively to solve it.

If you just find yourself banging your head against a brick wall, move on to the second challenge _Implementing Equations_ below.

### After the practical

You do not have to complete this challenge after the lab if you haven't solved it. But by all means keep puzzling about it if you find it interesting!

You might want to invent other similar formal systems and play around with them. If you come up with any interesting puzzles like this one, I would love to take a crack at solving them!

---

## Implementing Equations

One of the uses of maths is the ability to communicate things clearly. This is great if you are working with people from other disciplines, for example to program scientific models. For example, a chemist might know all sorts of stuff about gasses, but if they can express it in terms of an equation, your job is much easier.

For example, the Ideal Gas Law is an equation about (ideal) gasses.

    PV = nRT

`P` is Pressure, `V` is volume, `n` is the number of moles of gas, `R` is the gas constant, and `T` is temperature

Imagine you've been given the job to model a hot air balloon for a game. It'll be like _Microsoft Flight Simulator_, only slower and with more airships. The important thing that you need to do is to work out the upwards acceleration for a given temperature of air. You can also assume the pressure of the air and the volume of the air in the balloon remains constant.

So, you would do some research to find the formulae you need, handily summarised for you here.

Assume `P = 1 (atmosphere)` and `V = 10,000,000 (litres)` are constant. At a temperature of `T = 272 (Kelvin)` assume `n = 446429 (moles)`. When we increase the temperature of our balloon, the value of `n` will decrease (i.e. our balloon will get lighter).

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSIntroductionImplementingEquations?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Task 1

Rearrange `PV = nRT` so that we can calculate the new value of `n` when we change `T`.

Write a function in Python that includes the values of `n` and `T` given above. This function should take a new value for `T` and return the corresponding new value for `n`.

**Hint:** We can rearrange the ideal gas equation `PV = nRT` to `nT = (PV)/R`. Note everything on the right hand side is now constant, so any pair of `nT` will always equal this, and thus each other (assuming `P` and `V` are held constant). So <code>n<sub>1</sub>T<sub>1</sub> = n<sub>2</sub>T<sub>2</sub></code>

### Task 2

Assume the molar mass of air is `0.0289647 kg/mole`. That means the mass of the air in our balloon in kg `m = n * 0.0289647`.  We also know that acceleration due to gravity is `9.81`

Use the equation `F = ma` (Force = mass * acceleration) to find the weight (downwards force `F`, in Newtons) of a given value for `m`, where `a = 9.81` 

Update your Python function so that given a new temperature `T`, it returns the new downwards force of the balloon.

### Task 3

We can work out the boyancy of our balloon (upwards force, in Newtons), using some values and the Buoyant force equation plucked from the Internet:

    rho = 1.2922 kg/m3 (density of surrounding air)
    g = 9.81 (acceleration due to gravity)
    v = 10,000 (m3)

    B = rho * v * g 
    B = 126764.82 N

So our boyancy, or upwards force is `126764.82 (newtons)`

Take the downwards force (weight) away from the upwards force (boyancy), to work out the net upwards force. Use `F = ma` again to work out the acceleration of the balloon. We calculated the mass of air in our balloon at its new temperature earlier.

So, putting it all together, update your function so that given temperature it will give us the upwards acceleration of our balloon.

### Task 4

If you manage to achieve that, think about your function in terms of what information about the (game) world you are abstracting. 

1. Is this a satisfactory model for our hot air balloon acceleration? How would it behaive in our game?
2. Is there any additional complexity that we need to add in order to make the game work? If so, what is it?
3. Do we need to change any of our constants to variables to achieve this?
