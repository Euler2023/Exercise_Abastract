---
title: 'Exercise LA547: Completion of the Integral Closure as a Product of Local Integer Rings'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 4, printed p. 166, PDF p. 185
source_refs:
- S4/ch-II/sec-8/ex-4
created: '2026-10-23'
---

# Exercise LA547: Completion of the Integral Closure as a Product of Local Integer Rings

## Problem Statement

> [!question] Neukirch II.8.4
> Let $L/K$ be finite separable, $\mathfrak o$ the valuation ring of a discrete valuation $v$ and $\mathcal O$ its integral closure in $L$. If $w\mid v$ runs over the extensions and $\widehat{\mathfrak o}_v$, respectively $\widehat{\mathcal O}_w$, are the valuation rings of $K_v$, respectively $L_w$, then
> $$
> \mathcal O\otimes_{\mathfrak o}\widehat{\mathfrak o}_v\cong\prod_{w\mid v}\widehat{\mathcal O}_w.
> $$

## Hints

> [!hint]- Hint 1
> The integral closure is a finite torsion-free module over the DVR, hence finite free.

> [!hint]- Hint 2
> Factor the maximal ideal in the semilocal Dedekind ring and apply CRT modulo every power. Pass to inverse limits.

## Solution

> [!success]- Independent derivation and stated source corrections
> Let $\pi$ generate the maximal ideal of $\mathfrak o$. Separability and the integral-basis finiteness theorem imply that $\mathcal O$ is finite over $\mathfrak o$; it is torsion-free, hence free, since $\mathfrak o$ is a PID. We import this source finiteness theorem, I (2.11), together with unique prime factorization in the integral closure. Let $P_w$ be its maximal ideals above $(\pi)$ and write $\pi\mathcal O=\prod_wP_w^{e_w}$.
>
> For every $n\ge1$, CRT gives the canonical ring isomorphism
> $$
> \mathcal O/\pi^n\mathcal O\cong\prod_w\mathcal O/P_w^{e_wn}.
> $$
> Taking inverse limits commutes with this finite product. On the left, finite freeness identifies completion with tensoring the completed base: on a free basis both are $\widehat{\mathfrak o}_v^d$, and the identification is the canonical multiplication-compatible map. On the right, the exponents $e_wn$ are cofinal among all powers, so each factor is the $P_w$-adic completion. Localizing at $P_w$ does not change these quotients, since every element outside $P_w$ is already invertible modulo its powers. The localization is the valuation ring of $w$; its completion is the valuation ring of $L_w$, because an element of $L_w$ of nonnegative value can be approximated arbitrarily closely by elements of $L$ with the same nonnegative value. Thus the right factors are exactly the stated integer rings.
>
> The map sends $a\otimes b$ to the tuple $(ab)_w$, so the isomorphism is canonical and does not depend on the free basis used to prove it. Tensoring its fraction fields yields the familiar $L\otimes_KK_v\cong\prod_wL_w$. Separability is explicitly used for the finite integral-closure theorem; no analogous finiteness is assumed for arbitrary inseparable extensions.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 4, printed p. 166, PDF p. 185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
