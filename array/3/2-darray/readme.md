# Given a 3D array initialized as a[5...10][2.5][3...6] stored in row major order base address=1000. Find the location of an element a[8][4][5]


Let's break this down and also find related tricky problems to test your understanding.

---

### **Solution for Given Problem**
We are given a **3D array**:  
\[
a[5 \dots 10][2 \dots 5][3 \dots 6]
\]
- First dimension: \(5\) to \(10\) → **Size** \(10 - 5 + 1 = 6\)  
- Second dimension: \(2\) to \(5\) → **Size** \(5 - 2 + 1 = 4\)  
- Third dimension: \(3\) to \(6\) → **Size** \(6 - 3 + 1 = 4\)  

Thus, the effective array size is:  
\[
6 \times 4 \times 4
\]

**Given information:**
- **Base address** = **1000**
- **Stored in row-major order**  
- We need to find the address of **a[8][4][5]**  

#### **General Row-Major Address Formula**
\[
\text{Address}(i, j, k) = \text{Base Address} + ((i - L_1) \times S_2 \times S_3 + (j - L_2) \times S_3 + (k - L_3)) \times \text{Size of each element}
\]

where:  
- \(L_1, L_2, L_3\) = lower bounds of the indices  
- \(S_2, S_3\) = sizes of the respective dimensions  
- **Assuming each element takes 1 unit of memory**

#### **Plugging in Values**
\[
\text{Address}(8,4,5) = 1000 + ((8 - 5) \times 4 \times 4 + (4 - 2) \times 4 + (5 - 3)) \times 1
\]

\[
= 1000 + (3 \times 16 + 2 \times 4 + 2)
\]

\[
= 1000 + (48 + 8 + 2) = 1000 + 58 = 1058
\]

Thus, **Address of a[8][4][5] = 1058**.

---

## **Tricky Related Problems**
1. **Find the address of an element in column-major order instead of row-major order.**
2. **Given a 4D array stored in row-major order, find the address of an element.**
3. **Find the address of a[5][3] in a 2D array where indexing starts at 3 (not 0 or 1).**
4. **Find the address of an element when the array is stored as a 1D flattened array (i.e., with linear indexing).**
5. **Find the number of elements between two arbitrary indices in a multidimensional array.**



Here are the solutions and explanations for each of these tricky problems.

---

### **1. Find the Address of an Element in Column-Major Order**
In **column-major order**, elements are stored with **columns varying first**, then rows, and then deeper dimensions.

#### **Formula for Column-Major Addressing**
\[
\text{Address}(i, j, k) = \text{Base Address} + ((k - L_3) \times S_1 \times S_2 + (j - L_2) \times S_1 + (i - L_1)) \times \text{Size of each element}
\]
where:
- \( S_1, S_2, S_3 \) are sizes of respective dimensions.
- \( L_1, L_2, L_3 \) are lower bounds of indices.

**Example:**  
Given \( a[5 \dots 10][2 \dots 5][3 \dots 6] \), find the address of **a[8][4][5]** in **column-major order**.

\[
\text{Address}(8,4,5) = 1000 + ((5-3) \times 6 \times 4 + (4-2) \times 6 + (8-5)) \times 1
\]

\[
= 1000 + (2 \times 24 + 2 \times 6 + 3)
\]

\[
= 1000 + (48 + 12 + 3) = 1000 + 63 = 1063
\]

**Answer:** **1063**

---

### **2. Given a 4D Array Stored in Row-Major Order, Find the Address of an Element**
For a **4D array** \( a[L_1 \dots U_1][L_2 \dots U_2][L_3 \dots U_3][L_4 \dots U_4] \),  
the row-major address formula is:

\[
\text{Address}(i, j, k, l) = \text{Base Address} + ((i - L_1) \times S_2 \times S_3 \times S_4 + (j - L_2) \times S_3 \times S_4 + (k - L_3) \times S_4 + (l - L_4)) \times \text{Size}
\]

#### **Example**  
Given a **4D array**:  
\[
a[1 \dots 3][0 \dots 2][2 \dots 4][1 \dots 3]
\]
with **Base Address** = **2000** and each element occupying **4 bytes**,  
find the **address of a[2][1][3][2]**.

**Step 1: Compute sizes**
- \( S_1 = 3 - 1 + 1 = 3 \)
- \( S_2 = 2 - 0 + 1 = 3 \)
- \( S_3 = 4 - 2 + 1 = 3 \)
- \( S_4 = 3 - 1 + 1 = 3 \)

**Step 2: Apply formula**
\[
\text{Address}(2,1,3,2) = 2000 + ((2-1) \times 3 \times 3 \times 3 + (1-0) \times 3 \times 3 + (3-2) \times 3 + (2-1)) \times 4
\]

\[
= 2000 + (1 \times 27 + 1 \times 9 + 1 \times 3 + 1) \times 4
\]

\[
= 2000 + (27 + 9 + 3 + 1) \times 4
\]

\[
= 2000 + (40 \times 4)
\]

\[
= 2000 + 160 = 2160
\]

**Answer:** **2160**

---

### **3. Find the Address of a[5][3] in a 2D Array where Indexing Starts at 3**
If a **2D array** starts indexing at **row=3, col=2**,  
and has **dimensions**:  
\[
a[3 \dots 7][2 \dots 6]
\]
then, row size = \(7 - 3 + 1 = 5\), col size = \(6 - 2 + 1 = 5\).

#### **Formula for Row-Major 2D Array**
\[
\text{Address}(i, j) = \text{Base Address} + ((i - L_1) \times S_2 + (j - L_2)) \times \text{Size}
\]

Given **Base Address** = **3000**, element size = **2 bytes**,  
Find **Address of a[5][3]**:

\[
\text{Address}(5,3) = 3000 + ((5 - 3) \times 5 + (3 - 2)) \times 2
\]

\[
= 3000 + (2 \times 5 + 1) \times 2
\]

\[
= 3000 + (10 + 1) \times 2
\]

\[
= 3000 + 22 = 3022
\]

**Answer:** **3022**

---

### **4. Find the Address of an Element in a 1D Flattened Array**
When stored as a **1D array**, we convert a **multi-dimensional index into a single index**.

For a **3D array** \( a[x][y][z] \),  
\[
\text{Flattened Index} = i \times (y \times z) + j \times z + k
\]

**Example**  
Given \( a[5][4][3] \),  
Find **flattened index of a[3][2][1]**:

\[
\text{Index} = 3 \times (4 \times 3) + 2 \times 3 + 1
\]

\[
= 3 \times 12 + 6 + 1
\]

\[
= 36 + 6 + 1 = 43
\]

So, **a[3][2][1] is at index 43 in a 1D array**.

---

### **5. Find the Number of Elements Between Two Arbitrary Indices in a Multidimensional Array**
Given a **row-major 3D array** \( a[L_1 \dots U_1][L_2 \dots U_2][L_3 \dots U_3] \),  
Find **number of elements between** \( a[i_1][j_1][k_1] \) and \( a[i_2][j_2][k_2] \).

**Formula:**
\[
\text{Number of elements} = | \text{Address}(i_2, j_2, k_2) - \text{Address}(i_1, j_1, k_1) |
\]

#### **Example**
Given \( a[0 \dots 4][0 \dots 3][0 \dots 2] \) (i.e., \( 5 \times 4 \times 3 \)),  
Find number of elements between **a[2][1][1] and a[4][2][0]**.

Using **row-major order**,

\[
\text{Address}(i, j, k) = ((i \times S_2 \times S_3) + (j \times S_3) + k)
\]

\[
\text{Address}(2,1,1) = (2 \times 12 + 1 \times 3 + 1) = 27 + 3 + 1 = 31
\]

\[
\text{Address}(4,2,0) = (4 \times 12 + 2 \times 3 + 0) = 48 + 6 + 0 = 54
\]

**Number of elements**:
\[
54 - 31 = 23
\]

**Answer:** **23 elements**

---
