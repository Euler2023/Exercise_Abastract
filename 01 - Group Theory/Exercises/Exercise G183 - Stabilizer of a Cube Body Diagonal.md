---
title: "Exercise G183: Stabilizer of a Cube Body Diagonal"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - rotation-groups
  - stabilizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.3, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G183: Stabilizer of a Cube Body Diagonal

## Problem Statement

> [!question] Exercise 12.3
> Let $O$ be the group of rotations of a cube, and let $S$ be the set of four diagonal lines connecting opposite vertices. Determine the stabilizer of one of the diagonals.

## Hints

> [!hint]- Hint 1
> The group of order $24$ acts transitively on four body-diagonal lines.

> [!hint]- Hint 2
> Besides the three rotations about the diagonal, there are half-turns interchanging its endpoints.

## Solution

> [!success]- Solution
> The orbit of a body-diagonal line has size $4$, so its stabilizer has order
>
> $$
> 24/4=6.
> $$
>
> It contains the cyclic group $C_3$ of rotations through $0,120^\circ,240^\circ$ about that diagonal. It also contains three half-turns about axes perpendicular to the diagonal; these exchange its endpoints and conjugate a $120^\circ$ rotation to its inverse. Therefore the stabilizer is
>
> $$
> D_3\cong S_3.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- Stabilizing the line permits exchanging its two endpoint vertices; the point stabilizer would only be $C_3$.
- **Source status:** [S1, Ch. 6, §12, Ex. 12.3, printed p. 193, PDF p. 205]; independent computation.

