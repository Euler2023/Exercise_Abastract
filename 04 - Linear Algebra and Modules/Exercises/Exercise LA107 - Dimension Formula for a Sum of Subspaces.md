---
title: "Exercise LA107: Dimension Formula for a Sum of Subspaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - product-spaces
  - subspace-sums
  - rank-nullity
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §1, Ex. 1.5, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA107: Dimension Formula for a Sum of Subspaces

## Problem Statement

> [!question] Exercise 1.5
> (a) Let $U$ and $W$ be vector spaces over a field $F$. Show that $(u,w)+(u',w')=(u+u',w+w')$ and $c(u,w)=(cu,cw)$ make $U\times W$ into a vector space, called the product space.
>
> (b) If $U,W$ are subspaces of $V$, show that $T:U\times W\to V$, $T(u,w)=u+w$, is linear.
>
> (c) Express the dimension formula for $T$ in terms of dimensions of subspaces of $V$.

## Hints

> [!hint]- Hint 1
> Identify both $\ker T$ and $\operatorname{im}T$.

## Solution

> [!success]- Solution
> (a) Every vector-space axiom holds coordinatewise; the zero is $(0,0)$ and $-(u,w)=(-u,-w)$.
>
> (b) $T(c(u,w)+d(u',w'))=c(u+w)+d(u'+w')$, so $T$ is linear.
>
> (c) Its image is $U+W$. Its kernel consists of $(u,-u)$ with $u\in U\cap W$, hence is isomorphic to $U\cap W$. Since $\dim(U\times W)=\dim U+\dim W$, rank-nullity yields
>
> $$
> \dim(U+W)+\dim(U\cap W)=\dim U+\dim W.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** [S1, Ch. 4, §1, Ex. 1.5, printed p. 126, PDF p. 138]; independent solution.

