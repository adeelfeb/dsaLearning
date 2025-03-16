
### **Binary Search in an Array (Theory + Code in TypeScript)**  

Binary Search is an efficient **search algorithm** used to find an element in a **sorted array**. Instead of searching sequentially (like linear search), it works by repeatedly dividing the search range in half, reducing the time complexity to **O(log n)**.  

---

## **1. Binary Search Theory**  

### **When to Use Binary Search?**  
- The array **must be sorted** before applying Binary Search.  
- If the array is **not sorted**, you must first sort it (which takes O(n log n) time).  

---

### **Binary Search Algorithm (Step-by-Step)**  

#### **Step 1: Define Search Boundaries**  
- Set **two pointers**:  
  - `low = 0` (starting index)  
  - `high = array.length - 1` (ending index)  

#### **Step 2: Find the Middle Element**  
- Compute `mid = Math.floor((low + high) / 2)`.  

#### **Step 3: Compare the Middle Element with Target**  
- If `arr[mid] === target`: **Return `mid`** (Found the target).  
- If `arr[mid] < target`: **Search the right half** (`low = mid + 1`).  
- If `arr[mid] > target`: **Search the left half** (`high = mid - 1`).  

#### **Step 4: Repeat Until `low > high`**  
- If `low > high`, return `-1` (Target is not found in the array).  

---

## **2. Implementation in TypeScript**  

### **Recursive Approach**  
```typescript
const binarySearchRecursive = (arr: number[], target: number, low: number, high: number): number => {
    if (low > high) return -1; // Base case: Target not found

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid; // Target found
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
    else return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
};

// Wrapper function
const searchRecursive = (arr: number[], target: number): number => {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
};

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 15];
console.log(searchRecursive(arr, 7)); // Output: 3 (Index of 7)
console.log(searchRecursive(arr, 4)); // Output: -1 (Not found)
```
✅ **Pros**: Elegant and concise  
❌ **Cons**: Uses extra stack space (`O(log n)` recursion calls)  

---

### **Iterative Approach (Recommended)**
```typescript
const binarySearchIterative = (arr: number[], target: number): number => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid; // Target found
        else if (arr[mid] < target) low = mid + 1; // Search right half
        else high = mid - 1; // Search left half
    }

    return -1; // Target not found
};

// Example usage
const nums = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(binarySearchIterative(nums, 10)); // Output: 4 (Index of 10)
console.log(binarySearchIterative(nums, 5));  // Output: -1 (Not found)
```
✅ **Pros**: More efficient (O(1) space complexity)  
✅ **Cons**: Slightly longer code  

---

## **3. Time & Space Complexity Analysis**  
| Approach      | Time Complexity | Space Complexity |
|--------------|----------------|-----------------|
| **Iterative** | O(log n)       | O(1)            |
| **Recursive** | O(log n)       | O(log n) (stack calls) |

- **Time Complexity** → O(log n) because the array size is halved in each step.  
- **Space Complexity** → Iterative uses **O(1)**, Recursive uses **O(log n)** due to function calls.  

---

## **4. Edge Cases to Consider**
✅ **Target is in the middle** (Best-case scenario, O(1)).  
✅ **Target is at the start or end** (Checks both ends).  
✅ **Target is not in the array** (Ensures `-1` is returned).  
✅ **Array has duplicate elements** (Returns the first found).  
✅ **Array has only one element** (Handles single-element arrays).  

---

## **5. Summary**
- **Binary Search** is a fast **O(log n)** algorithm for sorted arrays.  
- **Iterative approach** is **better** (uses less memory).  
- **Recursive approach** is **easier to write** but uses extra space.  




### **Understanding Stack Calls in Recursive Functions (JavaScript & C++)**  

When a function calls itself recursively, each function call is **pushed onto the call stack** until a **base case** is met. Then, the calls are **popped off the stack** as they return.

---

## **1. What is the Call Stack?**
The **call stack** is a data structure used by programming languages like JavaScript and C++ to keep track of function calls. It follows the **Last In, First Out (LIFO)** principle.

1. **Each function call is pushed onto the stack** (when it starts execution).
2. **When a function completes, it is popped off the stack** (and returns its result).
3. **If recursion goes too deep**, it can lead to **stack overflow** (exceeding memory limits).

---

## **2. Stack Calls in Recursive Binary Search (JavaScript Example)**  

Let's take the **recursive Binary Search function** and analyze the call stack:

```javascript
function binarySearchRecursive(arr, target, low, high) {
    if (low > high) return -1; // Base case: not found

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid; // Found
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high);
    else return binarySearchRecursive(arr, target, low, mid - 1);
}

// Wrapper function
function searchRecursive(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 15];
console.log(searchRecursive(arr, 7)); // Output: 3
```

---

### **📌 Step-by-Step Call Stack for `searchRecursive([1, 3, 5, 7, 9, 11, 15], 7)`**
#### **Initial call:**
```plaintext
binarySearchRecursive(arr, 7, 0, 6)   // mid = 3, arr[3] = 7 (found) ✅
```
The function **returns immediately** because `arr[3] === 7`.  

---
#### **Example: Searching for 9 (which is not in the middle)**
```plaintext
binarySearchRecursive(arr, 9, 0, 6)   // mid = 3, arr[3] = 7
binarySearchRecursive(arr, 9, 4, 6)   // mid = 5, arr[5] = 11
binarySearchRecursive(arr, 9, 4, 4)   // mid = 4, arr[4] = 9 ✅ (found)
```
Each function call **waits for the next one** to return before resolving itself.

---

## **3. Stack Calls in C++ Recursive Binary Search**
The logic is the same, but in **C++**, memory is managed explicitly, and recursion can lead to **stack overflow** faster.

```cpp
#include <iostream>
using namespace std;

int binarySearchRecursive(int arr[], int target, int low, int high) {
    if (low > high) return -1; // Base case

    int mid = low + (high - low) / 2; // Avoids integer overflow
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high);
    else return binarySearchRecursive(arr, target, low, mid - 1);
}

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 15};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << binarySearchRecursive(arr, 7, 0, n - 1) << endl; // Output: 3
    return 0;
}
```

---

### **📌 Stack Calls for `binarySearchRecursive(arr, 7, 0, 6)`**
#### **Stack Trace:**
```plaintext
binarySearchRecursive(arr, 7, 0, 6)   // mid = 3, arr[3] = 7 (found) ✅
```
Returns immediately.

---
#### **Searching for `9` (which is not in the middle)**
```plaintext
binarySearchRecursive(arr, 9, 0, 6)   // mid = 3, arr[3] = 7
binarySearchRecursive(arr, 9, 4, 6)   // mid = 5, arr[5] = 11
binarySearchRecursive(arr, 9, 4, 4)   // mid = 4, arr[4] = 9 ✅ (found)
```

Each function call **remains in memory** until it returns.

---

## **4. Stack Overflow in Recursion**
If recursion **does not reach a base case**, the function keeps calling itself indefinitely, leading to a **stack overflow**.

### **Example of Stack Overflow in JavaScript**
```javascript
function infiniteRecursion() {
    return infiniteRecursion(); // No base case!
}
infiniteRecursion(); // ❌ Causes "Maximum call stack size exceeded" error
```

### **Example of Stack Overflow in C++**
```cpp
void infiniteRecursion() {
    infiniteRecursion(); // No base case!
}
int main() {
    infiniteRecursion(); // ❌ Causes stack overflow
}
```
Stack overflow happens because each function call **takes up memory** and is **never removed**.

---

## **5. Summary**
| Concept                 | JavaScript                            | C++                                |
|-------------------------|--------------------------------------|------------------------------------|
| **Call Stack**          | Managed automatically               | Managed explicitly                 |
| **Stack Overflow**      | "Maximum call stack size exceeded"  | Segmentation Fault (stack overflow) |
| **Recursion Efficiency**| Uses heap memory after stack fills  | Can crash the program earlier      |
| **Base Case Importance**| Prevents infinite recursion         | Prevents stack overflow            |

---

## **6. Key Takeaways**
✅ **Each recursive call is stored on the call stack until it returns**.  
✅ **Recursive Binary Search uses O(log n) stack calls in worst case**.  
✅ **Iterative binary search avoids stack calls and uses O(1) space**.  
✅ **Stack overflow occurs when recursion runs indefinitely**.  

