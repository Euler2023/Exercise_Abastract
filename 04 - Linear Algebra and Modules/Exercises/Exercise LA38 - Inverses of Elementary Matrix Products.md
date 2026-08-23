---
title: "Exercise LA38: Inverses of Elementary Matrix Products"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - inverses
  - elementary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.5, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA38: Inverses of Elementary Matrix Products

## Problem Statement

> [!question] Exercise 2.5
> Find the inverses of
> 
> $$
> P=\begin{bmatrix}0&1\\1&0\end{bmatrix},\qquad
> A=\begin{bmatrix}3&5\\1&2\end{bmatrix},
> $$
> 
> and
> 
> $$
> \begin{bmatrix}1&1\\0&1\end{bmatrix}
> \begin{bmatrix}0&1\\1&0\end{bmatrix}
> \begin{bmatrix}3&5\\1&2\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Reverse the order of factors when taking an inverse.

## Solution

> [!success]- Solution
> The swap matrix is its own inverse:
> 
> $$
> P^{-1}=P.
> $$
> 
> Since $\det A=1$,
> 
> $$
> A^{-1}=\begin{bmatrix}2&-5\\-1&3\end{bmatrix}.
> $$
> 
> Let $U=\begin{bmatrix}1&1\\0&1\end{bmatrix}$. Then
> 
> $$
> (UPA)^{-1}=A^{-1}P^{-1}U^{-1}
> =\begin{bmatrix}-5&7\\3&-4\end{bmatrix}.
> $$
> 
> Indeed $UPA=\begin{bmatrix}4&7\\3&5\end{bmatrix}$, whose displayed inverse has product $I$ on both sides.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.5, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
