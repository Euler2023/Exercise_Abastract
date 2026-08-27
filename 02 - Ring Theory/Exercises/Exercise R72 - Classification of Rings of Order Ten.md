---
title: "Exercise R72: Classification of Rings of Order Ten"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-rings
  - characteristic
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.3, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R72: Classification of Rings of Order Ten

## Problem Statement

> [!question] Exercise 6.3
> Classify rings of order $10$.

## Hints

> [!hint]- Hint 1
> The characteristic divides the order. Characteristics $2$ and $5$ would make the additive group a vector space over a finite field.

## Solution

> [!success]- Solution
> Let $R$ be a ring with identity and $|R|=10$. Its characteristic divides $10$. It cannot be $2$: then the additive group would be an $\mathbb F_2$-vector space and have order a power of $2$. Likewise it cannot be $5$. Hence $\operatorname{char}R=10$.
>
> The canonical homomorphism $\mathbb Z/10\mathbb Z\to R$ is injective because its kernel is determined by the characteristic. Both rings have ten elements, so it is bijective. Thus, up to isomorphism, the only ring of order $10$ is
>
> $$
> \mathbb Z/10\mathbb Z\cong\mathbb F_2\times\mathbb F_5.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Convention boundary:** The classification uses Artin's unital, commutative ring convention.
- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.3, printed p. 356, PDF p. 368]. The characteristic argument is independent.

