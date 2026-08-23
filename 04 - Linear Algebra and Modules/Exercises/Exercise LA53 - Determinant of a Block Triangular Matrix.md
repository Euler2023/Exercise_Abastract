---
title: "Exercise LA53: Determinant of a Block-Triangular Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - block-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.6, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA53: Determinant of a Block-Triangular Matrix

## Problem Statement

> [!question] Exercise 4.6
> Prove that
> 
> $$
> \det\begin{bmatrix}A&B\\0&D\end{bmatrix}=(\det A)(\det D)
> $$
> 
> when $A$ and $D$ are square blocks.

## Hints

> [!hint]- Hint 1
> In a nonzero Leibniz term, the lower block rows must use columns belonging to $D$.

## Solution

> [!success]- Solution
> Suppose $A$ is $r\times r$ and $D$ is $s\times s$. In the Leibniz expansion, a nonzero term cannot assign any of the last $s$ rows to one of the first $r$ columns, because the lower-left block is zero. Therefore those last rows must be matched bijectively with the last $s$ columns, and the first rows must be matched with the first columns.
> 
> Thus every nonzero permutation splits uniquely into a permutation for $A$ and one for $D$; its sign and product of entries split in the same way. Summing first over the two independent permutations gives
> 
> $$
> \det\begin{bmatrix}A&B\\0&D\end{bmatrix}=\det A\det D.
> $$
> 
> The block $B$ never occurs in a nonzero determinant term.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.6, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
