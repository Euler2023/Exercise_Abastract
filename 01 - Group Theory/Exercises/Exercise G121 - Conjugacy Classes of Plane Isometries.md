---
title: "Exercise G121: Conjugacy Classes of Plane Isometries"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - plane-isometries
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.6, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G121: Conjugacy Classes of Plane Isometries

## Problem Statement

> [!question] Exercise 2.6
> Determine the conjugacy classes in the group $M$ of isometries of the plane.

## Hints

> [!hint]- Hint 1
> Conjugation by an isometry changes coordinates. Track the fixed set, orientation type, rotation angle, and translation or glide length.

> [!hint]- Hint 2
> An orientation-reversing change of coordinates changes a rotation angle $\theta$ to $-\theta$.

## Solution

> [!success]- Solution
> Conjugation preserves geometric type and all metric invariants. Conversely, an ambient isometry can move any point to any point, any line to any line, and any vector to any vector of the same length. The classes are therefore:
>
> 1. the identity by itself;
> 2. for every $a>0$, all translations whose translation vector has length $a$;
> 3. for every $0<\theta\le\pi$, all rotations through angle $\theta$ or $-\theta$, about arbitrary centers;
> 4. all reflections, in one conjugacy class;
> 5. for every $a>0$, all glide reflections whose nonzero glide vector has length $a$.
>
> To justify the angle identification, conjugation by an orientation-preserving isometry preserves the signed angle, whereas conjugation by a reflection sends $\theta$ to $-\theta$. Translation and glide vectors transform by an orthogonal operator, so precisely their lengths survive. Fixed-point structure separates rotations and reflections from translations and genuine glide reflections, and orientation separates the remaining types. Hence the list is complete and disjoint. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]

## Notes

- A reflection is the zero-glide limiting case geometrically, but it forms a separate conjugacy class because it has fixed points.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.6, printed p. 221, PDF p. 233]; independent classification using Artin's plane-isometry normal form.

