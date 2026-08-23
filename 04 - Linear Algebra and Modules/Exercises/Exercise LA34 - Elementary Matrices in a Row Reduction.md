---
title: "Exercise LA34: Elementary Matrices in a Row Reduction"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - row-reduction
  - elementary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.1, printed p. 32, PDF p. 44; referenced reduction printed p. 12, PDF p. 24"
created: 2026-08-23
---

# Exercise LA34: Elementary Matrices in a Row Reduction

## Problem Statement

> [!question] Exercise 2.1
> For the reduction of
> 
> $$
> M=\begin{bmatrix}1&1&2&1&5\\1&1&2&6&10\\1&2&5&2&7\end{bmatrix}
> $$
> 
> in (1.2.8), determine the elementary matrix for each operation. Compute their product $P$ and verify that $PM$ is the final matrix.

## Hints

> [!hint]- Hint 1
> Read the reduction as subtracting row $1$, swapping rows, scaling, and clearing above pivots.

## Solution

> [!success]- Solution
> One valid sequence is
> 
> $$
> R_2\leftarrow R_2-R_1,\quad R_3\leftarrow R_3-R_1,\quad
> R_2\leftrightarrow R_3,\quad R_3\leftarrow\tfrac15R_3,
> $$
> 
> $$
> R_2\leftarrow R_2-R_3,\quad R_1\leftarrow R_1-R_3,\quad
> R_1\leftarrow R_1-R_2.
> $$
> 
> The corresponding elementary matrices are
> 
> $$
> E_1=I-e_{21},\ E_2=I-e_{31},\ E_3=\begin{bmatrix}1&0&0\\0&0&1\\0&1&0\end{bmatrix},\ E_4=\operatorname{diag}(1,1,\tfrac15),
> $$
> 
> $$
> E_5=I-e_{23},\qquad E_6=I-e_{13},\qquad E_7=I-e_{12}.
> $$
> 
> Their product is
> 
> $$
> P=E_7E_6E_5E_4E_3E_2E_1
> =\begin{bmatrix}2&0&-1\\-\frac45&-\frac15&1\\-\frac15&\frac15&0\end{bmatrix}.
> $$
> 
> Direct multiplication gives
> 
> $$
> PM=\begin{bmatrix}1&0&-1&0&3\\0&1&3&0&1\\0&0&0&1&1\end{bmatrix},
> $$
> 
> which is the end result in Artin's display.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.1, printed p. 32, PDF p. 44; display (1.2.8), printed p. 12, PDF p. 24]. The solution is an independent derivation for this vault, not a solution printed in Artin.
