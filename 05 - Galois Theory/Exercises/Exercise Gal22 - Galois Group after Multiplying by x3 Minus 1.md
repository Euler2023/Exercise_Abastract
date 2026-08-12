---
title: "Exercise Gal22: Galois Groups after Multiplying by x3 - 1"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, composita]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.5, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal22: Galois Groups after Multiplying by $x^3-1$

## Problem Statement

> [!question] Exercise 7.5
> Let $f$ be an irreducible cubic over $\mathbb Q$ with Galois group $S_3$. Determine the possible Galois groups of $(x^3-1)f(x)$.

## Hints

> [!hint]- Hint 1
> The new splitting field is the compositum with $\mathbb Q(\omega)$.

## Solution

> [!success]- Solution
> Let $K$ split $f$. Its unique quadratic subfield is $\mathbb Q(\sqrt{\Delta_f})$, fixed by $A_3$. The splitting field of $x^3-1$ is $E=\mathbb Q(\omega)=\mathbb Q(\sqrt{-3})$.
>
> If $E\subset K$, equivalently $\mathbb Q(\sqrt{\Delta_f})=\mathbb Q(\sqrt{-3})$, the compositum is $K$ and the group is $S_3$. Otherwise $K\cap E=\mathbb Q$, and restriction gives
> $$
> \operatorname{Gal}(KE/\mathbb Q)\cong S_3\times C_2.
> $$
> These are the only possibilities.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The quadratic subfield criterion is the essential intersection calculation.
