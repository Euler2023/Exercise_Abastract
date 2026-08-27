---
title: "Exercise G159: Symmetries of an Equilateral Triangular Prism"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - stabilizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.6, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G159: Symmetries of an Equilateral Triangular Prism

## Problem Statement

> [!question] Exercise 7.6
> Let $G$ be the group of symmetries of an equilateral triangular prism $P$, including the orientation-reversing symmetries. Determine the stabilizer of one of the rectangular faces of $P$ and the order of the group.

## Hints

> [!hint]- Hint 1
> The group acts transitively on the three rectangular faces.

> [!hint]- Hint 2
> The stabilizer of one rectangular face contains two independent involutions and has four elements.

## Solution

> [!success]- Solution
> Fix a rectangular side face $F$. There are three rectangular faces and the prism symmetries act transitively on them.
>
> The setwise stabilizer of $F$ contains the identity, reflection in the plane halfway between and parallel to the two triangular bases, reflection in the longitudinal plane bisecting $F$ and the opposite edge, and the product of these two reflections. The two reflections commute, so
>
> $$
> G_F\cong C_2\times C_2,qquad |G_F|=4.
> $$
>
> By orbit–stabilizer,
>
> $$
> |G|=|G\cdot F|\,|G_F|=3\cdot4=12.
> $$
>
> Equivalently, $G\cong D_3\times C_2$: $D_3$ acts on each triangular base, while the second factor exchanges the two bases. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Group Actions|Orbit–stabilizer in group actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- The stabilizer is setwise: some of its elements interchange vertices of the rectangular face.
- **Source status:** The statement was visually checked at [S1, Ch. 6, §7, Ex. 7.6, printed p. 191, PDF p. 203]. The group identification is independent.
