---
title: "Exercise G33: Commuting with a Coprime Power"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - orders
  - commutation
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.1, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise G33: Commuting with a Coprime Power

## Problem Statement

> [!question] Exercise 4.1
> Let $a$ have order $7$ and suppose $a^3b=ba^3$. Prove $ab=ba$.

## Hints

> [!hint]- Hint 1
> Express $a$ as a power of $a^3$ modulo $7$.

## Solution

> [!success]- Solution
> Since $3\cdot5\equiv1\pmod7$,
> 
> $$
> a=(a^3)^5.
> $$
> 
> The element $b$ commutes with $a^3$, hence with every power of $a^3$. Therefore it commutes with $(a^3)^5=a$, so $ab=ba$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.1, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
