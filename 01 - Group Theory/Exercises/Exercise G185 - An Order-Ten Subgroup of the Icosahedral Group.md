---
title: "Exercise G185: An Order-Ten Subgroup of the Icosahedral Group"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - icosahedral-group
  - dihedral-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.5, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G185: An Order-Ten Subgroup of the Icosahedral Group

## Problem Statement

> [!question] Exercise 12.5
> Prove that the icosahedral group has a subgroup of order $10$.

## Hints

> [!hint]- Hint 1
> Fix the unordered pair of opposite vertices on a fivefold rotation axis.

> [!hint]- Hint 2
> Its setwise stabilizer contains five rotations about the axis and five half-turns that exchange the endpoints.

## Solution

> [!success]- Solution
> Choose an axis through a pair $\{v,-v\}$ of opposite vertices of the icosahedron. Rotations about this axis form a cyclic subgroup $C_5$. There are also five half-turns about axes perpendicular to it that preserve the unordered pair and conjugate a generator $r$ of $C_5$ to $r^{-1}$.
>
> Thus the setwise stabilizer has presentation
>
> $$
> \langle r,s:r^5=s^2=1, srs=r^{-1}\rangle\cong D_5,
> $$
>
> and therefore has order $10$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The point stabilizer of $v$ is only $C_5$; using the unordered opposite pair doubles it to $D_5$.
- **Source status:** [S1, Ch. 6, §12, Ex. 12.5, printed p. 193, PDF p. 205]; independent geometric construction.

