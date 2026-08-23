---
title: "Exercise LA30: Centralizers of Five Two-by-Two Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - centralizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.12, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA30: Centralizers of Five Two-by-Two Matrices

## Problem Statement

> [!question] Exercise 1.12
> Find all $2\times2$ matrices commuting with each of
> 
> $$
> \text{(a) }\begin{bmatrix}1&0\\0&0\end{bmatrix},\quad
> \text{(b) }\begin{bmatrix}0&1\\0&0\end{bmatrix},\quad
> \text{(c) }\begin{bmatrix}2&0\\0&6\end{bmatrix},
> $$
> 
> $$
> \text{(d) }\begin{bmatrix}1&3\\0&1\end{bmatrix},\quad
> \text{(e) }\begin{bmatrix}2&3\\0&6\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Write the unknown matrix as $X=\begin{bmatrix}a&b\c&d\end{bmatrix}$ and solve $XT=TX$.

## Solution

> [!success]- Solution
> Equating the four entries of $XT$ and $TX$ gives:
> 
> $$
> \begin{array}{c|c}
> \text{case}&\text{all commuting matrices }X\\ \hline
> (a)&\begin{bmatrix}a&0\\0&d\end{bmatrix}\\
> (b)&\begin{bmatrix}a&b\\0&a\end{bmatrix}\\
> (c)&\begin{bmatrix}a&0\\0&d\end{bmatrix}\\
> (d)&\begin{bmatrix}a&b\\0&a\end{bmatrix}\\
> (e)&\begin{bmatrix}a&\frac34(d-a)\\0&d\end{bmatrix}
> \end{array}
> $$
> 
> where the displayed parameters are arbitrary scalars. For example, in (e) the equations reduce to $c=0$ and $3a+4b-3d=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.12, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
