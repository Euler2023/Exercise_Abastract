---
title: "Exercise LA338: Characteristic Polynomial of a Companion Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - companion-matrices
  - characteristic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 8, Application to Linear Operators, Ex. 8.5, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA338: Characteristic Polynomial of a Companion Matrix

## Problem Statement

> [!question] Exercise 8.5
> Prove that the characteristic polynomial of the matrix (14.8.10) is $f(t)$.

## Hints

> [!hint]- Hint 1
> Expand $\det(tI-C_f)$ along the first row or prove the formula by induction on the size.

## Solution

> [!success]- Solution
> Write
>
> $$
> f(t)=t^n+a_{n-1}t^{n-1}+\cdots+a_1t+a_0
> $$
>
> and let $C_f$ be Artin's companion matrix, with ones on the subdiagonal and last column $(-a_0,-a_1,\ldots,-a_{n-1})^{\mathsf T}$. Then
>
> $$
> tI-C_f=
> \begin{pmatrix}
> t&0&\cdots&0&a_0\\
> -1&t&\ddots&\vdots&a_1\\
> 0&-1&\ddots&0&a_2\\
> \vdots&\ddots&\ddots&t&\vdots\\
> 0&\cdots&0&-1&t+a_{n-1}
> \end{pmatrix}.
> $$
>
> Expanding successively down the first column, or inducting on $n$, gives
>
> $$
> \det(tI-C_f)=t^n+a_{n-1}t^{n-1}+\cdots+a_1t+a_0=f(t).
> $$
>
> Hence the characteristic polynomial is exactly the monic relation polynomial.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Linear Algebra is primary because the determinant of the companion matrix is the requested invariant.
- **Source anchor:** Matrix (14.8.10) was verified at [S1, Ch. 14, §14.8, printed p. 435, PDF p. 447]; the exercise appears at printed p. 440 / PDF p. 452.
- **Source status:** The determinant proof is independent.
