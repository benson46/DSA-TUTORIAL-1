✅ COMPLETE DSA THEORY + PRACTICAL CHEATSHEET (ONE CHAT VERSION)


📘 2. What is an Array?
An array is a collection of elements stored in contiguous memory locations. All elements are of the same data type and accessed using indices (starting from 0).

🔹 Key Points:
Fixed size (in most languages)

Fast access via index O(1)

Costly insertion/deletion in middle O(n)

🔹 Types:
Homogeneous Array: Same data type (e.g., [1, 2, 3])

Heterogeneous Array: Different types (e.g., in JS: [1, 'a', true])

Jagged Array: 2D array with rows of different lengths
➤ Example: [[1], [2, 3], [4, 5, 6]]

📘 3. Linear vs Non-Linear Data Structures

Type	Description	Examples
Linear	Data arranged sequentially	Array, Linked List, Stack, Queue
Non-Linear	Hierarchical/graph structure	Tree, Graph, Heap, Trie
📘 4. Memory Allocation & Memory Leak
🔹 Memory Allocation
How a program reserves space in memory to store values like variables, arrays, etc.

Static: At compile time

Dynamic: At runtime (malloc, new)

🔹 Memory Leak
Occurs when a program keeps using memory it no longer needs and fails to release it, causing system slowdown or crash over time.

📘 5. Time & Space Complexity
Time Complexity: How runtime grows with input size

Space Complexity: How memory usage grows with input size

📘 6. Asymptotic Notation
Used to describe the performance of algorithms as input grows.


Notation	Case	Meaning
O(f(n))	Worst Case	Max time/memory needed (upper bound)
Ω(f(n))	Best Case	Minimum time/memory needed (lower bound)
Θ(f(n))	Average	Tight bound (exact growth rate)
📘 7. Linked List
A collection of nodes where each node stores data and a pointer to the next (or previous) node.

🔹 Types:
Singly Linked List → One direction

Doubly Linked List → Forward & backward

🔹 Operations:
Convert array to list

Add node at start/end

Delete node by value

Insert before/after specific value

Print in forward and reverse

Remove duplicates (sorted list)

🔹 Advantages Over Array:

Feature	Array	Linked List
Size	Fixed	Dynamic
Memory	Continuous block	Scattered memory
Insert/Delete	Costly	Easier with pointers
Resizing	Needs reallocation	Automatic with pointers
📘 8. Strings
Sequences of characters, often immutable.

🔹 Examples:

Check for palindrome

Replace each char with nth next

Count vowels/consonants

Reverse word order

js
Copy
Edit
function shiftString(str, n) {
  return str.split('').map(c => String.fromCharCode(c.charCodeAt(0) + n)).join('');
}
📘 9. Searching Algorithms
🔍 Linear Search
Search each element one by one

Time: O(n)

🔎 Binary Search
Only works on sorted arrays

Divide and search halves

Time: O(log n)

📘 10. Recursion
A function calls itself to break down problems into sub-problems.

🔹 Types:
Head Recursion: Call happens first

Tail Recursion: Call happens last (can be optimized)

Direct Recursion: A calls A

Indirect Recursion: A calls B → B calls A

🔹 Applications:
Backtracking (e.g., Sudoku, N-Queens)

Mathematical (Factorial, GCD, Fibonacci)

Divide & Conquer (Merge Sort, Quick Sort)

Graphs (DFS)

Trees (Traversal)

📘 11. Sparse Array
An array with lots of empty or zero values. Instead of storing all, we store only non-zero elements and their indices.

🔹 Applications:
Image processing

Graphs (adjacency matrix)

Machine learning

Caching

Search indexing

📘 12. Virtual Memory
Virtual memory is a memory management technique where the OS uses part of the hard drive as RAM, so that more programs can run than the physical memory allows.

📘 13. Memory Pool
A memory pool is a pre-allocated block of memory divided into smaller reusable chunks.
🔹 Improves efficiency by reducing the need for frequent memory allocations from the OS.

✅ PRACTICAL WORKOUTS
🔸 Arrays
Rotate array by K steps

Move zeroes to end

Remove duplicates from sorted array

Find second largest number

Missing number from 1 to N

🔸 Strings
Check for palindrome

Reverse a string word-wise

Count vowels & consonants

Replace characters by nth character

Check if two strings are anagrams

🔸 Linked List
Create from array

Insert/delete node

Insert after/before specific value

Reverse list

Remove duplicates in sorted list

🔸 Searching
Linear Search

Binary Search (iterative & recursive)

Search in rotated sorted array

Count occurrences of element

🔸 Recursion
Factorial of a number

Fibonacci series

Sum of digits

Print array in reverse

Count paths in grid (m x n)

Let me know if you want sample code, dry runs, or diagrams for any of these — and best of luck with your prep! 💻🚀