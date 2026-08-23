---
title: "Exercise LA172: Product Rule for Matrix-Valued Functions"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-valued-functions
  - differentiation
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §3, Ex. 3.1, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA172: Product Rule for Matrix-Valued Functions

## Problem Statement

> [!question] Exercise 3.1
> Prove the product rule for differentiation of matrix-valued functions.

## Hints

> [!hint]- Hint 1
> Apply the scalar product rule to each entry of $A(t)B(t)$.

## Solution

> [!success]- Solution
> Let $A(t)$ be $m\times n$ and $B(t)$ be $n\times p$, with every entry differentiable. The $(i,j)$ entry of their product is
>
> $$
> (AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}.
> $$
>
> Differentiating this finite sum entrywise gives
>
> $$
> (AB)'_{ij}=\sum_k a'_{ik}b_{kj}+\sum_k a_{ik}b'_{kj}
> =(A'B+AB')_{ij}.
> $$
>
> Hence
>
> $$
> \frac{d}{dt}(A(t)B(t))=A'(t)B(t)+A(t)B'(t).
> $$
>
> The order of the factors must be preserved because matrix multiplication need not commute.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** [S1, Ch. 5, §3, Ex. 3.1, printed p. 151, PDF p. 163]; independent proof.

