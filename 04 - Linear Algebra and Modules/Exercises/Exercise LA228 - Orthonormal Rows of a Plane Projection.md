---
title: "Exercise LA228: Orthonormal Rows of a Plane Projection"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - orthonormal-bases
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.19, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA228: Orthonormal Rows of a Plane Projection

## Problem Statement

> [!question] Exercise 4.19
> Let $W$ be a two-dimensional subspace of $\mathbb R^3$, and consider the orthogonal projection $\pi$ of $\mathbb R^3$ onto $W$. Let $(a_i,b_i)^{\mathsf T}$ be the coordinate vector of $\pi(e_i)$ with respect to a chosen orthonormal basis of $W$. Prove that $(a_1,a_2,a_3)$ and $(b_1,b_2,b_3)$ are orthogonal unit vectors.

## Hints

> [!hint]- Hint 1
> Call the chosen orthonormal basis of $W$ $(w_1,w_2)$.

> [!hint]- Hint 2
> The coordinates of $\pi(e_i)$ are $w_1\cdot e_i$ and $w_2\cdot e_i$.

## Solution

> [!success]- Solution
> Let $(w_1,w_2)$ be the chosen orthonormal basis of $W$. The projection formula gives
>
> $$
> \pi(e_i)=(w_1\cdot e_i)w_1+(w_2\cdot e_i)w_2.
> $$
>
> Therefore
>
> $$
> a_i=w_1\cdot e_i,
> \qquad
> b_i=w_2\cdot e_i.
> $$
>
> Since $(e_1,e_2,e_3)$ is the standard orthonormal basis, the row vectors
>
> $$
> a=(a_1,a_2,a_3),
> \qquad
> b=(b_1,b_2,b_3)
> $$
>
> are exactly the standard coordinate vectors of $w_1$ and $w_2$. Hence
>
> $$
> a\cdot a=w_1\cdot w_1=1,
> \qquad
> b\cdot b=w_2\cdot w_2=1,
> \qquad
> a\cdot b=w_1\cdot w_2=0.
> $$
>
> Thus $a$ and $b$ are orthogonal unit vectors.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- In matrix language, if the coordinate matrix of the projection is $Q\in M_{2\times3}(\mathbb R)$, the conclusion is $QQ^{\mathsf T}=I_2$.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.19, printed p. 255, PDF p. 267]. The proof is independent.

