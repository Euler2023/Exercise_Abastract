---
title: "Exercise Rep55: Finite Groups with Low-Dimensional Real Representations"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 3, Ex. 3.3, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep55: Finite Groups with Low-Dimensional Real Representations

## Problem Statement

> [!question] Exercise 3.3
> **(a)** Let $R:G\to SL_2(\mathbb R)$ be a faithful representation of a finite group by real $2\times2$ matrices with determinant $1$. Use the results of Exercise 3.2 to prove that $G$ is a cyclic group.
>
> **(b)** Determine the finite groups that have faithful real two-dimensional representations.
>
> **(c)** Determine the finite groups that have faithful real three-dimensional representations with determinant $1$.

## Hints

> [!hint]- Hint 1
> Conjugate the image into $O_2$ or $SO_3$.

> [!hint]- Hint 2
> Use the classifications of finite subgroups of $O_2$ and $SO_3$.

## Solution

> [!success]- Solution
> **(a)** By Exercise Rep54, the finite image is conjugate into $O_2$. Determinant $1$ places it in $SO_2$, which is the circle group. Every finite subgroup of the circle group consists of the $n$th roots of unity for some $n$ and is cyclic. Faithfulness identifies $G$ with that image.
>
> **(b)** A finite subgroup of $O_2$ is either cyclic (rotations) or dihedral (rotations together with reflections), and both types have faithful planar actions. Hence the answer is $C_n$ and $D_n$.
>
> **(c)** After orthogonalization, the image lies in $SO_3$. The finite rotation groups are the cyclic groups, the rotational dihedral groups, and the rotation groups of the tetrahedron, cube/octahedron, and dodecahedron/icosahedron. Abstractly these are
>
> $$
> C_n,\qquad D_n,\qquad A_4,\qquad S_4,\qquad A_5.
> $$
>
> Each has its standard faithful rotation representation, so the list is exact. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **External standard input:** the finite-subgroup classifications of $O_2$ and $SO_3$ are the classification results developed in Artin's earlier geometry chapters; they are not reproved here.
- **Source status:** [S1, Ch. 10, §3, Ex. 3.3, printed p. 315, PDF p. 327].

