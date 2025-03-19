### Queue Data Structure in TypeScript

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios where order matters, such as task scheduling, breadth-first search (BFS) algorithms, and handling requests in web servers.

---

### Basic Operations on a Queue

1. **Enqueue**: Adds an element to the end of the queue.
2. **Dequeue**: Removes and returns the element at the front of the queue.
3. **Peek/Front**: Returns the element at the front of the queue without removing it.
4. **IsEmpty**: Checks if the queue is empty.
5. **Size**: Returns the number of elements in the queue.

---

### Implementing a Queue in TypeScript

Below is a TypeScript implementation of a queue using an array:

```typescript
class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Dequeue: Remove and return the element at the front of the queue
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Peek: Return the element at the front of the queue without removing it
  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.items.length;
  }

  // Print the queue (for debugging purposes)
  print(): void {
    console.log(this.items);
  }
}

// Example usage
const queue = new Queue<number>();

queue.enqueue(10); // Queue: [10]
queue.enqueue(20); // Queue: [10, 20]
queue.enqueue(30); // Queue: [10, 20, 30]

console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10, Queue: [20, 30]
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.print(); // Output: [20, 30]
```

---

### Explanation of the Code

1. **Class Definition**:

   - The `Queue` class is generic (`<T>`), allowing it to handle any data type.
   - The `items` array stores the elements of the queue.

2. **Enqueue**:

   - The `enqueue` method adds an element to the end of the `items` array using the `push` method.

3. **Dequeue**:

   - The `dequeue` method removes and returns the first element of the `items` array using the `shift` method.
   - If the queue is empty, it throws an error.

4. **Peek**:

   - The `peek` method returns the first element of the `items` array without removing it.
   - If the queue is empty, it throws an error.

5. **IsEmpty**:

   - The `isEmpty` method checks if the `items` array is empty by checking its length.

6. **Size**:

   - The `size` method returns the length of the `items` array.

7. **Print**:
   - The `print` method logs the `items` array to the console for debugging purposes.

---

### Time Complexity of Queue Operations

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |
| IsEmpty   | O(1)            |
| Size      | O(1)            |

---

### Use Cases of Queues

1. **Task Scheduling**:

   - Queues are used to manage tasks in operating systems, ensuring that tasks are executed in the order they are received.

2. **Breadth-First Search (BFS)**:

   - Queues are used in BFS algorithms to explore nodes level by level.

3. **Printers**:

   - Print jobs are managed using a queue to ensure that documents are printed in the order they are sent.

4. **Web Servers**:
   - Queues are used to handle incoming requests in the order they are received.

---

### Alternative Implementations

1. **Using a Linked List**:

   - A queue can also be implemented using a linked list for better performance in scenarios where dynamic memory allocation is preferred.

2. **Circular Queue**:
   - A circular queue is a variation where the last element points back to the first element, optimizing space usage.

---

### Example: BFS Using a Queue

Here’s an example of how a queue can be used in a BFS algorithm to traverse a graph:

```typescript
function bfs(graph: Map<number, number[]>, startNode: number): void {
  const queue = new Queue<number>();
  const visited = new Set<number>();

  queue.enqueue(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue()!;
    console.log(currentNode);

    for (const neighbor of graph.get(currentNode)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}

// Example graph
const graph = new Map<number, number[]>([
  [1, [2, 3]],
  [2, [4, 5]],
  [3, [6]],
  [4, []],
  [5, []],
  [6, []],
]);

bfs(graph, 1); // Output: 1, 2, 3, 4, 5, 6
```
