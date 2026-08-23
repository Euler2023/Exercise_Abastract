---
title: "Exercise R26: Solving Two Linear Congruences"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - linear-congruences
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.4, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R26: Solving Two Linear Congruences

## Problem Statement

> [!question] Exercise 9.4
> Solve $2x\equiv5$ modulo $9$ and modulo $6$.

## Hints

> [!hint]- Hint 1
> Modulo $9$, multiply by the inverse of $2$; modulo $6$, check parity.

## Solution

> [!success]- Solution
> Modulo $9$, the inverse of $2$ is $5$, so
> 
> $$
> x\equiv5\cdot5\equiv7\pmod9.
> $$
> 
> Modulo $6$, $2x$ is always even but $5$ is odd. Equivalently $\gcd(2,6)=2$ does not divide $5$. Hence there is no solution modulo $6$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.4, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
