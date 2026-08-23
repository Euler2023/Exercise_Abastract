---
title: "Exercise LA124: Three Characteristic Polynomial Computations"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - characteristic-polynomials
  - eigenvectors
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.1, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA124: Three Characteristic Polynomial Computations

## Problem Statement

> [!question] Exercise 5.1
> Compute the characteristic polynomials and complex eigenvalues and eigenvectors of
>
> $$
> \text{(a) }\begin{pmatrix}-2&2\\-2&3\end{pmatrix},\quad
> \text{(b) }\begin{pmatrix}1&i\\-i&1\end{pmatrix},\quad
> \text{(c) }\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Compute $\det(tI-A)$, then solve $(A-\lambda I)v=0$.

## Solution

> [!success]- Solution
> (a) $p(t)=(t-2)(t+1)$. Eigenvectors may be chosen as $(1,2)^t$ for $2$ and $(2,1)^t$ for $-1$.
>
> (b) $p(t)=t(t-2)$. Eigenvectors are $(1,i)^t$ for $0$ and $(1,-i)^t$ for $2$.
>
> (c) $p(t)=t^2-2(\cos\theta)t+1$, with eigenvalues $e^{i\theta}$ and $e^{-i\theta}$ and respective eigenvectors $(1,-i)^t$ and $(1,i)^t$. If $\sin\theta=0$, the matrix is $\pm I$ and every nonzero vector is an eigenvector for the single eigenvalue $\pm1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** All three matrices were visually checked at [S1, Ch. 4, §5, Ex. 5.1, printed p. 127, PDF p. 139]. The computation is independent.

