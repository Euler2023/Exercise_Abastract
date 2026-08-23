---
title: "Exercise LA144: Explicit Eigenvectors for a Two by Two Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.11, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA144: Explicit Eigenvectors for a Two by Two Matrix

## Problem Statement

> [!question] Exercise 6.11
> Let $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ have eigenvalue $\lambda$.
>
> (a) Show that, unless zero, $(b,\lambda-a)^t$ is an eigenvector. (b) Assuming $b\ne0$ and distinct eigenvalues, find $P$ with $P^{-1}AP$ diagonal.

## Hints

> [!hint]- Hint 1
> Use $(a-\lambda)(d-\lambda)-bc=0$.

## Solution

> [!success]- Solution
> Multiplication gives
>
> $$
> (A-\lambda I)\binom b{\lambda-a}
> =\binom0{bc+(d-\lambda)(\lambda-a)}=0,
> $$
>
> where the characteristic equation is used in the second coordinate. If the distinct eigenvalues are $\lambda_1,\lambda_2$ and $b\ne0$, take
>
> $$
> P=\begin{pmatrix}b&b\\\lambda_1-a&\lambda_2-a\end{pmatrix}.
> $$
>
> Its columns are independent eigenvectors, and $P^{-1}AP=\operatorname{diag}(\lambda_1,\lambda_2)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** The vector and hypotheses were visually checked at [S1, Ch. 4, §6, Ex. 6.11, printed p. 129, PDF p. 141]. The solution is independent.

