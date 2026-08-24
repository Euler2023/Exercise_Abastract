---
title: "Exercise LA276: Fourier Interpolation and Fourier Eigenvalues"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - fourier-matrix
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.10, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA276: Fourier Interpolation and Fourier Eigenvalues

## Problem Statement

> [!question] Miscellaneous Problem M.10
> Let $\zeta=e^{2\pi i/n}$, and let $A=(a_{ij})$ be the $n\times n$ Fourier matrix indexed by $0\le i,j<n$, with $a_{ij}=\zeta^{ij}$. Given complex numbers $b_0,\ldots,b_{n-1}$, find a polynomial $f$ of degree at most $n-1$ such that $f(\zeta^\nu)=b_\nu$.
>
> **(a)** Express the coefficients of $f$ using $A^{-1}=n^{-1}A^*$.
>
> **(b)** Show that $A$ is symmetric and normal, and compute $A^2$ and $A^4$.
>
> **(c)** Determine the eigenvalues of $A$.

## Hints

> [!hint]- Hint 1
> If $c=(c_0,\ldots,c_{n-1})^{\mathsf T}$ is the coefficient vector, then the interpolation equations are $b=Ac$.

> [!hint]- Hint 2
> The $(i,k)$ entry of $A^2$ is $\sum_{j=0}^{n-1}\zeta^{j(i+k)}$.

## Solution

> [!success]- Solution
> **(a)** For $f(t)=\sum_{j=0}^{n-1}c_jt^j$, the equations $f(\zeta^\nu)=b_\nu$ say $b=Ac$. Since $AA^*=nI$,
>
> $$
> c=A^{-1}b=\frac1nA^*b,
> \qquad
> c_j=\frac1n\sum_{\nu=0}^{n-1}\zeta^{-j\nu}b_\nu.
> $$
>
> This gives the unique interpolating polynomial of degree at most $n-1$.
>
> **(b)** Since $a_{ij}=a_{ji}$, $A^{\mathsf T}=A$. Also $AA^*=A^*A=nI$, so $A$ is normal. The geometric-sum identity gives
>
> $$
> (A^2)_{ik}=\sum_{j=0}^{n-1}\zeta^{j(i+k)}
> =\begin{cases}n,&i+k\equiv0\pmod n,\\0,&\text{otherwise}.
> \end{cases}
> $$
>
> Therefore $A^2=nR$, where $Re_j=e_{-j\bmod n}$. Since $R^2=I$,
>
> $$
> A^4=n^2I.
> $$
>
> **(c)** Normality and the equation $A^4=n^2I$ show that every eigenvalue belongs to
>
> $$
> \{\sqrt n,-\sqrt n,i\sqrt n,-i\sqrt n\}.
> $$
>
> Their multiplicities, in that order, are
>
> | $n\pmod4$ | $m_{\sqrt n}$ | $m_{-\sqrt n}$ | $m_{i\sqrt n}$ | $m_{-i\sqrt n}$ |
> |---:|---:|---:|---:|---:|
> | $0$ | $n/4+1$ | $n/4$ | $n/4$ | $n/4-1$ |
> | $1$ | $(n+3)/4$ | $(n-1)/4$ | $(n-1)/4$ | $(n-1)/4$ |
> | $2$ | $(n+2)/4$ | $(n+2)/4$ | $(n-2)/4$ | $(n-2)/4$ |
> | $3$ | $(n+1)/4$ | $(n+1)/4$ | $(n+1)/4$ | $(n-3)/4$ |
>
> To obtain the table, first $A^2=nR$ determines the sums of the multiplicities in the $R=1$ and $R=-1$ subspaces. The remaining differences follow from
>
> $$
> \operatorname{tr}(A/\sqrt n)=\frac1{\sqrt n}\sum_{j=0}^{n-1}\zeta^{j^2}
> =\begin{cases}
> 1+i,&n\equiv0\pmod4,\\
> 1,&n\equiv1\pmod4,\\
> 0,&n\equiv2\pmod4,\\
> i,&n\equiv3\pmod4.
> \end{cases}
> $$
>
> Solving the resulting four linear equations gives the displayed multiplicities.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **External standard input:** The exact multiplicities in part (c) use the classical quadratic Gauss-sum evaluation displayed in the solution. The restriction to the four possible eigenvalues follows from Chapter 8 alone.
- The sign of the two imaginary multiplicities depends on the convention $\zeta=e^{2\pi i/n}$; the table uses Artin's positive-exponent convention.
- **Source status:** All three parts were visually verified at [S1, Ch. 8, M.10, printed p. 260, PDF p. 272]. The derivation is independent apart from the explicitly labeled Gauss-sum input.

