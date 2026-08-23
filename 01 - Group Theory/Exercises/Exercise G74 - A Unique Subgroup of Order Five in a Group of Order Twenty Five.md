---
title: "Exercise G74: A Unique Subgroup of Order 5 in a Group of Order 25"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - cyclic-groups
  - p-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.8, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G74: A Unique Subgroup of Order 5 in a Group of Order 25

## Problem Statement

> [!question] Exercise 8.8
> Prove a group of order $25$ has a subgroup of order $5$, and if it has only one such subgroup, prove it is cyclic.

## Hints

> [!hint]- Hint 1
> Take a nonidentity element and inspect its order.

## Solution

> [!success]- Solution
> Choose $x\ne1$. Its order is $5$ or $25$. In the first case $\langle x\rangle$ has order $5$; in the second case $G$ is already cyclic and $\langle x^5\rangle$ has order $5$.
> 
> Now assume the subgroup of order $5$ is unique. If $G$ were not cyclic, every nonidentity element would have order $5$. Let $H$ be the unique subgroup and choose $y\notin H$. Then $\langle y\rangle$ is another subgroup of order $5$, a contradiction. Hence $G$ is cyclic.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.8, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
