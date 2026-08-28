---
title: "Exercise G273: Eight Abelian Groups from Presentation Matrices"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - presentation-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.4, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise G273: Eight Abelian Groups from Presentation Matrices

## Problem Statement

> [!question] Exercise 7.4
> In each case, identify the abelian group with the given presentation matrix:
>
> $$
> \begin{pmatrix}2\\1\end{pmatrix},\quad
> \begin{pmatrix}0\\5\end{pmatrix},\quad
> \begin{pmatrix}2&0&0\end{pmatrix},\quad
> \begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix},
> $$
>
> $$
> \begin{pmatrix}2&3\\1&2\end{pmatrix},\quad
> \begin{pmatrix}2&4\\1&4\end{pmatrix},\quad
> \begin{pmatrix}2&4\\6&4\end{pmatrix},\quad
> \begin{pmatrix}4&6\\2&3\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> A presentation by an $m\times n$ matrix is the cokernel of $\mathbb Z^n\to\mathbb Z^m$.

## Solution

> [!success]- Solution
> Taking Smith forms in the displayed order gives:
>
> $$
> \begin{array}{c|c|c}
> &\text{Smith data}&\text{presented group}\\ \hline
> 1&(1,0)^{\mathsf T}&\mathbb Z\\
> 2&(5,0)^{\mathsf T}&\mathbb Z\oplus C_5\\
> 3&(2,0,0)&C_2\\
> 4&\operatorname{diag}(1,1)\text{ with one zero row}&\mathbb Z\\
> 5&\operatorname{diag}(1,1)&0\\
> 6&\operatorname{diag}(1,4)&C_4\\
> 7&\operatorname{diag}(2,8)&C_2\oplus C_8\\
> 8&\operatorname{diag}(1,0)&\mathbb Z.
> \end{array}
> $$
>
> Thus the answers are
>
> $$
> \boxed{\mathbb Z, \mathbb Z\oplus C_5, C_2, \mathbb Z, 0, C_4, C_2\oplus C_8, \mathbb Z.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Routing:** Group Theory is primary because all eight cokernels are requested as abelian groups.
- **Computational verification:** Ranks, entry gcds, and determinants were checked for every displayed matrix.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.4, printed p. 439, PDF p. 451].
