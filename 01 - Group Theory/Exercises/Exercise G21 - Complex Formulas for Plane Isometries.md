---
title: "Exercise G21: Complex Formulas for Plane Isometries"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - plane-isometries
  - complex-numbers
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.5, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G21: Complex Formulas for Plane Isometries

## Problem Statement

> [!question] Exercise
> Express the three basic isometries in Artin's formula (6.3.1) using the complex coordinate $z=x+iy$.

## Hints

> [!hint]- Hint 1
> Identify the vector $(a_1,a_2)^t$ with the complex number $a=a_1+ia_2$.

> [!hint]- Hint 2
> Multiplication by $e^{i\theta}$ is rotation through angle $\theta$, while complex conjugation changes the sign of the imaginary coordinate.

## Solution

> [!success]- Solution
> Identify $(x,y)^t\in\mathbb R^2$ with $z=x+iy\in\mathbb C$, and identify the translation vector $(a_1,a_2)^t$ with $a=a_1+ia_2$.
>
> ### Translation
> Since $(x,y)^t\mapsto(x+a_1,y+a_2)^t$,
> $$t_a(z)=z+a.$$
>
> ### Rotation about the origin
> Euler's formula gives
> $$e^{i\theta}z
> =\bigl(x\cos\theta-y\sin\theta\bigr)
> +i\bigl(x\sin\theta+y\cos\theta\bigr).$$
> Hence
> $$\rho_\theta(z)=e^{i\theta}z.$$
>
> ### Reflection about the horizontal axis
> Reflection sends $(x,y)^t$ to $(x,-y)^t$, so
> $$r(z)=x-iy=\overline z.$$
>
> Consequently, Artin's two normal forms for arbitrary plane isometries become
> $$m(z)=a+e^{i\theta}z$$
> in the orientation-preserving case, and
> $$m(z)=a+e^{i\theta}\overline z$$
> in the orientation-reversing case. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

The complex formulas compress the $2\times2$ rotation matrix and the reflection matrix into multiplication and conjugation.

**Source status:** The real-coordinate formulas appear in [S1, Ch. 6, formula (6.3.1), printed p. 160, PDF p. 172]. Their complex-coordinate translation is derived above.

