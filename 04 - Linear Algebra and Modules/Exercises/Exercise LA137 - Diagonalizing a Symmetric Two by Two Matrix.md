---
title: "Exercise LA137: Diagonalizing a Symmetric Two by Two Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - diagonalization
  - matrix-powers
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.4, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA137: Diagonalizing a Symmetric Two by Two Matrix

## Problem Statement

> [!question] Exercise 6.4
> For $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, find $P$ such that $P^{-1}AP$ is diagonal, and find a formula for $A^{30}$.

## Hints

> [!hint]- Hint 1
> Use eigenvectors $(1,1)^t$ and $(1,-1)^t$.

## Solution

> [!success]- Solution
> Take $P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Then $P^{-1}AP=\operatorname{diag}(3,1)$ and $P^{-1}=\frac12P$. Hence
>
> $$
> A^{30}=\frac12\begin{pmatrix}3^{30}+1&3^{30}-1\\3^{30}-1&3^{30}+1\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The matrix and exponent were visually checked at [S1, Ch. 4, §6, Ex. 6.4, printed p. 128, PDF p. 140]. The computation is independent.

