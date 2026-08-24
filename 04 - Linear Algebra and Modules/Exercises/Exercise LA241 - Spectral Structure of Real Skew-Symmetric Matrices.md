---
title: "Exercise LA241: Spectral Structure of Real Skew-Symmetric Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - spectral-theorem
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.5, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA241: Spectral Structure of Real Skew-Symmetric Matrices

## Problem Statement

> [!question] Exercise 6.5
> Prove that if $A$ is a real skew-symmetric matrix, then $iA$ is a Hermitian matrix. What does the Spectral Theorem tell us about a real skew-symmetric matrix?

## Hints

> [!hint]- Hint 1
> Compute $(iA)^*$ using $A^{\mathsf T}=-A$.

## Solution

> [!success]- Solution
> Since $A$ is real and $A^{\mathsf T}=-A$,
>
> $$
> (iA)^*=\overline i\,A^{\mathsf T}=(-i)(-A)=iA.
> $$
>
> Hence $iA$ is Hermitian. The spectral theorem gives a unitary $U$ and real numbers $\mu_j$ such that
>
> $$
> U^*(iA)U=\operatorname{diag}(\mu_1,\ldots,\mu_n).
> $$
>
> Therefore
>
> $$
> U^*AU=\operatorname{diag}(-i\mu_1,\ldots,-i\mu_n).
> $$
>
> Thus a real skew-symmetric matrix is normal, unitarily diagonalizable over $\mathbb C$, and has purely imaginary eigenvalues. Because its characteristic polynomial is real, its nonzero eigenvalues occur in pairs $\pm i\mu$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]

## Notes

- The stronger real canonical form uses $2\times2$ rotation blocks; the complex spectral conclusion is what follows immediately here.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.5, printed p. 256, PDF p. 268]. The derivation is independent.

