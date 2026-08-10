---
title: Rotations Reflections and Glide Reflections
aliases:
  - Rotations, Reflections, and Glide Reflections
  - Glide Reflections
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - plane-isometries
  - reflections
  - rotations
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, printed pp. 159–163, PDF pp. 171–175"
---

# Rotations, Reflections, and Glide Reflections

## Definition

> [!info] Definition (Rotation)
> Rotation through angle $\theta$ about a point $p$ is
> $$\rho_{\theta,p}=t_p\rho_\theta t_{-p}.$$
> When $p=0$, its matrix is
> $$
> \rho_\theta=
> \begin{pmatrix}
> \cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta
> \end{pmatrix}.
> $$

> [!info] Definition (Reflection)
> Reflection about a line $\ell$ fixes every point of $\ell$ and reverses the perpendicular component. Reflection about the horizontal axis is
> $$r(x_1,x_2)=(x_1,-x_2).$$

> [!info] Definition (Glide Reflection)
> A **glide reflection** is reflection about a line $\ell$, followed by translation by a nonzero vector $v$ parallel to $\ell$. The line $\ell$ is the glide line and $v$ is the glide vector.

## Geometric Classification

> [!abstract] Theorem (Classification of Plane Isometries)
> Every plane isometry is exactly one of the following geometric types:
>
> 1. a translation;
> 2. a rotation through a nonzero angle about a point;
> 3. a reflection about a line;
> 4. a glide reflection.

Translations and rotations preserve orientation; reflections and glide reflections reverse it. This theorem is **proved in the source**. [S1, Ch. 6, Thm. 6.3.4, printed pp. 160–162, PDF pp. 172–174]

## Algebraic Recognition

An orientation-preserving isometry has the form $t_a\rho_\theta$.

- If $\theta=0$, it is a translation.
- If $\theta\ne0$, the operator $I-\rho_\theta$ is invertible, and the unique fixed point $p$ solves
  $$(I-\rho_\theta)p=a.$$
  The isometry is rotation through $\theta$ about $p$.

An orientation-reversing isometry has the form $t_a\rho_\theta r$. After rotating coordinates, it becomes $t_br$. If $b=(b_1,b_2)^t$, then
$$t_br(x_1,x_2)=(x_1+b_1,-x_2+b_2).$$
Its glide line is
$$x_2=\frac{b_2}{2},$$
and its glide vector is $b_1e_1$. If $b_1=0$, the map is an ordinary reflection.

## Squaring an Orientation-Reversing Isometry

Let $m=t_vq$, where $q$ is a reflection through a line through the origin. Since $q^2=1$,
$$m^2=t_vqt_vq=t_{v+q(v)}.$$
Thus the square of a reflection is the identity, while the square of a genuine glide reflection is a nonzero translation equal to twice its glide vector.

## Conjugation

For an isometry $g$:

- $g\rho_{\theta,p}g^{-1}$ is rotation through angle $\det(\pi(g))\theta$ about $g(p)$;
- $gr_\ell g^{-1}$ is reflection about $g(\ell)$;
- the conjugate of a glide reflection is a glide reflection whose vector has the same length.

The sign change in the first formula occurs when $g$ reverses orientation.

## Complex Formulas

Under $\mathbb R^2\cong\mathbb C$,
$$t_a(z)=z+a,\qquad
\rho_\theta(z)=e^{i\theta}z,\qquad
r(z)=\overline z.$$
Therefore every plane isometry has one of the forms
$$z\longmapsto a+e^{i\theta}z,
\qquad
z\longmapsto a+e^{i\theta}\overline z.$$

## Key Properties

1. A nonidentity orientation-preserving isometry is determined by whether it has a fixed point: rotations do, nontrivial translations do not.
2. An orientation-reversing isometry is a reflection exactly when it has a fixed point.
3. A glide reflection has no fixed point, but its square is a translation.
4. The composition of reflections in intersecting lines is a rotation through twice their directed angle.
5. The composition of reflections in parallel lines is a translation perpendicular to those lines.

## Examples

> [!example] Reflection About $x=1$
> Reflection about the vertical line $x=1$ is
> $$s(x,y)=(2-x,y)=t_{(2,0)^t}\rho_\pi r(x,y).$$

> [!example] A Standard Glide
> The map
> $$m(x,y)=(x+3,-y+2)$$
> has glide line $y=1$ and glide vector $(3,0)^t$. Its square is translation by $(6,0)^t$.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Exercises

- [[01 - Group Theory/Exercises/Exercise G18 - Square of an Orientation-Reversing Isometry|Exercise G18: Square of an Orientation-Reversing Isometry]]
- [[01 - Group Theory/Exercises/Exercise G19 - Linear Reflections of the Plane|Exercise G19: Linear Reflections of the Plane]]
- [[01 - Group Theory/Exercises/Exercise G20 - Conjugates of Glide Reflections|Exercise G20: Conjugates of Glide Reflections]]
- [[01 - Group Theory/Exercises/Exercise G22 - Rotations and Reflections by Conjugation|Exercise G22: Rotations and Reflections by Conjugation]]

## Source and Proof Status

The four-type classification and its affine-coordinate proof are **proved in the source**. [S1, Ch. 6, Thm. 6.3.4, printed pp. 160–162, PDF pp. 172–174] The conjugacy and square formulas are proved directly in the linked exercises.

