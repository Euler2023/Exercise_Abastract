---
title: "Exercise G149: Symmetries of the Equilateral Triangular Lattice"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.2, printed p. 189, PDF p. 201"
created: 2026-08-27
---

# Exercise G149: Symmetries of the Equilateral Triangular Lattice

## Problem Statement

> [!question] Exercise 6.2
> Let $G$ be the group of symmetries of an equilateral triangular lattice $L$. Determine the index in $G$ of the subgroup of translations in $G$.

## Hints

> [!hint]- Hint 1
> The quotient by the translation subgroup is the point group of the lattice.

> [!hint]- Hint 2
> A rotation through $60^\circ$ and a reflection preserve the triangular lattice.

## Solution

> [!success]- Solution
> Choose equal-length lattice generators $a,b$ with angle $60^\circ$. Rotation through $60^\circ$ sends
>
> $$
> a\longmapsto b,qquad b\longmapsto b-a,
> $$
>
> so it preserves $L=\mathbb Za+\mathbb Zb$. Reflection in the line $\mathbb Ra$ also preserves $L$. These two operators generate the full dihedral point group $D_6$, of order $12$.
>
> Let $T$ be the subgroup of translations by vectors of $L$. Sending an isometry to its orthogonal part has kernel $T$ and image $D_6$. Therefore
>
> $$
> G/T\cong D_6,qquad [G:T]=|D_6|=12.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]

## Notes

- The lattice has six rotations and six orientation-reversing orthogonal symmetries; Artin's convention gives $|D_6|=12$.
- **Source status:** The statement was visually checked at [S1, Ch. 6, §6, Ex. 6.2, printed p. 189, PDF p. 201]. The computation is independent.

