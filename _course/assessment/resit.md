---
title: Resit Assessment
permalink: /course/resit/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Rubric

This resit assessment is worth 100% of the module mark.

In this assessment you will work on your own to demonstrate your understanding of the mathematical topics taught in this course. You will do this through a combination of solving mathematical problems, and implementing mathematical operations in a programming language.

### Learning Outcomes

Your performance in this coursework will be assessed on the following Module Learning outcomes:

1. Understand and use basic mathematical terminology.
2. Comprehend the basic mathematical concepts that relate to Computer Science
3. Apply mathematical concepts to Computer Science problem solving
4. Understand the mathematical underpinning of Computer Science and be able to identify these

### Submission and deadline

The coursework must be submitted by 12:00pm (noon) **Friday 16 April 2021**. The submission is via the module's Moodle page. The submission point can be found under the 'Assessment' heading.

### Acceptable Submission Formats

Submissions should be in the form of a `.zip` archive containing two files:

1. A PDF containing the answers to all written questions.
2. A `Main.java` file containing all code written in Java.

Only code in the correctly named functions (as given in the question) will be marked. Other code, including code in `public static void main(String[] args)` will not be marked.

Please check your final submission to ensure that the formatting of any mathematical symbols is correct. Where appropriate handwritten submissions are acceptable, though these should be scanned and converted into PDF files. Image formats such as `.jpeg`, `.png` etc are not acceptable submission formats for such coursework.

### Code Template

Template code for Java can be found at the following URL:

[https://repl.it/@davidgundry/MathsForCSResitTemplate](https://repl.it/@davidgundry/MathsForCSResitTemplate#Main.java)

### Marking

This coursework has a total of 100 marks available.

1. The first part, Number Theory, is worth a total of 30 marks.
2. The second part, Discrete Mathematics, is worth a total of 30 marks.
2. The third part, Statistics, is worth a total of 40 marks.

This coursework is worth 100% of the total mark for the module.

## Part 1: Number Theory <span class="marks">[ 30 marks ]</span>

### Numerical Systems <span class="marks">[ 9 marks ]</span>

1. Use binary addition to find the result of \\( 10001101 + 01101011 \\)? Assume numbers are stored with 8 bits. You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>

2. Use binary multiplication to find the result of \\(10011 \\times 1011 \\)? You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>

3. Use binary division to find the remainder and quotient of \\( 00111011 \\div 00000011 \\)? You must show your working to get the mark. <span class="marks">[ 2 marks ]</span>

4. Implement the following methods in Java. You must **not** make use of built-in methods, such as `Integer.parseInt()` to parse the Strings. You must **not** represent the binary values as numerical data types such as `int`. <span class="marks">[ 3 marks ]</span>

        /**
        * This function accepts one binary string (a String containing only the
        * characters '0' and '1') and returns the two's compliment of the binary
        * number. Represent the final number using the same number of bits as the
        * input string.
        * @param a - The binary number
        * @return A String representing the two's compliment of the argument.
        **/
        static String twosCompliment(String a)


<ol start="5">
    <li>Convert the decimal number 247 into hexadecimal. You must show your working to get the mark. <span class="marks">[ 1 mark ]</span></li>

    <li>What is the base 16 number `abc` in decimal?  You must show your working to get the mark. <span class="marks">[ 1 mark ]</span></li>

</ol>

### Modular Arithmetic <span class="marks">[ 10 marks ]</span>

1. A binary relation R is reflexive and transitive. From this, which of the following **must** be true: <span class="marks">[ 1 mark ]</span>
    1. \\( aRa \\)
    2. \\( aRb \\)
    3. \\( aRb \\implies bRa \\)
    4. \\( aRb \\wedge bRc \\implies aRc \\)

2. Complete the following table of binary relations. Write `T` in a column if the relation has that property, or `F` if it does not. <span class="marks">[ 2 marks ]</span>

    | Relation | Reflexive | Transitive | Symmetric |
    | -------- | --------- | ---------- | --------- |
    | \\( = \\) | T | T | T |
    | \\( \\equiv \\) | | | |
    | \\( \\subset \\) | | | |
    | \\( \\supseteq \\) | | | |
    | \\( \\iff \\) | | | |
    | \\( \\in \\) | | | |
    | \\( \\geq \\) | | | |

<ol start="3">
    <li>You are working modulo 4. What is \( \frac{5}{3} \pmod{4} \)? Remember, your answer will be an integer. <span class="marks">[ 2 mark ]</span></li>

    <li>Prove the following conjecture: If \( a \) even and \( b \) is odd, then \( a \times b \) is even.<span class="marks">[ 1 mark ]</span></li>

    <li>Prove the following conjecture: \( 3(2n + 6)^2 +3  \) is not divisible by 2 <span class="marks">[ 1 mark ]</span></li>

    <li>Prove the following conjecture by induction: The formula \( (2n + 5)(n + 5)(n + 3) \) is divisible by 3 for all positive natural numbers \( n \) <span class="marks">[ 3 marks ]</span></li>
</ol>

### Algorithms <span class="marks">[ 11 marks ]</span>

1. Simplify the following so that it is no longer uses sigma-notation: \\( \\sum_{i=1}^{n} (2i^2 + 5) \\) <span class="marks">[ 1 mark ]</span>
   
2. Simplify the following so that it is no longer uses sigma-notation: \\( \\sum_{i=1}^{n} (i + \\sum_{j=1}^{i} j) \\) <span class="marks">[ 2 marks ]</span>
    
3. For each of the following, give their time complexity in Big-Oh notation. Then indicate which one is the slowest growing, and which is the fastest growing.  <span class="marks">[ 2 mark ]</span>
    1. \\( n^2 + 3n \\)
    2. \\( n! + \\log n \\)
    3. \\( 3n \\log n + 3n^2 \\)
    4. \\( e^n + n^3 \\)
    5. \\( 1 + 4\\pi^3 \\)
    
4. A function is defined as follows \\( f(a, b) = \\sum_{i=1}^{a} \\sum_{j=1}^{(i + b)} j \\). 
    1. Give the value f(4,3) <span class="marks">[ 1 mark ]</span>
    
    2. Write a function named F in Java to implement this <span class="marks">[ 2 marks ]</span>

Here is the pseudo code for an algorithm

    Function A(n)
        num := 0
        for (i = 1 to n)
            for (j = 1 to i)
                num := num + 1
            endfor
        endfor
    return num

<ol start="5">
    <li>Find the time function and express using summation <span class="marks">[ 2 marks ]</span></li>

    <li>Give the time complexity of this time function <span class="marks">[ 1 mark ]</span></li>

</ol>

## Part 2: Discrete Mathematics <span class="marks">[ 30 marks ]</span>

### Propositional Logic <span class="marks">[ 9 marks ]</span>

Assume shifts always shift in 0 and you are working with only 8 bits. 

1. What is `01010111 AND 11011011` <span class="marks">[ 1 mark ]</span>
   
2. What is `LEFT SHIFT 00000101`? <span class="marks">[ 1 mark ]</span>
   
3. You have two numbers with bits `10101010` and `00000001`. Which combination of three or fewer bitwise operators can you use to get `01010111` <span class="marks">[ 1 mark ]</span>
    

The First Distributive Law of Propositional Logic states that \\( P \\vee (Q \\wedge R) \\iff (P \\vee Q) \\wedge (P \\vee R) \\)

<ol start="5">
    <li>Prove this law by means of a truth table.<span class="marks">[ 3 marks ]</span></li>
        
</ol>

Read the following example sentences:

* "If I am cold and I am wearing socks, then either it is not the case that my heating is working or I am ill."
* "I am cold if and only if any of the following are true: I am not wearing socks, or I am ill, or it is not the case that my heating is working."

<ol start="6">
    <li>Identify the atomic propositions in these two sentences and assign each a letters (c = "I am cold", etc). <span class="marks">[ 1 mark ]</span></li>
    
    <li>Using these letters as terms, express each example as a statement of propositional logic, using propositional logic symbols. <span class="marks">[ 2 mark ]</span></li>
</ol>


### Set Theory <span class="marks">[ 14 marks ]</span>

Assume the domain is the positive natural numbers (excluding 0). Given the sets

\\( A = \\{ 2, 3, 5, 7 \\}\\)

\\( B = \\{ n \| n \\mod 2 = 0 \\}\\)

\\( C = \\{ n \| n > 5 \\}\\)

\\( D = \\{ n \| n \\equiv 2 \\pmod{3}\\}\\)

\\( E = \\{ n \| n \\leq  10 \\} \\)

\\( F = \\{ 5, 6, 7 \\} \\)

1. Describe in words the contents of the set \\( B \\) <span class="marks">[ 1 mark ]</span>

Give the extensions of the following sets:

<ol start="2">
    <li>\( A \setminus B \) <span class="marks">[ 1 mark ]</span></li>
    
    <li>\( A \cap C^C \) <span class="marks">[ 1 mark ]</span></li>
    
    <li>\(\mathbb{P}(F) \) <span class="marks">[ 2 mark ]</span></li>
    
    <li>\(F \times F \) <span class="marks">[ 2 mark ]</span></li>
    
</ol>

Give an intensional definition (using set builder notation) of the following sets:

<ol start="6">
    <li>\( F \) (Do this without making reference to the set itself, i.e. not something like "\( x \in F \))"<span class="marks">[ 2 marks ]</span></li>
    
<li>\( \{ (1, 1), (2, 1), (2, 2), (3, 1), (3, 2), (3, 3) \} \) <span class="marks">[ 2 marks ]</span></li>
    
<li>\( \{ \emptyset, \{ 3 \}, \{ 4 \}, \{ 5 \}, \{ 3, 4 \}, \{ 4, 5 \}, \{ 3, 5 \}, \{ 3, 4, 5 \}, \)

\( \{1\}, \{ 1, 3 \}, \{ 1, 4 \}, \{ 1, 5 \}, \{ 1, 3, 4 \}, \{ 1, 4, 5, \}, \{ 1, 3, 5 \}, \{ 1, 3, 4, 5 \}, \)

\( \{2\}, \{ 2, 3 \}, \{ 2, 4 \}, \{ 2, 5 \}, \{ 2, 3, 4 \}, \{ 2, 4, 5 \}, \{ 2, 3, 5 \}, \{ 2, 3, 4, 5 \}, \)

\( \{1, 2 \}, \{ 1, 2, 3 \}, \{ 1, 2, 4 \}, \{ 1, 2, 5 \}, \{ 1, 2, 3, 4 \}, \{ 1, 2, 4, 5 \}, \{ 1, 2, 3, 5 \}, \{ 1, 2, 3, 4, 5 \}  \} \) <span class="marks">[ 3 marks ]</span></li>
    
</ol>

### Graph Theory <span class="marks">[ 7 marks ]</span>

Look at the following graph (you may move the nodes by clicking and dragging to see it more clearly):

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

<div id="graph1" style="display: block; width:100%; height:400px"></div>

<script>
var cy = cytoscape({
    container: document.getElementById('graph1'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n0' } },
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'n5' } },
        { data: { id: 'n6' } },
        { data: { id: 'e1', source: 'n2', target: 'n4' } },
        { data: { id: 'e2', source: 'n4', target: 'n1' } },
        { data: { id: 'e3', source: 'n4', target: 'n0' } },
        { data: { id: 'e4', source: 'n0', target: 'n4' } },
        { data: { id: 'e5', source: 'n0', target: 'n6' } },
        { data: { id: 'e7', source: 'n6', target: 'n0' } },
        { data: { id: 'e8', source: 'n6', target: 'n6' } },
        { data: { id: 'e9', source: 'n6', target: 'n3' } },
        { data: { id: 'e10', source: 'n0', target: 'n5' } },
        { data: { id: 'e11', source: 'n5', target: 'n0' } },
        { data: { id: 'e12', source: 'n0', target: 'n0' } }
    ],

    style: [ // the stylesheet for the graph
        {
        selector: 'node',
        style: {
            'background-color': '#666',
            'label': 'data(id)'
        }
        },

        {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'none',
            'curve-style': 'bezier'
        }
        }
    ],

    layout: {
        animate: false,
        name: 'cose',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy.userPanningEnabled( false );
cy.minZoom(1);
cy.maxZoom(1);
</script>

1. Answer the following two questions: Is this graph directed? Is this graph connected? <span class="marks">[ 1 marks ]</span>
    
2. Draw an adjacency matrix for this graph. <span class="marks">[ 2 marks ]</span>
    
3. Using set notation, write out all nodes of this graph that are _not_ part of any cycle <span class="marks">[ 1 mark ]</span>
    
4. Using set notation write out all the nodes of this graph with loops. <span class="marks">[ 1 mark ]</span>
    
5. What is the degree of node `n0`? <span class="marks">[ 1 mark ]</span>
    
6. What is the minimum degree of this graph? <span class="marks">[ 1 mark ]</span>
    

## Part 3: Statistics <span class="marks">[ 40 marks ]</span>

### Calculating Statistics <span class="marks">[ 13 marks ]</span>

1. Implement the following methods in Java. <span class="marks">[ 8 marks ]</span>

        /**
        * Identify if someone's IQ is statistically sigificantly above the mean for the
        * population, using the values provided to the function.
        * @param iq - individual's IQ
        * @param mean - population mean
        * @param sd - population standard deviation
        * @return true if iq significantly above the mean
        **/
        static boolean hasAboveAverageIQ(double iq, double mean, double sd)

        /**
        * Identify if the average IQ of a group is statistically significantly different
        * to the mean of the population, using the values provided to the function.
        * @param group - array of iq scores of group
        * @param mean - population mean
        * @param sd - population standard deviation
        * @return true if mean iq of group is significant
        **/
        static boolean hasSignificantIQGroup(double[] group, double mean, double sd)

        /**
        * Perform a two-sample t-test (not assuming equal variance between groups)
        * @param group1 - array of scores
        * @param group2 - array of scores
        * @param expectedMeanDifference - expected difference between group means
        * @return t statistic
        **/
        static double twoSampleTTest(double[] group1, double[] group2, double expectedMeanDifference)

        /**
        * Finds the product-moment correlation co-efficient for two arrays of correlated data
        * @param x - x values
        * @param y - y values
        * @return the calculated pearson's r 
        **/
        static double pearsonsR(double[] x, double[] y)

#### Running Average

It's often necessary to calculate statistics on a live stream of data without storing all of it due to storage and processing limitations. For example, imagine calculating the mean temperature of a sensor. If the mean was calculated from an array of such readings, this array would in time get unmanigably large.

<ol start="2">
    <li>Implement the following methods in Java. <span class="marks">[ 2 marks ]</span></li>
</ol>

        /**
        * Updates a running mean.
        * @param currentMean - The mean found by averaging the first `n` numbers of a stream
        * @param newNumber - The next number to include in the mean
        * @param n - the number of numbers averaged so far in the mean
        * @return the updated mean
        **/
        static double updateMean(double currentMean, double newNumber, int n)

#### Neural Networks

Neural networks are used for machine learning and machine learning is really a fancy word for computers doing lots of statistics. Neural networks are composed of **neurons**. Each neuron in a neural network only does simple computation. These neurons are connected together, so the output of one neuron is the input to another. These connections form a network, hence: 'neural network'.

Here we're going to write the code for a single neuron. A neuron does three things:

* Finds the **weighted average** of it's input vector (i.e. its array of inputs), using a vector (i.e. array) of weights.
* Add a **bias**. 
* Pass the result of this into a (sigmoid) **activation function**.

Following this process calculates a number. This number is called the neuron's activation, and it is this that would be used as the input to other neurons in the network. 

Expressing this mathematically, a neuron takes input vector \\( w \\), weight vector \\( x \\) and a bias \\( b \\) and calculates:

<p class="math">\( \sigma(b + \sum_j w_j x_j) \)</p>

Where \\( \\sigma \\) refers to the sigmoid function:

<p class="math">\[ \sigma(z) = \frac{1}{1 + e^{-z}} \]</p>

<ol start="3">
    <li>Implement the following methods in Java. <span class="marks">[ 3 marks ]</span></li>
</ol>

        /**
        * Calculate the weighted average for an input vector with a vector of weights.
        * @param inputVector - Array of numbers to average
        * @param weights - Weights associated with each value in the input vector
        * @return weighted average plus bias
        **/
        static double weightedAverage(double[] inputVector, double[] weights)

        /**
        * Implements the sigmoid activation function described above.
        * @param z - input to the sigmoid function
        * @return output of the sigmoid function
        **/
        static double sigmoid(double z)

        /**
        * Returns the activation of a neuron with the given input vector, weights, and bias
        * @param inputVector - Array of numbers to average
        * @param weights - Weights associated with each value in the input vector
        * @param bias - Bias factor for neuron
        * @return the activation of the neuron
        **/
        static double neuronActivation(double[] inputVector, double[] weights, double bias)


### Hypothesis Test <span class="marks">[ 13 marks ]</span>

A free-to-play mobile game development company runs an experiment. They have developed two levels, A and B, for their game and want to see which one players spend longest playing.

A between-groups design is used for the experiment. 32 players are randomly assigned to two groups who will be exposed to the new level. Group 1 (16 players) plays level A. Group 2 (16 players) play level B. Using game telemetry the company recorded how long players spent playing each level. It also recorded how many days since the player installed the game.

You will need to analyse the data to see if there is a significant difference in the mean time spent playing each level against an alpha of 0.05.

[The full data is available here](/assets/assessment/resit/game-data.csv)

Report the following:

1. Mean and standard deviation of play time for each group (2 d.p.) <span class="marks">[ 1 mark ]</span>

Calculate the following by hand, showing your working. You may use a calculator to check your answer, but you must show working to get the mark. If you make use of a table, [such as this one](https://t-tables.net/) to find a value, indicate which table you used in your working. Report your answers to 2 decimal places.

<ol start="2">
    <li>Appropriate statistical test to use, including formula <span class="marks">[ 1 mark ]</span></li>
    
    <li>Test statistic <span class="marks">[ 1 mark ]</span></li>
    
    <li>Degrees of freedom <span class="marks">[ 1 mark ]</span></li>
    
    <li>P value <span class="marks">[ 1 mark ]</span></li>
    
    <li>Whether or not result is significant <span class="marks">[ 1 mark ]</span></li>
    
    <li>An appropriate measure of effect size <span class="marks">[ 2 marks ]</span></li>
</ol>

The company wants to see if there is a correlation between skill level and time played across the whole data set (not separated for level). They decide to use time since install as a proxy measure for skill (as players who have had the game a long time are more likely to be skilled in it)

<ol start="9">
    <li> Perform a linear regression of <code>days_since_install</code> and <code>time_played_minutes</code> and find the gradient and intercept of the line of best fit. Give answers to 2 decimal places. Show your working. <span class="marks">[ 2 marks ]</span></li>
</ol>

Produce the following graphs (You may wish to use [https://plotly.com/chart-studio/](Plotly Chart Studio) as we did during the practical):

<ol start="10">
    <li>Visualise this hypothesis test using a box-plot <span class="marks">[ 1 mark ]</span></li>
    
    <li>Visualise the distribution of time played for all players with a histogram <span class="marks">[ 1 mark ]</span></li>
    
    <li>Visualise the correlation between enjoyment and time played using an appropriate graph <span class="marks">[ 1 mark ]</span></li>
    
</ol>

### Probability <span class="marks">[ 16 marks ]</span>

I have a bag with 12 balls of different colours: 4 red, 4 green, 4 blue. Of each colour there are 2 small balls. 

1. In an experiment, I draw a ball at random out of the bag. Illustrate this experiment with a Venn diagram, showing the number of outcomes for each combination of events.  <span class="marks">[ 1 mark ]</span>
    
2. I draw two balls and then replace them. What is the probability that I drew a small red ball and a small green ball? <span class="marks">[ 1 mark ]</span>
    
3. I draw three balls, one after the other (and later replace them). Considering the colours of the balls, how many permutations might I draw? <span class="marks">[ 1 mark ]</span>
    
4. What is the probability of drawing three balls of the same colour? <span class="marks">[ 1 mark ]</span>
    

I remove 3 balls and make a black dot on them.

<ol start="5">
    <li>What is the probability of drawing either a red ball or a ball with a dot on it? <span class="marks">[ 1 mark ]</span></li>
    
</ol>

I purchase two more bags, so now I have three. These have the following numbers of balls in them:

    bag 2: 6 red, 2 green, 1 blue
    bag 3: 5 green, 5 blue

<ol start="6">
    <li>I pick <strong>one of three bags</strong> at random, what is the liklihood that I draw a red ball? <span class="marks">[ 2 mark ]</span></li>
    
</ol>

The manufacturer of the balls announces that 10% of balls have a defect. If you drop a ball, there is normally a 20% chance it will break, but this probability rises to 50% if the ball is defective.

<ol start="7">
    <li>I drop a ball to see whether it breaks. Illustrate all the possible outcomes of the experiment using a Probability Tree. <span class="marks">[ 1 mark ]</span></li>
    
    <li>I drop a ball and it doesn't break. What is the probability it is not defective? <span class="marks">[ 2 mark ]</span></li>
    
    <li>I want to be 95% sure the balls I have are not defective. How many times do I need to drop each ball to be this confident? <span class="marks">[ 3 marks ]</span></li>
    
    <li>I pick a ball at random and drop it twice. What is the chance it will break? <span class="marks">[ 1 mark ]</span></li>
    
    <li>Implement the following method in Java. <span class="marks">[ 2 marks ]</span></li> 
</ol>

        /**
        * Calculates the probability that a random ball will break if dropped a given number of times,
        * using the probabilities from the question above.
        * @param n - number of times ball is dropped
        * @return probability ball will be broken after n drops.
        **/
        static double simulateNDrops(int n)


---

This is the end of the assessment.