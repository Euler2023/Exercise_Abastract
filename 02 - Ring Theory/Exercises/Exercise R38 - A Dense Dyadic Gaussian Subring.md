---
title: "Exercise R38: A Dense Dyadic Gaussian Subring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - subrings
  - topology
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.4, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R38: A Dense Dyadic Gaussian Subring

## Problem Statement

> [!question] Exercise 1.4
> Let $\alpha=\frac12 i$. Prove that the elements of $\mathbb{Z}[\alpha]$ are dense in the complex plane.

## Hints

> [!hint]- Hint 1
> Show that the ring contains $2^{-m}$ and $i2^{-m}$ for arbitrarily large $m$.

## Solution

> [!success]- Solution
> Since $\alpha=i/2$, the elements $\alpha^{2m}=(-1)^m/4^m$ and $2\alpha^{2m+1}=(-1)^m i/4^m$ show that $\mathbb{Z}[\alpha]$ contains all numbers
>
> $$
> \frac{a}{4^m}+i\frac{b}{4^m}\qquad(a,b\in\mathbb{Z},\ m\ge0).
> $$
>
> Given $z=x+iy\in\mathbb{C}$ and $\varepsilon>0$, choose $m$ with $4^{-m}<\varepsilon/\sqrt2$. Choose integers $a,b$ nearest to $4^m x,4^m y$. Then
>
> $$
> \left|z-\left(\frac a{4^m}+i\frac b{4^m}\right)\right|
> \le \frac{\sqrt2}{2\cdot4^m}<\varepsilon.
> $$
>
> Hence $\mathbb{Z}[\alpha]$ is dense in $\mathbb{C}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]

## Notes

- **External standard input:** The elementary nearest-integer approximation in $\mathbb{R}$ is used explicitly.
- **Source status:** The problem is from [S1, Ch. 11, §1, Ex. 1.4, printed p. 354, PDF p. 366]; the proof is independent.
