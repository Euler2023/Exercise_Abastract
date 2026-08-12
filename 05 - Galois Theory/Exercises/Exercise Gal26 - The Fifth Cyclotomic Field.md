---
title: "Exercise Gal26: The Fifth Cyclotomic Field"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.9, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal26: The Fifth Cyclotomic Field

## Problem Statement

> [!question] Exercise 7.9
> Let $\zeta=e^{2\pi i/5}$. Prove $K=\mathbb Q(\zeta)$ splits $x^5-1$, find $[K:\mathbb Q]$, and without the Main Theorem prove it is Galois and determine its group.

## Hints

> [!hint]- Hint 1
> Use $\Phi_5(x)=x^4+x^3+x^2+x+1$ and send $\zeta$ to $\zeta^a$.

## Solution

> [!success]- Solution
> The roots $1,\zeta,\zeta^2,\zeta^3,\zeta^4$ all lie in $K$. The polynomial $\Phi_5(x+1)$ is Eisenstein at $5$, so $\Phi_5$ is irreducible and $[K:\mathbb Q]=4$.
>
> For each $a\in(\mathbb Z/5\mathbb Z)^\times$, the assignment $\zeta\mapsto\zeta^a$ respects $\Phi_5$ and defines a distinct automorphism. There are four, equal to the field degree, so $K/\mathbb Q$ is Galois and
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong(\mathbb Z/5\mathbb Z)^\times\cong C_4.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

No use of the Main Theorem is made.
