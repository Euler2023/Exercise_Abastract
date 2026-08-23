---
title: "Exercise LA159: At Most n Distinct Eigenvalues without the Characteristic Polynomial"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - linear-independence
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.6, printed p. 131, PDF p. 143"
created: 2026-08-23
---

# Exercise LA159: At Most n Distinct Eigenvalues without the Characteristic Polynomial

## Problem Statement

> [!question] Exercise M.6
> Without using the characteristic polynomial, prove that an operator on an $n$-dimensional vector space has at most $n$ distinct eigenvalues.

## Hints

> [!hint]- Hint 1
> Prove that eigenvectors belonging to distinct eigenvalues are linearly independent.

## Solution

> [!success]- Solution
> Suppose $v_1,\ldots,v_r$ correspond to distinct $\lambda_1,\ldots,\lambda_r$. In a shortest nontrivial relation $\sum c_iv_i=0$, apply $T-\lambda_rI$ to obtain a shorter relation $\sum_{i<r}c_i(\lambda_i-\lambda_r)v_i=0$, a contradiction. Thus the $v_i$ are independent, so $r\le\dim V=n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, Misc. Problems, Ex. M.6, printed p. 131, PDF p. 143]; independent proof with no characteristic-polynomial input.

