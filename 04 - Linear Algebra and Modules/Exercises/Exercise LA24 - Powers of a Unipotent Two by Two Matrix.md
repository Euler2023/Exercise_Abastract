---
title: "Exercise LA24: Powers of a Unipotent Two-by-Two Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - induction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.6, printed p. 31, PDF p. 43"
created: 2026-08-23
---

# Exercise LA24: Powers of a Unipotent Two-by-Two Matrix

## Problem Statement

> [!question] Exercise 1.6
> Compute
> 
> $$
> \begin{bmatrix}1&a\\0&1\end{bmatrix}
> \begin{bmatrix}1&b\\0&1\end{bmatrix}
> \quad\text{and}\quad
> \begin{bmatrix}1&a\\0&1\end{bmatrix}^{n}.
> $$

## Hints

> [!hint]- Hint 1
> The upper-right entries add under multiplication.

## Solution

> [!success]- Solution
> Writing $U(a)=\begin{bmatrix}1&a\\0&1\end{bmatrix}$, multiplication gives
> 
> $$
> U(a)U(b)=U(a+b)=\begin{bmatrix}1&a+b\\0&1\end{bmatrix}.
> $$
> 
> Induction then gives
> 
> $$
> U(a)^n=U(na)=\begin{bmatrix}1&na\\0&1\end{bmatrix}
> $$
> 
> for every nonnegative integer $n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.6, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
