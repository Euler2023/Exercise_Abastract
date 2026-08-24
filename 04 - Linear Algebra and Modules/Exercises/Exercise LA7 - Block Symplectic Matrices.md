---
title: "Exercise LA7: Block Symplectic Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - block-matrices
  - symplectic-groups
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.6, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA7: Block Symplectic Matrices

## Problem Statement

> [!question] Exercise 1.6
> Prove that the following matrices are symplectic, where all displayed blocks are $n\times n$:
> $$
> \begin{pmatrix}0&-I\\I&0\end{pmatrix},
> \qquad
> \begin{pmatrix}A^{\mathsf T}&0\\0&A^{-1}\end{pmatrix},
> \qquad
> \begin{pmatrix}I&B\\0&I\end{pmatrix},
> $$
> where $B=B^{\mathsf T}$ and $A$ is invertible.

## Hints

> [!hint]- Hint 1
> Use $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$ and verify $P^{\mathsf T}JP=J$ for each matrix.

> [!hint]- Hint 2
> In the third calculation, the lower-right block becomes $B^{\mathsf T}-B$.

## Solution

> [!success]- Solution
> Put
> $$
> J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.
> $$
> A matrix $P$ is symplectic exactly when $P^{\mathsf T}JP=J$.
>
> ### First matrix
> Let
> $$
> P_1=\begin{pmatrix}0&-I\\I&0\end{pmatrix}=-J.
> $$
> Since $J^{\mathsf T}=-J$ and $J^2=-I_{2n}$,
> $$
> P_1^{\mathsf T}JP_1
> =J\,J(-J)=J.
> $$
>
> ### Second matrix
> Let
> $$
> P_2=\begin{pmatrix}A^{\mathsf T}&0\\0&A^{-1}\end{pmatrix}.
> $$
> Then
> $$
> P_2^{\mathsf T}
> =\begin{pmatrix}A&0\\0&A^{-\mathsf T}\end{pmatrix},
> $$
> and therefore
> $$
> \begin{aligned}
> P_2^{\mathsf T}JP_2
> &=\begin{pmatrix}A&0\\0&A^{-\mathsf T}\end{pmatrix}
> \begin{pmatrix}0&A^{-1}\\-A^{\mathsf T}&0\end{pmatrix}\\
> &=\begin{pmatrix}0&I\\-I&0\end{pmatrix}=J.
> \end{aligned}
> $$
>
> ### Third matrix
> Let
> $$
> P_3=\begin{pmatrix}I&B\\0&I\end{pmatrix}.
> $$
> Then
> $$
> \begin{aligned}
> P_3^{\mathsf T}JP_3
> &=\begin{pmatrix}I&0\\B^{\mathsf T}&I\end{pmatrix}
> \begin{pmatrix}0&I\\-I&-B\end{pmatrix}\\
> &=\begin{pmatrix}0&I\\-I&B^{\mathsf T}-B\end{pmatrix}.
> \end{aligned}
> $$
> Because $B^{\mathsf T}=B$, the lower-right block is zero, and the result is $J$. Hence all three matrices are symplectic. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

These matrices are basic building blocks for symplectic changes of coordinates: the first exchanges the two coordinate halves, the second changes a basis together with its dual basis, and the third is a shear determined by a symmetric matrix.

**Source status:** The three matrices and their hypotheses are stated in [S1, Ch. 9, Exercises §1, Ex. 1.6, printed p. 283, PDF p. 295]. All three block computations are complete.
