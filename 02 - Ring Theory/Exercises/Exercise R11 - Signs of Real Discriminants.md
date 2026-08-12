---
title: "Exercise R11: Signs of Real Discriminants"
topic: ring-theory
difficulty: intermediate
status: not-started
tags: [exercise, ring-theory, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.2, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R11: Signs of Real Discriminants

## Problem Statement

> [!question] Exercise 2.2
> (a) Prove the discriminant of a real cubic is nonnegative iff it has three real roots. (b) If a real quartic has positive discriminant, what can be said about its real roots?

## Hints

> [!hint]- Hint 1
> Group nonreal roots into conjugate pairs.

## Solution

> [!success]- Solution
> For a real polynomial with simple roots, the discriminant has sign $(-1)^r$, where $r$ is the number of nonreal conjugate pairs: each pair $z,\bar z$ contributes $(z-\bar z)^2<0$, while all remaining conjugate products are positive. Multiple roots give discriminant $0$.
>
> A cubic has either three real roots ($r=0$) or one real root and one nonreal pair ($r=1$); this proves (a), including repeated real roots. A quartic with positive discriminant has $r=0$ or $2$, so it has either four real roots or no real roots.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

Roots are counted with multiplicity; positivity guarantees simplicity.
