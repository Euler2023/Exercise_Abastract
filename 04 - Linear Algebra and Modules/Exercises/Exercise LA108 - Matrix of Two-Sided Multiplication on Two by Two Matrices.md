---
title: "Exercise LA108: Matrix of Two-Sided Multiplication on Two by Two Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-representation
  - matrix-multiplication
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §2, Ex. 2.1, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA108: Matrix of Two-Sided Multiplication on Two by Two Matrices

## Problem Statement

> [!question] Exercise 2.1
> Let $A$ and $B$ be $2\times2$ matrices. Determine the matrix of $T:M\mapsto AMB$ on $F^{2\times2}$ with respect to $(e_{11},e_{12},e_{21},e_{22})$.

## Hints

> [!hint]- Hint 1
> The columns of $[T]$ are the coordinates of $Ae_{ij}B$ in the stated order.

## Solution

> [!success]- Solution
> Write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $B=\begin{pmatrix}e&f\\g&h\end{pmatrix}$. Direct multiplication of the four matrix units gives
>
> $$
> [T]=\begin{pmatrix}
> ae&ag&be&bg\\
> af&ah&bf&bh\\
> ce&cg&de&dg\\
> cf&ch&df&dh
> \end{pmatrix}.
> $$
>
> For example, the first column is the coordinate vector of $Ae_{11}B=\begin{pmatrix}ae&af\\ce&cf\end{pmatrix}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA103 - Linearity of Two-Sided Matrix Multiplication|Exercise LA103]]

## Notes

- **Source status:** [S1, Ch. 4, §2, Ex. 2.1, printed p. 126, PDF p. 138]; independent computation.

