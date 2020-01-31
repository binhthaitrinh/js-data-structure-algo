const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.list[v1].push({
      node: v2,
      weight: weight
    });

    this.list[v2].push({
      node: v1,
      weight
    });
  }

  // shortestPath(start, end) {
  //   var distances = {};
  //   var queue = new PriorityQueue();
  //   var previous = {};
  //   let smallest;
  //   let path = [];

  //   // build up initial state
  //   for (let vertex in this.list) {
  //     if (vertex === start) {
  //       distances[vertex] = 0;
  //     } else {
  //       distances[vertex] = Infinity;
  //       // queue.enqueue(vertex, Infinity);
  //     }

  //     previous[vertex] = null;
  //   }

  //   queue.enqueue(start, 0);

  //   // as long there is something to visit
  //   while (queue.values.length) {
  //     smallest = queue.dequeue().val;
  //     if (smallest === end) {
  //       while (previous[smallest]) {
  //         path.push(smallest);
  //         smallest = previous[smallest];
  //       }

  //       break;
  //     }

  //     if (smallest) {
  //       for (let neighbor in this.list[smallest]) {
  //         let nextNode = this.list[smallest][neighbor];

  //         // calculate new distance to neeighboring node
  //         let candidate = distances[smallest] + nextNode.weight;
  //         let nextNeighbor = nextNode.node;
  //         if (candidate < distances[nextNeighbor]) {
  //           distances[nextNeighbor] = candidate;
  //           previous[nextNeighbor] = smallest;
  //           queue.enqueue(nextNeighbor, candidate);
  //         }
  //       }
  //     }
  //   }
  //   console.log(distances[end]);
  //   return path.concat(smallest).reverse();

  //   // for (let key in distances) {
  //   //   distances[key] = Infinity;
  //   // }
  //   // distances[start] = 0;
  //   // for (let key in distances) {
  //   //   queue.enqueue(key, distances[key]);
  //   //   previous[key] = null;
  //   // }

  //   // while (!queue.length === 0) {
  //   //   let current = queue.dequeue();
  //   //   if (current.key === end) {
  //   //     break;
  //   //   } else {
  //   //     this.list[current].forEach(neighbor => {
  //   //       let dist =
  //   //     });
  //   //   }
  //   // }

  //   // queue;
  // }

  /**
   * Dijkstra algo to finnd shortest path from start to end
   * @param {char} start starting vertex
   * @param {char} end end vertex
   */
  shortest(start, end) {
    var queue = new PriorityQueue();
    var distances = {};
    var previous = {};
    var current = null;
    var path = [];

    // initialize values
    for (let vertex in this.list) {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }

      previous[vertex] = null;
    }

    queue.enqueue(start, 0);

    while (queue.values.length) {
      current = queue.dequeue().val;

      if (current === end) {
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
        break;
      }

      if (current) {
        for (let neighbor in this.list[current]) {
          let neighborNode = this.list[current][neighbor];

          let distance = distances[current] + neighborNode.weight;

          if (distance < distances[neighborNode.node]) {
            distances[neighborNode.node] = distance;
            previous[neighborNode.node] = current;
            queue.enqueue(neighborNode.node, neighborNode.weight);
          }
        }
      }
    }

    return path.concat(start).reverse();
  }
}

var g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('C', 'D', 2);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'F', 4);
g.addEdge('E', 'F', 1);
console.log(g.shortest('A', 'E'));
console.log(g.shortest('A', 'D'));
