---
title: 'Exercise AG34: Finite Index Subgroups of a p-adic Multiplicative Group Are Open and Closed'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 4, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-4
created: '2026-10-23'
---

# Exercise AG34: Finite Index Subgroups of a p-adic Multiplicative Group Are Open and Closed

## Problem Statement

> [!question] Neukirch II.5.4
> For a $p$-adic number field $K$, every subgroup of finite index in $K^*$ is both open and closed.

## Hints

> [!hint]- Hint 1
> A subgroup of index $n$ in an abelian group contains every $n$-th power.

> [!hint]- Hint 2
> On deep principal units, taking $n$-th powers corresponds under logarithm to multiplying an additive ideal by $n$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Let $H\subset K^*$ have finite index $n$. Since $K^*/H$ is an abelian group of order $n$, Lagrange's theorem gives $K^{*n}\subseteq H$. Write $v=v_{\mathfrak p}$, $v(p)=e$, and choose an integer $r>e/(p-1)$. The inverse series isomorphisms in (5.5) identify $U^{(r)}=1+\mathfrak p^r$ with $\mathfrak p^r$. Multiplication by the nonzero integer $n$ maps that ideal onto $\mathfrak p^{r+v(n)}$: $n=\pi^{v(n)}\eta$ for a unit $\eta$. Therefore for every $u\in U^{(r+v(n))}$, the element $b=\exp(n^{-1}\log u)$ belongs to $U^{(r)}$ and satisfies $b^n=u$. Thus
> $$
> U^{(r+v(n))}\subseteq K^{*n}\subseteq H.
> $$
> The left member is an open neighborhood of $1$, so every coset $hU^{(r+v(n))}$ with $h\in H$ is open and $H$ is their union. Its complement is a union of other open cosets of $H$, and hence also open; $H$ is closed. No topological assumption on the initial subgroup was needed. Characteristic zero is used here to divide by $n$ and to use the logarithm isomorphism; the proof does not silently apply to local fields of characteristic $p$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 4, printed p. 142, PDF p. 161].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
