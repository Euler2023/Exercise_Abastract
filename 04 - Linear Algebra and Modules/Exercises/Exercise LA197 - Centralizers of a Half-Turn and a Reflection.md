---
title: "Exercise LA197: Centralizers of a Half-Turn and a Reflection"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-groups
  - centralizers
  - plane-isometries
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.10, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise LA197: Centralizers of a Half-Turn and a Reflection

## Problem Statement

> [!question] Exercise 2.10
> **(a)** Let $A$ be an element of $SO_3$ that represents a rotation with angle $\pi$. Describe the centralizer of $A$ geometrically.
>
> **(b)** Determine the centralizer of the reflection $r$ about the $e_1$-axis in the group $M$ of isometries of the plane.

## Hints

> [!hint]- Hint 1
> For part (a), decompose $\mathbb R^3$ into the $1$- and $-1$-eigenspaces of $A$.

> [!hint]- Hint 2
> For part (b), write an isometry as $t_vq$ and compare $(t_vq)r$ with $r(t_vq)$.

## Solution

> [!success]- Solution
> ### (a) A half-turn in $SO_3$
> Let $L$ be the rotation axis. Relative to $\mathbb R^3=L\oplus L^\perp$,
>
> $$
> A=\operatorname{diag}(1,-I_2).
> $$
>
> A matrix $Q\in SO_3$ commutes with $A$ exactly when it preserves both eigenspaces. Thus
>
> $$
> Q=\operatorname{diag}(\varepsilon,B),\qquad
> \varepsilon=\pm1,\quad B\in O_2,\quad \varepsilon\det B=1.
> $$
>
> Geometrically, these are all rotations about $L$, together with all half-turns about axes perpendicular to $L$. The centralizer is isomorphic to $O_2$.
>
> ### (b) Reflection in the $e_1$-axis
> Write $g=t_vq$. The equality $gr=rg$ is equivalent to
>
> $$
> q r=r q,\qquad v=r(v).
> $$
>
> The second condition says $v=(a,0)$ lies on the reflection axis. The orthogonal operators commuting with $r=\operatorname{diag}(1,-1)$ are the four diagonal sign matrices
>
> $$
> \{I,r,-I,-r\}\cong D_2.
> $$
>
> Therefore
>
> $$
> Z_M(r)=\{t_{(a,0)}q:a\in\mathbb R,\ q\in\{I,r,-I,-r\}\}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]

## Notes

- The extra half-turns in part (a) occur only because the given rotation angle is exactly $\pi$.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.10, printed p. 221, PDF p. 233]; independent geometric and matrix derivation.

