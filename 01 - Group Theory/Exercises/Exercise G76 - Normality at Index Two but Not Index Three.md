---
title: "Exercise G76: Normality at Index 2 but Not Index 3"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - cosets
  - index
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.10, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G76: Normality at Index 2 but Not Index 3

## Problem Statement

> [!question] Exercise 8.10
> Prove every subgroup of index $2$ is normal, and give a nonnormal subgroup of index $3$.

## Hints

> [!hint]- Hint 1
> There is only one coset other than the subgroup itself.

## Solution

> [!success]- Solution
> If $[G:H]=2$, then for $g\notin H$, both $gH$ and $Hg$ are the complement $G\setminus H$, while for $g\in H$ both equal $H$. Thus $gH=Hg$ for all $g$, so $H\triangleleft G$.
> 
> In $S_3$, the subgroup $\langle(12)\rangle$ has order $2$ and hence index $3$, but it is not normal because
> 
> $$
> (123)(12)(123)^{-1}=(23)\notin\langle(12)\rangle.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.10, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
