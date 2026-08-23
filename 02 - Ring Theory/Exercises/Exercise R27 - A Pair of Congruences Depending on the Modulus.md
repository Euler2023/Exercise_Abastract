---
title: "Exercise R27: A Pair of Congruences Depending on the Modulus"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - linear-congruences
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.5, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R27: A Pair of Congruences Depending on the Modulus

## Problem Statement

> [!question] Exercise 9.5
> Determine the integers $n$ for which
> 
> $$
> 2x-y\equiv1,\qquad4x+3y\equiv2\pmod n
> $$
> 
> has a solution.

## Hints

> [!hint]- Hint 1
> Eliminate $y$ to obtain $10x\equiv5\pmod n$.

## Solution

> [!success]- Solution
> The first congruence gives $y\equiv2x-1$. Substitution into the second yields
> 
> $$
> 10x\equiv5\pmod n.
> $$
> 
> This congruence is solvable exactly when $\gcd(10,n)$ divides $5$. That happens precisely when $n$ is odd: if $n$ is odd, the gcd is $1$ or $5$; if $n$ is even, it is divisible by $2$ and cannot divide $5$. Once $x$ is chosen, $y\equiv2x-1$ works. Thus the required moduli are exactly the odd positive integers.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.5, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
