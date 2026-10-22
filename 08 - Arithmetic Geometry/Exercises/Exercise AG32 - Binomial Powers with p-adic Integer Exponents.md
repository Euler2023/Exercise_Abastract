---
title: 'Exercise AG32: Binomial Powers with p-adic Integer Exponents'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 2, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-2
created: '2026-10-23'
---

# Exercise AG32: Binomial Powers with p-adic Integer Exponents

## Problem Statement

> [!question] Neukirch II.5.2
> Let $K/\mathbb Q_p$ be a $p$-adic number field. For $1+x\in U^{(1)}$ and $z\in\mathbb Z_p$ one has
> $$
> (1+x)^z=\sum_{\nu=0}^{\infty}\binom z\nu x^\nu.
> $$
> The series converges even for $x\in K$ such that $v_{\mathfrak p}(x)>e/(p-1)$.

## Hints

> [!hint]- Hint 1
> For fixed $n$, approximate $z$ by nonnegative integers to prove $\binom zn\in\mathbb Z_p$.

> [!hint]- Hint 2
> The tails are uniformly small in $z$, since $|\binom zn|_p\le1$.

## Solution

> [!success]- Independent derivation and stated source corrections
> For fixed $n$, $\binom Zn=Z(Z-1)\cdots(Z-n+1)/n!$ is a polynomial over $\mathbb Q_p$ and hence continuous. Nonnegative integers are dense in $\mathbb Z_p$, and their binomial coefficients are ordinary integers. Since $\mathbb Z_p$ is closed, $\binom zn\in\mathbb Z_p$. If $v_{\mathfrak p}(x)>0$, the series terms have valuation at least $n v_{\mathfrak p}(x)$; hence the series converges in complete $K$, uniformly for $z\in\mathbb Z_p$. Its sum is continuous in $z$ because the finite partial sums are continuous and the tails have a uniform bound.
>
> Define $(1+x)^z$ by the continuous $\mathbb Z_p$-action on $U^{(1)}$. For completeness this action exists because $U^{(1)}/U^{(r)}$ is a finite $p$-group: the successive quotients $U^{(j)}/U^{(j+1)}$ are additive residue fields, by (3.10), printed p. 122 / PDF p. 141. Integer exponents sufficiently close $p$-adically therefore give equal powers in each such quotient, and completeness assembles their compatible limits. For every nonnegative integer $m$ the binomial theorem gives the stated identity, with the terms for $n>m$ zero. Approximate $z$ by these integers and use continuity on both sides to obtain the identity for all $z$.
>
> In fact convergence holds on the full principal-unit domain $v_{\mathfrak p}(x)>0$, so the last printed sufficient condition is stronger than necessary for $z\in\mathbb Z_p$. If $v_{\mathfrak p}(p)=e$, the threshold $e/(p-1)$ is instead the threshold used when relating this power to the exponential. There is no claim here that the exponential converges on every principal unit.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 2, printed p. 142, PDF p. 161].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
