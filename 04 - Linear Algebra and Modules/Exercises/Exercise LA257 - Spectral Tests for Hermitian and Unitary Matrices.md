---
title: "Exercise LA257: Spectral Tests for Hermitian and Unitary Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - normal-matrices
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.21, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA257: Spectral Tests for Hermitian and Unitary Matrices

## Problem Statement

> [!question] Exercise 6.21
> What conditions on the eigenvalues of a normal matrix $A$ imply that $A$ is Hermitian? That $A$ is unitary?

## Hints

> [!hint]- Hint 1
> Write $A=UDU^*$ using the normal spectral theorem.

## Solution

> [!success]- Solution
> Since $A$ is normal, $A=UDU^*$ for a unitary $U$ and diagonal $D=\operatorname{diag}(\lambda_i)$.
>
> We have
>
> $$
> A^*=UD^*U^*.
> $$
>
> Thus $A^*=A$ exactly when $\overline{\lambda_i}=\lambda_i$ for every $i$, i.e., when all eigenvalues are real.
>
> Also,
>
> $$
> A^*A=U(D^*D)U^*,
> $$
>
> so $A$ is unitary exactly when $|\lambda_i|^2=1$ for every $i$. Therefore
>
> $$
> \boxed{A\text{ Hermitian}\iff\lambda_i\in\mathbb R},
> \qquad
> \boxed{A\text{ unitary}\iff|\lambda_i|=1}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- Normality is necessary for these spectral conditions alone to characterize the matrix.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.21, printed p. 258, PDF p. 270]. The equivalences are independent.

