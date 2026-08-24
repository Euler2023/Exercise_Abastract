---
title: "Exercise LA272: Error in an Orthogonal Eigenvalue Argument"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.6, printed p. 259, PDF p. 271"
created: 2026-08-24
---

# Exercise LA272: Error in an Orthogonal Eigenvalue Argument

## Problem Statement

> [!question] Miscellaneous Problem M.6
> Let $P$ be a real orthogonal matrix and let $X$ be a possibly complex eigenvector with eigenvalue $\lambda$.
>
> **(a)** The equations
>
> $$
> X^{\mathsf T}P^{\mathsf T}X=(PX)^{\mathsf T}X=\lambda X^{\mathsf T}X
> $$
>
> and
>
> $$
> X^{\mathsf T}P^{\mathsf T}X=X^{\mathsf T}(P^{-1}X)=\lambda^{-1}X^{\mathsf T}X
> $$
>
> seem to imply $\lambda=\lambda^{-1}$, hence $\lambda=\pm1$. Find the error.
>
> **(b)** State and prove the correct theorem about the complex eigenvalues of a real orthogonal matrix.

## Hints

> [!hint]- Hint 1
> A nonzero complex vector need not satisfy $X^{\mathsf T}X\ne0$.

> [!hint]- Hint 2
> Replace transpose by conjugate transpose when measuring the length of $X$.

## Solution

> [!success]- Solution
> **(a)** The two displayed equations are valid. The error is cancelling $X^{\mathsf T}X$. For a complex vector this scalar can vanish even when $X\ne0$; for example, $(1,i)^{\mathsf T}(1,i)=0$. Thus the transpose pairing is not a positive-definite Hermitian inner product on $\mathbb C^n$.
>
> **(b)** The correct theorem is: every complex eigenvalue $\lambda$ of a real orthogonal matrix satisfies $|\lambda|=1$.
>
> Indeed, extend $P$ complex-linearly. Since $P^*P=P^{\mathsf T}P=I$ and $PX=\lambda X$,
>
> $$
> X^*X=(PX)^*(PX)=|\lambda|^2X^*X.
> $$
>
> Here $X^*X>0$, so $|\lambda|=1$. Moreover, the original calculation shows
>
> $$
> (\lambda-\lambda^{-1})X^{\mathsf T}X=0.
> $$
>
> Consequently, if $\lambda\ne\pm1$, then necessarily $X^{\mathsf T}X=0$. This explains exactly why the flawed cancellation fails.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]

## Notes

- **Source status:** The flawed argument and the request for its correction were visually verified at [S1, Ch. 8, M.6, printed p. 259, PDF p. 271]. The correction is an independent derivation.

