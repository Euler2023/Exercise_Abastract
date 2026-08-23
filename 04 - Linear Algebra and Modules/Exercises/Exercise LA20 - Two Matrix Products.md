---
title: "Exercise LA20: Two Matrix Products"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - matrix-multiplication
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.2, printed p. 31, PDF p. 43"
created: 2026-08-23
---

# Exercise LA20: Two Matrix Products

## Problem Statement

> [!question] Exercise 1.2
> Determine $AB$ and $BA$ in each case:
> 
> $$
> A=\begin{bmatrix}1&2&3\\3&3&1\end{bmatrix},\quad
> B=\begin{bmatrix}-8&-4\\9&5\\-3&-2\end{bmatrix};
> $$
> 
> $$
> A=\begin{bmatrix}1&4\\1&2\end{bmatrix},\quad
> B=\begin{bmatrix}6&-4\\3&2\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Multiply each row of the left factor by each column of the right factor.

> [!hint]- Hint 2
> Check the dimensions before comparing the two products.

## Solution

> [!success]- Solution
> For the first pair, direct row-by-column multiplication gives
> 
> $$
> AB=\begin{bmatrix}1&0\\0&1\end{bmatrix},\qquad
> BA=\begin{bmatrix}-20&-28&-28\\24&33&32\\-9&-12&-11\end{bmatrix}.
> $$
> 
> For the second pair,
> 
> $$
> AB=\begin{bmatrix}18&4\\12&0\end{bmatrix},\qquad
> BA=\begin{bmatrix}2&16\\5&16\end{bmatrix}.
> $$
> 
> Thus even for square matrices, changing the order usually changes the product.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.2, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
