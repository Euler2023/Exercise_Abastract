---
title: "Exercise LA219: Frobenius Inner Product on Real Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-inner-product
  - trace
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.10, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA219: Frobenius Inner Product on Real Matrices

## Problem Statement

> [!question] Exercise 4.10
> Let $V$ denote the vector space of real $n\times n$ matrices. Prove that $(A,B)=\operatorname{trace}(A^{\mathsf T}B)$ defines a positive definite bilinear form on $V$, and find an orthonormal basis for this form.

## Hints

> [!hint]- Hint 1
> Expand the trace in terms of the matrix entries.

> [!hint]- Hint 2
> Test the standard matrix units $E_{ij}$.

## Solution

> [!success]- Solution
> Entrywise expansion gives
>
> $$
> \operatorname{trace}(A^{\mathsf T}B)=\sum_{i,j}a_{ij}b_{ij}.
> $$
>
> This expression is real bilinear and symmetric. Moreover,
>
> $$
> (A,A)=\sum_{i,j}a_{ij}^2>0
> $$
>
> whenever $A\ne0$, so the form is positive definite.
>
> Let $E_{ij}$ be the standard matrix units. Then
>
> $$
> (E_{ij},E_{kl})
> =\operatorname{trace}(E_{ji}E_{kl})
> =\delta_{ik}\delta_{jl}.
> $$
>
> Hence
>
> $$
> \boxed{\{E_{ij}:1\le i,j\le n\}}
> $$
>
> is an orthonormal basis of $V$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- This is the real Frobenius inner product; over $\mathbb C$ the corresponding Hermitian form is $\operatorname{trace}(A^*B)$.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.10, printed p. 255, PDF p. 267]. The solution is independent.

