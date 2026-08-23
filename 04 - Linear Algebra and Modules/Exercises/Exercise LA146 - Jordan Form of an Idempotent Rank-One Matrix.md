---
title: "Exercise LA146: Jordan Form of an Idempotent Rank-One Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - idempotents
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.2, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA146: Jordan Form of an Idempotent Rank-One Matrix

## Problem Statement

> [!question] Exercise 7.2
> Prove that $A=\begin{pmatrix}1&1&1\\-1&-1&-1\\1&1&1\end{pmatrix}$ is idempotent and find its Jordan form.

## Hints

> [!hint]- Hint 1
> Write $A=uv^t$ and compute $v^tu$.

## Solution

> [!success]- Solution
> Let $u=(1,-1,1)^t$ and $v=(1,1,1)^t$. Then $A=uv^t$ and $v^tu=1$, so $A^2=u(v^tu)v^t=A$. Its rank is one. Since an idempotent is diagonalizable with eigenvalues $0,1$, its Jordan form is
>
> $$
> \operatorname{diag}(1,0,0).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The matrix was visually checked at [S1, Ch. 4, §7, Ex. 7.2, printed p. 129, PDF p. 141]. The solution is independent.

