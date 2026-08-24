---
title: "Exercise LA245: Diagonalizing the Exchange Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - signature
  - orthogonal-diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.9, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA245: Diagonalizing the Exchange Matrix

## Problem Statement

> [!question] Exercise 6.9
> Determine the signature of the form on $\mathbb R^2$ whose matrix is
>
> $$
> A=\begin{pmatrix}0&1\\1&0\end{pmatrix},
> $$
>
> and determine an orthogonal matrix $P$ such that $P^{\mathsf T}AP$ is diagonal.

## Hints

> [!hint]- Hint 1
> Find eigenvectors for the eigenvalues $1$ and $-1$.

## Solution

> [!success]- Solution
> The vectors $(1,1)^{\mathsf T}$ and $(1,-1)^{\mathsf T}$ are eigenvectors with eigenvalues $1$ and $-1$. After normalization, take
>
> $$
> \boxed{P=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}}.
> $$
>
> Its columns are orthonormal, and direct multiplication gives
>
> $$
> P^{\mathsf T}AP=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
> $$
>
> Therefore the signature is $\boxed{(1,1)}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- **Source status:** The matrix was visually verified at [S1, Ch. 8, §6, Ex. 6.9, printed p. 257, PDF p. 269]. The diagonalization is independent.

