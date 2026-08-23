---
title: "Exercise G40: Elementary Generators of $GL_n$ and $SL_n$"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - matrix-groups
  - generators
  - elementary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.8, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G40: Elementary Generators of $GL_n$ and $SL_n$

## Problem Statement

> [!question] Exercise 4.8
> **(a)** Prove that elementary matrices of the first and third types generate $GL_n(\mathbb R)$.
> 
> **(b)** Prove that first-type elementary matrices generate $SL_n(\mathbb R)$, doing $2\times2$ first.

## Hints

> [!hint]- Hint 1
> Express a row swap using shears and a sign scaling.

> [!hint]- Hint 2
> Express $\operatorname{diag}(a,a^{-1})$ as four shears.

## Solution

> [!success]- Solution
> Row reduction shows that all three elementary types generate $GL_n$. A swap in two coordinates satisfies
> 
> $$
> \begin{bmatrix}0&1\\1&0\end{bmatrix}
> =\begin{bmatrix}1&0\\0&-1\end{bmatrix}
> \begin{bmatrix}1&1\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\-1&1\end{bmatrix}
> \begin{bmatrix}1&1\\0&1\end{bmatrix}.
> $$
> 
> Thus types one and three already generate $GL_n$.
> 
> For $a\ne0$,
> 
> $$
> \begin{bmatrix}a&0\\0&a^{-1}\end{bmatrix}
> =\begin{bmatrix}1&a-1\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\1&1\end{bmatrix}
> \begin{bmatrix}1&a^{-1}-1\\0&1\end{bmatrix}
> \begin{bmatrix}1&0\\-a&1\end{bmatrix}.
> $$
> 
> Hence determinant-one diagonal corrections are products of first-type matrices. Gaussian elimination of an $SL_n$ matrix uses shears and ends with a diagonal matrix of determinant $1$; splitting that diagonal into embedded $2\times2$ blocks of the displayed form proves that first-type matrices generate $SL_n(\mathbb R)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.8, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
