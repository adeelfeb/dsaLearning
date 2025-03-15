### **Lower Triangular Matrix Addressing**
A **lower triangular matrix** is a **square matrix** where all elements **above the diagonal** are **zero**. Only the **nonzero elements** are stored to **save space**.

For an **N × N lower triangular matrix**, the number of **nonzero elements** is:

\[
\frac{N (N+1)}{2}
\]

Thus, instead of storing an \( N \times N \) matrix with \( N^2 \) elements, we store **only** the nonzero elements in a **1D array** of size \( \frac{N (N+1)}{2} \).

---

## **Example: Lower Triangular Matrix Storage**
Consider a **5 × 5 lower triangular matrix**:

\[
A =
\begin{bmatrix} 
A_{0,0} & 0 & 0 & 0 & 0 \\
A_{1,0} & A_{1,1} & 0 & 0 & 0 \\
A_{2,0} & A_{2,1} & A_{2,2} & 0 & 0 \\
A_{3,0} & A_{3,1} & A_{3,2} & A_{3,3} & 0 \\
A_{4,0} & A_{4,1} & A_{4,2} & A_{4,3} & A_{4,4} \\
\end{bmatrix}
\]

Since all elements **above the diagonal** are **zero**, we store only the nonzero elements in a **1D array**:

\[
\text{Stored as: } [A_{0,0}, A_{1,0}, A_{1,1}, A_{2,0}, A_{2,1}, A_{2,2}, A_{3,0}, A_{3,1}, A_{3,2}, A_{3,3}, A_{4,0}, A_{4,1}, A_{4,2}, A_{4,3}, A_{4,4}]
\]

**Total elements stored =** \( \frac{5(6)}{2} = 15 \)

---

## **Finding the Address of an Element**
### **1D Storage Formula**
To find the address of \( A[i, j] \), we need a **mapping function** from **(i, j) → 1D index**.

- In a lower triangular matrix, an element exists **only if** \( j \leq i \).
- The number of elements **before row \( i \)** is:

\[
\frac{i (i+1)}{2}
\]

Thus, the **1D index** of \( A[i, j] \) is:

\[
\text{Index} = \frac{i (i+1)}{2} + j
\]

If the **base address** is **1000** and each element takes **4 bytes**, then:

\[
\text{Address}(i, j) = \text{Base Address} + \left(\frac{i (i+1)}{2} + j \right) \times \text{Element Size}
\]

---

### **Example Calculation**
Find the address of \( A[3,1] \) in the **5 × 5** lower triangular matrix.

#### **Step 1: Compute the 1D Index**
Using the formula:

\[
\text{Index} = \frac{3(4)}{2} + 1 = \frac{12}{2} + 1 = 6 + 1 = 7
\]

#### **Step 2: Compute the Address**
- **Base Address** = **1000**
- **Each element takes 4 bytes**
- Address formula:

\[
\text{Address}(3,1) = 1000 + (7 \times 4)
\]

\[
= 1000 + 28 = 1028
\]

### **Final Answer: \( A[3,1] \) is stored at memory address 1028** ✅

---

## **Generalization for N × N Lower Triangular Matrix**
1. **Total elements stored**:  
   \[
   \frac{N (N+1)}{2}
   \]
2. **Formula for 1D Index of \( A[i, j] \)**:  
   \[
   \text{Index} = \frac{i (i+1)}{2} + j
   \]
3. **Address Formula** (if base address = **B** and size of each element = **S**):
   \[
   \text{Address}(i, j) = B + \left( \frac{i (i+1)}{2} + j \right) \times S
   \]

---

## **Summary**
- We store only **nonzero elements** to **save space**.
- We use a **1D array** to map **(i, j) → 1D index**.
- The **address formula** depends on the **element size**.
- This technique is efficient for **large matrices** in **numerical computing**.


