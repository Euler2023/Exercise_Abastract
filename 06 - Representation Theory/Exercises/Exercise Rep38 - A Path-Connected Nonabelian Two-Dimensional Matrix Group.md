---
title: "Exercise Rep38: A Path-Connected Nonabelian Two-Dimensional Matrix Group"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-groups
  - affine-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.4, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep38: A Path-Connected Nonabelian Two-Dimensional Matrix Group

## Problem Statement

> [!question] Exercise 7.4
> Find a path-connected, nonabelian subgroup of $GL_2$ of dimension $2$.

## Hints

> [!hint]- Hint 1
> Use the orientation-preserving affine group of the real line.

## Solution

> [!success]- Solution
> Take
>
> $$
> G=\left\{\begin{pmatrix}x&y\\0&1\end{pmatrix}:x>0,\ y\in\mathbb R\right\}.
> $$
>
> It is a subgroup, and $(x,y)\mapsto\begin{pmatrix}x&y\\0&1\end{pmatrix}$ is a homeomorphism from $(0,\infty)\times\mathbb R$, so $G$ is path connected and two-dimensional. It is nonabelian because
>
> $$
> \begin{pmatrix}2&0\\0&1\end{pmatrix}
> \begin{pmatrix}1&1\\0&1\end{pmatrix}
> \ne
> \begin{pmatrix}1&1\\0&1\end{pmatrix}
> \begin{pmatrix}2&0\\0&1\end{pmatrix}.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- This is the positive affine group already analyzed in Exercise Rep19.
- **Source status:** Ex. 7.4 was visually checked at [S1, Ch. 9, §9.7, printed p. 286, PDF p. 298]. The example and verification are independent.

