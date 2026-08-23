---
title: "Exercise LA178: Eigenvectors under Inversion and Exponentiation"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
  - matrix-exponential
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.3, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA178: Eigenvectors under Inversion and Exponentiation

## Problem Statement

> [!question] Exercise 4.3
> Let $X$ be an eigenvector of an $n\times n$ matrix $A$, with eigenvalue $\lambda$.
>
> (a) Prove that if $A$ is invertible, then $X$ is an eigenvector for $A^{-1}$ with eigenvalue $\lambda^{-1}$.
>
> (b) Prove that $X$ is an eigenvector for $e^A$ with eigenvalue $e^\lambda$.

## Hints

> [!hint]- Hint 1
> First compute $A^kX$.

## Solution

> [!success]- Solution
> Since $AX=\lambda X$ and $X\ne0$, invertibility of $A$ implies $\lambda\ne0$. Applying $A^{-1}$ gives
>
> $$
> A^{-1}X=\lambda^{-1}X.
> $$
>
> Also $A^kX=\lambda^kX$ for every $k\ge0$. Hence the exponential series gives
>
> $$
> e^AX=\sum_{k=0}^\infty\frac{A^kX}{k!}
> =\left(\sum_{k=0}^\infty\frac{\lambda^k}{k!}\right)X
> =e^\lambda X.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** [S1, Ch. 5, §4, Ex. 4.3, printed p. 152, PDF p. 164]; independent proof.

