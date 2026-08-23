---
title: "Exercise R33: Inverses of $5$ Modulo Small Primes"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - finite-fields
  - multiplicative-inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.2, printed p. 98, PDF p. 110"
created: 2026-08-23
---

# Exercise R33: Inverses of $5$ Modulo Small Primes

## Problem Statement

> [!question] Exercise 1.2
> Find the inverse of $5$ modulo $p$, for $p=7,11,13,17$.

## Hints

> [!hint]- Hint 1
> Solve $5x\equiv1\pmod p$ in each case.

## Solution

> [!success]- Solution
> Direct multiplication gives
> 
> $$
> 5^{-1}\equiv
> \begin{cases}
> 3&\pmod 7,\\
> 9&\pmod{11},\\
> 8&\pmod{13},\\
> 7&\pmod{17}.
> \end{cases}
> $$
> 
> Indeed, the products are respectively $15,45,40,35$, each congruent to $1$ modulo the stated prime.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.2, printed p. 98, PDF p. 110]. The solution is an independent derivation for this vault, not a solution printed in Artin.
