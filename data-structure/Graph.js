/**
 * Undirected Graph represented by Adjacency List
 */
class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.list[v1] || !this.list[v2]) {
      return undefined;
    }

    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.list[v1] = this.list[v1].filter(v => v !== v2);
    this.list[v2] = this.list[v2].filter(v => v !== v1);
  }

  removeVertex(v1) {
    this.list[v1].forEach(neighbor => {
      this.removeEdge(v1, neighbor);
    });

    delete this.list[v1];
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'San Francisco');
g.addEdge('Tokyo', 'Aspen');

g.removeVertex('Tokyo');
console.log(g);
