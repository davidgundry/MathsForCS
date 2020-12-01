---
title: Graphs
permalink: /course/graphs/
---

What is a **graph**? A graph is a set of **vertices** (or nodes) joined by **edges**. Graphs are used as a simple way of thinking about more complex real-world systems such as road networks. By simplifying down to mathematical concepts we can find general solutions to all sorts of problems!

Watch the video and then answer the questions below.

## Ten-minute video

<iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/Saq-hs5PYbk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also view this video [on YouTube](https://youtu.be/Saq-hs5PYbk)


---

## Key Points

1. A **graph** (G) includes a set of **vertices** (V) and a set of **edges** (E)
2. We can represent all sorts of things as graphs: game levels, road networks, social networks, computer networks...
4. A graph is **connected** if there is a path from every point to every other point
5. A graph is **cyclic** if there are some paths that get you back where you started
6. The **degree** of a **node** is the number of edges coming from that node.
7. The **maximum degree** (`Δ(G)`) of a graph `G` is the highest degree of any node in the graph
8. The **minimum degree** (`δ(G)`) of a graph `G` is the smallest degree of any node in the graph
9. A **loop** is an edge that joins a node to itself

---

## Graphs in Java

There is no inbuilt implementation of a graph in Java. There is too much variation in how you might want to use a graph for that to be useful. So you need to make your own to suit your specific purposes.

---

<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.16.2/cytoscape.min.js" integrity="sha512-90CUvhfbtRMgSr2cvzgYyGchUg2CtOHMavYdm03huN42UAjWtKhHBsQ+H7K4KGJ4MeS0P9FiZZwC7lxnIl6isg==" crossorigin="anonymous"></script>

### Adjacency Matrixes

An Adjacency matrix is a way of representing the number of connections between different nodes. For example, the adjacency matrix for the folowing graph is given below:

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
| n2 | 1 |    | 1  |   |
| n3 | 1 | 1  |    |    |
| n4 |   |  |    |    |


---



## Questions

### 1. Check your knowledge

##### 1. Graph 1

Look at the graph and answer the questions below. You can manipulate the graph by dragging the nodes.

<div id="graph1" style="display: block; width:100%; height:400px"></div>

<script>
var cy = cytoscape({
    container: document.getElementById('graph1'), // container to render in

    elements: [ // list of graph elements to start with
        { // node a
        data: { id: 'n1' }
        },
        { // node b
        data: { id: 'n2' }
        },
        { // node b
        data: { id: 'n3' }
        },
        { // node b
        data: { id: 'n4' }
        },
        { // edge ab
        data: { id: '12', source: 'n1', target: 'n2' }
        },
        { // edge 
        data: { id: '23', source: 'n2', target: 'n3' }
        },
        { // edge 
        data: { id: '34', source: 'n3', target: 'n4' }
        },
        { // edge 
        data: { id: '24', source: 'n2', target: 'n4' }
        }
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
        name: 'cose',
        animate: false,
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

2. <label for ="q21"> What is the degree of node `n3`?</label> <input type="text" id="q21" data-answer="2"/> <span id="q21c" style="display:inline-block"></span>
3. <label for ="q22"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q22" data-answer="3"/><span id="q22c" style="display:inline-block"></span>
4. <label for ="q23"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q23" data-answer="1"/> <span id="q23c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q1','q2')">Check Answers</a>
<script src="/assets/js/check.js"></script>

##### 2. Graph 2

Look at the graph and answer the questions below

<div id="graph2" style="display: block; width:100%; height:400px"></div>

<script>
var cy2 = cytoscape({
    container: document.getElementById('graph2'), // container to render in

    elements: [ // list of graph elements to start with
        { data: { id: 'n1' } },
        { data: { id: 'n2' } },
        { data: { id: 'n3' } },
        { data: { id: 'n4' } },
        { data: { id: 'n5' } },
        { data: { id: 'n6' } },
        { data: { id: 'n7' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n2', target: 'n3' } },
        { data: { id: 'e3', source: 'n3', target: 'n4' } },
        { data: { id: 'e4', source: 'n4', target: 'n5' } },
        { data: { id: 'e5', source: 'n6', target: 'n7' } },
        { data: { id: 'e7', source: 'n1', target: 'n3' } },
        { data: { id: 'e8', source: 'n2', target: 'n4' } },
        { data: { id: 'e9', source: 'n1', target: 'n5' } },
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
cy2.userPanningEnabled( false );
cy2.minZoom(1);
cy2.maxZoom(1);
</script>

<label for ="q51t">Cyclic</label> <input type="radio" name="q51" id="q51t" data-answer value="t"/>
<label for ="q51f">Acyclic</label> <input type="radio" name="q51" id="q51f" value="f"/> <span id="q51c" style="display:inline-block"></span>

<label for ="q52t">Connected</label> <input type="radio" name="q52" id="q52t" value="t"/>
<label for ="q52f">Unconnected</label> <input type="radio" name="q52" id="q52f" data-answer value="f"/> <span id="q52c" style="display:inline-block"></span>

2. <label for ="q61"> What is the degree of node `n3`?</label> <input type="text" id="q61" data-answer="3"/>  <span id="q61c" style="display:inline-block"></span>
3. <label for ="q62"> What is the maximum degree `Δ(G)` of the graph?</label> <input type="text" id="q62" data-answer="3"/> <span id="q62c" style="display:inline-block"></span>
4. <label for ="q63"> What is the minimum degree `δ(G)`of the graph?</label> <input type="text" id="q63" data-answer="1"/> <span id="q63c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q5','q6')">Check Answers</a>

##### 3. Degree

Let `G` be a graph, with vertexes of degree `2,3,2,0,1,2`. Is `G` a connected graph?

<label for ="q3t">Yes</label> <input type="radio" name="q3" id="q3t" value="t"/>
<label for ="q3f">No</label> <input type="radio" name="q3" id="q3f" data-answer value="f"/> <span id="q3c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q3')">Check Answers</a>

##### 4. Adjacency Matrix

Look at the following adjacency matrix for a graph.

|    | n1 | n2 | n3 | n4 |
|----|---|----|----|----|
| n1 |   |    | 1  |    |
| n2 |   |    | 1  |  1 |
| n3 | 1 | 1  |    |    |
| n4 |   | 1  |    |    |

1. <label for ="q41">What is the degree of node n2?</label> <input type="text" id="q41" data-answer="2"/> <span id="q41c" style="display:inline-block"></span>
2. <label for ="q42">What is the degree of node n3?</label> <input type="text" id="q42" data-answer="2"/> <span id="q42c" style="display:inline-block"></span>
3. <label for ="q43">What is the degree of node n4?</label> <input type="text" id="q43" data-answer="1"/> <span id="q43c" style="display:inline-block"></span>

<a class="btn btn-primary" type="submit" onClick="checkAnswers('q4')">Check Answers</a>

---

## Summary

In this section we have learned about graphs. In the [next section](../directed-graphs/) we will discover what happens when you make edges only one-way. You get a **directed graph**.