---
title: "Exercise LA198: Centralizers of Five Real Three by Three Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - centralizers
  - matrix-groups
  - eigenspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.11, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise LA198: Centralizers of Five Real Three by Three Matrices

## Problem Statement

> [!question] Exercise 2.11
> Determine the centralizer in $GL_3(\mathbb R)$ of each matrix:
>
> $$
> A_1=\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix},\quad
> A_2=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix},\quad
> A_3=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix},
> $$
>
> $$
> A_4=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},\quad
> A_5=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Distinct eigenspaces must be preserved. For the Jordan matrices, commute with their nilpotent parts.

> [!hint]- Hint 2
> The last matrix reverses the first and third coordinates; commuting matrices are centrosymmetric.

## Solution

> [!success]- Solution
> Solving $PA_i=A_iP$ gives the following groups.
>
> For $A_1$, the three eigenspaces are distinct:
>
> $$
> Z(A_1)=\{\operatorname{diag}(a,b,c):abc\ne0\}.
> $$
>
> For $A_2$, the two-dimensional $1$-eigenspace and one-dimensional $2$-eigenspace are preserved:
>
> $$
> Z(A_2)=\left\{\begin{pmatrix}B&0\\0&c\end{pmatrix}:B\in GL_2(\mathbb R),\ c\ne0\right\}.
> $$
>
> For $A_3=I+E_{12}$:
>
> $$
> Z(A_3)=\left\{\begin{pmatrix}a&b&c\\0&a&0\\0&h&k\end{pmatrix}:a k\ne0\right\}.
> $$
>
> For the single Jordan block $A_4$:
>
> $$
> Z(A_4)=\left\{\begin{pmatrix}a&b&c\\0&a&b\\0&0&a\end{pmatrix}:a\ne0\right\}.
> $$
>
> Finally, $A_5$ exchanges $e_1,e_3$ and fixes $e_2$. Equivalently, it has a two-dimensional $1$-eigenspace and a one-dimensional $-1$-eigenspace. In the standard basis,
>
> $$
> Z(A_5)=\left\{\begin{pmatrix}a&b&c\\d&e&d\\c&b&a\end{pmatrix}:\det\begin{pmatrix}a&b&c\\d&e&d\\c&b&a\end{pmatrix}\ne0\right\}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** All five matrices were checked visually at [S1, Ch. 7, §2, Ex. 2.11, printed p. 221, PDF p. 233]. The centralizer calculations are independent.

