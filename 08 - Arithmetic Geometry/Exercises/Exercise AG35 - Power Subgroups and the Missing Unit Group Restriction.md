---
title: 'Exercise AG35: Power Subgroups and the Missing Unit Group Restriction'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 5, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-5
created: '2026-10-23'
---

# Exercise AG35: Power Subgroups and the Missing Unit Group Restriction

## Problem Statement

> [!question] Neukirch II.5.5
> If $K$ is a $p$-adic number field, then the groups $K^{*n}$, for $n\in\mathbb N$, form a basis of neighbourhoods of $1$ in $K^*$.

> [!warning] Source issue
> The printed groups $K^{*n}$ are open, but they do not form a neighborhood basis for the usual valuation topology. The uniformizer counterexample proves the failure. The corrected unit-group version is proved below.

## Hints

> [!hint]- Hint 1
> Every power subgroup contains the $n$-th power of a uniformizer. Does it lie in the open unit group?

> [!hint]- Hint 2
> Replace $K^{*n}$ by $(\mathfrak o^*)^n=K^{*n}\cap\mathfrak o^*$. Use finite quotients of the unit filtration.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Choose a uniformizer $\pi$. The unit group $U=\mathfrak o^*$ is an open neighborhood of $1$ in the usual valuation topology. For every positive $n$, $\pi^n\in K^{*n}$ has nonzero valuation and is outside $U$. Consequently no $K^{*n}$ is contained in this neighborhood, so the printed basis assertion is false. Each such subgroup is nevertheless open: the logarithm construction in II.5.4 exhibits a deep principal-unit group inside it.
>
> The corrected assertion is that the subgroups $U^n$ form a neighborhood basis of $1$ in $U$, and hence in $K^*$ because $U$ itself is open. First each $U^n$ is open, by the same logarithm argument giving $U^{(r+v(n))}\subset U^n$ for $r>e/(p-1)$. Second, given a neighborhood, choose $s\ge1$ with $U^{(s)}$ contained in it. The quotient $U/U^{(s)}$ is finite: reduction modulo the finite ring $\mathfrak o/\mathfrak p^s$ identifies it with that ring's unit group. Let $n$ be its order. Lagrange's theorem yields $U^n\subset U^{(s)}$, proving cofinality. Finally $K^{*n}\cap U=U^n$: if $x^n$ has valuation zero, then $nv(x)=0$, so $x\in U$.
>
> The full power subgroups do give the usual finite-index, or profinite, neighborhood system on $K^*$; on the discrete valuation factor $\pi^{\mathbb Z}$ that topology has neighborhoods $n\mathbb Z$ and is coarser than the original discrete topology. Distinguishing these topologies explains the source error rather than changing the meaning of 'neighborhood' silently.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 5, printed p. 142, PDF p. 161].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
