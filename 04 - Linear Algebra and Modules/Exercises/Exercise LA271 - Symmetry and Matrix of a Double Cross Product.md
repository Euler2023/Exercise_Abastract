---
title: "Exercise LA271: Symmetry and Matrix of a Double Cross Product"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - cross-product
  - symmetric-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.5, printed p. 259, PDF p. 271"
created: 2026-08-24
---

# Exercise LA271: Symmetry and Matrix of a Double Cross Product

## Problem Statement

> [!question] Miscellaneous Problem M.5
> The vector cross product is
>
> $$
> x\times y=(x_2y_3-x_3y_2,\ x_3y_1-x_1y_3,\ x_1y_2-x_2y_1)^{\mathsf T}.
> $$
>
> Let $v$ be a fixed vector in $\mathbb R^3$, and let $T$ be the linear operator $T(x)=(x\times v)\times v$.
>
> **(a)** Show that this operator is symmetric. You may use general properties of the scalar triple product, but not the matrix of the operator.
>
> **(b)** Compute the matrix.

## Hints

> [!hint]- Hint 1
> Use the vector triple-product identity before computing coordinates.

## Solution

> [!success]- Solution
> **(a)** The vector triple-product identity gives
>
> $$
> T(x)=(x\times v)\times v=v(x\cdot v)-x(v\cdot v).
> $$
>
> Hence for all $x,y$,
>
> $$
> T(x)\cdot y=(x\cdot v)(v\cdot y)-(v\cdot v)(x\cdot y)=x\cdot T(y).
> $$
>
> Thus $T$ is symmetric, without using its matrix.
>
> **(b)** Writing $v=(v_1,v_2,v_3)^{\mathsf T}$, the operator is $T(x)=(vv^{\mathsf T}-\lVert v\rVert^2I)x$. Its matrix is
>
> $$
> \boxed{\begin{pmatrix}
> -v_2^2-v_3^2&v_1v_2&v_1v_3\\
> v_1v_2&-v_1^2-v_3^2&v_2v_3\\
> v_1v_3&v_2v_3&-v_1^2-v_2^2
> \end{pmatrix}}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The vector $v$ is a zero eigenvector, while every vector in $v^\perp$ has eigenvalue $-\lVert v\rVert^2$.
- **Source status:** The cross-product convention and restriction in part (a) were visually verified at [S1, Ch. 8, M.5, printed p. 259, PDF p. 271]. The derivation is independent.

