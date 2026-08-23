---
title: "Exercise LA37: Elementary Matrices for Inverting a Two-by-Two Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - row-reduction
  - elementary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.4, printed p. 32, PDF p. 44; referenced example printed p. 16, PDF p. 28"
created: 2026-08-23
---

# Exercise LA37: Elementary Matrices for Inverting a Two-by-Two Matrix

## Problem Statement

> [!question] Exercise 2.4
> Determine the elementary matrices in the row reduction of Example 1.2.18 for
> 
> $$
> A=\begin{bmatrix}1&5\\2&6\end{bmatrix},
> $$
> 
> and verify that their product is $A^{-1}$.

## Hints

> [!hint]- Hint 1
> Use $R_2\leftarrow R_2-2R_1$, scale row $2$, then clear the upper-right entry.

## Solution

> [!success]- Solution
> The three operations and matrices are
> 
> $$
> E_1=\begin{bmatrix}1&0\\-2&1\end{bmatrix},\qquad
> E_2=\begin{bmatrix}1&0\\0&-\frac14\end{bmatrix},\qquad
> E_3=\begin{bmatrix}1&-5\\0&1\end{bmatrix}.
> $$
> 
> They satisfy $E_3E_2E_1A=I$. Their product is
> 
> $$
> E_3E_2E_1=\begin{bmatrix}-\frac32&\frac54\\\frac12&-\frac14\end{bmatrix}.
> $$
> 
> The $2\times2$ inverse formula gives the same matrix, so this product is $A^{-1}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.4, printed p. 32, PDF p. 44; Example 1.2.18, printed p. 16, PDF p. 28]. The solution is an independent derivation for this vault, not a solution printed in Artin.
