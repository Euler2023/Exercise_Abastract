---
title: "Exercise G90: Normal Subgroups of Orders 3 and 5"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - direct-products
  - orders
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.6, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G90: Normal Subgroups of Orders 3 and 5

## Problem Statement

> [!question] Exercise 11.6
> If $G$ has normal subgroups of orders $3$ and $5$, prove $G$ has an element of order $15$.

## Hints

> [!hint]- Hint 1
> Their intersection is trivial, and normal subgroups with trivial intersection commute.

## Solution

> [!success]- Solution
> Let $H,K$ have orders $3,5$. Their intersection has order dividing both, so $H\cap K=1$. For $h\in H,k\in K$, the commutator $hkh^{-1}k^{-1}$ lies in both normal subgroups and is therefore $1$. Thus $h$ and $k$ commute.
> 
> Choose nonidentity $h,k$. They have orders $3,5$, and because they commute,
> 
> $$
> |hk|=\operatorname{lcm}(3,5)=15.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.6, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
