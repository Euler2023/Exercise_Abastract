---
title: "Exercise G18: Square of an Orientation-Reversing Isometry"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - plane-isometries
  - orientation
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.2, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G18: Square of an Orientation-Reversing Isometry

## Problem Statement

> [!question] Exercise
> Let $m$ be an orientation-reversing isometry of the plane. Prove algebraically that $m^2$ is a translation.

## Hints

> [!hint]- Hint 1
> Use Artin's unique normal form $m=t_v\rho_\theta r$.

> [!hint]- Hint 2
> Set $q=\rho_\theta r$. Show first that $q^2=1$, and then move $t_v$ past $q$.

## Solution

> [!success]- Solution
> By Artin's classification of plane isometries, an orientation-reversing isometry has the unique form
> $$m=t_v\rho_\theta r.$$
> Put $q=\rho_\theta r$. Using $r\rho_\theta=\rho_{-\theta}r$ and $r^2=1$,
> $$q^2=\rho_\theta r\rho_\theta r
> =\rho_\theta\rho_{-\theta}r^2=1.$$
>
> Since $q$ is linear, the translation rule gives
> $$qt_v=t_{q(v)}q.$$
> Therefore
> $$
> \begin{aligned}
> m^2
> &=t_vqt_vq\\
> &=t_vt_{q(v)}q^2\\
> &=t_{v+q(v)}.
> \end{aligned}
> $$
> Thus $m^2$ is translation by the vector
> $$v+\rho_\theta r(v).$$
> This vector may be zero; in that case $m^2=1$, which is translation by the zero vector. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Opposite Groups|Opposite Groups]]

## Notes

Geometrically, an orientation-reversing plane isometry is either a reflection, whose square is the identity, or a glide reflection, whose square is a nontrivial translation. The algebraic calculation handles both cases at once.

**Source status:** The normal form is proved in [S1, Ch. 6, Thm. 6.3.2, printed p. 160, PDF p. 172]. The conclusion of this exercise is derived completely above.

