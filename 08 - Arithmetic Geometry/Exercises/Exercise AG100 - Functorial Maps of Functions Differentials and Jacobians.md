---
title: "Exercise AG100: Functorial Maps of Functions Differentials and Jacobians"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.8, printed p. 230, PDF p. 244"
source_refs:
  - "S7/ch-6/sec-2/ex-8"
created: 2026-10-28
---

# Exercise AG100: Functorial Maps of Functions Differentials and Jacobians

## Problem Statement

> [!question] Original Exercise 6.2.8
> Briefly summarize the relations among $h$, $h_*$, $h^*$, $\operatorname{norm}_h$, $\operatorname{tr}_h$, $h_J$, $h^J$, $h_D$, $h^D$, $h_P$, and $h^P$.

## Hints

> [!hint]- Hint 1
> Separate maps that go from $X$ to $Y$ from pullbacks that go from $Y$ to $X$.

> [!hint]- Hint 2
> Jacobians use dual spaces of holomorphic differentials; Picard groups use degree-zero divisors modulo principal divisors.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Fix a nonconstant holomorphic map $h:X\to Y$ of compact connected Riemann surfaces. The arrows and definitions are as follows; $W_Z=\Omega^1_{\mathrm{hol}}(Z)$.
>
> | Symbol | Domain and target | Definition |
> |---|---|---|
> | $h$ | $X\to Y$ | The given map of surfaces |
> | $h_*$ | $H_1(X,\mathbb Z)\to H_1(Y,\mathbb Z)$ | Send a loop $\alpha$ to $h\circ\alpha$ |
> | $h^*$ | $\mathbb C(Y)\to\mathbb C(X)$ and $W_Y\to W_X$ | $g\mapsto g\circ h$, and the chain-rule pullback of differentials |
> | $\operatorname{norm}_h$ | $\mathbb C(X)^\times\to\mathbb C(Y)^\times$ | Product of a function over the inverse branches, extended meromorphically |
> | $\operatorname{tr}_h$ | $W_X\to W_Y$ | Sum of differential pullbacks by inverse branches, extended holomorphically |
> | $h_J$ | $\operatorname{Jac}(X)\to\operatorname{Jac}(Y)$ | $[\ell]\mapsto[\ell\circ h^*]$ |
> | $h^J$ | $\operatorname{Jac}(Y)\to\operatorname{Jac}(X)$ | $[\psi]\mapsto[\psi\circ\operatorname{tr}_h]$ |
> | $h_D$ | $\operatorname{Div}(X)\to\operatorname{Div}(Y)$ | $[x]\mapsto[h(x)]$ |
> | $h^D$ | $\operatorname{Div}(Y)\to\operatorname{Div}(X)$ | $[y]\mapsto\sum_{h(x)=y}e_x[x]$ |
> | $h_P$ | $\operatorname{Pic}^0(X)\to\operatorname{Pic}^0(Y)$ | Descent of $h_D$ |
> | $h^P$ | $\operatorname{Pic}^0(Y)\to\operatorname{Pic}^0(X)$ | Descent of $h^D$ |
>
> The forward homology map is the restriction of the dual of differential pullback: change of variable gives $\int_\alpha h^*\lambda=\int_{h\circ\alpha}\lambda$. The trace dual preserves periods because the inverse lifts of a closed loop concatenate to closed loops. These two facts make $h_J$ and $h^J$ well defined on period quotients.
>
> The function identities explaining descent to Picard groups are
> $$
> \operatorname{div}(\operatorname{norm}_h f)=h_D(\operatorname{div}f),\qquad
> \operatorname{div}(h^*g)=h^D(\operatorname{div}g).
> $$
> Thus principal divisors map to principal divisors. Abel's isomorphism $\operatorname{Pic}^0(Z)\simeq\operatorname{Jac}(Z)$ identifies $h_P$ with $h_J$ and $h^P$ with $h^J$; in the forward direction choose basepoints $y_0=h(x_0)$.
>
> Finally, if $d=\deg h$, the degree identities are
> $$
> \operatorname{tr}_h h^*=d\operatorname{id}_{W_Y},\qquad
> h_Jh^J=[d],\qquad h_Dh^D=d\operatorname{id}_{\operatorname{Div}(Y)},\qquad
> h_Ph^P=[d].
> $$
> The norm is multiplicative; the differential trace and the divisor, homology and Jacobian maps are additive. Distinguishing the superscripts from subscripts records the direction of the relevant transfer.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source scope:** These definitions and relations are from Section 6.2, printed pp. 221–228 / PDF pp. 235–242. The table is an independent organization of that material.
- **Inputs:** Abel's theorem is stated by the source without an internal proof; it is a named external input here. The norm, trace and degree identities are proved in the corresponding exercise notes.
- **Routing:** Functorial constructions on curves, their Picard groups and Jacobians determine the classification.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
