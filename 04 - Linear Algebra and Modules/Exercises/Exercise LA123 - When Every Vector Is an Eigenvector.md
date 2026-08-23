---
title: "Exercise LA123: When Every Vector Is an Eigenvector"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
  - scalar-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.8, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA123: When Every Vector Is an Eigenvector

## Problem Statement

> [!question] Exercise 4.8
> Let $T$ be a linear operator on a finite-dimensional vector space for which every nonzero vector is an eigenvector. Prove that $T$ is multiplication by a scalar.

## Hints

> [!hint]- Hint 1
> Compare the eigenvalues of two independent vectors and their sum.

## Solution

> [!success]- Solution
> If $\dim V\le1$, the result is immediate. Otherwise choose independent $u,v$. Write $Tu=\alpha u$, $Tv=\beta v$, and $T(u+v)=\gamma(u+v)$. Linearity gives $\alpha u+\beta v=\gamma u+\gamma v$, so independence forces $\alpha=\beta=\gamma$. Repeating with a fixed nonzero vector and any other vector shows that one scalar $\alpha$ works on all of $V$. Thus $T=\alpha I$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §4, Ex. 4.8, printed p. 127, PDF p. 139]; independent solution.

