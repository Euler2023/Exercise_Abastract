---
title: "Exercise Gal32: A Cubic Root inside Another Cubic Field"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, cubic-fields]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 8, Ex. 8.4, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal32: A Cubic Root inside Another Cubic Field

## Problem Statement

> [!question] Exercise 8.4
> Let $K=\mathbb Q(\alpha)$, where $\alpha^3+2\alpha+1=0$, and $g(x)=x^3+x+1$. Does $g$ have a root in $K$?

## Hints

> [!hint]- Hint 1
> If it did, the two degree-three fields would coincide; compare their normal closures or discriminant quadratic fields.

## Solution

> [!success]- Solution
> Both cubics are irreducible by the rational-root test. If $g$ had a root $\beta\in K$, then $[\mathbb Q(\beta):\mathbb Q]=3=[K:\mathbb Q]$, so $K=\mathbb Q(\beta)$. Isomorphic cubic fields have isomorphic normal closures and hence the same quadratic resolvent field.
>
> The discriminants are
> $$
> \Delta(x^3+2x+1)=-59,\qquad \Delta(x^3+x+1)=-31.
> $$
> Their normal closures have distinct quadratic subfields $\mathbb Q(\sqrt{-59})$ and $\mathbb Q(\sqrt{-31})$. Therefore the cubic fields cannot coincide, and $g$ has no root in $K$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]

## Notes

The discriminant-square-class invariant rules out the embedding.
