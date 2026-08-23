---
title: "Exercise LA76: Orders of Two Matrices over $\\mathbb F_7$"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - finite-fields
  - element-orders
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.9, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA76: Orders of Two Matrices over $\mathbb F_7$

## Problem Statement

> [!question] Exercise 1.9
> Determine the orders of
> 
> $$
> \begin{pmatrix}1&1\\0&1\end{pmatrix}
> \quad\text{and}\quad
> \begin{pmatrix}2&0\\0&1\end{pmatrix}
> $$
> 
> in $GL_2(\mathbb F_7)$.

## Hints

> [!hint]- Hint 1
> Compute the $k$th power of each matrix.

## Solution

> [!success]- Solution
> For the first matrix $U=I+N$ with $N^2=0$, so
> 
> $$
> U^k=I+kN=\begin{pmatrix}1&k\\0&1\end{pmatrix}.
> $$
> 
> This is $I$ first when $k=7$, so $|U|=7$. For $D=\operatorname{diag}(2,1)$, the order is the multiplicative order of $2$ modulo $7$. Since $2^3=8\equiv1$ and neither $2$ nor $2^2$ is $1$, $|D|=3$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.9, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
