---
title: Challenges
permalink: /course/graph-challenges/
---

We will be working on these challenges in the lab session for this topic.

You do not have to complete these in advance. However you may choose to get started on them in advance if you wish. You still need to attend the lab even if you have completed the challenges! If you do not complete them in the lab it is recommended that you finish them in your own time.

If you want to revise your understanding of graphs, use the [graph question generator](../graph-gen).

## Vacuum cleaner agent

Adapted from Russel and Norvig, _Artificial Intelligence, a Modern Approach_.

Put yourself in the mind of a autonomous vaccum cleaner. Your world that consists only of two squares of carpet, a left square and a right square. Both squares of carpet have dirt on them. Life sucks.

![Vaccum cleaner world](/assets/vaccum.png)

But wait! You're an autonomous vaccum cleaner! You control your own destiny! You can perform the following actions: **Left**, **Right** (move left or right between the cells), **Suck** (remove the dirt from a cell), and **NoOp** (no operation / do nothing). If you move left in the left cell, you remain in the left cell. If you move right in the right cell, you remain in the right cell.

### Task 1

Draw a graph to show all possible states of the gridworld. Think:

1. What constitutes a state of the world?
2. What constitutes an action?
3. What will each node represent?
4. What will each edge represent?
5. Are the edges directed or undirected?
6. Will there be any loops?

### Task 2

Unforunately, you don't know where you are in this gridworld. Nor can you see if there is dirt in your cell as you don't have any sensing actions. Still, you don't want to spend your life living in dirt. 

Using your graph to help you, come up with a minimial plan, the shortest sequence of actions you can take that will guarantee that your gridworld is clean, given that you don't know what the state of the world is when you start.

## The Underground

[Find a map of the London underground with walking times](https://tfl.gov.uk/cdn/static/cms/documents/walking-tube-map.pdf).

1. Is this map a graph?
2. What do the nodes represent?
3. What do the edges represent?
2. Does the graph contain cycles?
3. Does the graph contain loops?
4. Is this a directed graph?
5. What is the minimum degree of the graph?
6. Take a guess at the maximum degree of the graph.

Assume that the walking times shown on the map correlate with the distance between stations.

Work out the shortest route from Euston Square (top right of the Circle Line, near King's Cross) to Westminster (Bottom centre of the Circle Line, by the river).

## Implementing a graph

Because of the variation possible in implementing a graph, it's unlikely you will find graphs built in to any programming language. That means you will need to write them yourself if you need them. And because graphs are so useful, you almost certainly will.

I've implemented a graph in Java for you to work with. It has three classes: `Graph`, `Node` and `Edge`.

<iframe height="400px" width="100%" src="https://repl.it/@davidgundry/MathsForCSGraphTheoryChallenge?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Task 1

Construct a graph using `new Graph()`.

Use the `addNode(String s)` method to add nodes to this graph. Then, with the Node objects returned by this method, use the `addEdge(Node source, Node target)` method to add edges to the graph.

You can print the graph using `System.out.println()`.

Create a graph for the following:


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
        { data: { id: 'n5' } },
        { data: { id: 'n6' } },
        { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { data: { id: 'e2', source: 'n1', target: 'n4' } },
        { data: { id: 'e3', source: 'n2', target: 'n4' } },
        { data: { id: 'e4', source: 'n3', target: 'n3' } },
        { data: { id: 'e5', source: 'n5', target: 'n5' } },
        { data: { id: 'e6', source: 'n5', target: 'n6' } },
        { data: { id: 'e7', source: 'n2', target: 'n3' } },
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

### Task 2

Complete the functions `inDegree()` and `outDegree()` in the `Node` class.

### Task 3

Complete the functions `maximumDegree()` and `minimumDegree()` in the `Graph` class.

### Task 4

An adjacency matrix is a table that shows the number of edges joining each pair of nodes. [Look here in the lecture notes](../graphs). An adjacency matrix might look like this:

|    | n1 | n2 | n3 | n4 |
|----|---|----|----|----|
| n1 |   | 1  | 1  |    |
| n2 | 1 |    | 1  |    |
| n3 | 1 | 1  |    |    |
| n4 |   |    |    |    |

If the graph is directed, the in-node for the edge is written along the top, and out-node for the edge is written down the side.

Complete the function `printAdjacencyMatrix()` in the `Graph` class.


