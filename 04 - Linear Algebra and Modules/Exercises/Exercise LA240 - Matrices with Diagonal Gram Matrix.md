---
title: "Exercise LA240: Matrices with Diagonal Gram Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gram-matrices
  - orthogonal-columns
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.4, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA240: Matrices with Diagonal Gram Matrix

## Problem Statement

> [!question] Exercise 6.4
> What can be said about a matrix $A$ such that $A^*A$ is diagonal?

## Hints

> [!hint]- Hint 1
> Interpret the entries of $A^*A$ as inner products of columns of $A$.

## Solution

> [!success]- Solution
> If $a_1,\ldots,a_n$ are the columns of $A$, then
>
> $$
> (A^*A)_{ij}=a_i^*a_j.
> $$
>
> Thus $A^*A$ is diagonal exactly when the columns of $A$ are pairwise orthogonal. Its diagonal entries are $\lVert a_i\rVert^2\ge0$.
>
> Writing $D=\operatorname{diag}(\lVert a_1\rVert,\ldots,\lVert a_n\rVert)$, normalize the nonzero columns and extend them to an orthonormal basis. For a square $A$ this yields
>
> $$
> \boxed{A=UD}
> $$
>
> for some unitary $U$; zero columns correspond to zero diagonal entries of $D$. If every column is nonzero, $A$ is invertible and $U=AD^{-1}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- This is a special polar or singular-value factorization in which no right-hand change of basis is needed.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.4, printed p. 256, PDF p. 268]. The interpretation is independent.

