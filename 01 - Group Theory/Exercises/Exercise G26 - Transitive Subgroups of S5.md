---
title: "Exercise G26: Transitive Subgroups of S5"
topic: group-theory
difficulty: advanced
status: not-started
tags: [exercise, group-theory, permutation-groups]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.2, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise G26: Transitive Subgroups of $S_5$

## Problem Statement

> [!question] Exercise 12.2
> Determine the transitive subgroups of $S_5$.

## Hints

> [!hint]- Hint 1
> A transitive group of prime degree contains a 5-cycle; analyze its Sylow 5-subgroup and normalizer.

## Solution

> [!success]- Solution
> Up to conjugacy the transitive subgroups are
> $$
> C_5,\quad D_5,\quad F_{20}=C_5\rtimes C_4,\quad A_5,\quad S_5.
> $$
> Indeed transitivity makes $5\mid |G|$, so $G$ contains a 5-cycle $P$. If $P\triangleleft G$, then $G\le N_{S_5}(P)\cong C_5\rtimes C_4$; its transitive subgroups containing $P$ are $C_5,D_5,F_{20}$. If $P$ is not normal, Sylow counting gives six Sylow 5-subgroups. The standard prime-degree subgroup theorem then forces $G$ to contain $A_5$, leaving $A_5$ or $S_5$. Each listed group is visibly transitive.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

The nonnormal case uses the standard prime-degree subgroup theorem specialized to degree $5$, marked here as an external standard input.
