---
title: "Exercise LA190: Square Roots of a Two by Two Matrix with Simple Spectrum"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-square-roots
  - eigenvalues
  - centralizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.7, printed p. 153, PDF p. 165"
created: 2026-08-24
---

# Exercise LA190: Square Roots of a Two by Two Matrix with Simple Spectrum

## Problem Statement

> [!question] Miscellaneous Problem M.7
> Let $A$ be a $2\times2$ complex matrix with distinct eigenvalues, and let $X$ be an indeterminate $2\times2$ matrix. How many solutions can the equation $X^2=A$ have?

## Hints

> [!hint]- Hint 1
> Any solution $X$ commutes with $A=X^2$ and therefore preserves the two eigenspaces of $A$.

## Solution

> [!success]- Solution
> If $X^2=A$, then
>
> $$
> XA=X^3=AX.
> $$
>
> Because $A$ has two distinct eigenvalues $\lambda_1,\lambda_2$, its eigenspaces are one-dimensional and span $\mathbb C^2$. Commutation forces $X$ to preserve both eigenlines, so in an eigenbasis of $A$,
>
> $$
> A=\begin{pmatrix}\lambda_1&0\\0&\lambda_2\end{pmatrix},\qquad
> X=\begin{pmatrix}\mu_1&0\\0&\mu_2\end{pmatrix},\qquad
> \mu_i^2=\lambda_i.
> $$
>
> If $A$ is invertible, each $\lambda_i$ has two complex square roots, giving exactly $4$ solutions. If $A$ is singular, exactly one eigenvalue is zero; its square root must be zero while the other eigenvalue has two choices, giving exactly $2$ solutions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.7, printed p. 153, PDF p. 165]; independent classification.
