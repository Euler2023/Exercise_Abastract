---
title: "Exercise G85: Order of an Element in a Product Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - direct-products
  - orders
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.1, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G85: Order of an Element in a Product Group

## Problem Statement

> [!question] Exercise 11.1
> If $|x|=r$ and $|y|=s$, determine the order of $(x,y)\in G\times G'$.

## Hints

> [!hint]- Hint 1
> $(x,y)^n=(1,1)$ exactly when both component powers are identities.

## Solution

> [!success]- Solution
> We have $(x,y)^n=(x^n,y^n)$. This equals $(1,1)$ exactly when both $r\mid n$ and $s\mid n$. The least positive such $n$ is
> 
> $$
> |(x,y)|=\operatorname{lcm}(r,s).
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.1, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
