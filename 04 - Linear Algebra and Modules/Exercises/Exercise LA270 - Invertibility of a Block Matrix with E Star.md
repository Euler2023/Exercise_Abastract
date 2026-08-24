---
title: "Exercise LA270: Invertibility of a Block Matrix with E Star"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - block-matrices
  - positive-definiteness
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.4, printed p. 259, PDF p. 271"
created: 2026-08-24
---

# Exercise LA270: Invertibility of a Block Matrix with E Star

## Problem Statement

> [!question] Miscellaneous Problem M.4
> Let $E$ be an $m\times n$ complex matrix. Prove that the matrix
>
> $$
> \begin{pmatrix}I&E^*\\-E&I\end{pmatrix}
> $$
>
> is invertible.

## Hints

> [!hint]- Hint 1
> Apply the block matrix to $(x,y)^{\mathsf T}$ and eliminate $y$.

> [!hint]- Hint 2
> The matrix $I+E^*E$ is positive definite.

## Solution

> [!success]- Solution
> The identity blocks have sizes $n$ and $m$. Suppose
>
> $$
> \begin{pmatrix}I_n&E^*\\-E&I_m\end{pmatrix}
> \begin{pmatrix}x\\y\end{pmatrix}=0.
> $$
>
> Then
>
> $$
> x+E^*y=0,
> \qquad
> -Ex+y=0.
> $$
>
> The second equation gives $y=Ex$. Substitution into the first gives
>
> $$
> (I_n+E^*E)x=0.
> $$
>
> Taking the Hermitian product with $x$ yields
>
> $$
> 0=\lVert x\rVert^2+\lVert Ex\rVert^2,
> $$
>
> so $x=0$ and then $y=0$. The block matrix has trivial kernel and is square, hence it is invertible.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- No rank assumption on the rectangular matrix $E$ is required.
- **Source status:** The block signs and placement of $E^*$ were visually verified at [S1, Ch. 8, M.4, printed p. 259, PDF p. 271]. The kernel proof is independent.

