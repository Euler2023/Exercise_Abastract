---
title: "Exercise R23: When 2 Is Invertible Modulo $n$"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - units
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.1, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R23: When 2 Is Invertible Modulo $n$

## Problem Statement

> [!question] Exercise 9.1
> For which integers $n$ does $2$ have a multiplicative inverse in $\mathbb Z/n\mathbb Z$?

## Hints

> [!hint]- Hint 1
> An integer is a unit modulo $n$ exactly when it is coprime to $n$.

## Solution

> [!success]- Solution
> The class of $2$ is invertible modulo $n$ exactly when
> 
> $$
> \gcd(2,n)=1.
> $$
> 
> This holds precisely when $n$ is odd.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.1, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
