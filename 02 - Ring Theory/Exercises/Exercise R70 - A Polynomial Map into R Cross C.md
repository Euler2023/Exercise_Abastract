---
title: "Exercise R70: A Polynomial Map into R Cross C"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - product-rings
  - ring-homomorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.1, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R70: A Polynomial Map into R Cross C

## Problem Statement

> [!question] Exercise 6.1
> Let $\varphi:\mathbb R[x]\to\mathbb C\times\mathbb C$ be defined by $\varphi(x)=(1,i)$ and $\varphi(r)=(r,r)$ for $r\in\mathbb R$. Determine its kernel and image.

## Hints

> [!hint]- Hint 1
> A real polynomial vanishing at $i$ also vanishes at $-i$.

> [!hint]- Hint 2
> Interpolate independently at $1$ and $i$, remembering that the first value must be real.

## Solution

> [!success]- Solution
> We have $\varphi(f)=(f(1),f(i))$. Thus $f$ lies in the kernel exactly when it vanishes at $1,i$, and then also at $-i$. The three corresponding factors are coprime, so
>
> $$
> \ker\varphi=((x-1)(x^2+1)).
> $$
>
> The first component $f(1)$ is always real, so $\operatorname{im}\varphi\subseteq\mathbb R\times\mathbb C$. Conversely, prescribing $f(1)=r\in\mathbb R$ and $f(i)=z\in\mathbb C$ also prescribes $f(-i)=\overline z$; real polynomial interpolation at $1,i,-i$ produces such an $f$. Therefore
>
> $$
> \operatorname{im}\varphi=\mathbb R\times\mathbb C
> $$
>
> as a subring of $\mathbb C\times\mathbb C$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]

## Notes

- **External standard input:** Elementary polynomial interpolation at three distinct complex points is used, with conjugate data ensuring real coefficients.
- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.1, printed p. 356, PDF p. 368]. The computation is independent.

