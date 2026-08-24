---
title: "Exercise LA256: Normality of Circulant Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - circulant-matrices
  - normal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.20, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA256: Normality of Circulant Matrices

## Problem Statement

> [!question] Exercise 6.20
> Prove that the circulant matrix
>
> $$
> C=\begin{pmatrix}
> c_0&c_1&\cdots&c_n\\
> c_n&c_0&\cdots&c_{n-1}\\
> \vdots&\vdots& &\vdots\\
> c_1&c_2&\cdots&c_0
> \end{pmatrix}
> $$
>
> is normal.

## Hints

> [!hint]- Hint 1
> Express $C$ as a polynomial in the cyclic shift matrix.

## Solution

> [!success]- Solution
> With the source's indexing, the displayed matrix has size $n+1$. Let $S$ be the cyclic shift of that size. Then
>
> $$
> C=c_0I+c_1S+\cdots+c_nS^n.
> $$
>
> Exercise 6.19 gives a unitary Fourier matrix $F$ such that $F^*SF=D$ is diagonal. Therefore
>
> $$
> F^*CF=c_0I+c_1D+\cdots+c_nD^n,
> $$
>
> which is diagonal. Thus $C$ is unitarily diagonalizable, and every unitarily diagonalizable matrix is normal. Hence $C^*C=CC^*$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA255 - Diagonalization of the Cyclic Shift|Exercise LA255]]

## Notes

- The displayed coefficients $c_0,\ldots,c_n$ correspond to an $(n+1)\times(n+1)$ circulant; replacing $n+1$ by a general size $m$ gives the standard formulation.
- **Source status:** The full circulant display was visually verified at [S1, Ch. 8, §6, Ex. 6.20, printed p. 258, PDF p. 270]. The polynomial proof is independent.

