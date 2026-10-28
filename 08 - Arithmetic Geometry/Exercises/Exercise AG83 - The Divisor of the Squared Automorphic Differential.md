---
title: "Exercise AG83: The Divisor of the Squared Automorphic Differential"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.6, Exercise 3.6.1, printed p. 92, PDF p. 106"
source_refs:
  - "S7/ch-3/sec-6/ex-1"
created: 2026-10-28
---

# Exercise AG83: The Divisor of the Squared Automorphic Differential

## Problem Statement

> [!question] Original Exercise 3.6.1
> Establish the formula $\operatorname{div}(f)=2\operatorname{div}(f)+k\operatorname{div}(d\tau)$ in the context of the section.
>
> Throughout, $k$ is odd, $-I\notin\Gamma$, and $0\ne f\in A_k(\Gamma)$. The differential $\omega\in\Omega^{\otimes k}(X(\Gamma))$ pulls back to $f(\tau)^2(d\tau)^k$. Write $x_{3,i}$ for period-three elliptic points, $x_i$ for regular cusps, and $x_i'$ for irregular cusps. The formal divisor is
> $$
> \operatorname{div}(d\tau)=-\tfrac23\sum_i x_{3,i}-\sum_i x_i-\sum_i x_i'.
> $$

> [!warning] Source issue
> The exercise prints $\operatorname{div}(f)$ on its left side. The immediately preceding derivation on printed p.90 / PDF104 gives $\operatorname{div}(\omega)$ there. The printed identity is false in general; the corrected differential identity is proved below.

## Hints

> [!hint]- Hint 1
> Apply the even-weight local formula to the weight-$2k$ form $f^2$.

> [!hint]- Hint 2
> The differential is $\omega(f^2)$, whose divisor supplies the left side.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The weight-$2k$ differential correspondence sends $f^2$ to $\omega$. At an elliptic point of period $h=3$, its local order is $2\nu_x(f)-k(1-1/3)$; at an ordinary interior point it is $2\nu_x(f)$; and at either type of cusp it is $2\nu_x(f)-k$. These statements follow by substituting $q=z^3$ or $q=e^{2\pi i\tau/h_s}$ in the pulled-back differential. They give the corrected identity coefficient by coefficient:
> $$
> \boxed{\operatorname{div}(\omega)=2\operatorname{div}(f)+k\operatorname{div}(d\tau).}
> $$
> In particular,
> $$
> \operatorname{div}(f)=\tfrac12\operatorname{div}(\omega)+\tfrac{k}{3}\sum_i x_{3,i}+\tfrac{k}{2}\sum_i x_i+\tfrac{k}{2}\sum_i x_i'.
> $$
> This is equation (3.13) used in the next exercises.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 92 / PDF 106. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
