---
title: "Exercise LA201: Symmetric and Skew Decomposition"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 1, Ex. 1.1, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA201: Symmetric and Skew Decomposition

## Problem Statement

> [!question] Exercise 1.1
> Show that a bilinear form $(\ ,\ )$ on a real vector space $V$ is a sum of a symmetric form and a skew-symmetric form.

## Hints

> [!hint]- Hint 1
> Compare $(v,w)$ with the transposed form $(w,v)$.

> [!hint]- Hint 2
> Take the half-sum and half-difference of the two expressions.

## Solution

> [!success]- Solution
> Let $B(v,w)=(v,w)$. Define
>
> $$
> S(v,w)=\frac{B(v,w)+B(w,v)}2,
> \qquad
> K(v,w)=\frac{B(v,w)-B(w,v)}2.
> $$
>
> Because $B$ is bilinear and the ground field is $\mathbb R$, both $S$ and $K$ are bilinear. Moreover,
>
> $$
> S(w,v)=S(v,w),
> \qquad
> K(w,v)=-K(v,w).
> $$
>
> Thus $S$ is symmetric and $K$ is skew-symmetric. Finally,
>
> $$
> S(v,w)+K(v,w)=B(v,w),
> $$
>
> so $B=S+K$.
>
> The decomposition is also unique: if $B=S_1+K_1$ with $S_1$ symmetric and $K_1$ skew-symmetric, transposing and adding or subtracting recovers exactly the displayed half-sum and half-difference.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Division by $2$ is essential. The same formula works over any field of characteristic different from $2$, but not unchanged in characteristic $2$.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §1, Ex. 1.1, printed p. 254, PDF p. 266]. The solution is an independent derivation.

