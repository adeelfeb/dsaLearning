## **🚀 Two Pointer Technique | Two Sum Problem**  

The **Two Pointer** technique is a powerful approach for solving problems efficiently, especially in **sorted arrays**, **search problems**, and **finding pairs** that meet a condition.

---

## **🟢 Two Sum Problem (Classic Example)**
📌 **Problem Statement:**  
Given a **sorted** array `nums` of `n` integers and a target `sum`, find **two numbers** that add up to the given sum.  

### **🔴 Example 1**  
```plaintext
Input: nums = [1, 2, 3, 4, 6], target = 6
Output: [1, 3]  (Because nums[1] + nums[3] = 2 + 4 = 6)
```

---

## **🔹 Approach: Two Pointer**
**🛠️ Steps:**  
1. Start with **two pointers**:  
   - **Left pointer (`l`)** at the start (`0`).  
   - **Right pointer (`r`)** at the end (`n - 1`).  
2. While `l < r`:  
   - Calculate `sum = nums[l] + nums[r]`.  
   - If `sum == target`, return `[l, r]`.  
   - If `sum < target`, move **left pointer** (`l++`).  
   - If `sum > target`, move **right pointer** (`r--`).  
3. If no pair is found, return `[-1, -1]`.  

⏳ **Time Complexity:** `O(n)` (better than `O(n²)` brute-force).  

---

### **✅ JavaScript Solution**
```javascript
function twoSum(nums, target) {
    let l = 0, r = nums.length - 1;
    
    while (l < r) {
        let sum = nums[l] + nums[r];
        
        if (sum === target) return [l, r];
        else if (sum < target) l++;  // Move left pointer right
        else r--;  // Move right pointer left
    }
    
    return [-1, -1];  // No valid pair found
}

// Example Usage:
console.log(twoSum([1, 2, 3, 4, 6], 6));  // Output: [1, 3]
console.log(twoSum([2, 5, 9, 11], 11));   // Output: [0, 2]
```

---

## **🔹 Variations of the Two Pointer Technique**
1. **Find All Pairs (Not Just One)**
2. **Three Sum Problem**
3. **Container with Most Water**
4. **Trapping Rain Water**
5. **Find Pairs with Difference K**
6. **Find Closest Pair to a Given Sum**
7. **Find If Array Has a Subarray With Sum K**





# **📌 Theoretical Explanation of Two Pointer Problems**  

### **Introduction to Two Pointer Technique**  
The **Two Pointer Technique** is used to efficiently process arrays or lists with a **linear (`O(n)`) or near-linear time complexity**. Instead of using **nested loops (`O(n²)`)**, we use **two pointers** to traverse the array from different directions.

---

## **🔹 1. Find All Pairs with a Given Sum**
### **📝 Problem Description:**  
Given a **sorted** array, find **all pairs** whose sum equals a target value.

### **🔎 How It Works?**
- Use **two pointers**:
  - **Left pointer (`l`)** starts at the **beginning**.
  - **Right pointer (`r`)** starts at the **end**.
- If `nums[l] + nums[r] == target`, we store the pair.
- If `nums[l] + nums[r] < target`, move `l` **right**.
- If `nums[l] + nums[r] > target`, move `r` **left**.

📌 **Why is it efficient?**  
Since the array is **sorted**, this eliminates the need for a nested loop (`O(n²)`) and allows us to solve it in **O(n) time**.

---

## **🔹 2. Three Sum Problem**
### **📝 Problem Description:**  
Find **all unique triplets** in an **unsorted** array that sum to `0`.

### **🔎 How It Works?**
1. **Sort the array** (to apply two-pointer technique).
2. **Fix one element** at index `i` (`nums[i]`).
3. Use **two pointers (`l`, `r`)** to find the remaining two numbers.
4. Skip **duplicate elements** to ensure unique triplets.

📌 **Why sort the array?**  
Sorting helps eliminate duplicates efficiently and allows us to use the **two-pointer** approach instead of brute force.

⏳ **Time Complexity:** `O(n²)`, as we loop through `n` elements and use a two-pointer search `O(n)`.

---

## **🔹 3. Container With Most Water**
### **📝 Problem Description:**  
Given an array of **heights**, find **two lines** that form a container with **maximum water**.

### **🔎 How It Works?**
- Use **two pointers**:
  - **Left pointer (`l`)** at the first index.
  - **Right pointer (`r`)** at the last index.
- Compute the **area** = `min(height[l], height[r]) × width (r - l)`.
- Move the **shorter height** pointer (`l++` or `r--`) to explore a larger area.

📌 **Why move the smaller height?**  
Since the **shorter height** limits the area, moving it **may** increase the volume.

⏳ **Time Complexity:** `O(n)`

---

## **🔹 4. Trapping Rain Water**
### **📝 Problem Description:**  
Given an array of **heights**, find **how much water** is trapped between the bars.

### **🔎 How It Works?**
- Use **two pointers** (`l` and `r`).
- Maintain **leftMax** and **rightMax** to track the highest barriers on both sides.
- Compute trapped water using `water += min(leftMax, rightMax) - height[current]`.

📌 **Why track leftMax and rightMax?**  
Water is trapped between **higher walls**, so we need the max height on both sides.

⏳ **Time Complexity:** `O(n)`

---

## **🔹 5. Subarray With Given Sum**
### **📝 Problem Description:**  
Find a **continuous subarray** whose sum equals the given `target`.

### **🔎 How It Works?**
1. Use **two pointers** (`l`, `r`) to maintain a **sliding window**.
2. Expand the window by **adding elements** (`sum += nums[r]`).
3. If `sum > target`, **shrink the window** (`sum -= nums[l]`, move `l++`).
4. If `sum == target`, return the subarray.

📌 **Why use a sliding window?**  
Instead of checking **all subarrays** (`O(n²)`), we maintain a **dynamic window** (`O(n) time`).

---

## **📌 Explanation of `sum -= nums[l];`**
This line is used when the **current sum exceeds the target**.  

- `sum` stores the sum of elements in a **window** (subarray).
- `nums[l]` is the **leftmost** element in the window.
- `sum -= nums[l]` removes this element to **reduce the sum**.
- `l++` moves the left pointer **to the right**, shrinking the window.

---

# **📌 Summary Table**

| **Problem**                 | **Approach**             | **Time Complexity** | **Use Case** |
|-----------------------------|-------------------------|----------------------|--------------|
| Find All Pairs with Sum      | Two Pointers            | O(n)                 | Finding pairs |
| Three Sum                   | Two Pointers + Sorting  | O(n²)                | Finding triplets |
| Container with Most Water    | Two Pointers            | O(n)                 | Optimization |
| Trapping Rain Water         | Two Pointers            | O(n)                 | Terrain problems |
| Subarray With Given Sum      | Sliding Window          | O(n)                 | Finding subarrays |

---



## **🚀 Deep Dive into Two Pointer Technique | Variations & Problems**

The **Two Pointer Technique** is widely used in:
- **Searching** (finding pairs/sums/subarrays)
- **Sorting problems**
- **Greedy algorithms**
- **Sliding window problems**
- **Optimization problems**

---

# **🔹 Variation 1: Find All Pairs with a Given Sum**
### **📌 Problem Statement**
Given a **sorted array**, find **all pairs** whose sum equals the target.

### **🔴 Example**
```plaintext
Input: nums = [1, 2, 3, 4, 5, 6, 7], target = 8
Output: [[1, 7], [2, 6], [3, 5]]
```

### **✅ JavaScript Solution**
```javascript
function findAllPairs(nums, target) {
    let l = 0, r = nums.length - 1;
    let result = [];

    while (l < r) {
        let sum = nums[l] + nums[r];

        if (sum === target) {
            result.push([nums[l], nums[r]]);
            l++; r--;  // Move both pointers
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }

    return result;
}

// Example Usage:
console.log(findAllPairs([1, 2, 3, 4, 5, 6, 7], 8)); 
// Output: [[1, 7], [2, 6], [3, 5]]
```

⏳ **Time Complexity:** `O(n)`  
🛠️ **Use Case:** Finding **all** possible pairs, not just one.

---

# **🔹 Variation 2: Three Sum Problem**
### **📌 Problem Statement**
Given an **unsorted** array, find **all unique triplets** whose sum equals zero.

### **🔴 Example**
```plaintext
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
```

### **✅ JavaScript Solution**
```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort first
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let l = i + 1, r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l++; // Skip duplicates
                while (nums[r] === nums[r - 1]) r--; // Skip duplicates
                l++; r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return result;
}

// Example Usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]
```

⏳ **Time Complexity:** `O(n²)` (due to sorting + two-pointer search)  
📌 **Use Case:** Used for **3-number** problems (e.g., finding triplets).

---

# **🔹 Variation 3: Container With Most Water**
### **📌 Problem Statement**
Given an array of heights, find **two lines** that form a container with **maximum water**.

### **🔴 Example**
```plaintext
Input: heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49  (Between heights at index 1 and 8)
```

### **✅ JavaScript Solution**
```javascript
function maxArea(heights) {
    let l = 0, r = heights.length - 1;
    let maxWater = 0;

    while (l < r) {
        let height = Math.min(heights[l], heights[r]);
        let width = r - l;
        maxWater = Math.max(maxWater, height * width);

        if (heights[l] < heights[r]) l++;
        else r--;
    }

    return maxWater;
}

// Example Usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Output: 49
```

⏳ **Time Complexity:** `O(n)`  
📌 **Use Case:** Used in **optimization** problems.

---

# **🔹 Variation 4: Trapping Rain Water**
### **📌 Problem Statement**
Given an array representing **elevations**, find the **maximum water trapped** between buildings.

### **🔴 Example**
```plaintext
Input: heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
```

### **✅ JavaScript Solution**
```javascript
function trapRainWater(heights) {
    let l = 0, r = heights.length - 1;
    let leftMax = 0, rightMax = 0, totalWater = 0;

    while (l < r) {
        if (heights[l] < heights[r]) {
            if (heights[l] >= leftMax) leftMax = heights[l];
            else totalWater += leftMax - heights[l];
            l++;
        } else {
            if (heights[r] >= rightMax) rightMax = heights[r];
            else totalWater += rightMax - heights[r];
            r--;
        }
    }

    return totalWater;
}

// Example Usage:
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// Output: 6
```

⏳ **Time Complexity:** `O(n)`  
📌 **Use Case:** Used for **terrain/water problems**.

---

# **🔹 Variation 5: Subarray With Given Sum**
### **📌 Problem Statement**
Given an **unsorted** array of **positive numbers**, find a **subarray** whose sum equals `target`.

### **🔴 Example**
```plaintext
Input: nums = [4, 2, 7, 1, 9, 5], target = 12
Output: [2, 7, 1, 2]
```

### **✅ JavaScript Solution**
```javascript
function subarraySum(nums, target) {
    let l = 0, sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum > target) {
            sum -= nums[l];
            l++;
        }

        if (sum === target) return nums.slice(l, r + 1);
    }

    return [];
}

// Example Usage:
console.log(subarraySum([4, 2, 7, 1, 9, 5], 12));
// Output: [2, 7, 1, 2]
```

⏳ **Time Complexity:** `O(n)`  
📌 **Use Case:** Used for **subarray problems**.

---

# **🔹 Conclusion**
The **Two Pointer Technique** is powerful for solving **array-based** problems efficiently. The key idea is to **move pointers dynamically** based on conditions.



---