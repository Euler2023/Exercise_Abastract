---
title: "Exercise LA328: Gaussian Smith Form of a Two-by-Two Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gaussian-integers
  - smith-normal-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 4, Diagonalizing Integer Matrices, Ex. 4.8, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA328: Gaussian Smith Form of a Two-by-Two Matrix

## Problem Statement

> [!question] Exercise 4.8
> Use invertible row and column operations in the ring $\mathbb Z[i]$ of Gaussian integers to diagonalize
>
> $$
> \begin{pmatrix}3&2+i\\2-i&9\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> The combination $3-(1-i)(2+i)$ is the unit $i$.

## Solution

> [!success]- Solution
> Start with
>
> $$
> A=\begin{pmatrix}3&2+i\\2-i&9\end{pmatrix}.
> $$
>
> Replace $C_1$ by $C_1-(1-i)C_2$. Its top entry becomes $i$. Multiplying that column by the unit $-i$ gives
>
> $$
> \begin{pmatrix}1&2+i\\8+7i&9\end{pmatrix}.
> $$
>
> Next replace $R_2$ by $R_2-(8+7i)R_1$, then replace $C_2$ by $C_2-(2+i)C_1$. This gives
>
> $$
> \begin{pmatrix}1&0\\0&-22i\end{pmatrix}.
> $$
>
> Finally multiply the second row by the unit $i$. Thus
>
> $$
> \boxed{A\sim\operatorname{diag}(1,22)}
> $$
>
> over $\mathbb Z[i]$. The determinant check agrees:
>
> $$
> \det A=27-(2+i)(2-i)=22.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Routing:** Linear Algebra is primary because invertible row and column operations over the Euclidean coefficient ring produce the diagonal form.
- **Computational verification:** Every stated Gaussian row or column operation and the determinant were checked exactly.
- **Source status:** [S1, Ch. 14, §14.4, Ex. 4.8, printed p. 438, PDF p. 450].
