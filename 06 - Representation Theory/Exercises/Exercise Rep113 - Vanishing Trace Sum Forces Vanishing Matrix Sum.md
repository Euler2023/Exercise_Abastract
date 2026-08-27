---
title: "Exercise Rep113: Vanishing Trace Sum Forces Vanishing Matrix Sum"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.13, printed p. 322, PDF p. 334"
created: 2026-08-27
---

# Exercise Rep113: Vanishing Trace Sum Forces Vanishing Matrix Sum

## Problem Statement

> [!question] Miscellaneous Exercise M.13
> Let $G$ be a finite subgroup of $GL_n(\mathbb C)$. Prove that if $\sum_g\operatorname{trace}g=0$, then $\sum_g g=0$.

## Hints

> [!hint]- Hint 1
> The normalized matrix sum is the projection onto the fixed subspace.

## Solution

> [!success]- Solution
> Put $P=|G|^{-1}\sum_{g\in G}g$. Reindexing shows $hP=P$ for all $h$, while $P$ is the identity on the fixed subspace $V^G$. Thus $P$ is a projection onto $V^G$, so $\operatorname{tr}P=\dim V^G$. The hypothesis gives $\operatorname{tr}P=0$, hence $V^G=0$ and $P=0$. Therefore $\sum_g g=0$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.13, printed p. 322, PDF p. 334].

