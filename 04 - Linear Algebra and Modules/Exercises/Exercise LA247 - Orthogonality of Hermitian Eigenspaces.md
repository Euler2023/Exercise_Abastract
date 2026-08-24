---
title: "Exercise LA247: Orthogonality of Hermitian Eigenspaces"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-matrices
  - eigenvectors
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.11, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA247: Orthogonality of Hermitian Eigenspaces

## Problem Statement

> [!question] Exercise 6.11
> Prove that eigenvectors associated to distinct eigenvalues of a Hermitian matrix $A$ are orthogonal.

## Hints

> [!hint]- Hint 1
> Compare $(AX,Y)$ and $(X,AY)$.

## Solution

> [!success]- Solution
> Let $AX=\lambda X$ and $AY=\mu Y$, with $\lambda\ne\mu$. Hermitian eigenvalues are real, and
>
> $$
> (AX,Y)=(X,AY).
> $$
>
> Therefore
>
> $$
> \lambda(X,Y)=\mu(X,Y).
> $$
>
> Since $\lambda-\mu\ne0$, it follows that $(X,Y)=0$. Hence the eigenvectors are orthogonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- The proof works eigenspace-by-eigenspace, so distinct Hermitian eigenspaces are mutually orthogonal.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.11, printed p. 257, PDF p. 269]. The proof is independent.

