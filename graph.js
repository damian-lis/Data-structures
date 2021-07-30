// Directed graph - INSTAGRAM (by following)
// Undericted graph - FACEBOOK (friends)
// Weighted graph - consist a different amount of data, for example the distance between two nodes
// Cycle edge points to same node

// Ways of of graph presents:
// - matrix,
// - adjacency list (each element has an array of connection element) -> good for memory <-

// Ways of traverse graph:
// - depth-first search (through each branch by recurring fm)
// - breadth-first search (going sequentially left, right children)

// Example graph(undirected, not weighted, no cycles):

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Its our graph:
const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
  //   Undericted graph so has connection between each other
}

// Upper we created an API to handle out adjacencyList

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// We want to search through this graph

// First fn is breadth first search:

// 1. We must search somewhere -> queue
// 2. queue start with index node (start as argument)
// 3. In this search way we visit all children (one by one going down) -> we count by layers (we represent it like a queue - FIFO).
// 4. We remove first item in array by shit (FIFO rule)

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`BFS found Bangkok!`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

// Second fn is depth first search:

// Here we use recursive fn which will be call itself until end point will be reach
// We dont want to visit the same node multiple times so we created new Set

function dfs(start, visited = new Set()) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok!`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
