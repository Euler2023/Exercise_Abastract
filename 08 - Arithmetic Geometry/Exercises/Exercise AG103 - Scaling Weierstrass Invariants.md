---
title: "Exercise AG103: Scaling Weierstrass Invariants"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.1, Exercise 7.1.1, printed p. 259, PDF p. 272"
source_refs:
  - "S7/ch-7/sec-1/ex-1"
created: 2026-10-28
---

# Exercise AG103: Scaling Weierstrass Invariants

## Problem Statement

> [!question] Original Exercise 7.1.1
> Show that every admissible change of variable $x=u^2x'$, $y=u^3y'$ where $u\in k^*$ transforms a Weierstrass equation $E$ into another Weierstrass equation $E'$ with
> $$
> u^4g'_2=g_2,\qquad u^6g'_3=g_3,\qquad u^{12}\Delta'=\Delta,\qquad j'=j.
> $$

## Hints

> [!hint]- Hint 1
> Substitute and divide the equation by $u^6$.

> [!hint]- Hint 2
> The two terms of $\Delta=g_2^3-27g_3^2$ both have scaling degree $12$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> The chapter assumes characteristic zero. Substitute into $y^2=4x^3-g_2x-g_3$ and divide by $u^6$:
> $$
> (y')^2=4(x')^3-u^{-4}g_2x'-u^{-6}g_3.
> $$
> Thus $g'_2=u^{-4}g_2$ and $g'_3=u^{-6}g_3$. Using the chapter's discriminant normalization,
> $$
> \Delta'=(g'_2)^3-27(g'_3)^2
> =u^{-12}(g_2^3-27g_3^2)=u^{-12}\Delta.
> $$
> When $\Delta\ne0$, so that the curve is elliptic and its invariant is defined,
> $$
> j'=\frac{1728(g'_2)^3}{\Delta'}
> =\frac{1728u^{-12}g_2^3}{u^{-12}\Delta}=j.
> $$
> The coordinate change has inverse $(x',y')=(u^{-2}x,u^{-3}y)$ and fixes the projective point $[0:1:0]$; it is an isomorphism of the completed curves. The discriminant identity also applies to singular equations, but the assertion about $j$ is restricted to nonzero discriminant.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 259 / PDF p. 272. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
