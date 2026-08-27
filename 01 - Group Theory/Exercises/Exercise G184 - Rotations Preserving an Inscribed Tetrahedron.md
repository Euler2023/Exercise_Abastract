---
title: "Exercise G184: Rotations Preserving an Inscribed Tetrahedron"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - rotation-groups
  - tetrahedral-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.4, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G184: Rotations Preserving an Inscribed Tetrahedron

## Problem Statement

> [!question] Exercise 12.4
> Let $G=O$ be the group of rotations of a cube, and let $H$ be the subgroup carrying one of the two inscribed tetrahedra to itself. Prove that $H=T$.

## Hints

> [!hint]- Hint 1
> The two tetrahedra are formed by the two parity classes of cube vertices.

> [!hint]- Hint 2
> The action of $O$ on the pair of tetrahedra is transitive, so $H$ has index $2$.

## Solution

> [!success]- Solution
> The eight cube vertices split into two regular tetrahedra, and a quarter-turn of the cube exchanges them. Hence the action of $O$ on this two-element set is transitive. Its stabilizer $H$ of one tetrahedron has index $2$, so
>
> $$
> |H|=|O|/2=12.
> $$
>
> Every rotational symmetry of the chosen tetrahedron is also a cube rotation, so the tetrahedral rotation group $T$ is contained in $H$. Since $|T|=12$, the inclusion and equal orders imply
>
> $$
> H=T.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Exercises/Exercise G164 - Rotation Groups of the Cube and Tetrahedron|Exercise G164]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- Under $O\cong S_4$, this $T\cong A_4$ is the unique index-two subgroup.
- **Source status:** [S1, Ch. 6, §12, Ex. 12.4, printed p. 193, PDF p. 205]; independent index argument.

