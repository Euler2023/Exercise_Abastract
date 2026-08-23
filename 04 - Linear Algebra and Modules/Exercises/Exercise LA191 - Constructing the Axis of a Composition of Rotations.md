---
title: "Exercise LA191: Constructing the Axis of a Composition of Rotations"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - rotations
  - reflections
  - three-dimensional-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.8, printed p. 153, PDF p. 165"
created: 2026-08-24
---

# Exercise LA191: Constructing the Axis of a Composition of Rotations

## Problem Statement

> [!question] Miscellaneous Problem M.8
> Find a geometric way to determine the axis of rotation for the composition of two three-dimensional rotations.

## Hints

> [!hint]- Hint 1
> Express each rotation as the product of reflections in two planes through its axis, choosing one reflection plane in common.

## Solution

> [!success]- Solution
> Let the rotation axes be lines $\ell_1$ and $\ell_2$ through the origin, and choose a plane $\Pi$ containing both lines. A rotation about a line is the product of reflections in two planes through that line; the rotation angle is twice the oriented angle between the planes.
>
> Choose planes $\Pi_1\supset\ell_1$ and $\Pi_2\supset\ell_2$ so that, with $s_\Sigma$ denoting reflection in the plane $\Sigma$,
>
> $$
> R_1=s_\Pi s_{\Pi_1},\qquad R_2=s_{\Pi_2}s_\Pi.
> $$
>
> Then the common reflections cancel:
>
> $$
> R_2R_1=s_{\Pi_2}s_\Pi s_\Pi s_{\Pi_1}
> =s_{\Pi_2}s_{\Pi_1}.
> $$
>
> If $\Pi_1\ne\Pi_2$, the product of the last two plane reflections is a rotation whose axis is their line of intersection. Therefore the desired axis is
>
> $$
> \Pi_1\cap\Pi_2.
> $$
>
> If $\Pi_1=\Pi_2$, the composition is the identity and its axis is indeterminate. Otherwise this is a straightedge-and-plane geometric construction. Algebraically, it agrees with finding the one-dimensional fixed space $\ker(R_2R_1-I)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.8, printed p. 153, PDF p. 165]; independent geometric construction.
