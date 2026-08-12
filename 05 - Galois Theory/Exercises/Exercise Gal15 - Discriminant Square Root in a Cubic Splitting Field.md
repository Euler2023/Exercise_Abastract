---
title: "Exercise Gal15: The Discriminant Square Root of a Cubic"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, discriminant, cubic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 6, Ex. 6.1, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal15: The Discriminant Square Root of a Cubic

## Problem Statement

> [!question] Exercise 6.1
> Let $\alpha$ be a root of $x^3+x+1$ over $\mathbb Q$, and $K$ its splitting field. Is $\sqrt{-31}$ in $\mathbb Q(\alpha)$? Is it in $K$?

## Hints

> [!hint]- Hint 1
> Compute the discriminant and compare degrees.

## Solution

> [!success]- Solution
> The cubic has discriminant $-4-27=-31$, and it is irreducible by the rational-root test. Since the discriminant is not a rational square, its Galois group is $S_3$ and $[K:\mathbb Q]=6$. The Vandermonde element
> $$
> \delta=\prod_{i<j}(\alpha_i-\alpha_j)
> $$
> belongs to $K$ and satisfies $\delta^2=-31$, so $\sqrt{-31}\in K$.
>
> But $[\mathbb Q(\alpha):\mathbb Q]=3$. If it contained the quadratic field $\mathbb Q(\sqrt{-31})$, the tower law would make $2\mid3$, impossible. Thus $\sqrt{-31}\notin\mathbb Q(\alpha)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

All conclusions are independently derived.
