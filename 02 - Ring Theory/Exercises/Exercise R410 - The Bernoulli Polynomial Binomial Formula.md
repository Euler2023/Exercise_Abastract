---
title: 'Exercise R410: The Bernoulli Polynomial Binomial Formula'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 2, printed p. 433, PDF p. 452
source_refs:
- S4/ch-VII/sec-1/ex-2
created: '2026-10-23'
---

# Exercise R410: The Bernoulli Polynomial Binomial Formula

## Problem Statement

> [!question] Neukirch VII.1.2
> The Bernoulli polynomials $B_k(x)$ are defined by
> $$
> \frac{te^{(1+x)t}}{e^t-1}=F(t)e^{xt}=\sum_{k=0}^\infty B_k(x)\frac{t^k}{k!},
> $$
> so that $B_k=B_k(0)$. Show that
> $$
> B_m(x)=\sum_{k=0}^m\binom{m}{k}B_kx^{m-k}.
> $$

## Hints

> [!hint]- Hint 1
> Expand the two factors $F(t)$ and $e^{xt}$ as formal power series.

> [!hint]- Hint 2
> The coefficient of $t^m$ in the product is a finite sum over $k+(m-k)=m$. Multiply it by $m!$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The apparent singularity of $F(t)=te^t/(e^t-1)$ at zero is removable, and it is also a well-defined element of $\mathbb Q[[t]]$. In $\mathbb Q[x][[t]]$ we have
> $$
> F(t)e^{xt}=\left(\sum_{k\ge0}B_k\frac{t^k}{k!}\right)\left(\sum_{j\ge0}x^j\frac{t^j}{j!}\right).
> $$
> The Cauchy product is legitimate formally because each coefficient involves only finitely many terms. Its degree-$m$ coefficient is
> $$
> \sum_{k=0}^m\frac{B_kx^{m-k}}{k!(m-k)!}.
> $$
> The defining coefficient on the other side is $B_m(x)/m!$. Multiplication by $m!$ gives the required formula, including $m=0$.
>
> The convention can be checked at the first degrees:
> $$
> B_0(x)=1,\qquad B_1(x)=x+\tfrac12,\qquad B_2(x)=x^2+x+\tfrac16.
> $$
> Thus the source uses $B_1=+1/2$. If $B_m^{\mathrm{usual}}(x)$ is defined by $te^{xt}/(e^t-1)$, then the precise translation is $B_m(x)=B_m^{\mathrm{usual}}(x+1)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The full exercise and its generating function were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 2, printed p. 433, PDF p. 452]; the source explicitly explains its positive-$B_1$ convention at [printed p. 427, PDF p. 446]. No source error or figure is involved.
- **Proof scope:** Independent coefficient calculation. This is routed to Ring Theory because formal power series do the work; analytic zeta theory is not needed.
