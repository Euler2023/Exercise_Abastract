---
title: "Exercise LA181: Convergence and Differentiation of Matrix Sine"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-functions
  - power-series
  - differentiation
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.6, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA181: Convergence and Differentiation of Matrix Sine

## Problem Statement

> [!question] Exercise 4.6
> For an $n\times n$ matrix $A$, define $\sin A$ and $\cos A$ using the Taylor series for $\sin x$ and $\cos x$.
>
> (a) Prove that these series converge for all $A$.
>
> (b) Prove that $\sin(tA)$ is differentiable and that
>
> $$
> \frac{d}{dt}\sin(tA)=A\cos(tA).
> $$

## Hints

> [!hint]- Hint 1
> Bound $\|A^k\|$ by $\|A\|^k$ in a submultiplicative matrix norm.

## Solution

> [!success]- Solution
> Define
>
> $$
> \sin A=\sum_{k=0}^\infty\frac{(-1)^kA^{2k+1}}{(2k+1)!},\qquad
> \cos A=\sum_{k=0}^\infty\frac{(-1)^kA^{2k}}{(2k)!}.
> $$
>
> For a submultiplicative norm,
>
> $$
> \left\|\frac{A^r}{r!}\right\|\le\frac{\|A\|^r}{r!}.
> $$
>
> Comparison with the scalar exponential series proves absolute convergence of both matrix series.
>
> On every bounded interval in $t$, the series for $\sin(tA)$ and its termwise derivative converge uniformly by the same comparison. Hence
>
> $$
> \frac{d}{dt}\sin(tA)
> =\sum_{k=0}^\infty\frac{(-1)^k(2k+1)t^{2k}A^{2k+1}}{(2k+1)!}
> =A\sum_{k=0}^\infty\frac{(-1)^kt^{2k}A^{2k}}{(2k)!}
> =A\cos(tA).
> $$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **External standard input:** The uniform term-by-term differentiation criterion is a standard result from elementary analysis and is also developed in Artin §5.4.
- **Source status:** [S1, Ch. 5, §4, Ex. 4.6, printed p. 152, PDF p. 164]; independent derivation.
