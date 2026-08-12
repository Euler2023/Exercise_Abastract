---
title: "Exercise Gal42: Quartic Trinomials, Resolvents, and Constructibility"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, quartic-polynomials, constructibility]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.9, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal42: Quartic Trinomials, Resolvents, and Constructibility

## Problem Statement

> [!question] Exercise 9.9
> (a) Determine the discriminant and resolvent cubic of $x^4+rx+s$. (b) Determine the Galois groups of $x^4+8x+12$ and $x^4+8x-12$. (c) Are the roots of $x^4+x-5$ ruler-and-compass constructible?

## Hints

> [!hint]- Hint 1
> Specialize the general resolvent and use its factorization.

## Solution

> [!success]- Solution
> The formulas are
> $$
> \Delta=256s^3-27r^4,\qquad g(y)=y^3-4sy-r^2.
> $$
> For $x^4+8x+12$, $g=y^3-48y-64=(y-8)(y^2+8y+8)$, and $\Delta=331776=576^2$. The quartic is irreducible, so the table gives $G=D_2$.
>
> For $x^4+8x-12$, reduction modulo $7$ is irreducible, so the quartic is irreducible over $\mathbb Q$. Its resolvent $g=y^3+48y-64$ is irreducible by the rational-root test, while $\Delta=-552960$ is not a square; hence $G=S_4$.
>
> For $x^4+x-5$, reduction modulo $2$ is irreducible. The resolvent $y^3+20y-1$ is irreducible and $\Delta=-32027$ is nonsquare, so $G=S_4$. Since $S_4$ is not a 2-group, its roots are not constructible by ruler and compass.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass Constructions]]

## Notes

Irreducibility uses the rational-root test for the resolvents and reduction/coefficient comparison for the quartics.
