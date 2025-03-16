# **Linked List in JavaScript & TypeScript (Detailed Explanation)**  

A **linked list** is a linear data structure where elements (nodes) are linked using **pointers**. Unlike arrays, linked lists **do not have fixed sizes** and allow **efficient insertion and deletion**.  

---

## **1. Understanding Linked Lists**
### **What is a Node?**
Each element in a linked list is called a **node**. A node consists of:
1. **Data** (the value stored)
2. **Next** (a pointer to the next node)

### **Types of Linked Lists**
🔹 **Singly Linked List** – Each node has only one pointer (`next`) pointing to the next node.  
🔹 **Doubly Linked List** – Each node has two pointers (`next` and `prev`).  
🔹 **Circular Linked List** – The last node’s pointer connects back to the first node.

---

## **2. Linked List vs. Array**
| Feature          | Linked List | Array |
|-----------------|-------------|--------|
| **Access** | O(n) (must traverse) | O(1) (direct index) |
| **Insertion/Deletion** | O(1) at head, O(n) at tail | O(n) (shifting required) |
| **Memory** | Uses extra space for pointers | Contiguous memory allocation |

---

## **3. Implementing a Singly Linked List in TypeScript**
Let's build a **basic Linked List** class with common operations.

```typescript
// Define a Node
class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

// Define a LinkedList Class
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Insert at the end
    append(data: number): void {
        let newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert at the beginning
    prepend(data: number): void {
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node by value
    delete(data: number): void {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Search for a node
    search(data: number): boolean {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }

    // Print the linked list
    print(): void {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.data} -> `;
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30 -> null

console.log(list.search(20)); // Output: true
list.delete(20);
list.print(); // Output: 5 -> 10 -> 30 -> null
console.log(list.search(20)); // Output: false
```

---

## **4. Doubly Linked List Implementation**
Each node has a **prev** and **next** pointer.

```typescript
// Define a Node for Doubly Linked List
class DoublyListNode {
    data: number;
    next: DoublyListNode | null;
    prev: DoublyListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Define a Doubly Linked List Class
class DoublyLinkedList {
    head: DoublyListNode | null;
    tail: DoublyListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the end
    append(data: number): void {
        let newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail!.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    // Insert at the beginning
    prepend(data: number): void {
        let newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    // Delete a node
    delete(data: number): void {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            return;
        }

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }

        if (!current) return; // Not found

        if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail!.next = null;
        } else {
            current.prev!.next = current.next;
            current.next!.prev = current.prev;
        }
    }

    // Print the list forward
    print(): void {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.data} <-> `;
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example usage
const dList = new DoublyLinkedList();
dList.append(1);
dList.append(2);
dList.append(3);
dList.prepend(0);
dList.print(); // Output: 0 <-> 1 <-> 2 <-> 3 <-> null
dList.delete(2);
dList.print(); // Output: 0 <-> 1 <-> 3 <-> null
```

---

## **5. Time & Space Complexity**
| Operation         | Singly Linked List | Doubly Linked List |
|------------------|------------------|------------------|
| **Insert at Head** | O(1) | O(1) |
| **Insert at Tail** | O(n) | O(1) |
| **Delete by Value** | O(n) | O(n) |
| **Search** | O(n) | O(n) |
| **Access (Get by Index)** | O(n) | O(n) |

---

## **6. When to Use a Linked List?**
✅ **When frequent insertions & deletions** are needed (better than arrays).  
✅ **When memory allocation is dynamic** (no need for contiguous blocks).  
❌ **Not ideal for random access** (arrays are better).  

---

## **7. Summary**
- **Singly Linked List** – Simple structure, `O(1)` insert at head, `O(n)` insert at tail.
- **Doubly Linked List** – Extra memory for `prev`, but `O(1)` insert at both ends.
- **Better than arrays** for frequent insertions/deletions but worse for random access.

## **Circular Linked List & Advanced Linked List Operations in TypeScript** 🚀  

Now that you understand **singly** and **doubly linked lists**, let's dive into **circular linked lists** and **advanced operations** like **reversing** and **detecting loops**.

---

# **1. Circular Linked List (CLL)**
In a **circular linked list**, the last node **points back to the first node** instead of `null`.

### **Types of Circular Linked Lists**
- **Singly Circular Linked List** → The `next` pointer of the last node **points to the head**.
- **Doubly Circular Linked List** → Both `next` and `prev` pointers form a **loop**.

---

## **2. Singly Circular Linked List Implementation**
```typescript
class CircularListNode {
    data: number;
    next: CircularListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    head: CircularListNode | null;

    constructor() {
        this.head = null;
    }

    // Insert at the end
    append(data: number): void {
        let newNode = new CircularListNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Circular link
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next!;
        }
        current.next = newNode;
        newNode.next = this.head; // Make it circular
    }

    // Print the circular linked list
    print(): void {
        if (!this.head) return;
        let current: CircularListNode | null = this.head;
        let result = "";

        do {
            result += `${current.data} -> `;
            current = current.next!;
        } while (current !== this.head);

        console.log(result + "(Back to head)");
    }
}

// Example usage
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.print(); // Output: 10 -> 20 -> 30 -> (Back to head)
```

---

## **3. Reversing a Singly Linked List**
To reverse a linked list, we need to **reverse the pointers**.

### **Steps to Reverse a Linked List**
1. Use three pointers: `prev`, `current`, `next`
2. Traverse the list and reverse each node’s `next` pointer
3. Update the `head` pointer

```typescript
class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    // Reverse the linked list
    reverse(): void {
        let prev: ListNode | null = null;
        let current = this.head;
        let next: ListNode | null = null;

        while (current) {
            next = current.next; // Save next node
            current.next = prev; // Reverse pointer
            prev = current; // Move prev forward
            current = next; // Move current forward
        }
        this.head = prev; // Update head
    }

    // Print the list
    print(): void {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.data} -> `;
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  // Output: 1 -> 2 -> 3 -> null
list.reverse();
list.print();  // Output: 3 -> 2 -> 1 -> null
```

⏳ **Time Complexity:** O(n)  
💾 **Space Complexity:** O(1)  

---

## **4. Detecting a Loop in a Linked List**
A loop occurs when a node’s `next` pointer **points to a previous node**, creating an **infinite cycle**.

### **Floyd’s Cycle Detection Algorithm (Tortoise & Hare)**
1. Use two pointers: `slow` (moves 1 step) and `fast` (moves 2 steps).
2. If `slow` and `fast` meet, a loop exists.
3. If `fast` reaches `null`, no loop exists.

```typescript
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;   // Move 1 step
        fast = fast.next.next!; // Move 2 steps

        if (slow === fast) return true; // Loop detected
    }
    return false;
}
```
✅ **Time Complexity:** O(n)  
✅ **Space Complexity:** O(1)  

---

## **5. Removing a Loop in a Linked List**
Once a loop is detected, we can remove it.

### **Steps to Remove a Loop**
1. Detect the loop using Floyd’s Algorithm.
2. Find the node where the loop starts.
3. Set the `next` pointer of the last node to `null`.

```typescript
function removeLoop(head: ListNode | null): void {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;

        if (slow === fast) {
            break; // Loop detected
        }
    }

    // If no loop was found
    if (!fast || !fast.next) return;

    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next!;
        fast = fast.next!;
    }
    
    fast.next = null; // Remove loop
}
```
✅ **Time Complexity:** O(n)  
✅ **Space Complexity:** O(1)  

---

## **6. Finding the Middle of a Linked List**
We can find the **middle node** using the slow-fast pointer approach.

### **Steps**
1. Use two pointers: `slow` (1 step) and `fast` (2 steps).
2. When `fast` reaches the end, `slow` will be at the middle.

```typescript
function findMiddle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    return slow; // Middle node
}
```
✅ **Time Complexity:** O(n)  
✅ **Space Complexity:** O(1)  

---

## **7. Merging Two Sorted Linked Lists**
If you have two sorted linked lists, you can merge them into a **single sorted linked list**.

### **Steps**
1. Compare nodes from both lists.
2. Attach the smaller node to the merged list.
3. Continue until one list is exhausted.

```typescript
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.data < l2.data) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```
✅ **Time Complexity:** O(n + m)  
✅ **Space Complexity:** O(1)  

---

## **8. Summary**
| Operation | Time Complexity |
|-----------|----------------|
| **Reverse a List** | O(n) |
| **Detect Loop** | O(n) |
| **Remove Loop** | O(n) |
| **Find Middle** | O(n) |
| **Merge Two Lists** | O(n + m) |

---

# **LRU (Least Recently Used) Cache using Linked List in TypeScript** 🚀  

An **LRU Cache** is a data structure that stores a limited number of items. When it reaches its capacity, it removes the **least recently used (LRU)** item before inserting a new one.

---

## **1. How LRU Cache Works?**
An **LRU Cache** maintains a **fixed size** and supports:  
✅ **Fast Access** – Get an item in O(1).  
✅ **Efficient Updates** – Insert/Delete in O(1).  

We use **two data structures**:
1. **Doubly Linked List** (To maintain the order of usage)
   - **Most recently used** item stays at the **front (head)**.
   - **Least recently used** item stays at the **end (tail)**.
2. **Hash Map (JavaScript Object or Map)** (For quick lookups)
   - Stores `key → reference to node in linked list` for O(1) retrieval.

---

## **2. LRU Cache Implementation in TypeScript**
### **Steps to Implement:**
1. **Use a doubly linked list** for ordering elements.
2. **Use a hash map** for O(1) access.
3. **Move accessed elements to the front** (marking them as "most recently used").
4. **Remove the least recently used item** when capacity is exceeded.

---

### **2.1 Defining the Doubly Linked List Node**
```typescript
class LRUNode {
    key: number;
    value: number;
    prev: LRUNode | null;
    next: LRUNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
```

---

### **2.2 LRU Cache Class**
```typescript
class LRUCache {
    private capacity: number;
    private cache: Map<number, LRUNode>;
    private head: LRUNode;
    private tail: LRUNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy head & tail for easier management
        this.head = new LRUNode(0, 0);
        this.tail = new LRUNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Move node to the front (mark as most recently used)
    private moveToFront(node: LRUNode): void {
        this.removeNode(node);
        this.addToFront(node);
    }

    // Add node to the front (right after the dummy head)
    private addToFront(node: LRUNode): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    // Remove node from linked list
    private removeNode(node: LRUNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    // Remove least recently used (from tail)
    private removeLRU(): void {
        let lru = this.tail.prev!;
        this.removeNode(lru);
        this.cache.delete(lru.key);
    }

    // Get value from cache
    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        let node = this.cache.get(key)!;
        this.moveToFront(node); // Move to front as it was recently used
        return node.value;
    }

    // Put key-value into cache
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // Update existing node value & move to front
            let node = this.cache.get(key)!;
            node.value = value;
            this.moveToFront(node);
        } else {
            // Create a new node
            let newNode = new LRUNode(key, value);
            this.cache.set(key, newNode);
            this.addToFront(newNode);

            if (this.cache.size > this.capacity) {
                this.removeLRU(); // Remove least recently used item
            }
        }
    }

    // Print LRU Cache (For Debugging)
    printCache(): void {
        let current = this.head.next;
        let result = "";
        while (current !== this.tail) {
            result += `[${current!.key}:${current!.value}] ⇄ `;
            current = current!.next;
        }
        console.log(result + "null");
    }
}
```

---

### **3. Testing the LRU Cache**
```typescript
const lru = new LRUCache(3);

lru.put(1, 10);
lru.put(2, 20);
lru.put(3, 30);
lru.printCache(); // Output: [3:30] ⇄ [2:20] ⇄ [1:10] ⇄ null

lru.get(2);
lru.printCache(); // Output: [2:20] ⇄ [3:30] ⇄ [1:10] ⇄ null (2 is now most recently used)

lru.put(4, 40); // Evicts least recently used (1)
lru.printCache(); // Output: [4:40] ⇄ [2:20] ⇄ [3:30] ⇄ null
```

---

## **4. Time & Space Complexity**
| Operation  | Complexity |
|------------|------------|
| **Get (O(1))**  | Lookup in HashMap + Move to front |
| **Put (O(1))**  | Insert into HashMap + Move to front |
| **Delete (O(1))**  | Remove from Linked List & HashMap |
| **Space Complexity (O(capacity))** | Storing elements in HashMap & Linked List |

---

## **5. Why Use Linked List & Hash Map Together?**
| **Data Structure** | **Lookup** | **Insertion/Deletion** | **Order Maintenance** |
|-------------------|----------|----------------|-----------------|
| **Array**        | O(n)     | O(n)           | Yes |
| **Linked List**  | O(n)     | O(1)           | Yes |
| **Hash Map**     | O(1)     | O(1)           | No |
| **HashMap + LinkedList** | O(1) | O(1) | Yes ✅ |

---

## **6. Summary**
- **LRU Cache removes least recently used item when full.**
- **Uses a doubly linked list + HashMap for O(1) operations.**
- **Doubly Linked List maintains order (most recently used at head).**
- **Hash Map provides O(1) lookup for quick access.**

---

# **LFU (Least Frequently Used) Cache in TypeScript** 🚀  

## **1. What is an LFU Cache?**
An **LFU (Least Frequently Used) Cache** is a **fixed-size** cache that removes the **least frequently used** item when it reaches capacity.

### **How is it different from LRU?**
- **LRU (Least Recently Used)** removes the **least recently used** item.
- **LFU (Least Frequently Used)** removes the **least accessed** item.

---

## **2. Data Structures Used in LFU**
To implement an **efficient** LFU Cache with **O(1) operations**, we use:
1. **Hash Map (`key → Node`)**: Stores the key-value pairs for O(1) lookup.
2. **Doubly Linked List (`frequency → Nodes`)**:  
   - Stores nodes with the **same frequency**.
   - Keeps them in **order of use** (for LRU behavior in ties).
3. **Frequency Map (`freq → LinkedList`)**:  
   - Stores a linked list for each frequency count.
   - **Easily remove the least frequently used item**.

---

## **3. LFU Cache Implementation in TypeScript**
### **Step 1: Define the Node Structure**
```typescript
class LFUNode {
    key: number;
    value: number;
    freq: number;
    prev: LFUNode | null;
    next: LFUNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.freq = 1; // Start with frequency 1
        this.prev = null;
        this.next = null;
    }
}
```

---

### **Step 2: Define the Doubly Linked List (to store nodes per frequency)**
```typescript
class DoublyLinkedList {
    head: LFUNode;
    tail: LFUNode;

    constructor() {
        this.head = new LFUNode(0, 0); // Dummy head
        this.tail = new LFUNode(0, 0); // Dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Add node to the front (most recently used within the frequency group)
    addToFront(node: LFUNode): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    // Remove a node from the list
    removeNode(node: LFUNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    // Remove the least recently used node (tail.prev)
    removeLRUNode(): LFUNode | null {
        if (this.head.next === this.tail) return null; // Empty list
        let lruNode = this.tail.prev!;
        this.removeNode(lruNode);
        return lruNode;
    }

    // Check if list is empty
    isEmpty(): boolean {
        return this.head.next === this.tail;
    }
}
```

---

### **Step 3: Define the LFU Cache**
```typescript
class LFUCache {
    private capacity: number;
    private minFreq: number;
    private nodeMap: Map<number, LFUNode>;
    private freqMap: Map<number, DoublyLinkedList>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.nodeMap = new Map();
        this.freqMap = new Map();
    }

    // Get value from cache
    get(key: number): number {
        if (!this.nodeMap.has(key)) return -1;

        let node = this.nodeMap.get(key)!;
        this.updateNodeFrequency(node);
        return node.value;
    }

    // Put key-value pair in cache
    put(key: number, value: number): void {
        if (this.capacity === 0) return;

        if (this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key)!;
            node.value = value;
            this.updateNodeFrequency(node);
        } else {
            if (this.nodeMap.size >= this.capacity) {
                this.evictLFU();
            }

            let newNode = new LFUNode(key, value);
            this.nodeMap.set(key, newNode);
            this.minFreq = 1;

            if (!this.freqMap.has(1)) this.freqMap.set(1, new DoublyLinkedList());
            this.freqMap.get(1)!.addToFront(newNode);
        }
    }

    // Update frequency of a node
    private updateNodeFrequency(node: LFUNode): void {
        let freq = node.freq;
        this.freqMap.get(freq)!.removeNode(node);

        if (freq === this.minFreq && this.freqMap.get(freq)!.isEmpty()) {
            this.minFreq++;
        }

        node.freq++;

        if (!this.freqMap.has(node.freq)) this.freqMap.set(node.freq, new DoublyLinkedList());
        this.freqMap.get(node.freq)!.addToFront(node);
    }

    // Evict the least frequently used node
    private evictLFU(): void {
        let lfuList = this.freqMap.get(this.minFreq)!;
        let lfuNode = lfuList.removeLRUNode()!;
        this.nodeMap.delete(lfuNode.key);
    }

    // Print cache (for debugging)
    printCache(): void {
        console.log("Cache state:");
        for (let [key, node] of this.nodeMap.entries()) {
            console.log(`Key: ${key}, Value: ${node.value}, Freq: ${node.freq}`);
        }
    }
}
```

---

### **4. Testing the LFU Cache**
```typescript
const lfu = new LFUCache(3);

lfu.put(1, 10);
lfu.put(2, 20);
lfu.put(3, 30);
lfu.printCache();

lfu.get(1);
lfu.get(2);
lfu.printCache();

lfu.put(4, 40); // This should evict key 3 (least frequently used)
lfu.printCache();
```

---

## **5. Time Complexity Analysis**
| Operation | Complexity |
|-----------|------------|
| **Get (O(1))** | Lookup in HashMap + Move to front |
| **Put (O(1))** | Insert into HashMap + Update frequency |
| **Eviction (O(1))** | Remove from Linked List & HashMap |
| **Space Complexity (O(capacity))** | Storing elements in HashMap & Linked List |

---

## **6. Summary**
✅ **Uses Hash Map for O(1) lookups**  
✅ **Uses Doubly Linked List for O(1) inserts/removals**  
✅ **Tracks frequencies in O(1) using Frequency Map**  
✅ **Least Frequently Used (LFU) is removed first**  

---

