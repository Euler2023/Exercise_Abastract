---
title: 'Exercise AG36: Additive Scaling and Multiplicative Haar Measure on a Local Field'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 6, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-6
created: '2026-10-23'
---

# Exercise AG36: Additive Scaling and Multiplicative Haar Measure on a Local Field

## Problem Statement

> [!question] Neukirch II.5.6
> Let $K$ be a $p$-adic number field, $v_{\mathfrak p}$ the normalized exponential valuation of $K$, and $dx$ Haar measure on its additive group, scaled so $\int_{\mathfrak o}dx=1$. Then one has $v_{\mathfrak p}(a)=\int_{a\mathfrak o}dx$. Furthermore,
> $$
> I(f)=\int_{K\setminus\{0\}}f(x)\frac{dx}{|x|_{\mathfrak p}}
> $$
> is a Haar measure on the locally compact group $K^*$.

> [!warning] Source issue
> The page prints the exponential-valuation symbol in the additive-volume equality. As an equality with the normalized exponential valuation this is false already at $a=1$. The intended scaling factor is $|a|_{\mathfrak p}=q^{-v_{\mathfrak p}(a)}$, as used in the following displayed multiplicative integral. This distinction is retained explicitly.

## Hints

> [!hint]- Hint 1
> Check the first formula at $a=1$: the exponential valuation is zero but the normalized volume is one.

> [!hint]- Hint 2
> Partition $\mathfrak o$ into $q$ translates of $\mathfrak p$, then prove the scaling formula before changing variables in the multiplicative integral.

## Solution

> [!success]- Independent derivation and stated source corrections
> Write $q=\#(\mathfrak o/\mathfrak p)$ and normalize $|a|_{\mathfrak p}=q^{-v_{\mathfrak p}(a)}$. The correct first identity for $a\ne0$ is
> $$
> \mu(a\mathfrak o)=|a|_{\mathfrak p}=q^{-v_{\mathfrak p}(a)}.
> $$
> Indeed $\mathfrak o$ is the disjoint union of $q$ translates of $\pi\mathfrak o$, so translation invariance gives $\mu(\pi\mathfrak o)=q^{-1}$. Iterating the same index calculation gives $\mu(\pi^r\mathfrak o)=q^{-r}$ for $r\ge0$; for $r<0$, the overgroup is the union of $q^{-r}$ translates of $\mathfrak o$, giving the identical formula. A unit preserves $\mathfrak o$, so the result holds for $a=\pi^ru$. At $a=1$ this is $1$, in contrast with the printed exponential valuation $v_{\mathfrak p}(1)=0$.
>
> We import the existence and uniqueness up to scale of Haar measure on locally compact groups. The image under multiplication by $a$ of additive Haar measure is again additive Haar measure, and the just calculated volume of $a\mathfrak o$ fixes its scale. Thus $\mu(aE)=|a|_{\mathfrak p}\mu(E)$ for every Borel set, equivalently $d(ay)=|a|_{\mathfrak p}\,dy$. For compactly supported continuous $f$ on $K^*$, the change of variables $x=ay$ gives
> $$
> \int_{K^*}f(a^{-1}x)\frac{dx}{|x|_{\mathfrak p}}
> =\int_{K^*}f(y)\frac{|a|_{\mathfrak p}\,dy}{|ay|_{\mathfrak p}}
> =\int_{K^*}f(y)\frac{dy}{|y|_{\mathfrak p}}.
> $$
> The positive density $1/|x|_{\mathfrak p}$ is bounded on each compact subset of $K^*$, so this defines a nonzero Radon measure, finite on compact subsets and invariant under multiplication. It is therefore multiplicative Haar measure. Its volume on $\mathfrak o^*$ is $1-q^{-1}$; divide by this constant if volume one on the units is desired.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 6, printed p. 142, PDF p. 161].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
