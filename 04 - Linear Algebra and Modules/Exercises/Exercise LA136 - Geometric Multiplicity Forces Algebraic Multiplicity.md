---
title: "Exercise LA136: Geometric Multiplicity Forces Algebraic Multiplicity"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalue-multiplicity
  - triangularization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.3, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA136: Geometric Multiplicity Forces Algebraic Multiplicity

## Problem Statement

> [!question] Exercise 6.3
> If $T$ has two linearly independent eigenvectors with the same eigenvalue $\lambda$, prove that $\lambda$ is a multiple root of the characteristic polynomial.

## Hints

> [!hint]- Hint 1
> Begin a basis with the two eigenvectors and inspect the resulting block triangular matrix.

## Solution

> [!success]- Solution
> Extend the two eigenvectors to a basis. In this basis the first two columns of $T$ are $\lambda e_1$ and $\lambda e_2$, so the matrix has block form
>
> $$
> \begin{pmatrix}\lambda I_2&*\\0&C\end{pmatrix}.
> $$
>
> Therefore $p_T(t)=(t-\lambda)^2\det(tI-C)$, and $\lambda$ is a root of multiplicity at least two.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.3, printed p. 128, PDF p. 140]; independent solution.

