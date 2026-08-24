---
title: "Exercise LA211: Projection onto an Orthogonal Hyperplane"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.2, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA211: Projection onto an Orthogonal Hyperplane

## Problem Statement

> [!question] Exercise 4.2
> Let $(\ ,\ )$ be a bilinear form on a real vector space $V$, and let $v$ be a vector such that $(v,v)\ne0$. What is the formula for orthogonal projection to the space $W=v^\perp$ orthogonal to $v$?

## Hints

> [!hint]- Hint 1
> Decompose $x$ as a multiple of $v$ plus a vector orthogonal to $v$.

> [!hint]- Hint 2
> Choose $c$ so that $(v,x-cv)=0$.

## Solution

> [!success]- Solution
> For $x\in V$, set
>
> $$
> c=\frac{(v,x)}{(v,v)}.
> $$
>
> Then
>
> $$
> (v,x-cv)=(v,x)-c(v,v)=0,
> $$
>
> so $x-cv\in v^\perp$. The required projection is therefore
>
> $$
> \boxed{\pi_{v^\perp}(x)=x-\frac{(v,x)}{(v,v)}v}.
> $$
>
> Its difference from $x$ lies in $\operatorname{span}(v)$, which is the orthogonal complement used as the kernel of this projection.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- The hypothesis $(v,v)\ne0$ is essential for this formula and for nondegeneracy on $\operatorname{span}(v)$.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.2, printed p. 254, PDF p. 266]. The solution is independent.

