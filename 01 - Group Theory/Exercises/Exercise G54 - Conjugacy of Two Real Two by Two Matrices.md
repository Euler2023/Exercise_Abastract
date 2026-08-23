---
title: "Exercise G54: Conjugacy of Two Real Two-by-Two Matrices"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugation
  - matrix-groups
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.5, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G54: Conjugacy of Two Real Two-by-Two Matrices

## Problem Statement

> [!question] Exercise 6.5
> Decide whether
> 
> $$
> A=\begin{bmatrix}3&0\\0&2\end{bmatrix},\qquad
> B=\begin{bmatrix}1&1\\-2&4\end{bmatrix}
> $$
> 
> are conjugate in $GL_2(\mathbb R)$.

## Hints

> [!hint]- Hint 1
> Find eigenvectors of $B$ for eigenvalues $3$ and $2$.

## Solution

> [!success]- Solution
> The vectors $(1,2)^{\mathsf T}$ and $(1,1)^{\mathsf T}$ are eigenvectors of $B$ with eigenvalues $3$ and $2$, respectively. Therefore, with
> 
> $$
> P=\begin{bmatrix}1&1\\2&1\end{bmatrix},
> $$
> 
> we have $BP=PA$. Since $\det P=-1\ne0$,
> 
> $$
> B=PAP^{-1}.
> $$
> 
> Thus the two matrices are conjugate in $GL_2(\mathbb R)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.5, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
