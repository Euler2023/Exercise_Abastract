---
title: "Exercise LA15: Square of an Invertible Skew-Symmetric Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.1, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA15: Square of an Invertible Skew-Symmetric Matrix

## Problem Statement

> [!question] Exercise 8.1
> Let $A$ be an invertible, real, skew-symmetric matrix. Prove that $A^2$ is symmetric and negative definite.

## Hints

> [!hint]- Hint 1
> Transpose $A^2$ and use $A^{\mathsf T}=-A$.

> [!hint]- Hint 2
> Rewrite $x^{\mathsf T}A^2x$ as $-(Ax)^{\mathsf T}(Ax)$.

## Solution

> [!success]- Solution
> Since $A^{\mathsf T}=-A$,
>
> $$
> (A^2)^{\mathsf T}=(A^{\mathsf T})^2=(-A)^2=A^2,
> $$
>
> so $A^2$ is symmetric. For every nonzero $x\in\mathbb R^n$,
>
> $$
> x^{\mathsf T}A^2x
> =-x^{\mathsf T}A^{\mathsf T}Ax
> =-(Ax)^{\mathsf T}(Ax)
> =-\lVert Ax\rVert^2.
> $$
>
> Invertibility of $A$ implies $Ax\ne0$, so the last expression is strictly negative. Therefore $A^2$ is negative definite. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §8, Ex. 8.1, printed p. 258, PDF p. 270]. The solution is an independent derivation.
- Without invertibility the same calculation proves that $A^2$ is negative semidefinite, not necessarily negative definite.
