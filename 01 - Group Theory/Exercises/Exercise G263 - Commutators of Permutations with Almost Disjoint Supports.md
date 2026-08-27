---
title: "Exercise G263: Commutators of Permutations with Almost Disjoint Supports"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.7, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G263: Commutators of Permutations with Almost Disjoint Supports

## Problem Statement

> [!question] Exercise M.7
> Let $p_1,p_2$ have moved-point sets $U_1,U_2$. Prove **(a)** if $U_1\cap U_2=\varnothing$, their commutator is $1$; **(b)** if the intersection has one point, their commutator is a $3$-cycle.

## Hints

> [!hint]- Hint 1
> Track only the unique common moved point and its two relevant preimages.

## Solution

> [!success]- Solution
> If the supports are disjoint, each permutation fixes every point moved by the other, so they commute and the commutator is $1$. Now suppose $U_1\cap U_2=\{a\}$. Away from the three points obtained by following $a$ backward through $p_1$ and $p_2$, the four factors cancel in pairs. Direct tracking shows that the commutator $p_1p_2p_1^{-1}p_2^{-1}$ cyclically permutes those three distinct points and fixes all others. Hence it is a $3$-cycle (with the inverse orientation if the opposite commutator convention is used). $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.7, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.

