---
title: "Exercise LA233: Householder Reflections"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - reflections
  - orthogonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.3, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA233: Householder Reflections

## Problem Statement

> [!question] Exercise 5.3
> Let $w\in\mathbb R^n$ be a vector of length $1$, and let $U=w^\perp$. The reflection $r_w$ about $U$ is defined by writing $v=cw+u$ with $u\in U$ and setting $r_w(v)=-cw+u$.
>
> **(a)** Prove that $P=I-2ww^{\mathsf T}$ is orthogonal.
>
> **(b)** Prove that multiplication by $P$ is reflection about $U$.
>
> **(c)** Let $u,v$ be vectors of equal length in $\mathbb R^n$. Determine a vector $w$ such that $Pu=v$.

## Hints

> [!hint]- Hint 1
> Use $w^{\mathsf T}w=1$ to compute $P^2$.

> [!hint]- Hint 2
> For $u\ne v$, normalize the difference $u-v$.

## Solution

> [!success]- Solution
> **(a)** The matrix is symmetric, and
>
> $$
> P^{\mathsf T}P=P^2
> =(I-2ww^{\mathsf T})^2
> =I-4ww^{\mathsf T}+4w(w^{\mathsf T}w)w^{\mathsf T}=I.
> $$
>
> Thus $P$ is orthogonal.
>
> **(b)** If $x=cw+z$ with $z\perp w$, then $w^{\mathsf T}x=c$ and
>
> $$
> Px=x-2w(w^{\mathsf T}x)=cw+z-2cw=-cw+z.
> $$
>
> Hence $P$ is precisely the reflection about $U$.
>
> **(c)** If $u\ne v$, take
>
> $$
> \boxed{w=\frac{u-v}{\lVert u-v\rVert}}.
> $$
>
> Since $\lVert u\rVert=\lVert v\rVert$,
>
> $$
> 2w(w^{\mathsf T}u)=u-v,
> $$
>
> and therefore $Pu=u-(u-v)=v$.
>
> If $u=v$, any unit vector $w\perp u$ gives $Pu=u$ whenever such a vector exists; if $u=v=0$, every unit $w$ works.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations Reflections and Glide Reflections]]

## Notes

- In the exceptional one-dimensional case $n=1$ with $u=v\ne0$, no hyperplane reflection of the displayed form fixes $u$; the usual formula in part (c) is intended for $u\ne v$.
- **Source status:** Visually verified at [S1, Ch. 8, §5, Ex. 5.3, printed p. 256, PDF p. 268]. The proof and edge-case clarification are independent.

