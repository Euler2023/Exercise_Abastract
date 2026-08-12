---
title: "Exercise Gal46: Degrees of Sums of Thirteenth Roots"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.4, printed p. 509, PDF p. 521"
created: 2026-08-12
---

# Exercise Gal46: Degrees of Sums of Thirteenth Roots

## Problem Statement

> [!question] Exercise 10.4
> Let $\zeta=\zeta_{13}$. Determine the degrees over $\mathbb Q$ of the seven sums listed in parts (a)–(g) of the source.

## Hints

> [!hint]- Hint 1
> Use stabilizers of exponent subsets under $(\mathbb Z/13)^\times$.

## Solution

> [!success]- Solution
> For the exponent sets
> $$
> \{1,12\},\{1,2\},\{1,5,8\},\{2,5,6\},\{1,5,8,12\},\{1,2,5,12\},\{1,3,4,9,10,12\},
> $$
> the stabilizer orders in $(\mathbb Z/13)^\times$ are respectively
> $$
> 2,1,1,3,4,1,6.
> $$
> Since the full group has order $12$, the required degrees are
> $$
> \boxed{6,\ 12,\ 12,\ 4,\ 3,\ 12,\ 2}.
> $$
> Equality of the relevant subset sums would force equality of exponent indicators modulo the cyclotomic relation, so orbit-stabilizer applies without accidental collapses.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The seven exponent sets were transcribed from the source page and the stabilizers checked exactly modulo $13$.
