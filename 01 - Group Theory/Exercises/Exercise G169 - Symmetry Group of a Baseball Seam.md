---
title: "Exercise G169: Symmetry Group of a Baseball Seam"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - dihedral-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 9, Ex. 9.6, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G169: Symmetry Group of a Baseball Seam

## Problem Statement

> [!question] Exercise 9.6
> Identify the group of symmetries of a baseball, taking the seam (but not the stitching) into account and allowing orientation-reversing symmetries.

## Hints

> [!hint]- Hint 1
> Ignore the direction in which the stitches run; regard the seam as an unoriented spherical curve.

> [!hint]- Hint 2
> Find an improper quarter-turn and an involution that conjugates it to its inverse.

## Solution

> [!success]- Solution
> Center the ball at the origin and choose the axis through the two narrow waist regions of the seam. A quarter-turn about this axis followed by reflection in the perpendicular equatorial plane preserves the unoriented seam; call this symmetry $a$. It has order $4$. A half-turn about a suitable perpendicular axis also preserves the seam; call it $b$. It has order $2$ and reverses the sense of $a$, so
>
> $$
> a^4=b^2=1,qquad bab=a^{-1}.
> $$
>
> These operations generate eight distinct symmetries. The seam has exactly two waist pairs and their incidence rules out any further isometry. Therefore
>
> $$
> \operatorname{Sym}(\text{baseball seam})\cong D_4,qquad |G|=8.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups]]

## Notes

- Stitch direction can reduce the physical point group; the exercise explicitly says to ignore stitching and retain only the unoriented seam.
- **Source status:** The wording was checked at [S1, Ch. 6, §9, Ex. 9.6, printed p. 192, PDF p. 204]. The $D_4$ identification is an independent geometric derivation, cross-checked against an external group-theory exercise source.

