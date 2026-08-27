---
title: "Exercise R94: Ideals Above Four Affine Points"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - product-rings
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.8, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R94: Ideals Above Four Affine Points

## Problem Statement

> [!question] Exercise 9.8
> Which ideals in $\mathbb C[x,y]$ contain $x^2+y^2-5$ and $xy-2$?

## Hints

> [!hint]- Hint 1
> Invert $x$ using $xy=2$ and factor the remaining polynomial in $x$.

## Solution

> [!success]- Solution
> Let $I=(x^2+y^2-5,xy-2)$. In the quotient by $xy-2$, $x$ is a unit and $y=2x^{-1}$. The other relation becomes, up to the unit $x^{-2}$,
>
> $$
> x^4-5x^2+4=(x^2-1)(x^2-4).
> $$
>
> Its roots $1,-1,2,-2$ are distinct and nonzero. Therefore
>
> $$
> \mathbb C[x,y]/I\cong\mathbb C^4,
> $$
>
> corresponding to the points
>
> $$
> (1,2),\ (-1,-2),\ (2,1),\ (-2,-1).
> $$
>
> Let their maximal ideals be $\mathfrak m_1,\ldots,\mathfrak m_4$. Every ideal containing $I$ is uniquely
>
> $$
> \bigcap_{i\in T}\mathfrak m_i
> $$
>
> for a subset $T\subseteq\{1,2,3,4\}$, with the empty intersection interpreted as the whole ring. Hence there are exactly $2^4=16$ such ideals, and $I=\bigcap_{i=1}^4\mathfrak m_i$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.8, printed p. 358, PDF p. 370]. The localization and CRT classification are independent.

