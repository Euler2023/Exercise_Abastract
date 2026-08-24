---
title: "Exercise LA265: Cayley Transform of a Skew Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - orthogonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.3, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA265: Cayley Transform of a Skew Matrix

## Problem Statement

> [!question] Exercise 8.3
> Let $S$ be a real skew-symmetric matrix. Prove that $I+S$ is invertible, and that $(I-S)(I+S)^{-1}$ is orthogonal.

## Hints

> [!hint]- Hint 1
> If $(I+S)x=0$, take the dot product with $x$.

> [!hint]- Hint 2
> The matrices $I-S$ and $I+S$ commute.

## Solution

> [!success]- Solution
> If $(I+S)x=0$, then $Sx=-x$. Since $x^{\mathsf T}Sx=0$ for a skew-symmetric matrix,
>
> $$
> 0=x^{\mathsf T}Sx=-\lVert x\rVert^2,
> $$
>
> so $x=0$. Thus $I+S$ is invertible.
>
> Put $Q=(I-S)(I+S)^{-1}$. Using $S^{\mathsf T}=-S$,
>
> $$
> Q^{\mathsf T}=(I-S)^{-1}(I+S).
> $$
>
> Because $I-S$ and $I+S$ are polynomials in $S$, they commute. Hence
>
> $$
> Q^{\mathsf T}Q
> =(I-S)^{-1}(I+S)(I-S)(I+S)^{-1}=I.
> $$
>
> Therefore $Q$ is orthogonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- This rational map from skew-symmetric matrices to orthogonal matrices is the Cayley transform.
- **Source status:** The precise order $(I-S)(I+S)^{-1}$ was visually verified at [S1, Ch. 8, §8, Ex. 8.3, printed p. 258, PDF p. 270]. The proof is independent.

