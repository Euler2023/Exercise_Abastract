---
title: "Exercise G42: Finite-Order Factors with Infinite-Order Product"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - orders
  - dihedral-groups
  - abelian-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.10, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G42: Finite-Order Factors with Infinite-Order Product

## Problem Statement

> [!question] Exercise 4.10
> Give an example where two finite-order elements have an infinite-order product. What happens in an abelian group?

## Hints

> [!hint]- Hint 1
> Use two distinct reflections of the plane.

## Solution

> [!success]- Solution
> In the infinite dihedral group, let $s$ and $t$ be reflections in two parallel lines. Both have order $2$, while $st$ is a nontrivial translation and has infinite order.
> 
> If the group is abelian and $a^m=b^n=1$, then
> 
> $$
> (ab)^{\operatorname{lcm}(m,n)}=a^{\operatorname{lcm}(m,n)}b^{\operatorname{lcm}(m,n)}=1.
> $$
> 
> Thus in an abelian group a product of finite-order elements again has finite order.

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.10, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
