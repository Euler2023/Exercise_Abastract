---
title: "Exercise LA134: Trace and Determinant from Eigenvalues"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - trace
  - determinant
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.1, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA134: Trace and Determinant from Eigenvalues

## Problem Statement

> [!question] Exercise 6.1
> If $p_A(t)=(t-\lambda_1)\cdots(t-\lambda_n)$, prove that $\operatorname{tr}A=\lambda_1+\cdots+\lambda_n$ and $\det A=\lambda_1\cdots\lambda_n$.

## Hints

> [!hint]- Hint 1
> Compare the coefficient of $t^{n-1}$ and the constant term in the two expressions for $p_A(t)$.

## Solution

> [!success]- Solution
> From $p_A(t)=\det(tI-A)$, its $t^{n-1}$ coefficient is $-\operatorname{tr}A$ and its constant term is $(-1)^n\det A$. Expanding the product gives corresponding coefficients $-(\sum_i\lambda_i)$ and $(-1)^n\prod_i\lambda_i$. Equality of coefficients proves both formulas.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.1, printed p. 128, PDF p. 140]; independent solution.

