---
title: "Exercise LA303: Three-Dimensional Crystallographic Restriction"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - crystallographic-groups
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.8, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise LA303: Three-Dimensional Crystallographic Restriction

## Problem Statement

> [!question] Exercise 12.8
> Prove the crystallographic restriction for three-dimensional crystallographic groups: a rotational symmetry of a crystal has order $2,3,4$, or $6$.

## Hints

> [!hint]- Hint 1
> In a lattice basis, a rotation preserving the translation lattice is an integer matrix.

> [!hint]- Hint 2
> A spatial rotation through angle $\theta$ has eigenvalues $1,e^{i\theta},e^{-i\theta}$.

## Solution

> [!success]- Solution
> Let $L$ be the three-dimensional translation lattice and let $R$ be a rotational point-group element. In a lattice basis, $R$ is an element of $GL_3(\mathbb Z)$, so $\operatorname{tr}R$ is an integer.
>
> A real rotation through angle $\theta$ has eigenvalues
>
> $$
> 1, e^{i\theta}, e^{-i\theta},
> $$
>
> and therefore
>
> $$
> \operatorname{tr}R=1+2\cos\theta.
> $$
>
> Since $-1\le\cos\theta\le1$, the integer trace lies in $\{-1,0,1,2,3\}$. Thus
>
> $$
> 2\cos\theta\in\{-2,-1,0,1,2\}.
> $$
>
> Apart from the identity angle $0$, these give $\theta=\pi,2\pi/3,\pi/2,\pi/3$ up to sign, of respective orders
>
> $$
> 2, 3, 4, 6.
> $$
>
> Hence no other rotational order can occur in a three-dimensional crystallographic group. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Orthogonal and classical linear groups]]

## Notes

- The trace argument is special to genuine $3$-dimensional rotations, which always have a fixed axis and eigenvalue $1$.
- **Source status:** [S1, Ch. 6, §12, Ex. 12.8, printed p. 193, PDF p. 205]; independent lattice-matrix proof.
