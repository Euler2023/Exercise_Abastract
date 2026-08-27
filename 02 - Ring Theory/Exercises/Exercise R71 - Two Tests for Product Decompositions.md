---
title: "Exercise R71: Two Tests for Product Decompositions"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - product-rings
  - finite-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.2, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R71: Two Tests for Product Decompositions

## Problem Statement

> [!question] Exercise 6.2
> Is $\mathbb Z/(6)$ isomorphic to $\mathbb Z/(2)\times\mathbb Z/(3)$? Is $\mathbb Z/(8)$ isomorphic to $\mathbb Z/(2)\times\mathbb Z/(4)$?

## Hints

> [!hint]- Hint 1
> Use the Chinese remainder theorem for the first pair and compare additive groups for the second.

## Solution

> [!success]- Solution
> Since $(2)+(3)=\mathbb Z$, the Chinese remainder map
>
> $$
> \mathbb Z/6\mathbb Z\longrightarrow
> \mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z
> $$
>
> is an isomorphism.
>
> The second pair is not isomorphic. The additive group of $\mathbb Z/8\mathbb Z$ is cyclic of order $8$, while every element of the additive group $\mathbb Z/2\times\mathbb Z/4$ has order at most $4$. A ring isomorphism would induce an additive-group isomorphism, so none exists.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Duplicate boundary:** This is distinct from the earlier constructive congruence exercise R28: here the second comparison is obstructed by additive structure.
- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.2, printed p. 356, PDF p. 368]. The proof is independent.

