---
title: Symmetry Groups and Plane Isometries
aliases:
  - Plane Isometries
  - Symmetry Groups of Plane Figures
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - symmetry
  - plane-isometries
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Sections 1–3, printed pp. 154–163, PDF pp. 166–175"
---

# Symmetry Groups and Plane Isometries

## Definition

> [!info] Definition (Plane Isometry)
> A **plane isometry** is a map $f:\mathbb R^2\to\mathbb R^2$ that preserves distance:
> $$\lVert f(u)-f(v)\rVert=\lVert u-v\rVert$$
> for all $u,v\in\mathbb R^2$.

The set of all plane isometries is a group under composition. Following Artin, denote it by $M$.

> [!info] Definition (Symmetry Group)
> If $F\subseteq\mathbb R^2$ is a plane figure, a **symmetry** of $F$ is an isometry $m$ satisfying $m(F)=F$. Its symmetry group is
> $$\operatorname{Sym}(F)=\{m\in M:m(F)=F\}.$$

This is a subgroup of $M$: the identity preserves $F$, the composition of two symmetries preserves $F$, and the inverse of a symmetry also preserves $F$.

## Affine Normal Form

Every plane isometry has a unique decomposition
$$m=t_aq,$$
where $t_a(x)=x+a$ is a translation and $q\in O_2$ is an orthogonal linear operator. The vector is forced to be $a=m(0)$, and then
$$q=t_{-a}m.$$

> [!abstract] Theorem (Artin's Plane-Isometry Normal Form)
> Every $m\in M$ can be written uniquely in exactly one of the two forms
> $$m=t_v\rho_\theta
> \qquad\text{or}\qquad
> m=t_v\rho_\theta r,$$
> where $\rho_\theta$ is rotation through $\theta$ about the origin and $r$ is reflection about the horizontal axis.

The first form preserves orientation and the second reverses orientation. This theorem is **proved in the source**. [S1, Ch. 6, Thm. 6.3.2, printed p. 160, PDF p. 172]

## Composition Rules

For $q\in O_2$ and $v,w\in\mathbb R^2$,
$$qt_v=t_{q(v)}q,
\qquad t_vt_w=t_{v+w}.$$
Consequently,
$$
(t_aq)(t_bp)=t_{a+q(b)}qp.
$$

For the standard generators,
$$
\begin{aligned}
\rho_\theta t_v&=t_{\rho_\theta(v)}\rho_\theta,\\
rt_v&=t_{r(v)}r,\\
r\rho_\theta&=\rho_{-\theta}r,\\
\rho_\theta\rho_\eta&=\rho_{\theta+\eta},\\
r^2&=1.
\end{aligned}
$$

These relations turn geometric compositions into group calculations.

## Change of Coordinates and Conjugation

If coordinates are changed by an isometry $g$, the coordinate formula for $m$ changes to
$$m'=g^{-1}mg.$$
Thus conjugation is the algebraic form of a rigid change of coordinates.

If $g=t_aq$, conjugation sends translations according to
$$gt_vg^{-1}=t_{q(v)}.$$
Only the orthogonal part $q$ changes the vector; hence its length is preserved.

## Key Properties

1. The translations form a normal subgroup $T\triangleleft M$.
2. Taking the orthogonal part defines a surjective homomorphism
   $$\pi:M\to O_2,\qquad\pi(t_aq)=q,$$
   with kernel $T$.
3. The determinant of the orthogonal part defines the orientation homomorphism
   $$\sigma:M\to\{\pm1\}.$$
4. A figure's symmetry group may be finite, infinite cyclic, infinite dihedral, or a more complicated discrete subgroup of $M$.
5. The geometric type of an isometry is stable under conjugation, though its center, axis, or glide line moves.

## Examples

> [!example] Regular Polygon
> The symmetries of a regular $n$-gon form the dihedral group $D_n$ of order $2n$.

> [!example] A Periodic Strip
> If a strip has only integer multiples of one basic translation, its symmetry group is infinite cyclic. Adding a reflection or half-turn that reverses the translation produces an infinite dihedral group.

> [!example] Rotation About a Point
> Rotation through $\theta$ about $p$ is
> $$t_p\rho_\theta t_{-p}
> =t_{p-\rho_\theta(p)}\rho_\theta.$$

## Related Concepts

- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Exercises

- [[01 - Group Theory/Exercises/Exercise G16 - Symmetries of Plane Figures|Exercise G16: Symmetries of Plane Figures]]
- [[01 - Group Theory/Exercises/Exercise G17 - Composition Rules for Plane Isometries|Exercise G17: Composition Rules for Plane Isometries]]
- [[01 - Group Theory/Exercises/Exercise G18 - Square of an Orientation-Reversing Isometry|Exercise G18: Square of an Orientation-Reversing Isometry]]
- [[01 - Group Theory/Exercises/Exercise G21 - Complex Formulas for Plane Isometries|Exercise G21: Complex Formulas for Plane Isometries]]
- [[01 - Group Theory/Exercises/Exercise G22 - Rotations and Reflections by Conjugation|Exercise G22: Rotations and Reflections by Conjugation]]

## Source and Proof Status

The decomposition of isometries, the homomorphism $M\to O_2$, and the plane-isometry classification are **proved in the source**. [S1, Ch. 6, Sections 2–3, printed pp. 156–163, PDF pp. 168–175] The periodic-pattern classifications in the linked exercises are derived in those notes.

