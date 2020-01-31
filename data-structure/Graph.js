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

  dfsRecursive(start) {
    var results = [];
    var visited = {};
    const list = this.list;

    (function helper(vertex) {
      if (!vertex) {
        return null;
      }
      results.push(vertex);
      visited[vertex] = true;
      list[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      });
    })(start);

    return results;
  }

  dfsIterative(start) {
    var stack = [];
    var result = [];
    var visited = {};
    stack.push(start);
    while (stack.length !== 0) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        this.list[vertex].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }

    return result;
  }

  bfs(start) {
    var queue = [];
    var result = [];
    var visited = {};
    queue.push(start);
    visited[start] = true;
    var current;
    while (queue.length !== 0) {
      current = queue.shift();
      result.push(current);

      this.list[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.bfs('A'));
