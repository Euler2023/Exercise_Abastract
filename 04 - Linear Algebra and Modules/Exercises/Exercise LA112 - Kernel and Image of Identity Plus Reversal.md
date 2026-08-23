---
title: "Exercise LA112: Kernel and Image of Identity Plus Reversal"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - kernel
  - image
  - involutions
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §3, Ex. 3.1, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA112: Kernel and Image of Identity Plus Reversal

## Problem Statement

> [!question] Exercise 3.1
> Determine the dimensions of the kernel and image of $T:\mathbb R^n\to\mathbb R^n$ defined by
>
> $$
> T(x_1,\ldots,x_n)^t=(x_1+x_n,x_2+x_{n-1},\ldots,x_n+x_1)^t.
> $$

## Hints

> [!hint]- Hint 1
> Write $T=I+J$, where $J$ reverses the coordinates.

## Solution

> [!success]- Solution
> The kernel consists of antisymmetric vectors $x_i=-x_{n+1-i}$, while the image is the symmetric subspace $y_i=y_{n+1-i}$. Each pair of opposite coordinates contributes one free parameter to each space; when $n$ is odd, the middle coordinate must be zero in the kernel and is free in the image. Hence
>
> $$
> \dim\ker T=\left\lfloor\frac n2\right\rfloor,
> \qquad
> \dim\operatorname{im}T=\left\lceil\frac n2\right\rceil.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §3, Ex. 3.1, printed p. 126, PDF p. 138]; independent solution.

