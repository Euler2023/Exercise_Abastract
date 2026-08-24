---
title: "Exercise LA226: Coordinates from an Orthogonal Basis"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - coordinate-vectors
  - orthogonal-bases
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.17, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA226: Coordinates from an Orthogonal Basis

## Problem Statement

> [!question] Exercise 4.17
> Use the method of (3.5.13) to compute the coordinate vector of the vector $(x_1,x_2,x_3)^{\mathsf T}$ with respect to the basis $\mathcal B$ described in Example 8.4.14, and compare your answer with the projection formula.

## Hints

> [!hint]- Hint 1
> Put the three basis vectors into the columns of a matrix and invert it.

> [!hint]- Hint 2
> Their squared lengths are $3$, $2$, and $6$.

## Solution

> [!success]- Solution
> Example 8.4.14 uses the orthogonal basis
>
> $$
> v_1=(1,1,1)^{\mathsf T},
> \quad
> v_2=(1,-1,0)^{\mathsf T},
> \quad
> v_3=(1,1,-2)^{\mathsf T}.
> $$
>
> Its basis matrix and inverse are
>
> $$
> B=\begin{pmatrix}1&1&1\\1&-1&1\\1&0&-2\end{pmatrix},
> \qquad
> B^{-1}=\begin{pmatrix}
> 1/3&1/3&1/3\\
> 1/2&-1/2&0\\
> 1/6&1/6&-1/3
> \end{pmatrix}.
> $$
>
> Thus for $X=(x_1,x_2,x_3)^{\mathsf T}$,
>
> $$
> [X]_{\mathcal B}=B^{-1}X
> =\boxed{\begin{pmatrix}
> (x_1+x_2+x_3)/3\\
> (x_1-x_2)/2\\
> (x_1+x_2-2x_3)/6
> \end{pmatrix}}.
> $$
>
> The projection formula gives the same coefficients because
>
> $$
> c_i=\frac{v_i\cdot X}{v_i\cdot v_i},
> \qquad
> v_1\cdot v_1=3,\quad v_2\cdot v_2=2,\quad v_3\cdot v_3=6.
> $$
>
> Hence the change-of-basis computation and the orthogonal projection formula agree term by term.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- The basis and coefficients were checked against Example 8.4.14 at printed p. 239/PDF p. 251 as well as the exercise page.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.17, printed p. 255, PDF p. 267]. The matrix inversion is independent.
