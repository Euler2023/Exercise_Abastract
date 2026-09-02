---
title: "Exercise LA21: Inner and Outer Products"
topic: linear-algebra
difficulty: beginner
status: completed
tags:
  - exercise
  - linear-algebra
  - matrices
  - vectors
source: Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.3, printed p. 31, PDF p. 43
created: 2026-08-23
---

# Exercise LA21: Inner and Outer Products

## Problem Statement

> [!question] Exercise 1.3
> Let $A=[a_1\ \cdots\ a_n]$ be a row vector and let $B=[b_1\ \cdots\ b_n]^{\mathsf T}$ be a column vector. Compute $AB$ and $BA$.

## Hints

> [!hint]- Hint 1
> One product is $1\times1$ and the other is $n\times n$.

## Solution

> [!success]- Solution
> The first product is the scalar inner product
> 
> $$
> AB=\sum_{k=1}^n a_kb_k.
> $$
> 
> The reverse product is the outer-product matrix
> 
> $$
> BA=(b_i a_j)_{1\le i,j\le n}
> =\begin{bmatrix}
> b_1a_1&\cdots&b_1a_n\\
> \vdots&&\vdots\\
> b_na_1&\cdots&b_na_n
> \end{bmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.3, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
