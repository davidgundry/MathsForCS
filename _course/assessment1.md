---
title: Assessment 1
permalink: /course/assessment1/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<style>
    .marks
    {
        color: red;
        font-weight: bold;
    }
</style>

## Rubric

The coursework for this module is split into two. This is the first item of coursework for this module. It is worth 60% of the total module mark. The second item of coursework will be released later in the term and will be due in January and will be worth 40% of the total module mark.

In this assessment you will work on your own to demonstrate your understanding of the mathematical topics taught in this course. You will do this through a combination of solving mathematical problems, and implementing mathematical operations in a programming language.

### Learning Outcomes

Your performance in this coursework will be assessed on the following Module Learning outcomes:

1. Understand and use basic mathematical terminology.
2. Comprehend the basic mathematical concepts that relate to Computer Science
3. Apply mathematical concepts to Computer Science problem solving
4. Understand the mathematical underpinning of Computer Science and be able to identify these

### Submission and deadline

The coursework must be submitted by 12:00pm (noon) **Friday 11 December 2020**. The submission is via the module's Moodle page. The submission point can be found under the 'Assessment' heading.

### Acceptable Submission Formats

Submissions should be in the form of a `.zip` archive containing two files:

1. A PDF containing the answers to all written questions.
2. A `Main.java` file containing all code written in Java, and/or a `main.py` file containing all code if written in Python. Other programming languages may only be used with prior agreement with the course tutor.

Only code in the correctly named functions (as given in the question) will be marked. Other code, including code in `public static void main(String[] args)` will not be marked.

Please check your final submission to ensure that the formatting of any mathematical symbols is correct. Where appropriate handwritten submissions are acceptable, though these should be scanned and converted into PDF files. Image formats such as `.jpeg`, `.png` etc are not acceptable submission formats for such coursework.

### Code Template

Template code for Java can be found at the following URL:

[https://repl.it/@davidgundry/MathsForCSAssessmentTemplate](https://repl.it/@davidgundry/MathsForCSAssessmentTemplate#Main.java)

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSAssessmentTemplate?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Marking

This coursework has a total of 60 marks available.

1. The first part, Number Theory, is worth a total of 35 marks.
2. The second part, Discrete Mathematics, is worth a total of 25 marks.

This coursework is worth 60% of the total mark for the module.

## Part 1: Number Theory <span class="marks">[ 35 marks ]</span>

### Numerical Systems <span class="marks">[ 18 marks ]</span>

1. What is the result of \\( 00111011 - 10101010 \\)? Assume numbers are stored with 8 bits. You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>
2. What is the result of \\(10101010 \\times 101 \\)? You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>
3. What is the remainder and quotient of the following: \\( 111010 \\div 101 \\)? You must show your working to get the mark. <span class="marks">[ 2 marks ]</span>
4. Implement the following methods in a programming language. You must **not** make use of built-in methods, such as `Integer.parseInt()` to parse the Strings. You must **not** represent the binary values as numerical data types such as `int`. <span class="marks">[ 6 marks ]</span>

        /**
        * This function accepts two binary strings (Strings containing only the
        * characters '0' and '1') and returns the result of binary addition.
        * @param a - The first binary number
        * @param b - The second binary number
        * @return A String representing the binary sum of the two arguments.
        **/
        static String binaryAddition(String a, String b)

        /**
        * This function accepts two binary strings (Strings containing only the
        * characters '0' and '1') and returns the result of binary multiplication
        * of the binary numbers.
        * @param a - The first binary number
        * @param b - The second binary number
        * @return A String representing the binary sum of the two arguments.
        **/
        static String binaryMultiplication(String a, String b)

<ol start="5">
    <li>What is the base 4 number `132` in hexadecimal?  You must show your working to get the mark. <span class="marks">[ 1 mark ]</span></li>
</ol>

#### Unix File Permissions

Unix file permissions look like this `rwx-rw-r--`. They consist of 9 binary flags in groups of 3. The first group corresponds to user permissions, the second to group permissions, the third to everyone else. Each group has three flags, written with the characters `r`, `w`, and `x` corresponding to read (`r`), write (`w`) execute (`x`).

Permissions for a file may look like: `rw-r--r--`, meaning the user can read and write it, the group can read it, and everone else can read it. This is also expressed as the octal number 611.

A file where everyone can read, write and execute it would have the string `rwxrwxrwx`. This is also expressed as the octal number 777.

Some example file permissions and equivalent numbers are given below.

    r---w---x = 421
    -w---xr-- = 214
    rw-rw-rw- = 666
    --------- = 0
    --------x = 1
    -----x--- = 10
    --x------ = 100
    rwxrwxrwx = 777

<ol start="6">
    <li>Implement the following methods in a programming language. You <strong>may</strong> make use of built-in methods, such as <code>Integer.parseInt()</code> to parse the Strings. You <strong>may</strong> represent the binary values as numerical data types such as <code>int</code>. <span class="marks">[ 7 marks ]</span></li>
</ol>

        /** 
        * Convert unix file permissions string to number
        * @param permissions - unix file permissions string such as `rw-rw-r--`
        * @return A string containing the number expressed in octal
        **/ 
        static int filePermissionsToNumber(String permissions)

        /** 
        * Convert number into a unix file permissions string
        * @param num - number to convert, such as 664
        * @return Unix file permissions string such as `rw-rw-r--`
        **/ 
        static String numberToFilePermissions(int num)


### Modular Arithmetic <span class="marks">[ 8 marks ]</span>

<ol>
    <li>Give a value for \( a \) such that: \( (4 + 2) \bmod a \times 10 \bmod a - 5 \bmod a \equiv 0 \pmod{a} \) <span class="marks">[ 1 mark ]</span></li>
    <li>What is \( 4^{-1} \pmod{19}\)? <span class="marks">[ 1 mark ]</span></li>
    <li>When is the formula \( a^{-1} \pmod{b} \) undefined? <span class="marks">[ 1 mark ]</span></li>
    <li>Prove the following conjecture: If \( 3 | n \) then \((n + 5)(n + 2) \equiv 1 \pmod 3 \) <span class="marks">[ 2 marks ]</span></li>
    <li>Prove the following conjecture by induction: The formula \( (5n + 1)(n + 1)(2n + 3) \) is divisible by 3 for all positive natural numbers \( n \) <span class="marks">[ 3 marks ]</span></li>
</ol>

### Algorithms <span class="marks">[ 9 marks ]</span>

<ol>
    <li> Simplify the following so that it is no longer uses sigma-notation: \( \sum_{i=1}^{n} (i + i^2 + 1) \) <span class="marks">[ 2 marks ]</span></li>
    <li> What is the order of the following function in Big-Oh notation? \( T(n) = n^3 + n \log n + n \) <span class="marks">[ 1 mark ]</span></li>
    <li>Put the following in order, slowest-growing first <span class="marks">[ 1 mark ]</span></li>
        <ul>
            <li>\( O(n) \)</li>
            <li>\( O(n \log n) \)</li>
            <li>\( O(n^2) \)</li>
            <li>\( O(n!) \)</li>
            <li>\( O(\log n) \)</li>
            <li>\( O(1) \)</li>
        </ul>
</ol>

Here is the pseudo code for an algorithm

    Function A(n)
        num := 0
        for (i = 1 to n)
            for (j = 1 to n)
                num := num + 1
            endfor
        endfor
    return num

<ol start="3">
    <li>Give the value \( A(10) \)? <span class="marks">[ 1 mark ]</span></li>
    <li>Write a function named <code>A</code> in a programming language that implements this algorithm. <span class="marks">[ 1 mark ]</span></li>
    <li>Calculate the time function for the algorithm and express as a polynomial <span class="marks">[ 2 marks ]</span></li>
    <li>Give the time complexity of this time function <span class="marks">[ 1 mark ]</span></li>
</ol>

## Part 2: Discrete Mathematics <span class="marks">[ 25 marks ]</span>

### Propositional Logic <span class="marks">[ 6 marks ]</span>

_De Morgan's Laws_ of propositional logic relate conjunction and disjunction.

<ol>
    <li>Prove by means of a truth table that: \( \neg (p \wedge q) \iff \neg p \vee \neg q \) <span class="marks">[ 1 mark ]</span></li>
    <li>Prove by means of a truth table that: \( \neg (p \vee q) \iff \neg p \wedge \neg q \) <span class="marks">[ 1 mark ]</span></li>
</ol>

_Modus Tollens_ is a rule of inference with the following form: "If P, then Q; and not Q; therefore, not P"

<ol start="3">
    <li>Express Modus Tollens in propositional logic. <span class="marks">[ 1 mark ]</span></li>
    <li>Modus Ponens is another rule of inference that we saw in the lectures. Express Modus Ponens in propositional logic. <span class="marks">[ 1 mark ]</span></li>
</ol>

<ol start="4">
    <li> In a sentence, and with reference to specific propositional logic operators explain why the existance of a contradiction in a foundational axiomatisation of mathematics is disasterous to its programme (assuming classical logic). <span class="marks">[ 2 marks ]</span></li>
</ol>


### Set Theory <span class="marks">[ 9 marks ]</span>

Assume the domain is natural numbers (including 0). Given the sets

    A = { 1, 2, 3 }
    B = { 3, 4, 5, 6 }
    C = { n | n < 4 }
    D = { n | n ≡ 0 (mod 3)}

Give the extension of the following sets:

<ol>
    <li>\( A \cup B \) <span class="marks">[ 1 mark ]</span></li>
    <li>\( B \cap C \) <span class="marks">[ 1 mark ]</span></li>
    <li>\( C \setminus D \) <span class="marks">[ 1 mark ]</span></li>
    <li>\(\mathbb{P}(C) \) <span class="marks">[ 2 mark ]</span></li> 
    <li>\(A \times C \) <span class="marks">[ 2 mark ]</span></li> 
    <li>\( \{ n : n \in \mathbb{Z}  \wedge (n < 5 \vee n > -2) \wedge \neg (n = 0) \} \) <span class="marks">[ 2 mark ]</span></li> 
</ol>

### Graph Theory <span class="marks">[ 10 marks ]</span>

Look at the following graph:

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

<div id="graph1" style="display: block; width:100%; height:400px"></div>

<script>
var cy = cytoscape({
    container: document.getElementById('graph1'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'n5' } },
        { data: { id: 'n6' } },
        { data: { id: 'n7' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n2', target: 'n4' } },
        { data: { id: 'e4', source: 'n2', target: 'n5' } },
        { data: { id: 'e5', source: 'n3', target: 'n6' } },
        { data: { id: 'e7', source: 'n3', target: 'n7' } },
        { data: { id: 'e8', source: 'n1', target: 'n3' } },
        { data: { id: 'e9', source: 'n1', target: 'n4' } },
        { data: { id: 'e10', source: 'n2', target: 'n5' } },
        { data: { id: 'e11', source: 'n2', target: 'n6' } },
        { data: { id: 'e12', source: 'n3', target: 'n7' } },
        { data: { id: 'e13', source: 'n3', target: 'n1' } }
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
            'target-arrow-shape': 'triangle',
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

1. Draw an adjacency matrix for this graph. <span class="marks">[ 2 marks ]</span>
2. Write out a sequence of nodes of this graph that form a cycle. <span class="marks">[ 1 mark ]</span>
3. Using set notation write out all the nodes of this graph with loops. <span class="marks">[ 1 mark ]</span>
4. What is the out-degree of node `n3`? <span class="marks">[ 1 mark ]</span>
5. What is the maximum degree of this graph? <span class="marks">[ 1 mark ]</span>

A graph \\( G = \\{ (v, e) : v \\in V \\wedge e \\in V \\times V \\} \\) is defined for some set \\( V \\).

<ol start="6">
    <li>Draw G for \( V = \{ n1, n2, n3 \} \) <span class="marks">[ 1 mark ]</span></li>
    <li>Is G a connected graph? <span class="marks">[ 1 mark ]</span></li>
    <li>Is G a directed graph? <span class="marks">[ 1 mark ]</span></li>
    <li>Does G contain loops? <span class="marks">[ 1 mark ]</span></li>
</ol>

---

This is the end of the assessment.