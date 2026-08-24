---
title: "Exercise LA250: Positive Eigenvalues and Positive Definiteness"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - positive-definite-matrices
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.14, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA250: Positive Eigenvalues and Positive Definiteness

## Problem Statement

> [!question] Exercise 6.14
> Prove that a real symmetric matrix $A$ is positive definite if and only if its eigenvalues are positive.

## Hints

> [!hint]- Hint 1
> Orthogonally diagonalize $A$.

## Solution

> [!success]- Solution
> By the real spectral theorem, $A=PDP^{\mathsf T}$ with $P$ orthogonal and $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. For $X=PY$,
>
> $$
> X^{\mathsf T}AX=Y^{\mathsf T}DY=\sum_{i=1}^n\lambda_i y_i^2.
> $$
>
> If every $\lambda_i>0$, this expression is positive for every nonzero $Y$, hence for every nonzero $X$. Conversely, if $A$ is positive definite and $v_i$ is a nonzero eigenvector, then
>
> $$
> 0<v_i^{\mathsf T}Av_i=\lambda_i\lVert v_i\rVert^2,
> $$
>
> so $\lambda_i>0$. This proves the equivalence.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- Replacing “positive” by “nonnegative” gives the corresponding criterion for positive semidefiniteness.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.14, printed p. 257, PDF p. 269]. The proof is independent.

