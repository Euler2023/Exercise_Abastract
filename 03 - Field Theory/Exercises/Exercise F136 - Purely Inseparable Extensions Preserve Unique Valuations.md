---
title: 'Exercise F136: Purely Inseparable Extensions Preserve Unique Valuations'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 4, printed p. 152, PDF p. 171
source_refs:
- S4/ch-II/sec-6/ex-4
created: '2026-10-23'
---

# Exercise F136: Purely Inseparable Extensions Preserve Unique Valuations

## Problem Statement

> [!question] Neukirch II.6.4
> A separably closed field $K$ is henselian with respect to any nonarchimedean valuation. More generally, every valuation of $K$ admits a unique extension to any purely inseparable extension $L/K$.
>
> **Printed hint.** If $\alpha^p=a\in K$, one is forced to put $w(\alpha)=v(a)/p$.

## Hints

> [!hint]- Hint 1
> For a general purely inseparable element choose $r$ with $\alpha^{p^r}\in K$.

> [!hint]- Hint 2
> Check both independence of r and the ultrametric inequality using Frobenius. For separably closed K every algebraic extension is purely inseparable.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> In characteristic $p>0$, for $x\in L^*$ choose $r$ such that $x^{p^r}\in K$ and define $w(x)=p^{-r}v(x^{p^r})$, with $w(0)=\infty$. Increasing $r$ multiplies the numerator value by the same power of $p$, so the definition is independent of the choice. Given $x,y$, choose a common such $r$. Multiplicativity follows from $(xy)^{p^r}=x^{p^r}y^{p^r}$, and
> $$
> w(x+y)=p^{-r}v(x^{p^r}+y^{p^r})\ge\min\{w(x),w(y)\}
> $$
> follows from Frobenius and the ultrametric inequality. The value is infinite exactly at zero and restricts to $v$ on $K$. Every extension must satisfy $p^rw(x)=v(x^{p^r})$, proving uniqueness. Equivalently for a multiplicative absolute value, $|x|_L=|x^{p^r}|_K^{1/p^r}$. In characteristic zero a purely inseparable extension is trivial.
>
> If $K$ is separably closed, the minimal polynomial of any algebraic element is of the form $g(X^{p^r})$ with $g$ separable irreducible. Separably closedness forces $\deg g=1$, so the extension is purely inseparable. Thus every nonarchimedean valuation of $K$ extends uniquely to every algebraic extension. Apply the source's already proved unique-extension characterization of henselian fields, (6.6), printed p. 147 / PDF p. 166. This proves the first assertion. Neither perfectness nor algebraic closedness of $K$ is required.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 4, printed p. 152, PDF p. 171].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
