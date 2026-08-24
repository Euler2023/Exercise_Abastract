---
title: "Exercise LA235: Orthogonality of Unitary Eigenvectors"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - unitary-matrices
  - eigenvectors
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.5, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA235: Orthogonality of Unitary Eigenvectors

## Problem Statement

> [!question] Exercise 5.5
> Let $P$ be a unitary matrix, and let $X_1$ and $X_2$ be eigenvectors for $P$, with distinct eigenvalues $\lambda_1$ and $\lambda_2$. Prove that $X_1$ and $X_2$ are orthogonal with respect to the standard Hermitian form on $\mathbb C^n$.

## Hints

> [!hint]- Hint 1
> A unitary matrix preserves norms and inner products.

> [!hint]- Hint 2
> First show $|\lambda_i|=1$, then compare $(PX_1,PX_2)$ with $(X_1,X_2)$.

## Solution

> [!success]- Solution
> Since $P$ is unitary,
>
> $$
> \lVert X_i\rVert=\lVert PX_i\rVert
> =\lVert\lambda_iX_i\rVert=|\lambda_i|\lVert X_i\rVert.
> $$
>
> Thus $|\lambda_i|=1$. Preservation of the Hermitian product gives
>
> $$
> (X_1,X_2)=(PX_1,PX_2)
> =(\lambda_1X_1,\lambda_2X_2)
> =\overline{\lambda_1}\lambda_2(X_1,X_2).
> $$
>
> If $(X_1,X_2)\ne0$, then $\overline{\lambda_1}\lambda_2=1$. Since $|\lambda_1|=1$, this implies $\lambda_2=\lambda_1$, contrary to the hypothesis. Hence
>
> $$
> (X_1,X_2)=0.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The conjugation on $\lambda_1$ comes from Artin's convention that a Hermitian form is conjugate-linear in its first variable.
- **Source status:** Visually verified at [S1, Ch. 8, §5, Ex. 5.5, printed p. 256, PDF p. 268]. The proof is independent.

