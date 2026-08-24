---
title: "Exercise LA266: Determinants of Integral Skew-Symmetric Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 8, Ex. 8.4, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA266: Determinants of Integral Skew-Symmetric Matrices

## Problem Statement

> [!question] Exercise 8.4
> Let $A$ be a real skew-symmetric matrix.
>
> **(a)** Prove that $\det A\ge0$.
>
> **(b)** Prove that if $A$ has integer entries, then $\det A$ is the square of an integer.

## Hints

> [!hint]- Hint 1
> If $A$ is nonsingular, use the standard-form theorem for nondegenerate skew-symmetric forms.

> [!hint]- Hint 2
> In the integral case, carry out the same construction over $\mathbb Q$ and use that an integer which is a rational square is an integer square.

## Solution

> [!success]- Solution
> If $A$ is singular, then $\det A=0$ and both conclusions hold. Suppose $A$ is nonsingular. The standard-form theorem for skew-symmetric forms gives an invertible real matrix $P$ such that
>
> $$
> P^{\mathsf T}AP=J,
> \qquad
> J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.
> $$
>
> Since $\det J=1$,
>
> $$
> (\det P)^2\det A=1,
> \qquad
> \det A=(\det P)^{-2}>0.
> $$
>
> This proves **(a)**.
>
> For **(b)**, regard an integral $A$ as a matrix over $\mathbb Q$. The same symplectic-basis construction uses only field operations, so $P$ may be chosen in $GL_n(\mathbb Q)$. Consequently
>
> $$
> \det A=(\det P)^{-2}
> $$
>
> is a square in $\mathbb Q$. But $\det A\in\mathbb Z$. If an integer is $(r/s)^2$ with coprime integers $r,s$, then $s^2$ divides $r^2$, forcing $s=1$. Hence $\det A$ is the square of an integer.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]

## Notes

- This proof avoids importing the Pfaffian identity, although that identity gives the stronger explicit square root $\det A=\operatorname{Pf}(A)^2$.
- **Source status:** Both parts were visually verified at [S1, Ch. 8, §8, Ex. 8.4, printed p. 258, PDF p. 270]. The rational standard-form argument is independent.

