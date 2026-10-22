---
title: 'Exercise AG27: Reciprocal Decimal Powers Never Converge p-adically'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 3, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-3
created: '2026-10-23'
---

# Exercise AG27: Reciprocal Decimal Powers Never Converge p-adically

## Problem Statement

> [!question] Neukirch II.2.3
> The sequence $1,1/10,1/10^2,1/10^3,\ldots$ does not converge in $\mathbb Q_p$, for any $p$.

## Hints

> [!hint]- Hint 1
> A convergent sequence must be Cauchy; compute successive differences.

> [!hint]- Hint 2
> For $x_n=10^{-n}$, $x_{n+1}-x_n=-9\cdot10^{-(n+1)}$.

## Solution

> [!success]- Independent derivation and stated source corrections
> The successive differences satisfy
> $$
> |x_{n+1}-x_n|_p=|9|_p|10|_p^{-(n+1)}.
> $$
> If $p=2$ or $5$, this tends to infinity, since $|10|_p<1$ and $|9|_p=1$. If $p\ne2,5$, it is the fixed positive number $|9|_p$ (equal to $1/9$ for $p=3$, and $1$ otherwise). In no case do the differences tend to zero. A Cauchy sequence must have successive differences tending to zero, by its defining inequality with $m=n+1$, so this sequence is not Cauchy and cannot converge. Its ordinary real limit zero therefore has no bearing on any of the $p$-adic topologies.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 3, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
