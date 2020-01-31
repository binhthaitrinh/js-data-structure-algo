class PriorityQueue {
  constructor() {
    this.values = [];
  }

  dequeue() {
    var removed;
    if (this.length === 1) {
      removed = this.values.pop();
      return removed;
    }

    this.swap(0, this.values.length - 1);
    removed = this.values.pop();

    this.bubbleDown();

    return removed;
  }

  bubbleDown() {
    var index = 0;
    var length = this.values.length;
    var element = this.values[0];

    while (true) {
      var leftChildIdx = 2 * index + 1;
      var rightChildIdx = 2 * index + 2;
      var leftChild, rightChild;
      var swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });

    this.bubbleUp();
  }

  bubbleUp() {
    var index = this.values.length - 1;
    var element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  swap(idx1, idx2) {
    var temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

var queue = new PriorityQueue();
queue.enqueue('A', 41);
queue.enqueue('A', 39);
queue.enqueue('A', 33);
queue.enqueue('A', 18);
queue.enqueue('A', 27);
queue.enqueue('A', 12);
queue.enqueue('A', 55);
console.log(queue.values);

module.exports = PriorityQueue;
