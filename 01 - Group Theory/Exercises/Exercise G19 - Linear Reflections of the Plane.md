---
title: "Exercise G19: Linear Reflections of the Plane"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - linear-algebra
  - reflections
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.3, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G19: Linear Reflections of the Plane

## Problem Statement

> [!question] Exercise
> Prove that a linear operator on $\mathbb R^2$ is a reflection if and only if its eigenvalues are $1$ and $-1$, and eigenvectors belonging to these eigenvalues are orthogonal.

## Hints

> [!hint]- Hint 1
> A reflection fixes every vector along its axis and negates every vector perpendicular to its axis.

> [!hint]- Hint 2
> For the converse, normalize one eigenvector for each eigenvalue. The orthogonality hypothesis makes them an orthonormal basis.

## Solution

> [!success]- Solution
> Let $T:\mathbb R^2\to\mathbb R^2$ be linear.
>
> ### If $T$ is a reflection
> Suppose that $T$ is reflection about a line $L$ through the origin. Choose a nonzero vector $u\in L$ and a nonzero vector $v\in L^\perp$. Reflection fixes the component parallel to $L$ and reverses the perpendicular component, so
> $$T(u)=u,\qquad T(v)=-v.$$
> Hence $u$ and $v$ are eigenvectors with eigenvalues $1$ and $-1$, respectively. Because $u\in L$ and $v\in L^\perp$, they are orthogonal.
>
> ### If the stated eigenvalue condition holds
> Conversely, suppose that
> $$T(u)=u,\qquad T(v)=-v$$
> for nonzero orthogonal vectors $u$ and $v$. Since two nonzero orthogonal vectors in $\mathbb R^2$ are linearly independent, they form a basis. Every $x\in\mathbb R^2$ has a unique expression
> $$x=au+bv.$$
> Linearity gives
> $$T(x)=aT(u)+bT(v)=au-bv.$$
> Thus $T$ fixes the component on $L=\operatorname{span}(u)$ and negates the component on $L^\perp=\operatorname{span}(v)$. This is exactly reflection about $L$.
>
> Therefore the two conditions are equivalent. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

The orthogonality condition is essential. A diagonalizable operator with eigenvalues $1$ and $-1$ but nonorthogonal eigenspaces is an oblique involution, not a Euclidean reflection.

**Source status:** The exercise statement is [S1, Ch. 6, Section 3, Ex. 3.3, printed p. 188, PDF p. 200]. The equivalence is proved directly in this note.

