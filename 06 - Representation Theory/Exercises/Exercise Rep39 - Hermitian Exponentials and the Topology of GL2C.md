---
title: "Exercise Rep39: Hermitian Exponentials and the Topology of GL2C"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - exponential-map
  - polar-decomposition
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.5, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise Rep39: Hermitian Exponentials and the Topology of GL2C

## Problem Statement

> [!question] Exercise 7.5
> (a) Prove that the exponential map defines a bijection between all Hermitian matrices and all positive definite Hermitian matrices.
>
> (b) Describe the topological structure of $GL_2(\mathbb C)$ using the polar decomposition (Chapter 8, Exercise M.8) and (a).

## Hints

> [!hint]- Hint 1
> Apply the spectral theorem and take the real logarithms of positive eigenvalues.

## Solution

> [!success]- Solution
> If $H=U\operatorname{diag}(\lambda_j)U^*$ is Hermitian, then $e^H=U\operatorname{diag}(e^{\lambda_j})U^*$ is positive definite. Conversely, if $R=U\operatorname{diag}(r_j)U^*$ with $r_j>0$, then
>
> $$
> \log R=U\operatorname{diag}(\log r_j)U^*
> $$
>
> is the unique Hermitian logarithm of $R$. The spectral formulas also show that $exp$ and $log$ are continuous, hence give a homeomorphism between the real vector space of Hermitian matrices and the positive cone.
>
> Every $P\in GL_2(\mathbb C)$ has a unique polar decomposition $P=UR$ with $U\in U_2$ and $R$ positive definite Hermitian. Therefore
>
> $$
> GL_2(\mathbb C)\cong U_2\times\operatorname{Herm}_2
> \cong U_2\times\mathbb R^4
> \cong S^3\times S^1\times\mathbb R^4
> $$
>
> as topological spaces. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **External standard input:** existence and uniqueness of polar decomposition.
- **Source status:** Ex. 7.5 was visually checked at [S1, Ch. 9, §9.7, printed p. 287, PDF p. 299]. The spectral logarithm and product topology are independent.

