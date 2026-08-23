---
title: "Exercise LA26: Block Matrix Multiplication"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - block-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.8, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA26: Block Matrix Multiplication

## Problem Statement

> [!question] Exercise 1.8
> Compute by block multiplication:
> 
> $$
> \begin{bmatrix}1&1&1&5\\0&1&0&1\\1&0&0&1\\0&1&1&0\end{bmatrix}
> \begin{bmatrix}1&2&1&0\\0&1&0&1\\1&0&0&1\\0&1&1&3\end{bmatrix},
> $$
> 
> and
> 
> $$
> \begin{bmatrix}0&1&2\\0&1&0\\3&0&1\end{bmatrix}
> \begin{bmatrix}1&2&3\\4&2&3\\5&0&4\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Partition the first pair into $2\times2$ blocks.

> [!hint]- Hint 2
> For the second pair, use the displayed $1+2$ row and column partition.

## Solution

> [!success]- Solution
> Applying the ordinary $2\times2$ block-product rule gives
> 
> $$
> \begin{bmatrix}
> 2&8&6&17\\
> 0&2&1&4\\
> 1&3&2&3\\
> 1&1&0&2
> \end{bmatrix}.
> $$
> 
> For the second pair the result is
> 
> $$
> \begin{bmatrix}
> 14&2&11\\
> 4&2&3\\
> 8&6&13
> \end{bmatrix}.
> $$
> 
> Each block entry is a sum of products of compatible blocks, exactly as in scalar $2\times2$ multiplication.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.8, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
