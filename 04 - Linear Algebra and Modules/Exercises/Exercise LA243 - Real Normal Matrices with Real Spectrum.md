---
title: "Exercise LA243: Real Normal Matrices with Real Spectrum"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - normal-matrices
  - symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.7, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA243: Real Normal Matrices with Real Spectrum

## Problem Statement

> [!question] Exercise 6.7
> Let $P$ be a real matrix that is normal and has real eigenvalues. Prove that $P$ is symmetric.

## Hints

> [!hint]- Hint 1
> Apply the normal spectral theorem over $\mathbb C$.

## Solution

> [!success]- Solution
> Since $P$ is normal, there is a unitary matrix $U$ and a diagonal matrix $D$ such that
>
> $$
> P=UDU^*.
> $$
>
> All eigenvalues are real, so $D^*=D$. Hence
>
> $$
> P^*=(UDU^*)^*=UD^*U^*=UDU^*=P.
> $$
>
> Thus $P$ is Hermitian. Because its entries are real, $P^*=P^{\mathsf T}$, and therefore $P^{\mathsf T}=P$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- Normality is essential: a real upper-triangular Jordan block can have real eigenvalues without being symmetric.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.7, printed p. 256, PDF p. 268]. The proof is independent.

