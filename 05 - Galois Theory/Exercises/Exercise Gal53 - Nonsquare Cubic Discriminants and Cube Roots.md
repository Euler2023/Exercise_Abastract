---
title: "Exercise Gal53: Nonsquare Cubic Discriminants and Cube Roots"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, kummer-extensions, cubic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 11, Ex. 11.1, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal53: Nonsquare Cubic Discriminants and Cube Roots

## Problem Statement

> [!question] Exercise 11.1
> If an irreducible cubic over $F$ has nonsquare discriminant, prove its roots cannot be obtained by adjoining one cube root to $F$.

## Hints

> [!hint]- Hint 1
> A degree-three radical extension containing all roots would be a splitting field of degree at most three.

## Solution

> [!success]- Solution
> Assume the cubic is separable and $\operatorname{char}F\ne2$. A nonsquare discriminant makes its splitting field $K/F$ have group $S_3$ and degree $6$. If all roots were obtained by adjoining one cube root, they would lie in a field $E=F(\beta)$ with $\beta^3\in F$. But $[E:F]\le3$, while $K\subseteq E$ would force $6=[K:F]\mid[E:F]$, impossible. Thus one cube-root adjunction cannot contain all the roots.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

No roots-of-unity hypothesis is needed for this degree obstruction. The conclusion concerns adjoining one cube root and obtaining all three roots, not taking the normal closure of a pure cubic extension.
