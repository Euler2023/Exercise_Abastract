---
title: "Exercise LA280: Maximal Pairwise Obtuse Sets"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - inner-product
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.14, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA280: Maximal Pairwise Obtuse Sets

## Problem Statement

> [!question] Miscellaneous Problem M.14
> What is the largest number of vectors in an $n$-dimensional real inner-product space such that the inner product of every two distinct vectors is negative? Prove your answer.

## Hints

> [!hint]- Hint 1
> For the upper bound, if there are more than $n+1$ vectors, apply linear dependence to the augmented vectors $(v_i,1)$.

> [!hint]- Hint 2
> A regular simplex centered at the origin gives the sharp example.

## Solution

> [!success]- Solution
> The maximum is $\boxed{n+1}$.
>
> For the upper bound, suppose $v_1,\ldots,v_k$ have pairwise negative inner products and $k>n+1$. The vectors $(v_i,1)$ in $V\oplus\mathbb R$ are linearly dependent, so there are scalars $c_i$, not all zero, such that
>
> $$
> \sum_i c_iv_i=0,
> \qquad
> \sum_i c_i=0.
> $$
>
> There are both positive and negative coefficients. Let $I_+=\{i:c_i>0\}$ and $I_-=\{j:c_j<0\}$. Then
>
> $$
> x:=\sum_{i\in I_+}c_iv_i
> =\sum_{j\in I_-}(-c_j)v_j.
> $$
>
> Taking the inner product of these two expressions gives
>
> $$
> \lVert x\rVert^2
> =\sum_{i\in I_+}\sum_{j\in I_-}c_i(-c_j)(v_i\cdot v_j)<0,
> $$
>
> a contradiction.
>
> For sharpness, in $\mathbb R^{n+1}$ let
>
> $$
> v_i=e_i-\frac1{n+1}(1,\ldots,1),
> \qquad 1\le i\le n+1.
> $$
>
> These vectors lie in the $n$-dimensional hyperplane whose coordinate sum is zero, and for $i\ne j$,
>
> $$
> v_i\cdot v_j=-\frac1{n+1}<0.
> $$
>
> Thus $n+1$ vectors are attainable.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- The extremal configuration is the vertex set of a regular $n$-simplex centered at the origin.
- **Source status:** The problem was visually verified at [S1, Ch. 8, M.14, printed p. 260, PDF p. 272]. The proof is independent.
