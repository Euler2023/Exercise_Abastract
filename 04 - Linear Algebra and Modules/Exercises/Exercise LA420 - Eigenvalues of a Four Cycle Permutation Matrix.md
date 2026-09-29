---
title: "Exercise LA420: Eigenvalues of a Four Cycle Permutation Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 4, printed p. 567, PDF p. 582"
created: 2026-09-29
---

# Exercise LA420: Eigenvalues of a Four Cycle Permutation Matrix

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 4
> Show that the eigenvalues of the matrix
>
> $$
> A=\begin{pmatrix}
> 0&1&0&0\\
> 0&0&1&0\\
> 0&0&0&1\\
> 1&0&0&0
> \end{pmatrix}
> $$
>
> in the complex numbers are $\pm1,\pm i$.

## Hints

> [!hint]- Hint 1: Write out the eigenvector equation
> If $Av=\lambda v$ and $v=(x_1,x_2,x_3,x_4)^{\mathsf T}$, then $x_2=\lambda x_1$, $x_3=\lambda x_2$, and $x_4=\lambda x_3$.

> [!hint]- Hint 2: Close the cycle
> The final equation is $x_1=\lambda x_4$. Conversely, test $(1,\lambda,\lambda^2,\lambda^3)^{\mathsf T}$ for each fourth root of unity.

## Solution

> [!success]- Solution
> Suppose $Av=\lambda v$ with $v\ne0$. The first three rows imply
>
> $$
> v=x_1(1,\lambda,\lambda^2,\lambda^3)^{\mathsf T}.
> $$
>
> Thus $x_1\ne0$, and the last row gives $x_1=\lambda^4x_1$, so $\lambda^4=1$. Over $\mathbb C$,
>
> $$
> t^4-1=(t-1)(t+1)(t-i)(t+i),
> $$
>
> where $i^2=-1$. Therefore the only possible eigenvalues are $1,-1,i,-i$.
>
> For each of these values, the nonzero vector $v_\lambda=(1,\lambda,\lambda^2,\lambda^3)^{\mathsf T}$ satisfies
>
> $$
> Av_\lambda=(\lambda,\lambda^2,\lambda^3,1)^{\mathsf T}
> =\lambda v_\lambda.
> $$
>
> All four values occur. They are distinct, so the monic characteristic polynomial of degree four is $t^4-1$, with each eigenvalue occurring once.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 4, printed p. 567, PDF p. 582]. All sixteen matrix entries and the requested complex eigenvalues were checked on the original page image. The eigenvectors and proof are independently derived.
- **Boundary:** The base field matters: over $\mathbb R$ only $\pm1$ are eigenvalues in the field, although the characteristic polynomial remains $t^4-1$.
