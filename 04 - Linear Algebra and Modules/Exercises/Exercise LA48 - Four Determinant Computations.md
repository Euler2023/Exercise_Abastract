---
title: "Exercise LA48: Four Determinant Computations"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.1, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA48: Four Determinant Computations

## Problem Statement

> [!question] Exercise 4.1
> Evaluate
> 
> $$
> \text{(a) }\det\begin{bmatrix}1&i\\2-i&3\end{bmatrix},\quad
> \text{(b) }\det\begin{bmatrix}1&1\\1&-1\end{bmatrix},
> $$
> 
> $$
> \text{(c) }\det\begin{bmatrix}2&0&1\\0&1&0\\1&0&2\end{bmatrix},\quad
> \text{(d) }\det\begin{bmatrix}1&0&0&0\\5&2&0&0\\8&6&3&0\\0&9&7&4\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Use the $2\times2$ formula in (a) and (b), and triangular or sparse expansions in (c) and (d).

## Solution

> [!success]- Solution
> The values are
> 
> $$
> \text{(a) }3-i(2-i)=2-2i,
> $$
> 
> $$
> \text{(b) }-1-1=-2,
> $$
> 
> $$
> \text{(c) }1\cdot\det\begin{bmatrix}2&1\\1&2\end{bmatrix}=3,
> $$
> 
> and, since the last matrix is lower triangular,
> 
> $$
> \text{(d) }1\cdot2\cdot3\cdot4=24.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.1, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
