---
title: Structure of Language
permalink: /course/structure-of-language/
---

_In the next four videos I'm going to be talking - **at a very high level** - about how graphs can be used for working in different problem domains. Rather than focusing on formalism or definitions, I want to show you how graphs can be used. Hopefully this will help you use graphs to solve problems that you encounter._

In this video we'll be seeing how trees are used to model linguistic structure.

**Important:** You will not be tested on the problem domain! I do not expect you to learn about the structure of language. If this video is helpful to you, great! If not, don't worry about it!

## Seven-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/8nMIsEl87WU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/8nMIsEl87WU)

---

## Key Points

1. The structure of language can be represented as a **tree** of words and phrases.
2. This is helpful for understanding how language works, and also doing **natural langauge processing**.
3. A **tree** is a very common type of graph that starts from a root node and branches out at each node
4. Trees group nodes together into a heirarchical structure.
5. Each node in a **binary branching tree**  will have **at most 2** branches. In other words, each node has either 0, 1, or 2 children.

---

## Questions

### Check your understanding

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

Look at the graph and answer the questions below. You can manipulate the graph by dragging the nodes.

Graph 1:

<div id="graph1" style="display: inline-block; width:50%; height:200px"></div>

Graph 2:

<div id="graph2" style="display: inline-block; width:50%; height:200px"></div>

Graph 3:

<div id="graph3" style="display: inline-block; width:50%; height:200px"></div>

Graph 4:

<div id="graph4" style="display: inline-block; width:50%; height:200px"></div>

Which of these graphs are trees?

1. <input type="checkbox" id="q11" data-answer="true" /> <label for ="q11">Graph 1</label> <span id="q11c" style="display:inline-block"></span>
2. <input type="checkbox" id="q12" data-answer="false" /> <label for ="q12">Graph 2</label> <span id="q12c" style="display:inline-block"></span>
3. <input type="checkbox" id="q13" data-answer="true"/> <label for ="q13">Graph 3</label> <span id="q13c" style="display:inline-block"></span>
4. <input type="checkbox" id="q14" data-answer="true"/> <label for ="q14">Graph 4</label> <span id="q14c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1')">Check Answers</a>

Which of these graphs are binary branching trees?

1. <input type="checkbox" id="q21" data-answer="false" /> <label for ="q21">Graph 1</label> <span id="q21c" style="display:inline-block"></span>
2. <input type="checkbox" id="q22" data-answer="false" /> <label for ="q22">Graph 2</label> <span id="q22c" style="display:inline-block"></span>
3. <input type="checkbox" id="q23" data-answer="true"/> <label for ="q23">Graph 3</label> <span id="q23c" style="display:inline-block"></span>
4. <input type="checkbox" id="q24" data-answer="false"/> <label for ="q24">Graph 4</label> <span id="q24c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q2')">Check Answers</a>

Which of the following properties apply to all of the trees above?

<label for ="q31t">Cyclic</label> <input type="radio" name="q31" id="q31t" value="t"/> 
<label for ="q31f">Acyclic</label> <input type="radio" name="q31" id="q31f" data-answer value="f"/> <span id="q31c" style="display:inline-block"></span>

<label for ="q32t">Connected</label> <input type="radio" name="q32" id="q32t" data-answer value="t"/>
<label for ="q32f">Unconnected</label> <input type="radio" name="q32" id="q32f" value="f"/> <span id="q32c" style="display:inline-block"></span>

<label for ="q33t">Directed</label> <input type="radio" name="q33" id="q33t" value="t"/>
<label for ="q33f">Undirected</label> <input type="radio" name="q33" id="q33f" data-answer value="f"/> <span id="q33c" style="display:inline-block"></span>


<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

<script src="/assets/js/check.js"></script>

<script>
var cy = cytoscape({
    container: document.getElementById('graph1'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n1', target: 'n4' } },
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
        name: 'breadthfirst',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy.userPanningEnabled( false );
cy.minZoom(1);
cy.maxZoom(1);
var cy2 = cytoscape({
    container: document.getElementById('graph2'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n2', target: 'n3' } },
        { data: { id: 'e4', source: 'n1', target: 'n4' } },
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
        name: 'breadthfirst',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy2.userPanningEnabled( false );
cy2.minZoom(1);
cy2.maxZoom(1);
var cy3 = cytoscape({
    container: document.getElementById('graph3'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n3', target: 'n4' } },
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
        name: 'breadthfirst',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy3.userPanningEnabled( false );
cy3.minZoom(1);
cy3.maxZoom(1);
var cy4 = cytoscape({
    container: document.getElementById('graph4'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'n5' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n3', target: 'n4' } },
        { data: { id: 'e4', source: 'n3', target: 'n5' } },
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
        name: 'breadthfirst',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy4.userPanningEnabled( false );
cy4.minZoom(1);
cy4.maxZoom(1);
</script>

---

## Summary

In this section we have seen how language is structured like a tree, which is a kind of graph.

* You should be able to identify and draw a tree
* You should know that trees are a tool of analysis and problem solving in many domains

In the next section we are going to see another application of graphs, this time to [game AI](../search-trees).