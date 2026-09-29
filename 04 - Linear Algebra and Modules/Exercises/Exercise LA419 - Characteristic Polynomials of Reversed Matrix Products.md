---
title: "Exercise LA419: Characteristic Polynomials of Reversed Matrix Products"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - characteristic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 3, printed p. 567, PDF p. 582"
created: 2026-09-29
---

# Exercise LA419: Characteristic Polynomials of Reversed Matrix Products

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 3
> Let $k$ be a commutative ring, and let $M,M'$ be square $n\times n$ matrices in $k$. Show that the characteristic polynomials of $MM'$ and $M'M$ are equal.

## Hints

> [!hint]- Hint 1: Use a larger determinant
> Compute the determinant of $\begin{pmatrix}I&X\\Y&I\end{pmatrix}$ in two ways by multiplying by a block unitriangular matrix.

> [!hint]- Hint 2: Introduce a polynomial variable
> Obtain $\det(I-zMM')=\det(I-zM'M)$ over $k[z]$, then reverse the coefficients to recover the characteristic polynomials.

## Solution

> [!success]- Solution
> For square matrices $X,Y$ of size $n$ over any commutative ring, put
>
> $$
> C=\begin{pmatrix}I&X\\Y&I\end{pmatrix},
> \qquad L=\begin{pmatrix}I&0\\-Y&I\end{pmatrix}.
> $$
>
> The preceding block determinant exercise gives $\det L=1$, and direct multiplication gives
>
> $$
> LC=\begin{pmatrix}I&X\\0&I-YX\end{pmatrix},
> \qquad
> CL=\begin{pmatrix}I-XY&X\\0&I\end{pmatrix}.
> $$
>
> By multiplicativity and the block determinant formula, both determinants equal $\det C$. Hence $\det(I-XY)=\det(I-YX)$.
>
> Apply this identity over $k[z]$ with $X=zM$ and $Y=M'$. We obtain
>
> $$
> \det(I-zMM')=\det(I-zM'M).
> $$
>
> For a matrix $B$, if $\det(I-zB)=\sum_{j=0}^n c_jz^j$, then expansion of the determinant gives $\det(tI-B)=\sum_{j=0}^n c_jt^{n-j}$. Reversing coefficients in the displayed equality therefore yields
>
> $$
> \det(tI-MM')=\det(tI-M'M).
> $$
>
> No invertibility hypothesis on $M$ or $M'$ was needed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA418 - Determinant of a Block Upper Triangular Matrix|Exercise LA418]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 3, printed p. 567, PDF p. 582]. The statement was checked on the original page image. The block elimination argument is independent; its inputs are determinant multiplicativity and the formula proved in LA418.
- **Boundary:** A similarity argument using $M^{-1}$ would cover only invertible $M$. The proof here applies to singular matrices and to rings with zero divisors.
