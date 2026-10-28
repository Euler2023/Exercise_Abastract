---
title: "Exercise AG84: Integral Parts at Regular and Irregular Cusps"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.6, Exercise 3.6.2, printed p. 92, PDF p. 106"
source_refs:
  - "S7/ch-3/sec-6/ex-2"
created: 2026-10-28
---

# Exercise AG84: Integral Parts at Regular and Irregular Cusps

## Problem Statement

> [!question] Original Exercise 3.6.2
> (a) Show that at a point $x=x_i$ the integral part of $\nu_x(f)$ is $\tfrac12\nu_x(\omega)+k/2$, a sum of half-integers.
>
> (b) Show that at a point $x=x_i'$ the integral part of $\nu_x(f)$ is $\tfrac12\nu_x(\omega)+(k-1)/2$, a sum of integers.
>
> Throughout, $k$ is odd, $-I\notin\Gamma$, and $0\ne f\in A_k(\Gamma)$. The differential $\omega\in\Omega^{\otimes k}(X(\Gamma))$ pulls back to $f(\tau)^2(d\tau)^k$. Write $x_{3,i}$ for period-three elliptic points, $x_i$ for regular cusps, and $x_i'$ for irregular cusps. The formal divisor is
> $$
> \operatorname{div}(d\tau)=-\tfrac23\sum_i x_{3,i}-\sum_i x_i-\sum_i x_i'.
> $$

## Hints

> [!hint]- Hint 1
> A regular cusp has integral normalized orders; an irregular cusp has orders in $\mathbb Z+1/2$ for odd weight.

> [!hint]- Hint 2
> Use $\nu_x(\omega)=2\nu_x(f)-k$ and determine its parity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $m=\nu_x(f)$. At either cusp type the local differential calculation gives $\nu_x(\omega)=2m-k$.
>
> **(a)** At a regular cusp the generator has positive sign, so its Fourier exponents in the surface parameter are integral and $m\in\mathbb Z$. Since $k$ is odd, $2m-k$ is odd. Therefore $\nu_x(\omega)/2$ and $k/2$ are both strict half-integers, whose sum is the integer $m$. Consequently
> $$
> \lfloor\nu_x(f)\rfloor=m=\tfrac12\nu_x(\omega)+k/2.
> $$
> **(b)** At an irregular cusp the negative translation gives $F(\tau+h_s)=-F(\tau)$ in odd weight. Its exponents are in $\mathbb Z+1/2$, so $m=n+1/2$ for an integer $n$. Now $2m-k=2n+1-k$ is even. It follows that
> $$
> \lfloor\nu_x(f)\rfloor=n=\tfrac12\nu_x(\omega)+(k-1)/2,
> $$
> a sum of integers. These arguments also apply when the leading Fourier exponent is negative.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 92 / PDF 106. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
