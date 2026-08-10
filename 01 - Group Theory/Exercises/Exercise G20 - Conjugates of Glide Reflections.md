---
title: "Exercise G20: Conjugates of Glide Reflections"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - plane-isometries
  - conjugation
  - glide-reflections
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.4, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G20: Conjugates of Glide Reflections

## Problem Statement

> [!question] Exercise
> Prove that a conjugate in the plane isometry group $M$ of a glide reflection is again a glide reflection, and that the two glide vectors have the same length.

## Hints

> [!hint]- Hint 1
> Write the glide reflection as $m=t_vr_\ell$, where $r_\ell$ is reflection in its glide line $\ell$ and $0\ne v$ is parallel to $\ell$.

> [!hint]- Hint 2
> If $g=t_aq$ with $q\in O_2$, calculate $gt_vg^{-1}$ and interpret $gr_\ell g^{-1}$ geometrically.

## Solution

> [!success]- Solution
> Let
> $$m=t_vr_\ell$$
> be a glide reflection, where $r_\ell$ is reflection about the line $\ell$ and the nonzero glide vector $v$ is parallel to $\ell$.
>
> Write an arbitrary $g\in M$ as
> $$g=t_aq,$$
> where $q\in O_2$ is its orthogonal linear part. Conjugation distributes over a product, so
> $$gmg^{-1}=(gt_vg^{-1})(gr_\ell g^{-1}).$$
>
> For the translation factor, direct calculation gives
> $$gt_vg^{-1}=t_{q(v)}.$$
> Indeed, the translations in $g$ and $g^{-1}$ cancel, while the orthogonal part changes the translation vector from $v$ to $q(v)$.
>
> The map $gr_\ell g^{-1}$ is reflection about the image line $g(\ell)$. This follows because it fixes every point of $g(\ell)$ and exchanges the two perpendicular sides of that line.
>
> Since $v$ is parallel to $\ell$, the vector $q(v)$ is parallel to $g(\ell)$. It is nonzero because $q$ is invertible. Therefore
> $$gmg^{-1}=t_{q(v)}r_{g(\ell)}$$
> is a glide reflection with glide vector $q(v)$.
>
> Finally, orthogonal operators preserve length, so
> $$\lVert q(v)\rVert=\lVert v\rVert.$$
> Thus conjugate glide reflections have glide vectors of the same length. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

Conjugation by an isometry is a change of coordinates. The glide line moves geometrically, while the glide vector is acted on only by the orthogonal part of the coordinate change.

**Source status:** The definition and classification of glide reflections are proved in [S1, Ch. 6, Thm. 6.3.4 and Cor. 6.3.8, printed pp. 160–162, PDF pp. 172–174]. The conjugacy statement is proved above.

