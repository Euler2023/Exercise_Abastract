---
title: "Exercise G71: Divisibility Forced by Elements of Orders 10 and 6"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - orders
  - lagrange-theorem
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.5, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G71: Divisibility Forced by Elements of Orders 10 and 6

## Problem Statement

> [!question] Exercise 8.5
> A finite group contains elements of orders $10$ and $6$. What can be said about its order?

## Hints

> [!hint]- Hint 1
> Each element order divides the group order.

## Solution

> [!success]- Solution
> Lagrange's theorem implies that both $10$ and $6$ divide $|G|$. Therefore their least common multiple divides $|G|$:
> 
> $$
> \operatorname{lcm}(10,6)=30\mid |G|.
> $$
> 
> Thus the group order is a multiple of $30$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.5, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
