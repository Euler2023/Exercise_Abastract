---
title: "Exercise LA50: Determinant of the Discrete Laplacian Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - induction
  - tridiagonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.3, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA50: Determinant of the Discrete Laplacian Matrix

## Problem Statement

> [!question] Exercise 4.3
> Using induction, compute the determinant $D_n$ of the $n\times n$ tridiagonal matrix with $2$ on the diagonal, $-1$ immediately above and below it, and zeros elsewhere.

## Hints

> [!hint]- Hint 1
> Expand along the first row to obtain a recurrence.

## Solution

> [!success]- Solution
> Expansion along the first row gives
> 
> $$
> D_n=2D_{n-1}-D_{n-2}.
> $$
> 
> The initial values are $D_1=2$ and $D_2=3$. We claim $D_n=n+1$. It holds for the initial values, and if it holds for the two preceding indices, then
> 
> $$
> D_n=2n-(n-1)=n+1.
> $$
> 
> Therefore the determinant is $n+1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.3, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
