---
title: "Exercise AG94: Pullbacks of Functions and Holomorphic Differentials"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.1, printed pp. 228–229, PDF pp. 242–243"
source_refs:
  - "S7/ch-6/sec-2/ex-1"
created: 2026-10-28
---

# Exercise AG94: Pullbacks of Functions and Holomorphic Differentials

## Problem Statement

> [!question] Original Exercise 6.2.1
> (a) Show that if $h:X\longrightarrow Y$ is a nonconstant holomorphic map of compact Riemann surfaces and $g\in\mathbb C(Y)$ then $\nu_x(h^*g)=e_x\nu_{h(x)}(g)$ at any point $x\in X$.
>
> (b) Show that the pullback $h^*\lambda$ of a holomorphic differential $\lambda$ on $Y$ satisfies the compatibility condition on $X$.

## Hints

> [!hint]- Hint 1
> Use local parameters $q$ at $x$ and $r$ at $h(x)$ with $r\circ h=q^{e_x}$. Factor a nonzero meromorphic function as $r^n$ times a holomorphic unit.

> [!hint]- Hint 2
> Write the pullback of $a(r)dr$ as $a(r(q))r'(q)dq$ and apply the chain rule on chart overlaps.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** First assume $g\ne0$, so its finite order of vanishing is defined. Put $y=h(x)$ and choose local coordinates with $r(y)=q(x)=0$ and $r\circ h=q^{e_x}$, using the local mapping theorem. Write
> $$
> g(r)=r^n u(r),\qquad n=\nu_y(g)\in\mathbb Z,\qquad u(0)\ne0.
> $$
> Then
> $$
> h^*g(q)=q^{e_x n}u(q^{e_x}),
> $$
> and the last factor is a holomorphic unit. Its order is therefore $e_x n$, proving the formula. If the convention $\nu(0)=+\infty$ is adopted, the zero function also satisfies the formula with $e_x\cdot\infty=\infty$.
>
> **(b)** In source coordinate $q$ and target coordinate $r$, write $\lambda=a_r(r)dr$. Its pullback is
> $$
> h^*\lambda=a_r(r(h(q)))\frac{d(r\circ h)}{dq}\,dq.
> $$
> This coefficient is holomorphic. If another target coordinate is $s=s(r)$ with $\lambda=a_s(s)ds$, compatibility on $Y$ says $a_r(r)=a_s(s(r))s'(r)$; the chain rule gives the same pullback coefficient. If the source coordinate changes to $v=v(q)$, then
> $$
> a_r(r(h(q)))\frac{d(r\circ h)}{dq}
> = a_r(r(h(v)))\frac{d(r\circ h)}{dv}\frac{dv}{dq}.
> $$
> This is exactly the differential compatibility condition between the two source charts, so the local expressions define a global holomorphic differential on $X$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source issue / convention:** The printed statement allows $g=0$. Orders as integers are defined only for nonzero meromorphic functions; the proof states that hypothesis or uses the explicitly declared infinite-order convention.
- **Imported input:** The local form $r\circ h=q^{e_x}$ for a nonconstant holomorphic map is the local mapping theorem.
- **Routing:** Local parameters, vanishing orders and differential compatibility are geometric tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
