---
title: "Exercise LA248: Unitary Diagonalization of a Two by Two Hermitian Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - unitary-diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.12, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA248: Unitary Diagonalization of a Two by Two Hermitian Matrix

## Problem Statement

> [!question] Exercise 6.12
> Find a unitary matrix $P$ so that $P^*AP$ is diagonal, when
>
> $$
> A=\begin{pmatrix}1&i\\-i&1\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> The eigenvalues are $2$ and $0$.

## Solution

> [!success]- Solution
> Eigenvectors for $2$ and $0$ are respectively $(i,1)^{\mathsf T}$ and $(-i,1)^{\mathsf T}$. They are orthogonal and both have norm $\sqrt2$. Hence
>
> $$
> \boxed{P=\frac1{\sqrt2}\begin{pmatrix}i&-i\\1&1\end{pmatrix}}
> $$
>
> is unitary. Its columns are eigenvectors in the displayed order, so
>
> $$
> \boxed{P^*AP=\begin{pmatrix}2&0\\0&0\end{pmatrix}}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status:** The matrix was visually verified at [S1, Ch. 8, §6, Ex. 6.12, printed p. 257, PDF p. 269]. The diagonalization is independent.

