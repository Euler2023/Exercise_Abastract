---
title: "Exercise Gal16: The Galois Group of a Triradical Field"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, multiquadratic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 6, Ex. 6.2, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal16: The Galois Group of a Triradical Field

## Problem Statement

> [!question] Exercise 6.2
> Let $K=\mathbb Q(\sqrt2,\sqrt3,\sqrt5)$. Determine its degree, prove it is Galois, and determine its Galois group.

## Hints

> [!hint]- Hint 1
> Prove the three square classes are independent in $\mathbb Q^\times/\mathbb Q^{\times2}$.

## Solution

> [!success]- Solution
> If $2^a3^b5^c$ is a rational square with $a,b,c\in\{0,1\}$, unique factorization forces $a=b=c=0$. Thus the three square classes are independent and $[K:\mathbb Q]=2^3=8$.
>
> The field is the splitting field of $(x^2-2)(x^2-3)(x^2-5)$, hence is Galois. Each independent choice of signs of the three square roots defines an automorphism. Therefore
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong C_2^3.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The sign-change description is complete because it gives eight automorphisms.
