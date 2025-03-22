### **1. Binary Search Tree (BST)**

A **Binary Search Tree** (BST) is a type of binary tree in which each node has at most two children, referred to as the left and right children. In a BST, the left child’s value is **less than** the parent node's value, and the right child’s value is **greater than** the parent node's value. This property holds recursively for all nodes in the tree.

#### **Properties of a BST:**

- **Node structure**: Each node contains a value, a left child, and a right child.
- **Ordering property**: For every node, the left subtree contains only nodes with values **less** than the node, and the right subtree contains only nodes with values **greater** than the node.

#### **Insertion in a BST:**

To insert a value, you start from the root and compare the value with the node’s value:

- If the value is **less** than the node, move to the **left child**.
- If the value is **greater** than the node, move to the **right child**.
- Repeat the process until you find an appropriate position (a null pointer).

#### **Deletion in a BST:**

- If the node to be deleted has **no children** (a leaf), simply remove it.
- If the node to be deleted has **one child**, remove the node and replace it with its child.
- If the node to be deleted has **two children**, find the **in-order successor** (smallest node in the right subtree) or the **in-order predecessor** (largest node in the left subtree), replace the node with that successor/predecessor, and then remove the successor/predecessor.

---

### **2. AVL Tree**

An **AVL Tree** is a self-balancing **binary search tree** where the height of the two child subtrees of every node differs by at most **one**. It was introduced by **Adelson-Velsky and Landis** in 1962. This difference in height is called the **balance factor**.

#### **Balance Factor (BF)**:

The **balance factor** of a node is the difference between the heights of the left subtree and the right subtree:

- **Balance Factor = Height(left subtree) - Height(right subtree)**

For any node:

- If **Balance Factor = 0**, the tree is perfectly balanced.
- If **Balance Factor = 1**, the left subtree is taller than the right by one level.
- If **Balance Factor = -1**, the right subtree is taller than the left by one level.
- If **Balance Factor > 1** or **Balance Factor < -1**, the tree is **unbalanced** and requires a **rotation**.

#### **Insertion in an AVL Tree**:

When inserting a node into an AVL tree, we insert it like in a standard **BST**, but after each insertion, we need to:

1. **Update the height** of the affected nodes.
2. **Check the balance factor** of each node along the path from the inserted node to the root.
3. If any node has a **balance factor** of **> 1** or **< -1**, we perform rotations to restore the balance.

#### **Rotations**:

There are **four types of rotations** used in AVL trees to restore balance after an insertion or deletion:

1. **Left Rotation (Single Rotation)**:
   A **left rotation** is used when the right subtree is taller than the left subtree, and the imbalance occurs due to the right child of the right subtree.

   Example:

   ```
       z                                      y
      / \                                   /   \
     x   y       Left Rotate(z)      x        z
        / \          ——————>           /  \      /  \
       t1   t2                           t1   t2    t3  t4
   ```

   **Steps**:

   - The **right child** of the unbalanced node becomes the new root.
   - The old root becomes the left child of the new root.
   - The left child of the new root becomes the right child of the old root.

2. **Right Rotation (Single Rotation)**:
   A **right rotation** is used when the left subtree is taller than the right subtree, and the imbalance occurs due to the left child of the left subtree.

   Example:

   ```
        y                                    z
       /  \                               /    \
      x    t2     Right Rotate(y)     z       y
     /  \       ——————>               / \     / \
    t1   t2                           t1   t2  t3  t4
   ```

   **Steps**:

   - The **left child** of the unbalanced node becomes the new root.
   - The old root becomes the right child of the new root.
   - The right child of the new root becomes the left child of the old root.

3. **Left-Right Rotation (Double Rotation)**:
   A **left-right rotation** is used when the left subtree is taller than the right subtree, and the imbalance occurs due to the right child of the left subtree.

   **Steps**:

   - Perform a **left rotation** on the left child.
   - Then perform a **right rotation** on the node.

4. **Right-Left Rotation (Double Rotation)**:
   A **right-left rotation** is used when the right subtree is taller than the left subtree, and the imbalance occurs due to the left child of the right subtree.

   **Steps**:

   - Perform a **right rotation** on the right child.
   - Then perform a **left rotation** on the node.

---

### **Example of AVL Tree Insertions with Rotations**

Let’s walk through an example:

1. Insert **30**: The tree is empty, so **30** is inserted as the root.
2. Insert **20**: **20** is inserted as the left child of **30**. The tree is balanced.
3. Insert **10**: **10** is inserted as the left child of **20**, causing an imbalance at node **30**. The balance factor of **30** becomes **2**, so we perform a **right rotation**.

The resulting tree is balanced.

---

### **Time Complexity**

- **Search, Insertion, Deletion**: Both BSTs and AVL trees have an average time complexity of **O(log n)** for search, insertion, and deletion in the **balanced** case.
- However, for unbalanced BSTs, the time complexity can degrade to **O(n)** (in the worst case, for example, when the tree becomes a linked list). For AVL trees, since they maintain balance, the time complexity remains **O(log n)** even in the worst case.

---

### **Conclusion**

- **Binary Search Trees (BST)** are simple to understand and implement but can become inefficient when they are unbalanced, leading to poor performance in operations like search and insertion.
- **AVL Trees** are self-balancing binary search trees that maintain a stricter balance to ensure that their height remains logarithmic. This guarantees that operations like search, insertion, and deletion remain efficient.

By using the **balance factor** and applying **rotations**, AVL trees ensure that the height difference between the left and right subtrees is always kept within a specified range, keeping the tree balanced and operations efficient.
