---
title: "Exercise Gal66: Automorphisms of R and Continuous Automorphisms of C"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, automorphisms]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.4, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal66: Automorphisms of $\mathbb R$ and Continuous Automorphisms of $\mathbb C$

## Problem Statement

> [!question] Exercise M.4
> (a) Prove $\mathbb R$ has no automorphism except the identity. (b) Prove the only continuous automorphisms of $\mathbb C$ are identity and complex conjugation.

## Hints

> [!hint]- Hint 1
> Field automorphisms preserve squares and therefore order.

## Solution

> [!success]- Solution
> An automorphism of $\mathbb R$ fixes $\mathbb Q$. Since nonnegative reals are precisely the squares, it preserves positivity and hence order. For any $x\in\mathbb R$, rational sequences $q_n\uparrow x$, $r_n\downarrow x$ give $q_n\le\sigma(x)\le r_n$, so $\sigma(x)=x$.
>
> A continuous automorphism $\tau$ of $\mathbb C$ fixes $\mathbb Q$, hence by continuity fixes $\mathbb R$. Since $\tau(i)^2=-1$, $\tau(i)=i$ or $-i$. Therefore $\tau(a+bi)=a+bi$ or $a-bi$: identity or complex conjugation.

## Related Concepts

- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

Continuity is essential for $\mathbb C$; choice-based discontinuous automorphisms exist.
