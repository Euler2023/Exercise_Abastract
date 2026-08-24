---
title: "Exercise LA236: Eigenvalues of Unitary Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - unitary-matrices
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.6, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA236: Eigenvalues of Unitary Matrices

## Problem Statement

> [!question] Exercise 5.6
> What complex numbers might occur as eigenvalues of a unitary matrix?

## Hints

> [!hint]- Hint 1
> Compare the norms of $X$ and $PX$ for an eigenvector $X$.

> [!hint]- Hint 2
> For the converse, consider a $1\times1$ unitary matrix.

## Solution

> [!success]- Solution
> If $PX=\lambda X$ with $X\ne0$ and $P$ unitary, then
>
> $$
> \lVert X\rVert=\lVert PX\rVert
> =\lVert\lambda X\rVert=|\lambda|\lVert X\rVert.
> $$
>
> Hence every eigenvalue satisfies $|\lambda|=1$.
>
> Conversely, if $|\lambda|=1$, the $1\times1$ matrix $[\lambda]$ is unitary and has eigenvalue $\lambda$. Equivalently, $\lambda$ may be placed on the diagonal of a larger unitary matrix. Therefore the possible eigenvalues are exactly
>
> $$
> \boxed{\{\lambda\in\mathbb C:|\lambda|=1\}}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- In particular, zero cannot be an eigenvalue of a unitary matrix.
- **Source status:** Visually verified at [S1, Ch. 8, §5, Ex. 5.6, printed p. 256, PDF p. 268]. The characterization is independent.

