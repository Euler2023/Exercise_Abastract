---
title: "Exercise Gal68: Galois Orbit of a Regular Pentagon"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - cyclotomic-extensions
  - geometry
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.6, printed p. 511, PDF p. 523
created: 2026-08-12
---

# Exercise Gal68: Galois Orbit of a Regular Pentagon

## Problem Statement

> [!question] Exercise M.6
> Let $K=\mathbb Q(\zeta_5)$. (a) Find the Galois orbit of the regular pentagon with vertices $1,\zeta,\ldots,\zeta^4$. (b) If $\alpha$ is its side length, prove $\alpha^2\in K$ and find the irreducible equation of $\alpha$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Automorphisms replace step $1$ around the vertices by step $a$; compute $|1-\zeta|^2$.

## Solution

> [!success]- Solution
> The automorphisms $a=1,4$ preserve the ordinary pentagon (opposite orientations), while $a=2,3$ send its edges to the diagonals, producing the pentagram. Thus the orbit has two polygons: the pentagon and pentagram.
>
> The side length satisfies
> $$
> \alpha^2=(1-\zeta)(1-\zeta^{-1})=2-\zeta-\zeta^{-1}\in K.
> $$
> Since $\zeta+\zeta^{-1}=(\sqrt5-1)/2$,
> $$
> \alpha^2=\frac{5-\sqrt5}{2}.
> $$
> Therefore $\alpha$ satisfies
> $$
> \boxed{x^4-5x^2+5=0}.
> $$
> The quadratic value $(5-\sqrt5)/2$ is not a square in $\mathbb Q(\sqrt5)$ (its norm is $5$), so $\alpha$ has degree $4$ and the polynomial is irreducible.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

No source figure is required: the polygon is completely specified by its vertices and edge step.
