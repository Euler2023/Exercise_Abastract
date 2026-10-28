---
title: "Exercise AG80: The Local Order Inequality for a Sum"
topic: arithmetic-geometry
difficulty: beginner
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.4, Exercise 3.4.2, printed p. 85, PDF p. 99"
source_refs:
  - "S7/ch-3/sec-4/ex-2"
created: 2026-10-28
---

# Exercise AG80: The Local Order Inequality for a Sum

## Problem Statement

> [!question] Original Exercise 3.4.2
> Show that $\nu_x(f_1+f_2)\ge\min\{\nu_x(f_1),\nu_x(f_2)\}$ for $f_1,f_2\in\mathbb C(X)$ where $x$ is any point of the compact Riemann surface $X$.

## Hints

> [!hint]- Hint 1
> Use a local coordinate vanishing at $x$ and factor out the smaller Laurent exponent.

> [!hint]- Hint 2
> Allow $\nu_x(0)=+\infty$; cancellation can only increase the order.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $\nu_x(0)=+\infty$. If either summand is zero the assertion follows immediately. Otherwise, in a coordinate $z$ centered at $x$, write $f_1=z^m u$ and $f_2=z^n v$, where $u,v$ are holomorphic units and $m,n\in\mathbb Z$. Assume $m\le n$. Then
> $$
> f_1+f_2=z^m\bigl(u+z^{n-m}v\bigr).
> $$
> The parenthesized function is holomorphic, so its order is nonnegative, unless it is identically zero, in which case its order is $+\infty$. Thus the order of the sum is at least $m$. If $m<n$, its value at zero is $u(0)\ne0$, so equality holds. For $m=n$, cancellation of leading coefficients accounts for every possible strict inequality. The argument is local and therefore applies at every point of $X$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 85 / PDF 99. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
