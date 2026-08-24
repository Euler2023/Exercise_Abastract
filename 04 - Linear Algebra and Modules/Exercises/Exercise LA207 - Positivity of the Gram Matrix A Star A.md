---
title: "Exercise LA207: Positivity of the Gram Matrix A Star A"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - positive-definite-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.4, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA207: Positivity of the Gram Matrix A Star A

## Problem Statement

> [!question] Exercise 3.4
> Prove that if $A$ is an invertible matrix, then $A^*A$ is Hermitian and positive definite.

## Hints

> [!hint]- Hint 1
> Compute $(A^*A)^*$.

> [!hint]- Hint 2
> Rewrite $X^*A^*AX$ as the squared norm of $AX$.

## Solution

> [!success]- Solution
> First,
>
> $$
> (A^*A)^*=A^*(A^*)^*=A^*A,
> $$
>
> so $A^*A$ is Hermitian.
>
> For any nonzero column vector $X$,
>
> $$
> X^*A^*AX=(AX)^*(AX)=\sum_i |(AX)_i|^2.
> $$
>
> Since $A$ is invertible, $AX\ne0$ whenever $X\ne0$. The sum is therefore strictly positive. Hence $A^*A$ is positive definite.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- If $A$ is not invertible, the same computation proves that $A^*A$ is positive semidefinite, with nullspace equal to $\ker A$.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.4, printed p. 254, PDF p. 266]. The solution is an independent derivation.

