---
title: "Exercise G308: High Transitivity of the Alternating Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - alternating-groups
  - group-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 39, printed p. 79, PDF p. 94"
created: 2026-08-28
---

# Exercise G308: High Transitivity of the Alternating Group

## Problem Statement

> [!question] Exercise 39
> Show that the natural action of $A_n$ on $\{1,\ldots,n\}$ is $(n-2)$-transitive.

## Hints

> [!hint]- Hint 1
> First choose a permutation in $S_n$ with the prescribed images. If it is odd, interchange the two unused target points.

## Solution

> [!success]- Solution
> Let $(s_1,\ldots,s_{n-2})$ and $(t_1,\ldots,t_{n-2})$ be ordered tuples of distinct points. Extend the assignment $s_i\mapsto t_i$ to some $\pi\in S_n$. Exactly two source points and two target points remain unused. If $\pi$ is even, then $\pi\in A_n$ already works. If $\pi$ is odd, compose it on the left with the transposition of the two unused target points. This changes the parity but leaves every prescribed image $t_i$ unchanged. The resulting even permutation sends each $s_i$ to $t_i$, proving $(n-2)$-transitivity.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 39, printed p. 79, PDF p. 94]. The parity-adjustment proof is independent.

