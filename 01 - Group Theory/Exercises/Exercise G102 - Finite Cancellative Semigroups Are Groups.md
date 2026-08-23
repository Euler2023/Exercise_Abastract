---
title: "Exercise G102: Finite Cancellative Semigroups Are Groups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - semigroups
  - cancellation
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.5, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G102: Finite Cancellative Semigroups Are Groups

## Problem Statement

> [!question] Exercise M.5
> Let $S$ be a finite semigroup in which the Cancellation Law holds. Prove that $S$ is a group.

## Hints

> [!hint]- Hint 1
> For fixed $a$, left and right multiplication by $a$ are injective maps on a finite set.

## Solution

> [!success]- Solution
> Fix $a\in S$. The maps $L_a(x)=ax$ and $R_a(x)=xa$ are injective by cancellation, hence bijective because $S$ is finite. Therefore there are $b,c\in S$ such that
> 
> $$
> ab=1,\qquad ca=1.
> $$
> 
> Associativity gives
> 
> $$
> c=c(ab)=(ca)b=b.
> $$
> 
> Thus $b$ is a two-sided inverse of $a$. Every element has an inverse, so $S$ is a group.

## Related Concepts

- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.5, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
