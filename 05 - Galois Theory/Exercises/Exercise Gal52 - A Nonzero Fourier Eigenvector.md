---
title: "Exercise Gal52: A Nonzero Fourier Eigenvector"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, kummer-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.10, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal52: A Nonzero Fourier Eigenvector

## Problem Statement

> [!question] Exercise 10.10
> For the eigenvectors $\gamma_i=\alpha_1+\zeta^i\alpha_2+\cdots+\zeta^{(p-1)i}\alpha_p$, prove at least one $\gamma_i\ne0$.

## Hints

> [!hint]- Hint 1
> The coefficient matrix is the discrete Fourier matrix.

## Solution

> [!success]- Solution
> The vectors $(\gamma_0,\ldots,\gamma_{p-1})$ and $(\alpha_1,\ldots,\alpha_p)$ are related by the Fourier matrix $V=(\zeta^{ij})$. Its determinant is a nonzero Vandermonde product because $1,\zeta,\ldots,\zeta^{p-1}$ are distinct. Hence $V$ is invertible. If every $\gamma_i$ were zero, every $\alpha_j$ would be zero, impossible for the roots of a nonzero irreducible polynomial. Thus at least one $\gamma_i\ne0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]

## Notes

This is an exact Fourier-invertibility argument.
