---
title: "Exercise G78: A Subset Whose Left Cosets Partition Is a Subgroup"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - subgroups
  - partitions
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.12, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G78: A Subset Whose Left Cosets Partition Is a Subgroup

## Problem Statement

> [!question] Exercise 8.12
> Let $1\in S\subseteq G$ and suppose the sets $aS$ partition $G$. Prove $S$ is a subgroup.

## Hints

> [!hint]- Hint 1
> For $s\in S$, the two partition blocks $sS$ and $S$ intersect.

## Solution

> [!success]- Solution
> For $s\in S$, the element $s=s\cdot1$ belongs to both $S$ and $sS$. Since partition blocks that intersect are equal,
> 
> $$
> sS=S.
> $$
> 
> Therefore $st\in S$ for all $s,t\in S$, proving closure. Also $1\in sS=S$, so for each $s$ there is $t\in S$ with $st=1$; hence $t=s^{-1}$. Thus $S$ contains identities, products, and inverses, and is a subgroup.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.12, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
