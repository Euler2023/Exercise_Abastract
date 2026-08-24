---
title: "Exercise LA269: Spectra and Determinants of Structured Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.3, printed p. 259, PDF p. 271"
created: 2026-08-24
---

# Exercise LA269: Spectra and Determinants of Structured Matrices

## Problem Statement

> [!question] Miscellaneous Problem M.3
> With each of the following types of matrices, describe the possible determinants and eigenvalues:
>
> **(a)** real orthogonal; **(b)** unitary; **(c)** Hermitian; **(d)** real symmetric, negative definite; **(e)** real skew-symmetric.

## Hints

> [!hint]- Hint 1
> Use the spectral theorem and remember conjugate pairing for real matrices.

## Solution

> [!success]- Solution
> **(a)** A real orthogonal matrix has eigenvalues on the unit circle. Its real eigenvalues are $\pm1$, and nonreal eigenvalues occur in conjugate pairs. Its determinant is $\pm1$.
>
> **(b)** A unitary matrix has all eigenvalues on the unit circle and determinant of modulus $1$. Conversely, every unit complex number can occur as an eigenvalue or determinant.
>
> **(c)** A Hermitian matrix has real eigenvalues, and its determinant is real. Every real list of eigenvalues is possible for a suitable diagonal Hermitian matrix.
>
> **(d)** A real symmetric negative-definite matrix has strictly negative real eigenvalues. Its determinant has sign $(-1)^n$ and is nonzero.
>
> **(e)** A real skew-symmetric matrix has eigenvalues $0$ or purely imaginary conjugate pairs $\pm i\mu$. Its determinant is nonnegative; it is zero in odd dimension and is positive precisely when the matrix is nonsingular.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- For fixed even dimension, every nonnegative real number occurs as the determinant of a real skew-symmetric matrix by scaling $2\times2$ skew blocks.
- **Source status:** The five matrix classes were visually verified at [S1, Ch. 8, M.3, printed p. 259, PDF p. 271]. The classification is independent.

