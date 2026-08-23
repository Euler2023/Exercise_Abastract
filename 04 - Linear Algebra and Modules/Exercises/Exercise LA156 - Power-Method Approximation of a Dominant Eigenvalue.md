---
title: "Exercise LA156: Power-Method Approximation of a Dominant Eigenvalue"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - power-method
  - numerical-approximation
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.3, printed p. 130, PDF p. 142"
created: 2026-08-23
---

# Exercise LA156: Power-Method Approximation of a Dominant Eigenvalue

## Problem Statement

> [!question] Exercise M.3
> Compute the largest eigenvalue of $A=\begin{pmatrix}3&1\\3&4\end{pmatrix}$ to three-place accuracy using a method based on Exercise M.2.

## Hints

> [!hint]- Hint 1
> Starting with $X_0=(1,1)^t$, iterate $X_{k+1}=AX_k$ and compare a fixed nonzero coordinate in successive iterates.

## Solution

> [!success]- Solution
> The iterates begin
>
> $$
> (1,1)^t,(4,7)^t,(19,40)^t,(97,217)^t,\ldots
> $$
>
> and the ratio of successive first coordinates approaches the dominant eigenvalue. At steps $11$ and $12$ these ratios are approximately $5.302752$ and $5.302773$, so to three decimal places
>
> $$
> \lambda_{\max}\approx5.303.
> $$
>
> As a check, the exact characteristic roots are $(7\pm\sqrt{13})/2$, and the larger is $5.302775\ldots$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA155 - Convergence of the Power Method|Exercise LA155]]

## Notes

- **Computational verification:** The listed iteration verifies the requested three-place approximation; the exact quadratic computation independently checks it.
- **Source status:** The matrix was visually checked at [S1, Ch. 4, Misc. Problems, Ex. M.3, printed p. 130, PDF p. 142].

