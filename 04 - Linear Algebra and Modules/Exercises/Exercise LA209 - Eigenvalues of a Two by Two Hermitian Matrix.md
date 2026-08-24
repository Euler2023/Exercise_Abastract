---
title: "Exercise LA209: Eigenvalues of a Two by Two Hermitian Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 3, Ex. 3.6, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA209: Eigenvalues of a Two by Two Hermitian Matrix

## Problem Statement

> [!question] Exercise 3.6
> Use the characteristic polynomial to prove that the eigenvalues of a $2\times2$ Hermitian matrix $A$ are real.

## Hints

> [!hint]- Hint 1
> Write $A=\begin{pmatrix}a&z\\\overline z&d\end{pmatrix}$ with $a,d\in\mathbb R$.

> [!hint]- Hint 2
> Compute the discriminant of the characteristic polynomial.

## Solution

> [!success]- Solution
> A $2\times2$ Hermitian matrix has the form
>
> $$
> A=\begin{pmatrix}
> a&z\\
> \overline z&d
> \end{pmatrix},
> \qquad a,d\in\mathbb R,\quad z\in\mathbb C.
> $$
>
> Its characteristic polynomial is
>
> $$
> \begin{aligned}
> p(t)
> &=\det(tI-A)\\
> &=(t-a)(t-d)-|z|^2\\
> &=t^2-(a+d)t+ad-|z|^2.
> \end{aligned}
> $$
>
> All coefficients are real, and the discriminant is
>
> $$
> \Delta=(a+d)^2-4(ad-|z|^2)
> =(a-d)^2+4|z|^2\ge0.
> $$
>
> Therefore both roots
>
> $$
> t=\frac{a+d\pm\sqrt{(a-d)^2+4|z|^2}}2
> $$
>
> are real. These roots are precisely the eigenvalues of $A$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- The argument is deliberately restricted to $2\times2$ matrices, as requested. The general reality theorem for Hermitian spectra follows later from the spectral theorem.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §3, Ex. 3.6, printed p. 254, PDF p. 266]. The solution is an independent derivation.
