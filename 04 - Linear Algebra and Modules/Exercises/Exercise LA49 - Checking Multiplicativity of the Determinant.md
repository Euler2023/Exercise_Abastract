---
title: "Exercise LA49: Checking Multiplicativity of the Determinant"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.2, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA49: Checking Multiplicativity of the Determinant

## Problem Statement

> [!question] Exercise 4.2
> Verify $\det(AB)=(\det A)(\det B)$ for
> 
> $$
> A=\begin{bmatrix}2&3\\1&4\end{bmatrix},\qquad
> B=\begin{bmatrix}1&1\\5&-2\end{bmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Compute both determinants and then multiply the matrices.

## Solution

> [!success]- Solution
> We have
> 
> $$
> \det A=8-3=5,\qquad \det B=-2-5=-7,
> $$
> 
> so $(\det A)(\det B)=-35$. Also
> 
> $$
> AB=\begin{bmatrix}17&-4\\21&-7\end{bmatrix},
> $$
> 
> and
> 
> $$
> \det(AB)=17(-7)-(-4)(21)=-119+84=-35.
> $$
> 
> Thus the rule holds in this example.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.2, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
