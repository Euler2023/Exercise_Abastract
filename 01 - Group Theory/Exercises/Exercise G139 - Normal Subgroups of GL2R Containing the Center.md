---
title: "Exercise G139: Normal Subgroups of GL2R Containing the Center"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - projective-linear-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.6, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G139: Normal Subgroups of GL2R Containing the Center

## Problem Statement

> [!question] Exercise 8.6
> Determine all normal subgroups of $GL_2(\mathbb R)$ that contain its center.

## Hints

> [!hint]- Hint 1
> Pass to $PGL_2(\mathbb R)=GL_2(\mathbb R)/Z$ and use the sign of the determinant.

> [!hint]- Hint 2
> The determinant-positive subgroup modulo $Z$ is $PSL_2(\mathbb R)$, which is simple.

## Solution

> [!success]- Solution
> Let
>
> $$
> Z=\{\lambda I:\lambda\in\mathbb R^{\times}\},
> \qquad
> GL_2^+(\mathbb R)=\{A:\det A>0\}.
> $$
>
> Normal subgroups of $GL_2(\mathbb R)$ containing $Z$ correspond to normal subgroups of $PGL_2(\mathbb R)$. Because multiplication by a scalar changes the determinant by the positive factor $\lambda^2$, determinant sign descends to a surjection
>
> $$
> PGL_2(\mathbb R)\longrightarrow\{\pm1\}.
> $$
>
> Its kernel is $GL_2^+(\mathbb R)/Z\cong PSL_2(\mathbb R)$, which is simple by Theorem 9.8.1.
>
> If $N\triangleleft PGL_2(\mathbb R)$, then $N\cap PSL_2(\mathbb R)$ is either trivial or all of $PSL_2(\mathbb R)$. In the second case, $N$ is either $PSL_2(\mathbb R)$ or all of $PGL_2(\mathbb R)$. In the first case, $[N,PSL_2(\mathbb R)]$ is trivial, so $N$ centralizes $PSL_2(\mathbb R)$. The latter has trivial centralizer in $PGL_2(\mathbb R)$, as follows by commuting successively with all translations and diagonal projective transformations. Hence $N$ is trivial.
>
> Taking inverse images gives exactly
>
> $$
> Z,
> \qquad GL_2^+(\mathbb R),
> \qquad GL_2(\mathbb R).
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The centralizer step rules out a normal complement to the simple index-two subgroup.
- **Source status:** Theorem 9.8.1 was checked at [S1, Ch. 9, §9.8, printed pp. 280–282, PDF pp. 292–294], and Ex. 8.6 at [S1, printed p. 287, PDF p. 299]. The quotient classification is independent.

