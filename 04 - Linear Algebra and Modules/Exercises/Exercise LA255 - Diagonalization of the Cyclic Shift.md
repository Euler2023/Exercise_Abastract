---
title: "Exercise LA255: Diagonalization of the Cyclic Shift"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - cyclic-shift
  - fourier-matrix
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.19, printed pp. 257–258, PDF pp. 269–270"
created: 2026-08-24
---

# Exercise LA255: Diagonalization of the Cyclic Shift

## Problem Statement

> [!question] Exercise 6.19
> Prove that the cyclic shift operator
>
> $$
> S=\begin{pmatrix}
> 0&1& & &0\\
>  &0&1& & \\
>  & &\ddots&\ddots& \\
> 0& & &0&1\\
> 1&0& & &0
> \end{pmatrix}
> $$
>
> is unitary, and determine its diagonalization.

## Hints

> [!hint]- Hint 1
> The matrix permutes the standard basis, so its columns are orthonormal.

> [!hint]- Hint 2
> Use Fourier vectors $(1,\zeta^k,\ldots,\zeta^{(n-1)k})^{\mathsf T}$.

## Solution

> [!success]- Solution
> The columns of $S$ are a permutation of the standard basis, so $S^*S=I$ and $S$ is unitary.
>
> Let $\zeta=e^{2\pi i/n}$ and, for $0\le k<n$, define
>
> $$
> f_k=\frac1{\sqrt n}(1,\zeta^k,\zeta^{2k},\ldots,\zeta^{(n-1)k})^{\mathsf T}.
> $$
>
> The Fourier calculation shows that the $f_k$ form an orthonormal basis. Since $S$ shifts coordinates left,
>
> $$
> Sf_k=\zeta^k f_k.
> $$
>
> Let $F=(f_0\ \cdots\ f_{n-1})$. Then $F$ is unitary and
>
> $$
> \boxed{F^*SF=\operatorname{diag}(1,\zeta,\zeta^2,\ldots,\zeta^{n-1})}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA252 - Unitarity of the Fourier Matrix|Exercise LA252]]

## Notes

- The eigenvalue powers reverse if the opposite cyclic-shift convention is chosen; the formula here matches the displayed superdiagonal matrix.
- **Source status:** The matrix and continuation were visually verified at [S1, Ch. 8, §6, Ex. 6.19, printed pp. 257–258, PDF pp. 269–270]. The diagonalization is independent.

