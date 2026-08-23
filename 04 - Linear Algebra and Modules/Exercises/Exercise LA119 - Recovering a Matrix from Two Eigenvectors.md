---
title: "Exercise LA119: Recovering a Matrix from Two Eigenvectors"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.4, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA119: Recovering a Matrix from Two Eigenvectors

## Problem Statement

> [!question] Exercise 4.4
> A $2\times2$ matrix $A$ has eigenvector $v_1=(1,1)^t$ with eigenvalue $2$ and eigenvector $v_2=(1,2)^t$ with eigenvalue $3$. Determine $A$.

## Hints

> [!hint]- Hint 1
> Use $A=PDP^{-1}$ with the eigenvectors as columns of $P$.

## Solution

> [!success]- Solution
> With $P=\begin{pmatrix}1&1\\1&2\end{pmatrix}$ and $D=\operatorname{diag}(2,3)$,
>
> $$
> A=PDP^{-1}=\begin{pmatrix}1&1\\-2&4\end{pmatrix}.
> $$
>
> Directly, this matrix sends $(1,1)^t$ to $2(1,1)^t$ and $(1,2)^t$ to $3(1,2)^t$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §4, Ex. 4.4, printed p. 127, PDF p. 139]; independent computation.

