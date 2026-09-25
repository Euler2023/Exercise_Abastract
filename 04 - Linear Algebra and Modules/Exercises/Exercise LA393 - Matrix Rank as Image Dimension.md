---
title: "Exercise LA393: Matrix Rank as Image Dimension"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-rank
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 1, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA393: Matrix Rank as Image Dimension

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 1
> Interpret the rank of a matrix $A$ in terms of the dimensions of the image and kernel of the linear map $L_A$.

## Hints

> [!hint]- Hint 1
> Apply $L_A$ to the standard basis vectors. Which vectors do you obtain?

> [!hint]- Hint 2
> Use rank-nullity for the domain of $L_A$.

## Solution

> [!success]- Independent derivation
> Let $A$ be an $m\times n$ matrix over a field $k$, and let $L_A:k^n\to k^m$ be $x\mapsto Ax$. Its image is the span of the columns $Ae_1,\ldots,Ae_n$ of $A$. Therefore the column rank of $A$ is exactly $\dim_k\operatorname{im}L_A$. Rank-nullity gives
> $$
> \operatorname{rank}A=\dim_k\operatorname{im}L_A=n-\dim_k\ker L_A.
> $$
> In particular, the kernel dimension is the number of columns minus the rank, rather than the number of rows minus the rank.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- The problem statement was checked against [S2, Ch. XIII, Exercise 1, printed p. 545, PDF p. 560]. The solution is independently derived in this vault.
- Lang leaves the size and coefficient field of $A$ implicit; the usual rank and dimension interpretation uses a matrix over a field.
