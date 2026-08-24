---
title: "Exercise LA216: Gram-Schmidt in R3"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gram-schmidt
  - orthonormal-bases
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.7, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA216: Gram-Schmidt in R3

## Problem Statement

> [!question] Exercise 4.7
> Apply the Gram-Schmidt procedure to the basis $(1,1,0)^{\mathsf T}$, $(1,0,1)^{\mathsf T}$, $(0,1,1)^{\mathsf T}$ of $\mathbb R^3$.

## Hints

> [!hint]- Hint 1
> Normalize the first vector, then subtract its projection from the second.

> [!hint]- Hint 2
> A convenient final orthogonal triple is $(1,1,0)$, $(1,-1,2)$, $(-1,1,1)$.

## Solution

> [!success]- Solution
> Put $v_1=(1,1,0)^{\mathsf T}$, $v_2=(1,0,1)^{\mathsf T}$, and $v_3=(0,1,1)^{\mathsf T}$. First,
>
> $$
> e_1=\frac{v_1}{\lVert v_1\rVert}=\frac1{\sqrt2}(1,1,0)^{\mathsf T}.
> $$
>
> The second orthogonal vector is
>
> $$
> u_2=v_2-\frac{v_1\cdot v_2}{v_1\cdot v_1}v_1
> =\frac12(1,-1,2)^{\mathsf T},
> $$
>
> so $e_2=(1,-1,2)^{\mathsf T}/\sqrt6$. Subtracting the projections of $v_3$ onto the first two directions gives
>
> $$
> u_3=v_3-(v_3\cdot e_1)e_1-(v_3\cdot e_2)e_2
> =\frac23(-1,1,1)^{\mathsf T}.
> $$
>
> Therefore
>
> $$
> \boxed{
> e_1=\frac{(1,1,0)^{\mathsf T}}{\sqrt2},
> \quad
> e_2=\frac{(1,-1,2)^{\mathsf T}}{\sqrt6},
> \quad
> e_3=\frac{(-1,1,1)^{\mathsf T}}{\sqrt3}}
> $$
>
> is the orthonormal basis produced by Gram-Schmidt.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- Multiplying an intermediate orthogonal vector by a nonzero scalar before normalization does not change the final direction.
- **Source status:** The three input vectors were visually verified at [S1, Ch. 8, §4, Ex. 4.7, printed p. 255, PDF p. 267]. The computation is independent.

