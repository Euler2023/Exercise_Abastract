---
title: "Exercise R21: Coprime Positive Summands of a Prime"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - divisibility
  - primes
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 3, Ex. 3.2, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise R21: Coprime Positive Summands of a Prime

## Problem Statement

> [!question] Exercise 3.2
> Prove that if positive integers $a,b$ have prime sum $p$, then $\gcd(a,b)=1$.

## Hints

> [!hint]- Hint 1
> Every common divisor divides $a+b=p$.

## Solution

> [!success]- Solution
> Let $d=\gcd(a,b)$. Since $d\mid a$ and $d\mid b$, we have $d\mid(a+b)=p$. As $p$ is prime, $d$ is $1$ or $p$. But $0<a,b<p$, so $p$ divides neither $a$ nor $b$. Therefore $d\ne p$ and
> 
> $$
> \gcd(a,b)=1.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §3, Ex. 3.2, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
