---
title: "Exercise LA224: Projection onto a Plane in R3"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.15, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA224: Projection onto a Plane in R3

## Problem Statement

> [!question] Exercise 4.15
> Let $W$ be the subspace of $\mathbb R^3$ spanned by the vectors $(1,1,0)^{\mathsf T}$ and $(0,1,1)^{\mathsf T}$. Determine the orthogonal projection of the vector $(1,0,0)^{\mathsf T}$ to $W$.

## Hints

> [!hint]- Hint 1
> Write the projection as $cu+dv$ in the two spanning vectors.

> [!hint]- Hint 2
> Require the residual to be orthogonal to both $u$ and $v$.

## Solution

> [!success]- Solution
> Let
>
> $$
> u=(1,1,0)^{\mathsf T},
> \qquad
> v=(0,1,1)^{\mathsf T},
> \qquad
> x=(1,0,0)^{\mathsf T}.
> $$
>
> Write $\pi_W(x)=cu+dv$. Orthogonality of $x-cu-dv$ to $u$ and $v$ gives
>
> $$
> \begin{pmatrix}u\cdot u&u\cdot v\\v\cdot u&v\cdot v\end{pmatrix}
> \begin{pmatrix}c\\d\end{pmatrix}
> =\begin{pmatrix}u\cdot x\\v\cdot x\end{pmatrix},
> $$
>
> hence
>
> $$
> \begin{pmatrix}2&1\\1&2\end{pmatrix}
> \begin{pmatrix}c\\d\end{pmatrix}
> =\begin{pmatrix}1\\0\end{pmatrix}.
> $$
>
> Solving gives $c=2/3$ and $d=-1/3$. Therefore
>
> $$
> \boxed{\pi_W(x)=\frac23u-\frac13v
> =\begin{pmatrix}2/3\\1/3\\-1/3\end{pmatrix}}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- The two spanning vectors are not orthogonal, so applying the one-vector projection formula separately would be incorrect.
- **Source status:** The vectors were visually verified at [S1, Ch. 8, §4, Ex. 4.15, printed p. 255, PDF p. 267]. The computation is independent.

