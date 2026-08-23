---
title: "Exercise LA130: Eigenvectors and Eigenvalues under Transpose"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - transpose
  - eigenvectors
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.7, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA130: Eigenvectors and Eigenvalues under Transpose

## Problem Statement

> [!question] Exercise 5.7
> Do $A$ and $A^t$ have the same eigenvectors? The same eigenvalues?

## Hints

> [!hint]- Hint 1
> Compare $\det(tI-A)$ and $\det(tI-A^t)$, then test a nonsymmetric triangular matrix.

## Solution

> [!success]- Solution
> They have the same characteristic polynomial because
>
> $$
> \det(tI-A^t)=\det((tI-A)^t)=\det(tI-A),
> $$
>
> so they have the same eigenvalues with multiplicities. Their eigenvectors need not agree: for $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, the $1$-eigenspace of $A$ is $F(1,0)^t$, while that of $A^t$ is $F(1,-1)^t$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** [S1, Ch. 4, §5, Ex. 5.7, printed p. 128, PDF p. 140]; independent solution.

