---
title: "Exercise LA263: Negative Definiteness of the Square of a Skew Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - negative-definite-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.1, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA263: Negative Definiteness of the Square of a Skew Matrix

## Problem Statement

> [!question] Exercise 8.1
> Let $A$ be an invertible, real, skew-symmetric matrix. Prove that $A^2$ is symmetric and negative definite.

## Hints

> [!hint]- Hint 1
> Use $A^{\mathsf T}=-A$ and compare $A^{\mathsf T}A$ with $A^2$.

## Solution

> [!success]- Solution
> First,
>
> $$
> (A^2)^{\mathsf T}=(A^{\mathsf T})^2=(-A)^2=A^2,
> $$
>
> so $A^2$ is symmetric. Also $A^{\mathsf T}A=-A^2$. Therefore for $X\ne0$,
>
> $$
> X^{\mathsf T}A^2X
> =-X^{\mathsf T}A^{\mathsf T}AX
> =-\lVert AX\rVert^2<0,
> $$
>
> where strict inequality uses invertibility of $A$. Hence $A^2$ is negative definite.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- Without invertibility, the same calculation gives negative semidefiniteness.
- **Source status:** Verified at [S1, Ch. 8, §8, Ex. 8.1, printed p. 258, PDF p. 270]. The proof is independent.

