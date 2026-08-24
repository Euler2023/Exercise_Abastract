---
title: "Exercise LA262: Geometry of Degenerate Quadrics"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - degenerate-quadrics
  - quadratic-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.4, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA262: Geometry of Degenerate Quadrics

## Problem Statement

> [!question] Exercise 7.4
> Describe the degenerate quadrics geometrically.

## Hints

> [!hint]- Hint 1
> Orthogonally diagonalize the quadratic part, then eliminate every linear term whose quadratic coefficient is nonzero.

> [!hint]- Hint 2
> Separate full-rank homogeneous equations from equations independent of one or more coordinates.

## Solution

> [!success]- Solution
> After an orthogonal change of coordinates and translations, a real quadratic equation in three variables is reduced to a diagonal quadratic part plus only those linear terms lying in its null directions. The degenerate possibilities are then read geometrically.
>
> - If the quadratic part has full rank and the translated constant is zero, the equation is homogeneous. A definite form gives a single point; an indefinite form gives an elliptic double cone through the origin.
> - If the equation is independent of one coordinate, it is a cylinder over a plane conic. This gives elliptic, hyperbolic, or parabolic cylinders. Degenerate base conics give a pair of intersecting planes, a repeated plane, a line, or the empty set.
> - Rank-one equations with no surviving linear null term give two parallel planes, one repeated plane, or the empty set.
> - A nonzero linear term in a null direction produces a paraboloid-type graph. Rank two gives the nondegenerate elliptic or hyperbolic paraboloids; lower rank gives a parabolic cylinder and is degenerate as a three-dimensional quadric.
>
> Thus, up to rigid motions and rescaling, the degenerate real quadrics are geometrically cones, cylinders, pairs of planes, a repeated plane, a line, a point, or the empty locus.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]

## Notes

- Artin explicitly discusses homogeneous quadratic cones at printed pp. 248–249/PDF pp. 260–261; the list above extends the same diagonalization-and-translation analysis to rank-deficient cases.
- **Source status:** The exercise was verified at [S1, Ch. 8, §7, Ex. 7.4, printed p. 258, PDF p. 270]. The classification is an independent synthesis using Theorems 8.7.5 and 8.7.14.

