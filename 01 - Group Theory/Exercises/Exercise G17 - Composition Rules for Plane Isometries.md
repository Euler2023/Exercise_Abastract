---
title: "Exercise G17: Composition Rules for Plane Isometries"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - plane-isometries
  - transformations
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.1, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G17: Composition Rules for Plane Isometries

## Problem Statement

> [!question] Exercise
> Verify Artin's composition rules (6.3.3) for translations $t_v$, rotations $\rho_\theta$ about the origin, and reflection $r$ about the horizontal axis.

## Hints

> [!hint]- Hint 1
> Apply both sides of each proposed identity to an arbitrary vector $x\in\mathbb R^2$.

> [!hint]- Hint 2
> For the relation involving $r$ and $\rho_\theta$, use their matrices or the complex formulas $\rho_\theta(z)=e^{i\theta}z$ and $r(z)=\overline z$.

## Solution

> [!success]- Solution
> Write
> $$t_v(x)=x+v,$$
> and let $\rho_\theta$ and $r$ denote the indicated linear maps.
>
> ### Moving a translation past a rotation
> For every $x$,
> $$\rho_\theta t_v(x)=\rho_\theta(x+v)
> =\rho_\theta(x)+\rho_\theta(v)
> =t_{\rho_\theta(v)}\rho_\theta(x).$$
> Therefore
> $$\rho_\theta t_v=t_{\rho_\theta(v)}\rho_\theta.$$
>
> ### Moving a translation past a reflection
> Linearity of $r$ gives
> $$rt_v(x)=r(x+v)=r(x)+r(v)=t_{r(v)}r(x),$$
> so
> $$rt_v=t_{r(v)}r.$$
>
> ### Moving a rotation past the standard reflection
> In complex coordinates $z=x+iy$,
> $$r\rho_\theta(z)=\overline{e^{i\theta}z}
> =e^{-i\theta}\overline z
> =\rho_{-\theta}r(z).$$
> Hence
> $$r\rho_\theta=\rho_{-\theta}r.$$
>
> ### Products of transformations of the same type
> Directly,
> $$t_vt_w(x)=x+w+v=t_{v+w}(x),$$
> and
> $$\rho_\theta\rho_\eta=\rho_{\theta+\eta}.$$
> Finally, reflecting twice restores every point, so
> $$r^2=1.$$
>
> These are precisely the rules in (6.3.3). $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[Orthogonal Transformations of the Plane]]

## Notes

The order of composition is important: products act from right to left. For example, $\rho_\theta t_v$ means translate first and rotate second.

**Source status:** Formula (6.3.3) is stated in [S1, Ch. 6, Section 3, printed p. 160, PDF p. 172]. Every identity is verified directly above.

