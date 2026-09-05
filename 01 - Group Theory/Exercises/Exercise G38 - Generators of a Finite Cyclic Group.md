---
title: "Exercise G38: Generators of a Finite Cyclic Group"
topic: group-theory
difficulty: beginner
status: completed
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - euler-totient
source: Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.6, printed p. 70, PDF p. 82
created: 2026-08-23
---

# Exercise G38: Generators of a Finite Cyclic Group

## Problem Statement

> [!question] Exercise 4.6
> **(a)** Count the generators of cyclic groups of orders $6$, $5$, and $8$.
> 
> **(b)** Give the count for arbitrary order $n$.

## Hints

> [!hint]- Hint 1
> If $G=\langle x\rangle$, determine when $x^k$ has order $n$.

## Solution

> [!success]- Solution
> The element $x^k$ generates a cyclic group of order $n$ exactly when $\gcd(k,n)=1$. Hence the number of generators is Euler's totient $\varphi(n)$. In particular,
> 
> $$
> \varphi(6)=2,\qquad \varphi(5)=4,\qquad \varphi(8)=4.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.6, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
