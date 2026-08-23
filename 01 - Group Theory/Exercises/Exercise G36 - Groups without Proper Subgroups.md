---
title: "Exercise G36: Groups without Proper Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - cyclic-groups
  - prime-order
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.4, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise G36: Groups without Proper Subgroups

## Problem Statement

> [!question] Exercise 4.4
> Describe all groups $G$ that contain no proper subgroup.

## Hints

> [!hint]- Hint 1
> Every group contains the subgroup $\{1\}$.

## Solution

> [!success]- Solution
> Read literally, the only such group is the trivial group: if $G\ne\{1\}$, then $\{1\}$ is a proper subgroup.
> 
> If “proper subgroup” is intended to mean “proper nontrivial subgroup,” the classification is instead the cyclic groups of prime order. Indeed, for $g\ne1$, the subgroup $\langle g\rangle$ must be all of $G$, so $G$ is cyclic; a cyclic group has no nontrivial proper subgroup exactly when its order is prime.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.4, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Source ambiguity:** The literal wording includes the trivial subgroup and yields only the trivial group. The common intended variant excludes trivial subgroups; both readings are recorded explicitly.
