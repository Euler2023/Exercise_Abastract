---
title: "Exercise AG95: Norms and Orders at Branch Points"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.2, printed p. 229, PDF p. 243"
source_refs:
  - "S7/ch-6/sec-2/ex-2"
created: 2026-10-28
---

# Exercise AG95: Norms and Orders at Branch Points

## Problem Statement

> [!question] Original Exercise 6.2.2
> (a) Show that the norm function defined in the section is meromorphic. (A hint for this exercise is at the end of the book.)
>
> (b) Show that if $f\in\mathbb C(X)$ then $\nu_y(\operatorname{norm}_h f)=\sum_{x\in h^{-1}(y)}\nu_x(f)$ at any point $y\in Y$.

## Hints

> [!hint]- Hint 1
> Away from branch values the norm is the product of $f$ over all local inverse branches.

> [!hint]- Hint 2
> At a point of ramification degree $e$, use $r=q^e$ and $f=q^n u(q)$. The product over all $e$ branches has order $n$ in $r$, rather than $en$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $h:X\to Y$ be the nonconstant map of compact Riemann surfaces in the section and first take $f\ne0$. Outside the branch values define
> $$
> (\operatorname{norm}_h f)(y)=\prod_{x\in h^{-1}(y)}f(x).
> $$
> Local inverse branches show this is meromorphic there. Their permutation on overlaps does not change the product.
>
> **(a)** Fix $y_0$ and take sufficiently small local neighborhoods of all points $x\in h^{-1}(y_0)$. The local mapping theorem provides $r=q^{e_x}$. Write $f(q)=q^{n_x}u_x(q)$ with $u_x$ holomorphic and nonzero at zero. For $\zeta=e^{2\pi i/e_x}$ the contribution to the product from this neighborhood, using $r=q^{e_x}$, is
> $$
> \prod_{j=0}^{e_x-1}f(\zeta^j q)
> =\zeta^{n_xe_x(e_x-1)/2}\,r^{n_x}\prod_{j=0}^{e_x-1}u_x(\zeta^j q).
> $$
> The last product is holomorphic in $q$ and invariant under $q\mapsto\zeta q$. Its convergent power series therefore contains only powers divisible by $e_x$, so it is a holomorphic function $U_x(r)$. Moreover $U_x(0)=u_x(0)^{e_x}\ne0$. Each local contribution is consequently a meromorphic function of $r$, with order $n_x$. Multiplying over the finitely many points above $y_0$ extends the norm meromorphically across $y_0$ and agrees with its definition off the branch values. Such extensions are unique and glue on $Y$.
>
> **(b)** In that product the constant root-of-unity factors and all $U_x(r)$ are units. The total power of $r$ is $\sum_x n_x$, hence
> $$
> \nu_{y_0}(\operatorname{norm}_h f)=\sum_{x\in h^{-1}(y_0)}n_x
> =\sum_{x\in h^{-1}(y_0)}\nu_x(f).
> $$
> For $f=0$ the norm is identically zero. The order statement is then meaningful if one declares $\nu(0)=+\infty$; otherwise it is a statement for $f\ne0$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Order convention:** For the printed $f\in\mathbb C(X)$, use the source convention $\nu(0)=\infty$; for finite integer orders assume $f\ne0$ as in the solution.
- **Multiplicity boundary:** Ramification is already accounted for by the inverse branches. The local norm contributes order $n_x$, so no additional factor $e_x$ belongs in the final sum.
- **Routing:** The proof uses local ramification parameters and divisors of meromorphic functions.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
