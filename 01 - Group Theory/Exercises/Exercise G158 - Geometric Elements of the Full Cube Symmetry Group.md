---
title: "Exercise G158: Geometric Elements of the Full Cube Symmetry Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.5, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G158: Geometric Elements of the Full Cube Symmetry Group

## Problem Statement

> [!question] Exercise 7.5
> Let $G$ be the group of symmetries of a cube, including the orientation-reversing symmetries. Describe the elements of $G$ geometrically.

## Hints

> [!hint]- Hint 1
> First classify the $24$ rotations by their axes and angles.

> [!hint]- Hint 2
> Central inversion $-I$ is a symmetry and commutes with every rotation. Multiply each rotation by $-I$ to obtain the orientation-reversing half.

## Solution

> [!success]- Solution
> The orientation-preserving symmetries are:
>
> - the identity: $1$ element;
> - quarter-turns through $\pm90^\circ$ about the three axes through opposite face centers: $6$;
> - half-turns about those same three axes: $3$;
> - rotations through $\pm120^\circ$ about the four body diagonals: $8$;
> - half-turns about the six axes through midpoints of opposite edges: $6$.
>
> Their total is $1+6+3+8+6=24$.
>
> Central inversion $\iota(x)=-x$ preserves the cube, reverses orientation, and is central. Every orientation-reversing symmetry is uniquely $\iota R$ with $R$ one of the $24$ rotations. Geometrically this gives:
>
> - central inversion itself: $1$;
> - six order-four rotoreflections $\iota R_{\pm90^\circ}$ about face axes;
> - three reflections in the planes through the center parallel to opposite faces, obtained from face-axis half-turns;
> - eight order-six rotoreflections about body diagonals;
> - six reflections in diagonal planes through pairs of opposite edges, obtained from edge-axis half-turns.
>
> Thus $|G|=48$ and, after choosing coordinates centered at the cube,
>
> $$
> G\cong O_3(\mathbb Z)\cong S_4\times C_2.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- The isomorphism with $S_4$ on the rotational side comes from the action on the four body diagonals.
- **Source status:** [S1, Ch. 6, §7, Ex. 7.5, printed p. 190, PDF p. 202]; independent enumeration.

