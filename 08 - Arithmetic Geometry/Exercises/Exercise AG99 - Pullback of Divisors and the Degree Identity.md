---
title: "Exercise AG99: Pullback of Divisors and the Degree Identity"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.7, printed p. 230, PDF p. 244"
source_refs:
  - "S7/ch-6/sec-2/ex-7"
created: 2026-10-28
---

# Exercise AG99: Pullback of Divisors and the Degree Identity

## Problem Statement

> [!question] Original Exercise 6.2.7
> (a) Show that the map $h^D$ is a homomorphism and takes degree-$0$ divisors to degree-$0$ divisors.
>
> (b) Show that the composition $h_D\circ h^D$ multiplies by $\deg(h)$ in $\operatorname{Div}(Y)$.

## Hints

> [!hint]- Hint 1
> On a point $y$, the pullback is $h^D[y]=\sum_{x\in h^{-1}(y)}e_x[x]$.

> [!hint]- Hint 2
> Use the local-degree identity $\sum_{x\in h^{-1}(y)}e_x=\deg h$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $d=\deg h$. By definition, for a finite divisor $D=\sum_y n_y[y]$,
> $$
> h^D(D)=\sum_y n_y\sum_{x\in h^{-1}(y)}e_x[x].
> $$
> **(a)** Addition of divisors adds the coefficients $n_y$, so this formula is additive and takes zero to zero. It is a homomorphism. Each complex point has degree one. The degree formula for a finite nonconstant holomorphic map gives
> $$
> \deg(h^D D)=\sum_y n_y\sum_{x\in h^{-1}(y)}e_x
> =d\sum_y n_y=d\deg D.
> $$
> In particular degree zero is preserved.
>
> **(b)** The forward map sends $[x]$ to $[h(x)]$. Consequently
> $$
> h_D(h^D[y])=\sum_{x\in h^{-1}(y)}e_x[y]=d[y].
> $$
> The point divisors freely generate $\operatorname{Div}(Y)$, and both maps are homomorphisms. Their composition therefore equals multiplication by $d$ on every divisor.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Input:** The fiber-degree identity for nonconstant maps of compact connected Riemann surfaces is the local mapping theorem with its global degree count.
- **Boundary:** The displayed order of composition is on $\operatorname{Div}(Y)$. The opposite composition need not be scalar on $\operatorname{Div}(X)$.
- **Routing:** Divisor pullback and ramification multiplicities determine the proof.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
