---
title: "Exercise R25: The Decimal Digit-Sum Test Modulo 9"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - decimal-expansion
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.3, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R25: The Decimal Digit-Sum Test Modulo 9

## Problem Statement

> [!question] Exercise 9.3
> Prove that every integer is congruent modulo $9$ to the sum of its decimal digits.

## Hints

> [!hint]- Hint 1
> Use $10\equiv1\pmod9$.

## Solution

> [!success]- Solution
> If $a=\sum_{k=0}^m d_k10^k$ is its decimal expansion, then $10^k\equiv1\pmod9$ for every $k$. Therefore
> 
> $$
> a\equiv\sum_{k=0}^m d_k\pmod9,
> $$
> 
> which is the digit-sum rule.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.3, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
