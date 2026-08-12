---
title: "Exercise Gal19: Counting Intermediate Fields for C2 x C12"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, galois-correspondence]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.2, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal19: Counting Intermediate Fields for $C_2\times C_{12}$

## Problem Statement

> [!question] Exercise 7.2
> If $G(K/F)\cong C_2\times C_{12}$, how many intermediate $L$ satisfy (a) $[L:F]=4$, (b) $[L:F]=9$, (c) $G(K/L)\cong C_4$?

## Hints

> [!hint]- Hint 1
> Decompose the group into its 2- and 3-primary parts.

## Solution

> [!success]- Solution
> Write
> $$
> G\cong(C_2\times C_4)\times C_3.
> $$
> By Galois correspondence, (a) asks for subgroups of index $4$, hence order $6$. Such a subgroup is $C_3$ times an order-two subgroup of $C_2\times C_4$; there are three, so the answer is $3$.
>
> (b) Index $9$ would require a subgroup of order $24/9$, impossible; answer $0$.
>
> (c) Cyclic order-four subgroups lie in $C_2\times C_4$. Its elements of order $4$ are $(0,\pm1)$ and $(1,\pm1)$, producing two cyclic subgroups. Answer $2$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

All subgroup counts are explicit.
