---
title: "Exercise LA17: Cayley Transform of a Skew-Symmetric Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - orthogonal-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.3, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA17: Cayley Transform of a Skew-Symmetric Matrix

## Problem Statement

> [!question] Exercise 8.3
> Let $S$ be a real skew-symmetric matrix. Prove that $I+S$ is invertible, and that
>
> $$
> (I-S)(I+S)^{-1}
> $$
>
> is orthogonal.

## Hints

> [!hint]- Hint 1
> If $(I+S)x=0$, take the Euclidean inner product with $x$ and use $x^{\mathsf T}Sx=0$.

> [!hint]- Hint 2
> The matrices $I-S$ and $I+S$ commute. Compute the transpose of the Cayley transform.

## Solution

> [!success]- Solution
> Suppose $(I+S)x=0$. Then $x=-Sx$, and taking the inner product with $x$ gives
>
> $$
> \lVert x\rVert^2=-x^{\mathsf T}Sx=0,
> $$
>
> because $x^{\mathsf T}Sx=-(x^{\mathsf T}Sx)^{\mathsf T}$. Hence $x=0$, so $I+S$ is injective and therefore invertible.
>
> Put
>
> $$
> Q=(I-S)(I+S)^{-1}.
> $$
>
> Since $S^{\mathsf T}=-S$,
>
> $$
> Q^{\mathsf T}
> =\bigl((I+S)^{-1}\bigr)^{\mathsf T}(I-S)^{\mathsf T}
> =(I-S)^{-1}(I+S).
> $$
>
> Both $I-S$ and $I+S$ are polynomials in $S$, so they commute, as do their inverses. Consequently,
>
> $$
> Q^{\mathsf T}Q
> =(I-S)^{-1}(I+S)(I-S)(I+S)^{-1}
> =I.
> $$
>
> Thus $Q$ is orthogonal. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The statement, including the precise order $(I-S)(I+S)^{-1}$, was visually verified at [S1, Ch. 8, Exercises §8, Ex. 8.3, printed p. 258, PDF p. 270]. The solution is an independent derivation.
- This rational map is the Cayley transform. Its image excludes orthogonal matrices having $-1$ as an eigenvalue.
