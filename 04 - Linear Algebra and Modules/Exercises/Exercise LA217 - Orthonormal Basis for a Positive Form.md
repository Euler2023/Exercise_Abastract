---
title: "Exercise LA217: Orthonormal Basis for a Positive Form"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gram-schmidt
  - positive-definite-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.8, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA217: Orthonormal Basis for a Positive Form

## Problem Statement

> [!question] Exercise 4.8
> Let
>
> $$
> A=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
> $$
>
> Find an orthonormal basis for $\mathbb R^2$ with respect to the form $X^{\mathsf T}AY$.

## Hints

> [!hint]- Hint 1
> Start Gram-Schmidt with $e_1,e_2$ using the $A$-inner product.

> [!hint]- Hint 2
> A vector $A$-orthogonal to $e_1$ is $(-1,2)^{\mathsf T}$.

## Solution

> [!success]- Solution
> Since $(e_1,e_1)_A=2$, take
>
> $$
> u_1=\frac1{\sqrt2}(1,0)^{\mathsf T}.
> $$
>
> Orthogonalizing $e_2$ against $e_1$ gives
>
> $$
> e_2-\frac{(e_1,e_2)_A}{(e_1,e_1)_A}e_1
> =e_2-\frac12e_1
> =\frac12(-1,2)^{\mathsf T}.
> $$
>
> Now
>
> $$
> (-1,2)A(-1,2)^{\mathsf T}=6,
> $$
>
> so an $A$-orthonormal basis is
>
> $$
> \boxed{
> u_1=\frac1{\sqrt2}(1,0)^{\mathsf T},
> \qquad
> u_2=\frac1{\sqrt6}(-1,2)^{\mathsf T}}.
> $$
>
> Direct calculation gives $u_i^{\mathsf T}Au_j=\delta_{ij}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- The matrix has leading principal minors $2$ and $3$, so the form is positive definite and normalization is possible.
- **Source status:** The matrix was visually verified at [S1, Ch. 8, §4, Ex. 4.8, printed p. 255, PDF p. 267]. The computation is independent.

