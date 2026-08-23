---
title: "Exercise LA177: Determinant of the Matrix Exponential"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - trace
  - determinant
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.2, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA177: Determinant of the Matrix Exponential

## Problem Statement

> [!question] Exercise 4.2
> Prove the formula
>
> $$
> e^{\operatorname{tr}A}=\det(e^A).
> $$

## Hints

> [!hint]- Hint 1
> Triangularize $A$ over $\mathbb C$ and inspect the diagonal of its exponential.

## Solution

> [!success]- Solution
> Choose $P$ so that $T=P^{-1}AP$ is upper triangular. The power series commutes with similarity, so
>
> $$
> e^T=P^{-1}e^AP.
> $$
>
> If the diagonal entries of $T$ are $\lambda_1,\ldots,\lambda_n$, then $e^T$ is upper triangular with diagonal entries $e^{\lambda_1},\ldots,e^{\lambda_n}$. Therefore
>
> $$
> \det(e^A)=\det(e^T)=\prod_{j=1}^n e^{\lambda_j}
> =e^{\sum_j\lambda_j}=e^{\operatorname{tr}T}=e^{\operatorname{tr}A}.
> $$
>
> A real matrix may be regarded as a complex matrix, so the same proof covers the real case.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** [S1, Ch. 5, §4, Ex. 4.2, printed p. 152, PDF p. 164]; independent proof.

