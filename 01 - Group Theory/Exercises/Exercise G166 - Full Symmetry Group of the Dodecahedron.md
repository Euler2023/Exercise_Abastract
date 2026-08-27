---
title: "Exercise G166: Full Symmetry Group of the Dodecahedron"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - polyhedra
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 9, Ex. 9.3, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G166: Full Symmetry Group of the Dodecahedron

## Problem Statement

> [!question] Exercise 9.3
> Determine the order of the group of symmetries of a dodecahedron, when orientation-reversing symmetries such as reflections in planes are allowed.

## Hints

> [!hint]- Hint 1
> Act transitively on the $12$ faces.

> [!hint]- Hint 2
> The setwise stabilizer of one pentagonal face is a dihedral group of order $10$.

## Solution

> [!success]- Solution
> The full symmetry group acts transitively on the $12$ faces. Once a face is fixed setwise, every symmetry of its regular pentagon extends uniquely to the dodecahedron; its stabilizer is $D_5$ of order $10$. Thus
>
> $$
> |G|=12\cdot10=120.
> $$
>
> Equivalently, the rotational subgroup has order $60$, and central inversion supplies the other coset. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The full group is isomorphic to $A_5\times C_2$; only the order is required here.
- **Source status:** [S1, Ch. 6, §9, Ex. 9.3, printed p. 191, PDF p. 203]; independent derivation.

