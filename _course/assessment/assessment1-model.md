---
title: Assessment 1 Model Answer
permalink: /course/assessment1-model/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

This is the model answer for [Assessment 1](/course/assessment1). Multiple methods have been provided for answering some questions. There may be other valid methods for getting to the correct answer.

In marking the assessment, partial marks are given for working, and for error carried forward (ECF), where an answer is correct but for an incorrect value brought forward from an earlier question for which the student has already lost marks.

A demo of the [model answer code](https://repl.it/@davidgundry/MathsForCSAssessmentModelAnswer) is available on Replit. The test code that was used in marking the assessments is available on GitHub [for Java](https://github.com/davidgundry/MathsForCS_Assessment1TestsJava) and [for Python](https://github.com/davidgundry/MathsForCS_Assessment1TestsJava).

## Part 1: Number Theory <span class="marks">[ 35 marks ]</span>

### Numerical Systems <span class="marks">[ 18 marks ]</span>

1. What is the result of \\( 00111011 - 10101010 \\)`? Assume numbers are stored with 8 bits. You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>

    <div class="model-answer" markdown="1">
    First we find the twos-compliment of the second number:

    We flip each bit of 10101010 to get the one's compliment and add 1.

        01010101 (= one's compliment)
        00000001 +
        --------
        01010110 (= two's compliment)

    Now we do binary addition using the twos compliment:

        00111011
        01010110 +
        --------
        10010001
    </div>


2. What is the result of \\(10101010 \\times 101 \\)? You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>

    <div class="model-answer" markdown="1">
    We can use binary multiplication to find the answer:

          10101010
               101 *
          --------
          10101010
         000000000     
        1010101000 +
        ----------
        1101010010
    </div>

3. What is the remainder and quotient when you divide of \\( 111010 \\div 101 \\)`? You must show your working to get the mark. <span class="marks">[ 2 marks ]</span>

    <div class="model-answer" markdown="1">
    We can use binary division to find the answer:

                1011
            ---------
        101 | 111010
              101
              -------
               10010
                101
                -----
                1000
                 101
                 ----
                 011

    quotient: 1011

    remainder: 11
    </div>

4. Implement the following methods in a programming language. You must **not** make use of built-in methods, such as `Integer.parseInt()` to parse the Strings. You must **not** represent the binary values as numerical data types such as `int`. <span class="marks">[ 6 marks ]</span>
    <div class="model-answer" markdown="1">
        /**
        * This function accepts two binary strings (Strings containing only the
        * characters '0' and '1') and returns the result of binary addition.
        * @param a - The first binary number
        * @param b - The second binary number
        * @return A String representing the binary sum of the two arguments.
        **/
        static String binaryAddition(String a, String b)
        {
            String out = "";
            int len = Math.max(a.length(), b.length());
            boolean carry = false;
            for (int i = 1; i <= len; i++)
            {
                boolean aVal = ((i <= a.length()) && (a.charAt(a.length()-i) == '1'));
                boolean bVal = ((i <= b.length()) && (b.charAt(b.length()-i) == '1'));

                if (aVal && bVal)
                {
                    out = (carry ? "1" : "0") + out;
                    carry = true;   
                }
                else if (!aVal && !bVal)
                {
                    out = (carry ? "1" : "0") + out;
                    carry = false;
                }
                else
                    out = (carry ? "0" : "1") + out;
            }
            return out;
        }

        /**
        * This function accepts two binary strings (Strings containing only the
        * characters '0' and '1') and returns the result of binary multiplication
        * of the binary numbers.
        * @param a - The first binary number
        * @param b - The second binary number
        * @return A String representing the binary sum of the two arguments.
        **/
        static String binaryMultiplication(String a, String b)
        {
            String bin = "0";  
            for (int i = b.length()-1; i >= 0; i--)
            {
                if (b.charAt(i) == '1')
                    bin = binaryAddition(bin, a);
                a = a + "0";
            }
            return bin;
        }
    </div>

1. What is the base 4 number `132` in hexadecimal? You must show your working to get the mark. <span class="marks">[ 1 mark ]</span>

    <div class="model-answer" markdown="1">
    A hexadecimal digit is represented by 4 base 2 (binary) digits (\\(2^4 = 16 \\)). It is represented as 2 base 4 digits (\\( 4^2 = 16 \\)). Therefore we convert each pair of base-4 digits to one hex digit.

    We start pairing from the right, and pad the left with zeroes if necessary. The pairs are: \\( 01 \\), \\( 32\\)
. The first number in each pair is in 4s = \\( 4^1 \\), the second is in 1s (units) = \\( 4^0 \\)

     \\( 3 \\times 4^1 + 2 \\times 4^0 = 14 = E_{16}\\)

     \\( 0 \\times 4^1 + 1 \\times 4^0 = 1 = 1_{16}\\)

     \\( 0132\_4 = 1E_{16} \\)
    </div>
        
#### Unix File Permissions

Unix file permissions look like this `rwx-rw-r--`. They consist of 9 binary flags in groups of 3. The first group corresponds to user permissions, the second to group permissions, the third to everyone else. Each group has three flags, written with the characters `r`, `w`, and `x` corresponding to read (`r`), write (`w`) execute (`x`).

Permissions for a file may look like: `rw-r--r--`, meaning the user can read and write it, the group can read it, and everone else can read it. This is also expressed as the octal number 611.

A file where everyone can read, write and execute it would have the string `rwxrwxrwx`. This is also expressed as the octal number 777.

Some example file permissions and equivalent numbers are given below.

* `r---w---x` = 421
* `-w---xr--` = 214
* `rw-rw-rw-` = 555
* `---------` = 0
* `--------x` = 1
* `-----x---` = 10
* `--x------` = 100
* `rwxrwxrwx` = 777

<ol start="6">
    <li>Implement the following methods in a programming language. You <strong>may</strong> make use of built-in methods, such as <code>Integer.parseInt()</code> to parse the Strings. You <strong>may</strong> represent the binary values as numerical data types such as <code>int</code>. <span class="marks">[ 3 marks ][4 marks ]</span></li>
</ol>
<div class="model-answer" markdown="1">
    /** 
    * Convert unix file permissions string to number
    * @param permissions - unix file permissions string such as `rw-rw-r--`
    * @return A string containing the number expressed in octal
    **/ 
    static int filePermissionsToNumber(String permissions)
    {
        int out = 0;  
        for (int i = 0; i < 3; i++)
        {
            int num = 1;  
            for (int j = 2; j >= 0; j--)
            {
                if (permissions.charAt((i*3)+j) != '-')
                    out += num * Math.pow(10,2-i);
                num *= 2;
            }
        }
        return out;
    }

    /** 
    * Convert number into a unix file permissions string
    * @param num - number to convert, such as 664
    * @return Unix file permissions string such as `rw-rw-r--`
    **/ 
    static String numberToFilePermissions(int num)
    {
        int d3 = num % 10;
        int d2 = (num/10) % 10;
        int d1 = (num/100) % 10;

        return toFileBinary(d1) + toFileBinary(d2) + toFileBinary(d3);
    }

    static String toFileBinary(int number)
    {
        String c = "rwx";
        String output = "";
        int i = 2;
        do {
            if (number % 2 == 1)
                output = c.charAt(i) + output;
            else
                output = "-" + output;
            i--;
            number /= 2;
        } while (output.length() < 3);

        return output;
    }
</div>

### Modular Arithmetic <span class="marks">[ 8 marks ]</span>

<ol>
    <li>Give a value of \( a \) such that: \( (4 + 2) \bmod a \times 10 \bmod a - 5 \bmod a \equiv 0 \pmod{a} \) <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
Multiple answers are possible here:

\\( a = 1 \\), \\( a = 5 \\), \\( a = 11 \\), \\( a = 55 \\)
</div>
    <li>What is \( 4^{-1} \pmod{19}\)? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
The multiplicative inverse is what you multiply to get 1. We are working under mod 19.

Because \\( 5 \\times 4 \\equiv 1 \pmod{19} \\)

\\( 4^{-1} = 5 \\) 
</div>
    <li>When is the formula \( a^{-1} \pmod{b} \) undefined? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
When a and b are not co-prime. When the greatest common denominator of a and b > 1
</div>
    <li>Prove the following conjecture: If \( 3 | n \) then \((n + 5)(n + 2) \equiv 1 \pmod 3 \) <span class="marks">[ 2 marks ]</span></li>
<div class="model-answer" markdown="1">
If \\(3 \| n\\), then \\(n = 3i\\). Thus,

\\( (3i + 5)(3i + 2)  \\equiv 1 \\pmod 3 \\)

\\( 9i + 6i + 15i + 10 \\equiv 1 \\pmod 3 \\)

\\( 3(3i + 2i + 5i + 9) + 1 \\equiv 1 \\pmod 3 \\) 

As any multiple of 3 is congruent with 0 modulo 3,

\\( 0 + 1 \\equiv 1 \\pmod 3 \\) ∎
</div>
    <li>Prove the following conjecture by induction: The formula \( (5n + 1)(n + 1)(2n + 3) \) is divisible by 3 for all positive natural numbers \( n \) <span class="marks">[ 3 marks ]</span></li>
<div class="model-answer" markdown="1">

To prove this claim, we will prove a base case where \\( n = 1 \\) and an inductive step

Base case, where n=1

\\( 3 \| (5(1)+1)((1)+1)(2(1)+3) \\)

\\( 3 \| (5+1)(1+1)(2+3) \\)

\\( 3 \| (6)(2)(5) \\)

\\( 3 \| (3)((2)(2)(5)) \\)

To prove the inductive step, we assume the claim holds for a number \\( n = k \\), which would mean:

\\( 3 \| (5(k)+1)((k)+1)(2(k)+3) \\)

\\( 3 \| (5k+1)(k+1)(2k+3) \\)

\\( 3 \| (5k+1)(2k^2 + 5k + 3) \\)

\\( 3 \| 10k^3 + 27k^2 + 20k + 3 \\)

Now, if the claim holds for \\( n=k \\), then we can show that for \\( n = k + 1 \\):

\\( 3 \| (5(k+1)+1)((k+1)+1)(2(k+1))+3) \\)

\\( 3 \| (5k+6)(k+2)(2k+5) \\)

\\( 3 \| (5k+6)(2k^2 + 9k + 10) \\)

\\( 3 \| 10k^3 + 57k^2 + 104k + 60 \\)

As we assume \\( 3 \| 10k^3 + 27k^2 + 20k + 3) \\), we can subtract this from our formula: 

\\( 3 \| (10k^3 + 57k^2 + 104k + 60) - (10k^3 + 27k^2 + 20k + 3) \\)

\\( 3 \| 30k^2 + 84k + 57 \\)

\\( 3 \| 3(10k^2 + 28k + 9) \\) ∎

</div>
</ol>


### Algorithms <span class="marks">[ 9 marks ]</span>

<ol>
    <li> Simplify the following so that it is no longer uses sigma-notation: \( \sum_{i=1}^{n} (i + i^2 + 1) \) <span class="marks">[ 2 marks ]</span></li>
<div class="model-answer" markdown="1">
\\( \\sum_{i=1}^{n} (i + i^2 + 1) = \\sum_{i=1}^{n} i + \\sum_{i=1}^{n} i^2 + \\sum_{i=1}^{n} 1 \\) 

\\( = \\frac{n(n+1)}{2} + \\frac{n(n + 1)(2n+1)}{6} + n(1) \\)

\\( = \\frac{3n(n+1)}{6} + \\frac{n(n + 1)(2n+1)}{6} + \\frac{6n}{6} \\)

\\( = \\frac{ (n+1)(2n^2 + 4n) + 6n }{6} \\)

Or equivalent.
</div>
    <li> What is the order of the following function in Big-Oh notation? \( T(n) = n^3 + n \log n + n \) <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
\\( O(n^3) \\)
</div>
    <li>Put the following in order, slowest-growing first <span class="marks">[ 1 mark ]</span></li>
        <div class="model-answer">
        <ul>
            <li>\( O(1) \)</li>
            <li>\( O(\log n) \)</li>
            <li>\( O(n) \)</li>
            <li>\( O(n \log n) \)</li>
            <li>\( O(n^2) \)</li>
            <li>\( O(n!) \)</li>
        </ul>
        </div>
</ol>

Here is the pseudo code for an algorithm

    Function A(n):
        num := 0
        for (i = 1 to n)
            for (j = 1 to n)
                num := num + 1
            endfor
        endfor
    return num

<ol start="3">
    <li>Give the value \( A(10) \)? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
100
</div>
    <li>Write a function named <code>A</code> in a programming language that implements this algorithm. <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
    int A(int n)
    {
        int num = 0;
        for (int i=1;i<=n;i++)
            for (int j=1;j<=n;j++)
                num++;
        return num;
    }
</div>
    <li>Calculate the time function for the algorithm and express as a polynomial <span class="marks">[ 2 marks ]</span></li>
<div class="model-answer" markdown="1">
\\( \\sum_{i=1}^{n}  \\sum_{j=1}^{n} c \\)

\\( \\sum_{i=1}^{n}  nc \\)

\\( c(\\frac{n(n+1)}{2}) \\)
</div>
    <li>Give the time complexity of this time function <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
\\( (n^2) \\)
</div>
</ol>

## Part 2: Discrete Mathematics <span class="marks">[ 25 marks ]</span>

### Propositional Logic <span class="marks">[ 6 marks ]</span>

_De Morgan's Laws_ of propositional logic relate conjunction and disjunction.

<ol>
    <li>Prove by means of a truth table that: \( \neg (p \wedge q) \iff \neg p \vee \neg q \) <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">

| p | q | \\( \\neg (p \\wedge q) \\) | \\(\\neg p\\) | \\(\\neg q\\) | \\(\\neg p \\vee \\neg q \\) | \\(\\neg (p \\wedge q) \\iff \\neg p \\vee \\neg q \\) |
| - | - | ----------------- | ------ | ------ | ------------------ | ----------------------------------------- |
| T | T |  F  |  F | F | F | T |
| T | F |  T  |  F | T | T | T |
| F | T |  T  |  T | F | T | T |
| F | F |  T  |  T | T | T | T |

</div>
    <li>Prove by means of a truth table that: \( \neg (p \vee q) \iff \neg p \wedge \neg q \) <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">

| p | q | \\( \\neg (p \\vee q) \\) | \\(\\neg p\\) | \\(\\neg q\\) | \\( \\neg p \\wedge \\neg q \\) | \\(\\neg (p \\vee q) \\iff \\neg p \\wedge \\neg q \\) |
| - | - | ----------------- | ------ | ------ | ------------------ | ----------------------------------------- |
| T | T |  F  |  F | F | F | T |
| T | F |  F  |  F | T | F | T |
| F | T |  F  |  T | F | F | T |
| F | F |  T  |  T | T | T | T |

</div>
</ol>

_Modus Tollens_ is a rule of inference with the following form: "If P, then Q; and not Q; therefore, not P"

<ol start="3">
    <li>Express Modus Tollens as a statement of propositional logic. <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
\\( ( P \\implies Q \\wedge \\neg Q ) \\implies \\neg P \\)
</div>
    <li>Modus Ponens is another rule of inference that we saw in the lectures. Express Modus Ponens as a statement of propositional logic. <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
\\( ( P \\implies Q \\wedge P ) \\implies Q \\)
</div>
</ol>


<ol start="4">
    <li> In a sentence, and with reference to specific propositional logic operators explain why the proof of a contradiction in a foundational axiomatisation of mathematics is disasterous to its programme (assuming classical logic). <span class="marks">[ 2 marks ]</span></li>
</ol>
<div class="model-answer" markdown="1">
When the antecedant of an implication (\\( \implies \\)) is false, the consequent is vaccuously true. Therefore from a contradiction, you can prove that any statement is true.
</div>

### Set Theory <span class="marks">[ 9 marks ]</span>

Assume the domain is natural numbers (including 0). Given the sets

    A = { 1, 2, 3 }
    B = { 3, 4, 5, 6 }
    C = { n | n < 4 }
    D = { n | n ≡ 0 (mod 3)}

Give the extension of the following sets:

<ol>
    <li>\( A \cup B \) <span class="marks">[ 1 mark ]</span></li>
    <div class="model-answer">
    \( \{ 1, 2, 3, 4, 5, 6 \} \)
    </div>
    <li>\( B \cap C \) <span class="marks">[ 1 mark ]</span></li>
    <div class="model-answer">
    \( \{ 3 \} \)
    </div>
    <li>\( C \setminus D \) <span class="marks">[ 1 mark ]</span></li>
    <div class="model-answer">
    \( \{ 1, 2 \} \)
    </div>
    <li>\(\mathbb{P}(A) \) <span class="marks">[ 2 mark ]</span></li> 
    <div class="model-answer">
    \( \{ \{1, 2, 3 \}, \{1, 2 \}, \{1, 3\}, \{2, 3\}, \{1 \}, \{2\}, \{3 \}, \emptyset \} \)
    </div>
    <li>\(A \times C \) <span class="marks">[ 2 mark ]</span></li> 
    <div class="model-answer">
    \( \{ (1, 0), (1, 1), (1, 2), (1, 3), (2, 0), (2, 1), (2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3) \} \)
    </div>
    <li>\( \{ n : n \in \mathbb{Z}  \wedge (n < 5 \vee n > -2) \wedge \neg (n = 0) \} \) <span class="marks">[ 2 mark ]</span></li> 
    <div class="model-answer">
    \( \{ -1, 1, 2, 3, 4 \} \)
    </div>
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
    <div class="model-answer" markdown="1">
    In along top, out down side

    |    | n1 | n2 | n3 | n4 | n5 | n6 | n7 |
    | n1 |    | 1  | 2  | 1  |    |    |    |
    | n2 |    |    |    | 1  | 2  |  1 |    |
    | n3 | 1  |    |    |    |    |  1 |  2 |
    | n4 |    |    |    |    |    |    |    |
    | n5 |    |    |    |    |    |    |    |
    | n6 |    |    |    |    |    |    |    |
    | n7 |    |    |    |    |    |    |    |

    </div>
2. Write out a sequence of nodes of this graph that form a cycle. <span class="marks">[ 1 mark ]</span>
    <div class="model-answer" markdown="1">
    [n1, n3] or [n3, n1]
    </div>
3. Using set notation write out all the nodes of this graph with loops. <span class="marks">[ 1 mark ]</span>
    <div class="model-answer" markdown="1">
    \\( \\emptyset \\)
    </div>
4. What is the out-degree of node `n3`? <span class="marks">[ 1 mark ]</span>
    <div class="model-answer" markdown="1">
    4
    </div>
5. What is the maximum degree of this graph? <span class="marks">[ 1 mark ]</span>
    <div class="model-answer" markdown="1">
    6
    </div>


A graph \\( G = \\{ (v, e) : v \\in V \\wedge e \\in V \\times V \\} \\) is defined for some set \\( V \\).

<ol start="6">
    <li>Draw G for \( V = \{ n1, n2, n3 \} \) <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer">
<div id="graphmodel" style="display: block; width:100%; height:400px"></div>
</div>
    <li>Is G a connected graph? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
Yes
</div>
    <li>Is G a directed graph? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
Yes
</div>
    <li>Does G contain loops? <span class="marks">[ 1 mark ]</span></li>
<div class="model-answer" markdown="1">
Yes
</div>
</ol>


<script>
var cy = cytoscape({
    container: document.getElementById('graphmodel'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'e1', source: 'n1', target: 'n1' } },
        { data: { id: 'e2', source: 'n1', target: 'n2' } },
        { data: { id: 'e3', source: 'n1', target: 'n3' } },
        { data: { id: 'e4', source: 'n2', target: 'n1' } },
        { data: { id: 'e5', source: 'n2', target: 'n2' } },
        { data: { id: 'e7', source: 'n2', target: 'n3' } },
        { data: { id: 'e8', source: 'n3', target: 'n1' } },
        { data: { id: 'e9', source: 'n3', target: 'n2' } },
        { data: { id: 'e10', source: 'n3', target: 'n3' } },
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

---

This is the end of the assessment.