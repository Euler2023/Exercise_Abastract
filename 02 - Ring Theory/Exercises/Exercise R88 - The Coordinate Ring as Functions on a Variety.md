---
title: "Exercise R88: The Coordinate Ring as Functions on a Variety"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - coordinate-rings
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.2, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R88: The Coordinate Ring as Functions on a Variety

## Problem Statement

> [!question] Exercise 9.2
> Let $f_1,\ldots,f_r\in\mathbb C[x_1,\ldots,x_n]$, let $V$ be their common zero variety, and let $I=(f_1,\ldots,f_r)$. Define a homomorphism from $\mathcal R=\mathbb C[x_1,\ldots,x_n]/I$ to the ring of continuous complex-valued functions on $V$.

## Hints

> [!hint]- Hint 1
> Send the residue class of a polynomial to its restriction to $V$.

## Solution

> [!success]- Solution
> Define
>
> $$
> \Phi:\mathcal R\to C(V,\mathbb C),
> \qquad [g]\mapsto\bigl(p\mapsto g(p)\bigr).
> $$
>
> If $[g]=[h]$, then $g-h\in I$, so $g-h$ is a polynomial combination of the $f_i$ and vanishes on $V$. Thus the map is well defined. Polynomial functions are continuous, and evaluation preserves sums, products, and $1$, so $\Phi$ is a ring homomorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Notes

- **Injectivity boundary:** The map need not be injective unless $I$ is the full vanishing ideal $I(V)$, equivalently radical by the Nullstellensatz.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.2, printed p. 357, PDF p. 369]. The map and well-definedness check are independent.

