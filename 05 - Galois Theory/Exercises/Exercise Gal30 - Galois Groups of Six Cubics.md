---
title: "Exercise Gal30: Galois Groups of Six Cubics"
topic: galois-theory
difficulty: advanced
status: completed
tags:
  - exercise
  - galois-theory
  - cubic-polynomials
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 8, Ex. 8.2, printed p. 508, PDF p. 520
created: 2026-08-12
---

# Exercise Gal30: Galois Groups of Six Cubics

## Problem Statement

> [!question] Exercise 8.2
> Determine over $\mathbb Q$ the Galois groups of (a) $x^3-2$, (b) $x^3+3x+14$, (c) $x^3-3x^2+1$, (d) $x^3-21x+7$, (e) $x^3+x^2-2x-1$, (f) $x^3+x^2-2x+1$.

## Hints

> [!hint]- Hint 1
> For an irreducible cubic, the group is $A_3$ iff its discriminant is a square.

## Solution

> [!success]- Solution
> The rational-root test proves (a), (c), (d), (e), and (f) irreducible. Polynomial (b) factors:
> $$
> x^3+3x+14=(x+2)(x^2-2x+7).
> $$
> Its splitting field is $\mathbb Q(\sqrt{-6})$, so its group is $C_2$. For the five irreducible cubics, the discriminants are
> $$
> -108,\quad81,\quad35721=189^2,\quad49,\quad-31.
> $$
> Hence the six answers are
> $$
> \boxed{S_3,\ C_2,\ C_3,\ C_3,\ C_3,\ S_3}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

The factorization and discriminants were verified by exact polynomial arithmetic.
