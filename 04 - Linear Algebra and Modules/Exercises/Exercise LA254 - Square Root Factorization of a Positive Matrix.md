---
title: "Exercise LA254: Square Root Factorization of a Positive Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-definite-matrices
  - matrix-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.18, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA254: Square Root Factorization of a Positive Matrix

## Problem Statement

> [!question] Exercise 6.18
> Use the Spectral Theorem to prove that a positive definite real symmetric $n\times n$ matrix $A$ has the form $A=P^{\mathsf T}P$ for some $P$.

## Hints

> [!hint]- Hint 1
> Orthogonally diagonalize $A$ and take positive square roots of its eigenvalues.

## Solution

> [!success]- Solution
> By the spectral theorem,
>
> $$
> A=QDQ^{\mathsf T},
> $$
>
> where $Q$ is orthogonal and $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ with every $\lambda_i>0$. Let
>
> $$
> D^{1/2}=\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n})
> $$
>
> and set $P=D^{1/2}Q^{\mathsf T}$. Then
>
> $$
> P^{\mathsf T}P
> =QD^{1/2}D^{1/2}Q^{\mathsf T}
> =QDQ^{\mathsf T}=A.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- The symmetric positive square root is $A^{1/2}=QD^{1/2}Q^{\mathsf T}$; the requested $P$ is not unique.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.18, printed p. 257, PDF p. 269]. The factorization is independent.

