---
title: Directed Graphs
permalink: /course/directed-graphs/
---

Sometimes connections in a graph are one-way: imagine roads in a one-way system. Such a graph is called a directed graph. We will learn about directed graphs and different ways of formalising graphs.

Watch the video and then answer the questions below.

## Eight-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Wh7KbxV2FrE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Wh7KbxV2FrE)

---

## Key Points

1. Graphs can be **directed** or **undirected**.
2. A **directed graph** has edges that only go one way. Edges in an **undirected graph** go both ways
3. Edges can be written as an ordered tuple `<n1,n2>`, where `n1` is the source node, and `n2` is the destination node.

---

## In-degree and Out-degree

While in a directed graph the **degree** of a node is still how many edges connect to it, there are also two more related concepts:

* **In-degree** - the number of edges that go _to_ this node
* **Out-degree** - the number of edges that go _from_ this node

Adjacency matrices for directed graphs  see the example below (in-edges along top, out-edges down the side):

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

<div id="ex1" style="display: block; width:100%; height:400px"></div>

<script>
var cy = cytoscape({
    container: document.getElementById('ex1'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n3' } },
        { data: { id: 'e3', source: 'n2', target: 'n3' } },
        { data: { id: 'e4', source: 'n4', target: 'n4' } },
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
        name: 'circle',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy.userPanningEnabled( false );
cy.minZoom(1);
cy.maxZoom(1);
</script>

|    | n1 | n2 | n3 | n4 |
|----|---|----|----|----|
| n1 |   | 1  | 1  |    |
| n2 |   |    | 1  |    |
| n3 |   |    |    |    |
| n4 |   |    |    | 1  |

---

## Questions

### 1. Check your knowledge

##### 1. Graph 1

Look at the graph and answer the questions below

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
        { data: { id: 'e7', source: 'n3', target: 'n7' } }
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
        name: 'breadthfirst',
        fit: true, // whether to fit the viewport to the graph
        padding: 0, // the padding on fit
    }
});
cy.userPanningEnabled( false );
cy.minZoom(1);
cy.maxZoom(1);
</script>

<label for ="q11t">Cyclic</label> <input type="radio" name="q11" id="q11t" data-answer value="t"/> 
<label for ="q11f">Acyclic</label> <input type="radio" name="q11" id="q11f" value="f"/> <span id="q11c" style="display:inline-block"></span>

<label for ="q12t">Connected</label> <input type="radio" name="q12" id="q12t" data-answer value="t"/>
<label for ="q12f">Unconnected</label> <input type="radio" name="q12" id="q12f" value="f"/> <span id="q12c" style="display:inline-block"></span>

<label for ="q13t">Directed</label> <input type="radio" name="q13" id="q13t" data-answer value="t"/>
<label for ="q13f">Undirected</label> <input type="radio" name="q13" id="q13f" value="f"/> <span id="q13c" style="display:inline-block"></span>

2. <label for ="q21"> What is the degree of node `n3`?</label> <input type="text" id="q21" data-answer="2"/> <span id="q21c" style="display:inline-block"></span>
3. <label for ="q22"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q22" data-answer="2"/><span id="q22c" style="display:inline-block"></span>
4. <label for ="q23"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q23" data-answer="1"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2')">Check Answers</a>

<script src="/assets/js/check.js"></script>

##### 2. Adjacency Matrix

Look at the following adjacency matrix for a directed graph: 'to' nodes are along the top, 'from' nodes are down the side.

|    | n1 | n2 | n3 | n4 |
|----|---|----|----|----|
| n1 |   | 1  | 1  |    |
| n2 |   |    |    |  1 |
| n3 | 1 |    |    |    |
| n4 |   | 1  |    |  1 |

1. <label for ="q41">What is the degree of node n2?</label> <input type="text" id="q41" data-answer="2"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">What is the degree of node n3?</label> <input type="text" id="q42" data-answer="2"/> <span id="q42c" style="display:inline-block"></span>
3. <label for ="q43">A loop is where a vertex connects to itself. There is a loop in this graph. On which node?</label> <input type="text" id="q43" data-answer="n4"/> <span id="q43c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

---

## Summary

In this section we have learned about directed graphs.

* You should know what it means for a graph to be directed.
* You should be able to recognise and create directed and undirected graphs

In the next section we are going to see an application of graphs to the study of [language](../structure-of-language).
