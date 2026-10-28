---
title: "Exercise AG98: Degree Multiplication on Jacobians"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.5, printed p. 230, PDF p. 244"
source_refs:
  - "S7/ch-6/sec-2/ex-5"
created: 2026-10-28
---

# Exercise AG98: Degree Multiplication on Jacobians

## Problem Statement

> [!question] Original Exercise 6.2.5
> Prove formula (6.8).

> **Referenced context.** Formula (6.8), printed p. 227 / PDF p. 241, says
> $$
> (\operatorname{tr}_h\circ h^*)(\lambda)=\deg(h)\lambda,
> \qquad \lambda\in\Omega^1_{\mathrm{hol}}(Y),
> $$
> for a nonconstant holomorphic map $h:X\to Y$ of compact Riemann surfaces.

## Hints

> [!hint]- Hint 1
> On an unramified coordinate neighborhood, the $d$ inverse branches all pull $h^*\lambda$ back to $\lambda$.

> [!hint]- Hint 2
> Both sides are holomorphic on the whole surface; extend equality across the finitely many branch values by continuity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $D\subset Y'$ be an evenly covered open disk, with inverse branches $s_i:D\to X'$ for $1\le i\le d=\deg h$. The pullback composition rule and $h\circ s_i=\operatorname{id}_D$ give
> $$
> \operatorname{tr}_h(h^*\lambda)|_D
> =\sum_{i=1}^d s_i^*(h^*\lambda)
> =\sum_{i=1}^d(h\circ s_i)^*\lambda
> =d\lambda|_D.
> $$
> Exercise 6.2.4 proves that the trace of a holomorphic differential extends holomorphically across every branch value. The pullback $h^*\lambda$ is holomorphic by Exercise 6.2.1. Thus the two holomorphic differentials agree on $Y'$ and, by continuity of their local coefficients, also at the excluded finite set. This proves (6.8).
>
> Dualizing the identity yields the corresponding identity $h_J\circ h^J=[d]$ on the Jacobian: for a functional $\psi$ on holomorphic differentials on $Y$,
> $$
> (\psi\circ\operatorname{tr}_h)\circ h^*=\psi\circ(d\operatorname{id})=d\psi.
> $$
> Since the dual maps preserve period lattices, this equality descends to their quotient tori.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formula:** Formula (6.8), printed p. 227 / PDF p. 241, is $\operatorname{tr}_h\circ h^*=(\deg h)\operatorname{id}$ on $\Omega^1_{\mathrm{hol}}(Y)$; that page was inspected directly.
- **Inputs:** The trace extension and pullback compatibility are proved independently in their corresponding archived exercises.
- **Routing:** The task concerns functorial maps on differentials and their Jacobian duals.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
