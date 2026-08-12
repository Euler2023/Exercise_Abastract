---
title: "Exercise Gal49: Galois Group of a General Cyclotomic Field"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.7, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal49: Galois Group of a General Cyclotomic Field

## Problem Statement

> [!question] Exercise 10.7
> For $\zeta_n=e^{2\pi i/n}$, $K=\mathbb Q(\zeta_n)$: (a) prove $K/\mathbb Q$ is Galois; (b) inject its group into $(\mathbb Z/n)^\times$; (c) prove bijectivity for $n=6,8,12$.

## Hints

> [!hint]- Hint 1
> Automorphisms send a primitive root to another primitive root.

## Solution

> [!success]- Solution
> The field $K$ is the splitting field of $x^n-1$ in characteristic $0$, so it is Galois. Every automorphism has
> $$
> \sigma(\zeta_n)=\zeta_n^a,\qquad \gcd(a,n)=1.
> $$
> The map $\sigma\mapsto a\bmod n$ is an injective homomorphism.
>
> For $n=6$, $K=\mathbb Q(\sqrt{-3})$ and both units $1,5$ occur. For $n=8$, $K=\mathbb Q(i,\sqrt2)$, and the four independent images $\zeta_8\mapsto\zeta_8^a$, $a=1,3,5,7$, occur. For $n=12$, $K=\mathbb Q(i,\sqrt3)$, and $a=1,5,7,11$ occur. Thus the map is bijective in all three cases.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

The map is in fact bijective for every $n$, as the source remarks.
