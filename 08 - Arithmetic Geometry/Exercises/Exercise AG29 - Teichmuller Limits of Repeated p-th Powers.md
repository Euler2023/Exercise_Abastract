---
title: 'Exercise AG29: Teichmuller Limits of Repeated p-th Powers'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 5, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-5
created: '2026-10-23'
---

# Exercise AG29: Teichmuller Limits of Repeated p-th Powers

## Problem Statement

> [!question] Neukirch II.2.5
> For every $a\in\mathbb Z$, $(a,p)=1$, the sequence $\{a^{p^n}\}_{n\in\mathbb N}$ converges in $\mathbb Q_p$.

## Hints

> [!hint]- Hint 1
> Fermat gives $a^{p-1}\equiv1\pmod p$.

> [!hint]- Hint 2
> Raise $a^{p-1}$ successively to $p$-th powers and estimate the ratio of consecutive terms.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Let $b_n=a^{p^n}$. Fermat's theorem gives $a^{p-1}\in1+p\mathbb Z_p$ (for $p=2$ this says that $a$ is odd). The binomial estimate $(1+p^ku)^p\in1+p^{k+1}\mathbb Z_p$ yields
> $$
> b_{n+1}/b_n=(a^{p-1})^{p^n}\in1+p^{n+1}\mathbb Z_p.
> $$
> Since $b_n$ is a unit, $v_p(b_{n+1}-b_n)\ge n+1$. The ultrametric inequality for a finite telescoping sum then gives $v_p(b_m-b_n)\ge n+1$ for $m>n$. Completeness gives a unit limit $\omega(a)$, with $\omega(a)\equiv a\pmod p$.
>
> Continuity of the polynomial $X^p$ gives $\omega(a)^p=\omega(a)$, so $\omega(a)^{p-1}=1$. For $p=2$ the limit is therefore $1$, even when the original odd integer is $-1$. For odd $p$, a residue $\bar a\ne0$ has exactly one such lift: if two lifts differ first in degree $p^k$, their difference under $X^{p-1}-1$ has the same valuation, because the derivative is a unit modulo $p$, a contradiction. This identifies the limit as the Teichmüller representative. For example at $p=3$, the powers of $-1$ remain $-1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 5, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
