---
title: "Exercise G199: Stabilizer of an Inscribed Cube"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.1, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G199: Stabilizer of an Inscribed Cube

## Problem Statement

> [!question] Exercise 4.1
> The icosahedral group operates on the set of five inscribed cubes in the dodecahedron. Determine the stabilizer of one of the cubes.

## Hints

> [!hint]- Hint 1
> Use orbit-stabilizer and identify the rotations of the cube that also preserve the dodecahedron.

## Solution

> [!success]- Solution
> The rotational icosahedral group $I$ has order $60$ and acts transitively on the five inscribed cubes. Therefore the stabilizer of one cube has order $60/5=12$. Its elements permute the four body diagonals of that cube by even permutations; geometrically they are precisely the rotations preserving one of the two tetrahedra selected by alternate cube vertices. Hence the stabilizer is the tetrahedral rotation group
>
> $$
> \operatorname{Stab}_I(C)\cong T\cong A_4.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Alternating Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.1, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
