---
title: "Exercise Gal39: Discriminant and Galois Group of x4 + 1"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.6, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal39: Discriminant and Galois Group of $x^4+1$

## Problem Statement

> [!question] Exercise 9.6
> Compute the discriminant of $x^4+1$, and determine its Galois group over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> The roots are primitive eighth roots of unity.

## Solution

> [!success]- Solution
> The formula for $x^4+px+q$ gives $\Delta=256q^3-27p^4=256$. Its splitting field is $\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)$, of degree $4$. Therefore
> $$
> \operatorname{Gal}(\mathbb Q(\zeta_8)/\mathbb Q)\cong(\mathbb Z/8\mathbb Z)^\times\cong C_2\times C_2=D_2.
> $$
> The square discriminant is consistent with the group lying in $A_4$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

Independent computation.
