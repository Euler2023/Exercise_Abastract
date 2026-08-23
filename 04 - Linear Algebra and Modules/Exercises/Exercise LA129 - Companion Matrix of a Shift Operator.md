---
title: "Exercise LA129: Companion Matrix of a Shift Operator"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - companion-matrices
  - characteristic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.6, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA129: Companion Matrix of a Shift Operator

## Problem Statement

> [!question] Exercise 5.6
> Let $(v_0,\ldots,v_n)$ be a basis and define $T(v_i)=v_{i+1}$ for $i<n$, while $T(v_n)=a_0v_0+\cdots+a_nv_n$. Determine the matrix and characteristic polynomial.

## Hints

> [!hint]- Hint 1
> Write the coordinate columns of $T(v_i)$; expand $\det(tI-[T])$.

## Solution

> [!success]- Solution
> The matrix is
>
> $$
> [T]=\begin{pmatrix}
> 0&0&\cdots&0&a_0\\
> 1&0&\cdots&0&a_1\\
> 0&1&\ddots&0&a_2\\
> \vdots&\ddots&\ddots&\vdots&\vdots\\
> 0&\cdots&0&1&a_n
> \end{pmatrix}.
> $$
>
> Cofactor expansion, or applying $T^{n+1}v_0=a_0v_0+\cdots+a_nT^nv_0$, gives
>
> $$
> p_T(t)=t^{n+1}-a_nt^n-a_{n-1}t^{n-1}-\cdots-a_1t-a_0.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §5, Ex. 5.6, printed p. 128, PDF p. 140]; independent solution.

