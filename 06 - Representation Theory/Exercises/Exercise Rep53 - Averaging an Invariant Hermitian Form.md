---
title: "Exercise Rep53: Averaging an Invariant Hermitian Form"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 3, Ex. 3.1, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep53: Averaging an Invariant Hermitian Form

## Problem Statement

> [!question] Exercise 3.1
> Let $G$ be a cyclic group of order $3$. The matrix
>
> $$
> A=\begin{pmatrix}-1&-1\\1&0\end{pmatrix}
> $$
>
> has order $3$, so it defines a matrix representation of $G$. Use the averaging process to produce a $G$-invariant form from the standard Hermitian product $X^*Y$ on $\mathbb C^2$.

## Hints

> [!hint]- Hint 1
> The averaged Gram matrix is $I+A^*A+(A^2)^*A^2$.

## Solution

> [!success]- Solution
> Since
>
> $$
> A^2=\begin{pmatrix}0&1\\-1&-1\end{pmatrix},
> $$
>
> averaging the standard product gives
>
> $$
> \langle X,Y\rangle_G
> =\frac13\sum_{k=0}^2(A^kX)^*(A^kY)
> =X^*HY,
> $$
>
> where
>
> $$
> H=\frac13\left(I+A^*A+(A^2)^*A^2\right)
> =\frac13\begin{pmatrix}4&2\\2&4\end{pmatrix}.
> $$
>
> Reindexing the sum shows $\langle AX,AY\rangle_G=\langle X,Y\rangle_G$. The matrix $H$ has eigenvalues $2$ and $2/3$, so the form is positive definite. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Computational verification:** the displayed matrix multiplications verify this particular averaged form; invariance follows symbolically from reindexing.
- **Source status:** [S1, Ch. 10, §3, Ex. 3.1, printed p. 315, PDF p. 327].

