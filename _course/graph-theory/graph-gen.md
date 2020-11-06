---
title: Graph Question Generator
permalink: /course/graph-gen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

<script src="/assets/proofparty.js"></script>

This tool generates graphs, with questions that check your answers! I've only implemented the stuff that was easy for me to check. So don't forget to also ask yourself the questions:

1. Is this graph connected?
2. Is this graph a tree?
3. Do I like this graph?
4. What would a adjacency matrix look like for this graph?
5. If this graph was an animal, which animal would it be?

You can click and drag the nodes around to get a better view. This might be necessary because sometimes it generates extraordinarily messy graphs!

<div id="ex1" style="display: block; width:100%; height:400px"></div>
<br />
<a class="btn btn-primary" type="submit" onClick="generateGraphQuestions('ex1')">Generate</a>

<label for ="q11t">Contains Loops</label> <input type="radio" name="q11" id="q11t" value="t"/> 
<label for ="q11f">Don't contain loops</label> <input type="radio" name="q11" id="q11f" value="f"/> <span id="q11c" style="display:inline-block"></span>

<label for ="q12t">Directed</label> <input type="radio" name="q12" id="q12t" value="t"/>
<label for ="q12f">Undirected</label> <input type="radio" name="q12" id="q12f" value="f"/> <span id="q12c" style="display:inline-block"></span>

2. <label for ="q21"> What is the degree of node <code><span id="nodename"></span></code>?</label> <input type="text" id="q21"> <span id="q21c" style="display:inline-block"></span>
3. <label for ="q22"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q22"/><span id="q22c" style="display:inline-block"></span>
4. <label for ="q23"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q23"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2')">Check Answers</a>
<script src="/assets/check.js"></script>

<script>
generateGraphQuestions = function(target)
{
    let g = proofparty.graph(target);
    let node = Math.floor(Math.random() * g.degree.length)
    document.getElementById("nodename").innerHTML = "n"+node;
    document.getElementById("q21").dataset.answer = g.degree[node];
    document.getElementById("q22").dataset.answer = g.maxdegree;
    document.getElementById("q23").dataset.answer = g.mindegree;
    if (g.containsLoops)
    {
        document.getElementById("q11t").dataset.answer = true;
        delete document.getElementById("q11f").dataset.answer;
    }
    else
    {
        delete document.getElementById("q11t").dataset.answer;
        document.getElementById("q11f").dataset.answer = true;
    }

    if (g.directed)
    {
        document.getElementById("q12t").dataset.answer = true;
        delete document.getElementById("q12f").dataset.answer;
    }
    else
    {
        delete document.getElementById("q12t").dataset.answer;
        document.getElementById("q12f").dataset.answer = true;
    }
}
generateGraphQuestions('ex1')
</script>