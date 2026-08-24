---
title: "Exercise LA252: Unitarity of the Fourier Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - fourier-matrix
  - unitary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.16, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA252: Unitarity of the Fourier Matrix

## Problem Statement

> [!question] Exercise 6.16
> Let $\zeta=e^{2\pi i/n}$, and let $A$ be the $n\times n$ matrix whose entries are $a_{jk}=\zeta^{jk}/\sqrt n$. Prove that $A$ is unitary.

## Hints

> [!hint]- Hint 1
> Index rows and columns by $0,\ldots,n-1$ and compute the inner product of two columns.

> [!hint]- Hint 2
> Use the finite geometric sum of powers of $\zeta^{\ell-k}$.

## Solution

> [!success]- Solution
> With indices $0\le j,k\le n-1$, the $(k,\ell)$ entry of $A^*A$ is
>
> $$
> (A^*A)_{k\ell}
> =\frac1n\sum_{j=0}^{n-1}\overline{\zeta^{jk}}\zeta^{j\ell}
> =\frac1n\sum_{j=0}^{n-1}\zeta^{j(\ell-k)}.
> $$
>
> If $k=\ell$, the sum is $n$. If $k\ne\ell$, then $\zeta^{\ell-k}\ne1$ and the geometric sum is
>
> $$
> \frac{1-(\zeta^{\ell-k})^n}{1-\zeta^{\ell-k}}=0.
> $$
>
> Thus $(A^*A)_{k\ell}=\delta_{k\ell}$, so $A^*A=I$ and $A$ is unitary.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The source does not print index bounds; the conventional Fourier indexing $0,\ldots,n-1$ is the one for which the formula gives an $n\times n$ matrix.
- **Source status:** The formula was visually verified at [S1, Ch. 8, §6, Ex. 6.16, printed p. 257, PDF p. 269]. The proof is independent.

