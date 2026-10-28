---
title: "Exercise AG104: Rational j Invariants and Special Cubics"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.1, Exercise 7.1.2, printed p. 259, PDF p. 272"
source_refs:
  - "S7/ch-7/sec-1/ex-2"
created: 2026-10-28
---

# Exercise AG104: Rational j Invariants and Special Cubics

## Problem Statement

> [!question] Original Exercise 7.1.2
> (a) Confirm that for a Weierstrass equation (7.1) with $g_2$ and $g_3$ nonzero the condition $j\in\mathbb Q$ is equivalent to the condition $g_2^3=rg_3^2$ for some nonzero $r\in\mathbb Q$.
>
> (b) Show that an elliptic curve over $\mathbb C$ with either of $g_2,g_3$ zero is isomorphic to an elliptic curve over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Express $j$ as a fractional linear function of $r=g_2^3/g_3^2$.

> [!hint]- Hint 2
> Normalize the sole nonzero coefficient using a fourth or sixth root in $\mathbb C$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** The nonsingular Weierstrass equation is $y^2=4x^3-g_2x-g_3$. Set $r=g_2^3/g_3^2$, which is nonzero by hypothesis. Since $\Delta\ne0$, $r\ne27$, and
> $$
> j=\frac{1728r}{r-27}.
> $$
> If $r\in\mathbb Q$, this gives $j\in\mathbb Q$. Conversely $j\ne1728$: equality in the defining formula would give $27g_3^2=0$. Solving for $r$ therefore gives
> $$
> r=\frac{27j}{j-1728}\in\mathbb Q.
> $$
> Moreover $j\ne0$ because $g_2\ne0$, so this $r$ is nonzero.
>
> **(b)** If $g_3=0$, nonsingularity forces $g_2\ne0$. Choose $u\in\mathbb C^*$ with $u^4=g_2/4$. The admissible substitution $x=u^2x'$, $y=u^3y'$ transforms the equation into $(y')^2=4(x')^3-4x'$, which is defined over $\mathbb Q$.
>
> If $g_2=0$, choose $u^6=g_3/4$, obtaining $(y')^2=4(x')^3-4$. The chosen fourth or sixth root exists because $\mathbb C$ is algebraically closed. The inverses of the changes are defined over $\mathbb C$ and extend over infinity. Both target discriminants are nonzero. This proves existence of a rational model up to complex isomorphism; it does not assert that the original coefficients or the chosen changes are rational.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 259 / PDF p. 272. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
