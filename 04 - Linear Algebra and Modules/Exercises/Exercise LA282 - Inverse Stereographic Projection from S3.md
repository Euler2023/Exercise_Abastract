---
title: "Exercise LA282: Inverse Stereographic Projection from S3"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - stereographic-projection
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 2, Ex. 2.1, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA282: Inverse Stereographic Projection from S3

## Problem Statement

> [!question] Exercise 2.1
> Compute the formula for the inverse of the stereographic projection
>
> $$
> \pi:S^3\longrightarrow\mathbb R^3.
> $$

## Hints

> [!hint]- Hint 1
> Write a point of the line through the north pole $p=(1,0,0,0)$ and $(0,v_1,v_2,v_3)$.

> [!hint]- Hint 2
> Impose the unit-sphere equation and solve for the line parameter.

## Solution

> [!success]- Solution
> Let $v=(v_1,v_2,v_3)\in\mathbb R^3$ and put $r^2=\lVert v\rVert^2$. A point on the line through the north pole $p=(1,0,0,0)$ and $(0,v)$ is
>
> $$
> q(t)=(1-t,tv_1,tv_2,tv_3).
> $$
>
> Besides $t=0$, which gives the north pole, the condition $q(t)\in S^3$ is
>
> $$
> (1-t)^2+t^2r^2=1,
> $$
>
> so $t=2/(1+r^2)$. Therefore
>
> $$
> \boxed{\pi^{-1}(v)=
> \left(
> \frac{r^2-1}{r^2+1},
> \frac{2v_1}{r^2+1},
> \frac{2v_2}{r^2+1},
> \frac{2v_3}{r^2+1}
> \right)}.
> $$
>
> Substitution gives
>
> $$
> 1-x_0=\frac{2}{1+r^2},
> \qquad
> \frac{x_i}{1-x_0}=v_i,
> $$
>
> so this is indeed the inverse of Artin's projection away from the north pole. As $r\to\infty$, the inverse image tends to the north pole.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source status:** The projection convention and exercise statement were visually verified at [S1, Ch. 9, §9.2 and Ex. 2.1, printed pp. 263–264 and 284, PDF pp. 275–276 and 296]. The inverse calculation is independent.

