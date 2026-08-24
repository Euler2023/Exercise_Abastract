---
title: "Exercise LA227: Equilateral Triangle Projection"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-projection
  - equilateral-triangle
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.18, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA227: Equilateral Triangle Projection

## Problem Statement

> [!question] Exercise 4.18
> Find the matrix of a projection $\pi:\mathbb R^3\to\mathbb R^2$ such that the image of the standard basis of $\mathbb R^3$ forms an equilateral triangle and $\pi(e_1)$ points in the direction of the $x$-axis.

## Hints

> [!hint]- Hint 1
> Place three equal-radius vectors $120^\circ$ apart, with the first on the positive $x$-axis.

> [!hint]- Hint 2
> Scale the two rows so that they are orthonormal.

## Solution

> [!success]- Solution
> Take
>
> $$
> \boxed{
> \pi=\begin{pmatrix}
> \sqrt{2/3}&-1/\sqrt6&-1/\sqrt6\\
> 0&1/\sqrt2&-1/\sqrt2
> \end{pmatrix}}.
> $$
>
> Its columns are
>
> $$
> p_1=\begin{pmatrix}\sqrt{2/3}\\0\end{pmatrix},
> \quad
> p_2=\begin{pmatrix}-1/\sqrt6\\1/\sqrt2\end{pmatrix},
> \quad
> p_3=\begin{pmatrix}-1/\sqrt6\\-1/\sqrt2\end{pmatrix}.
> $$
>
> Thus $p_1$ points along the positive $x$-axis. A direct calculation gives
>
> $$
> \lVert p_1-p_2\rVert^2
> =\lVert p_1-p_3\rVert^2
> =\lVert p_2-p_3\rVert^2=2,
> $$
>
> so the three images form an equilateral triangle. The two rows of $\pi$ are orthonormal, hence
>
> $$
> \pi\pi^{\mathsf T}=I_2.
> $$
>
> Therefore $\pi$ is the coordinate form of orthogonal projection onto its two-dimensional row space; equivalently, $\pi^{\mathsf T}\pi$ is the orthogonal projection in $\mathbb R^3$ onto that plane. Its kernel is $\operatorname{span}(1,1,1)^{\mathsf T}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The codomain $\mathbb R^2$ is identified with the projected plane by an orthonormal basis; this explains the rectangular projection matrix.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.18, printed p. 255, PDF p. 267]. The matrix is an independent construction.

