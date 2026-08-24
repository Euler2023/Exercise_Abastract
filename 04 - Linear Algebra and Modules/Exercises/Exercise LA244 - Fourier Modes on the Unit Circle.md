---
title: "Exercise LA244: Fourier Modes on the Unit Circle"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - fourier-basis
  - hermitian-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.8, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA244: Fourier Modes on the Unit Circle

## Problem Statement

> [!question] Exercise 6.8
> Let $V$ be the space of differentiable complex-valued functions on the unit circle in the complex plane, and for $f,g\in V$, define
>
> $$
> (f,g)=\int_0^{2\pi}\overline{f(\theta)}g(\theta)\,d\theta.
> $$
>
> **(a)** Show that this form is Hermitian and positive definite.
>
> **(b)** Let $W$ be the subspace of $V$ of functions $f(e^{i\theta})$, where $f$ is a polynomial of degree at most $n$. Find an orthonormal basis for $W$.
>
> **(c)** Show that $T=i\frac d{d\theta}$ is a Hermitian operator on $V$, and determine its eigenvalues on $W$.

## Hints

> [!hint]- Hint 1
> Use the functions $e^{ik\theta}$ and integrate exponentials over a full period.

> [!hint]- Hint 2
> For (c), integrate by parts and use periodicity at $0$ and $2\pi$.

## Solution

> [!success]- Solution
> **(a)** Conjugate-linearity in the first variable and linearity in the second follow from the integral. Also
>
> $$
> (g,f)=\overline{(f,g)},
> \qquad
> (f,f)=\int_0^{2\pi}|f(\theta)|^2d\theta\ge0.
> $$
>
> If the last integral is zero, continuity forces $f$ to vanish everywhere, so the form is positive definite.
>
> **(b)** The functions $1,e^{i\theta},\ldots,e^{in\theta}$ span $W$, and
>
> $$
> \int_0^{2\pi}e^{-ij\theta}e^{ik\theta}d\theta=2\pi\delta_{jk}.
> $$
>
> Hence an orthonormal basis is
>
> $$
> \boxed{\left\{\frac{e^{ik\theta}}{\sqrt{2\pi}}:0\le k\le n\right\}}.
> $$
>
> **(c)** Periodicity and integration by parts give
>
> $$
> (Tf,g)=-i\int_0^{2\pi}\overline{f'(\theta)}g(\theta)d\theta
> =i\int_0^{2\pi}\overline{f(\theta)}g'(\theta)d\theta
> =(f,Tg).
> $$
>
> Thus $T$ is Hermitian. Moreover,
>
> $$
> T(e^{ik\theta})=i(ik)e^{ik\theta}=-k e^{ik\theta},
> $$
>
> so its eigenvalues on $W$ are $0,-1,\ldots,-n$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- The sign of the eigenvalue comes from the source's choice $T=i\,d/d\theta$ rather than $-i\,d/d\theta$.
- **Source status:** The integral, polynomial subspace, and operator were visually verified at [S1, Ch. 8, §6, Ex. 6.8, printed p. 257, PDF p. 269]. The solution is independent.

