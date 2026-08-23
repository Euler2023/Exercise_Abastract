---
title: "Exercise LA131: Linear Coefficient of a Three by Three Characteristic Polynomial"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - characteristic-polynomials
  - principal-minors
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.8, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA131: Linear Coefficient of a Three by Three Characteristic Polynomial

## Problem Statement

> [!question] Exercise 5.8
> Let $A=(a_{ij})$ be $3\times3$. Prove that the coefficient of $t$ in its characteristic polynomial is the sum of the three symmetric $2\times2$ minors
>
> $$
> \det\begin{pmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{pmatrix}
> +\det\begin{pmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{pmatrix}
> +\det\begin{pmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Expand $\det(tI-A)$ and collect terms containing exactly one factor of $t$.

## Solution

> [!success]- Solution
> In the determinant expansion, a term linear in $t$ chooses $t$ from exactly one diagonal position. Choosing it from position $3$, $2$, or $1$ leaves respectively the determinants of the principal submatrices on indices $\{1,2\}$, $\{1,3\}$, or $\{2,3\}$. Each has positive sign. Therefore their sum is precisely the coefficient of $t$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The three minors were visually checked at [S1, Ch. 4, §5, Ex. 5.8, printed p. 128, PDF p. 140]. The proof is independent.

