---
title: Assessment 2
permalink: /course/assessment2/
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

This is the second of two assessments for this course. 

In this assessment you will work on your own to demonstrate your understanding of the mathematical topics taught in this course. You will do this through a combination of solving mathematical problems, and implementing mathematical operations in a programming language.

### Learning Outcomes

Your performance in this coursework will be assessed on the following Module Learning outcomes:

1. Understand and use basic mathematical terminology.
2. Comprehend the basic mathematical concepts that relate to Computer Science
3. Apply mathematical concepts to Computer Science problem solving
4. Understand the mathematical underpinning of Computer Science and be able to identify these

### Submission and deadline

The coursework must be submitted by 12:00pm (noon) **Monday 11 January 2021**. The submission is via the module's Moodle page. The submission point can be found under the 'Assessment' heading.

### Acceptable Submission Formats

Submissions should be in the form of a `.zip` archive containing two files:

1. A PDF containing the answers to all written questions, including graphs. 
2. A folder named `stats` containing all program code for the section "Statistics Program".
3. A folder named `probability` containing all code written for the  "Probability" (if applicable)

You may use Java or Python, though template code is only provided for Java. Other programming languages may only be used with prior agreement with the course tutor.

If you have written code to help you reach an answer for one of the written questions, you must reference it in your written answer, including:

1. The file name and function name from your code submission
2. Any arguments you passed to the function
3. What the function returned or printed to console.
4. A brief summary or comments in the code explaining what it does.

Only code in the correctly named functions (as given in the question), or referenced in your written answers will be marked.

Please check your final submission to ensure that the formatting of any mathematical symbols is correct. Where appropriate handwritten submissions are acceptable, though these should be scanned and converted into PDF files. Image formats such as `.jpeg`, `.png` etc are not acceptable submission formats for such coursework.

### Marking

This coursework has a total of 40 marks available.

1. The first and only part, Statistics, is worth 40 marks.

This coursework is worth 40% of the total mark for the module.

## Part 1: Statistics <span class="marks">[ 40 marks ]</span>

### Statistics Program <span class="marks">[ 16 marks ]</span>

**Background:** Rather than doing statistics calculations by hand it is very common to use a program designed to do them automatically. However, they are complex and it is important to understand what they are doing 'under the hood' in order to avoid making mistakes in your analysis.

**Task:** You will write a simple statisitcal analysis program that performs an appropriate hypothesis test given a user's input. A basic user interface has been written that asks the user a series of questions. The answers to these questions are passed to the following function. For more details of the questions the arguments relate to, examine `public static void main(String[] args)` in `Main.java`.

        /**
        * @param groups - the number of groups in the study = 1 or 2
        * @param popSD - population standard deviation for a one-group study, if known, else -1
        * @param comparisonValue - value to compare mean against in one-group study, else -1 for a two-group study
        * @param group1Values - numeric values for group 1
        * @param group1Values - numeric values for group 2, if a two-group study, else null
        * @param design - for two-group studies 1 = within groups, 2 = between groups, else -1 for a one-group study
        */
        public static void run(int groups,
                               double popSD,
                               double comparisonValue,
                               double[] group1Values,
                               double[] group2Values,
                               int design)

The content of this function will be marked. Other functions or classes _referenced in this function_ will be marked. The content of `public static void main(String[] args)` will not be marked (you can replace it with other code if you wish, for example to speed up testing your code). 

Assume all hypothesis tests are two-tailed.

1. Select an appropriate statistical test to use for every valid input the user could give
2. Determine whether the result was significant, calculating required intermediary variables
3. Report the following information to the user:
    1. A summary of the options that were selected by the user <span class="marks">[ 1 mark ]</span>
    2. A summary of each group's data, including: <span class="marks">[ 3 marks ]</span>
        1. Count
        2. Mean
        3. Median, upper and lower quartiles
        4. Standard deviation
    3. Statistical test used <span class="marks">[ 2 marks ]</span>
    4. Test statistic <span class="marks">[ 2 marks ]</span>
    5. Degrees of freedom (if appropriate) <span class="marks">[ 2 marks ]</span>
    8. Whether or not the result is significant at \\( \\alpha = 0.05 \\) <span class="marks">[ 3 marks ]</span>
    9. An appropriate measure of effect size <span class="marks">[ 2 marks ]</span>
    10. Whether that effect size is small, medium or large according to conventional thresholds <span class="marks">[ 1 mark ]</span>

You may also report to the user any other information or justification for the choices made by the program if you feel it would be assist in the interpretation of the results. 

You may find [this table of z scores](https://www.sjsu.edu/faculty/gerstman/StatPrimer/z-two-tails.pdf) and [this table of t scores](https://t-tables.net/) helpful. In determining the critical threshold for a t score, you may restrict yourself to the degrees of freedom shown in the linked table. To perform a test with 35 degrees of freedom, for example, round down to 30, (which is shown in the table) to find the critical threshold for the test.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSAssessment2Template?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Hypothesis Test <span class="marks">[ 10 marks ]</span>

**Background:** Binaural audio is audio that it captures the spacial position of sound sources relative to the listener in the same way that the human ear is able to spacially locate sources of sound. It is now commonly available in AAA video games. Binaural audio can be recorded using a special binaural microphone or created in-game using digital signal processing techniques. Because of this it is hypothesised that it will improve immersion in Virtual Reality (VR) games.

An experiment was run to test the hypothesis that the use of binaural audio improves immersion in VR games compared to sterio audio. 30 adults were recruited using an opportunity sample from a university campus. Each participant filled in a consent form and questionnaire, then played a VR game for 30 minutes while listening to the game audio through headphones. Half (15) of the participants were assigned to a condition with binaural audio. The remaining participants were assigned to a control condnition with sterio audio. Afterwards all participants filled in the Immersive Experience Questionnaire (IEQ).

[The full data is available here](/assets/assessment/binaural-experiment-data.csv)

Three hypothesis tests will be performed. It is expected that Real-World Dissociation and Emotional Involvement (components of the IEQ) will be most affected by binaural audio, therefore, the tests will be:

1. the effect of binaural audio on total immersion score
2. the effect of binaural audio on Real-World Dissociation
3. the effect of binaural audio on Emotional Involvement

The overall alpha level of the experiment will be 0.05.

**Task:** You will test the hypothesis that binaural audio will affect total immersion score using a two-tailed test.

You may calculate the following by hand, or by using a statistics program or online calculator (including, for example, the one you have written for the question above).

Report the following:

1. Appropriate statistical test to use, including formula <span class="marks">[ 1 mark ]</span>
2. Test statistic <span class="marks">[ 1 mark ]</span>
3. Degrees of freedom <span class="marks">[ 1 mark ]</span>
4. Alpha level of test <span class="marks">[ 1 mark ]</span>
5. P value <span class="marks">[ 1 mark ]</span>
6. Whether or not result is significant <span class="marks">[ 1 mark ]</span>
7. Effect Size <span class="marks">[ 1 mark ]</span>

Produce the following graphs:

1. Visualise this hypothesis test with an appropriate graph <span class="marks">[ 1 mark ]</span>
2. Visualise the proportion of participants' gender with an appropriate graph <span class="marks">[ 1 mark ]</span>
3. Visualise the distributions of participants' age with an appropriate graph <span class="marks">[ 1 mark ]</span>

### Probability  <span class="marks">[ 14 marks ]</span>

**Background:** Suppose I am designing a game. It is a 2 player game where opponents summon creatures and battle them against each other. I call it _Poké-oh the Gathering_. To aid the design of this game, I want to analyse certain probabilities. A summary of some of the game rules is as follows:

Each player has a **deck** of cards. Each deck contains 40 cards. A **card** has three properties: **type**, **cost**, and **strength**. Each player also has a number of **coin** tokens, starting with 3. Play proceeds clockwise from the first player. On a turn you may play a card (if you can) to the **BattleSpace**. If you have cards in the BattleSpace at the start of your turn, there are other actions you may take (not relevant here). To play a card to the BattleSpace you must have enough coins (coins are not expended by playing cards). 

A the beginning of the game, each player draws a **hand** of 5 cards from their deck. The order of cards in the hand does not matter. Then the first player takes their turn.

[A table listing all of the cards in each deck can be found here](/assets/assessment/game-cards.csv)

**Task:** Answer the following questions. To do so you may use an analytical approach and/or write a program to help you approximate an answer accurate within 2 decimal places. Either way, you must show your working (either stages of reasoning, or program code) to get the full marks.

1. I draw a single card from a full deck of cards. I am interested in the event \\( D_F \\) of drawing a fire-type card and the event \\( D_3+ \\) of drawing a card of strength at least 3. <span class="marks">[ 1 mark ]</span>
    1. Illustrate these events with a venn diagram.
    2. What is \\( P(D_F \\cap D_3+) \\)?

2. In the game described above, how many different starting hands could be drawn? <span class="marks">[ 1 mark ]</span>

3. What is the probability that a player is not able to play a card on their first turn?  <span class="marks">[ 2 marks ]</span>

I am interested in the strategies players use. Looking at player data, I see that 50% of players first play the highest-strength card they can. The remaining 50% play a card at random.

1. A player intends to play the strongest card they can on their first turn. What is the liklihood that they play a card with a strength if 1? <span class="marks">[ 2 marks ]</span>

2. A player intends to play a random card on their first turn. What is the liklihood they play a card with a strength of 2? <span class="marks">[ 2 marks ]</span>

3. Visualise the following combinations of events with the aid of a probability tree and give their probabilities: <span class="marks">[ 1 mark ]</span>
    1. They used the random strategy and played a 1
    2. They used the highest-card strategy and played a 1

4. Your opponent plays a 1. What is the probability that they used the highest-card strategy? <span class="marks">[ 2 marks ]</span>

After analysing play data, I notice another common strategy. Water and ice cards combine well together, however water cards on their own tend not to be very effective. If a player has a ice card in their starting hand, they first play a water card 1/2 of the time. If they don't have an ice card in their starting hand they first play a water card only 1/8 of the time.

5. A player plays water on their first turn. What is the probability they have a ice card in their hand? <span class="marks">[ 3 marks ]</span>

---

This is the end of the assessment.