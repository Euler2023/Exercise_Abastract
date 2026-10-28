---
title: "Exercise AG77: Orders of Differentials at Elliptic Points and Cusps"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.5, printed p. 83, PDF p. 97"
source_refs:
  - "S7/ch-3/sec-3/ex-5"
created: 2026-10-28
---

# Exercise AG77: Orders of Differentials at Elliptic Points and Cusps

## Problem Statement

> [!question] Original Exercise 3.3.5
> Prove formulas (3.8) and (3.9).
>
> **Referenced formulas, printed p. 82 / PDF p. 96.** For $k=2n$ and the differential corresponding to $f\in\mathcal A_k(\Gamma)$,
> $$
> \nu_0(\omega_j)=\nu_{\pi(\tau_j)}(f)-\frac{k}{2}\left(1-\frac1h\right)\tag{3.8}
> $$
> at an interior point of period $h$, and
> $$
> \nu_0(\omega_j)=\nu_{\pi(s_j)}(f)-\frac k2\tag{3.9}
> $$
> at a cusp of width $h$. The order of a differential is the order of its coefficient in the local surface coordinate.

## Hints

> [!hint]- Hint 1
> At an interior point, $z^nu(z)=g_j(z^h)$ implies $h\nu_0(g_j)=n+\nu_{\tau_j}(f)$.

> [!hint]- Hint 2
> In (3.6) and (3.7), subtract the order of the denominator from that of the numerator.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Suppose first $f\ne0$, and put $n=k/2$. At an interior point, changing from $\tau$ to the straightened coordinate $z$ multiplies the coefficient by a holomorphic nonzero derivative factor. Hence the order $m$ of $u(z)=f[\delta_j^{-1}]_{2n}(z)$ at zero equals $\nu_{\tau_j}(f)$.
>
> The identity $z^nu(z)=g_j(z^h)$ therefore gives
> $$
> h\nu_0(g_j)=m+n.
> $$
> Using $\omega_j=g_j(q)(hq)^{-n}(dq)^n$ and $\nu_{\pi(\tau_j)}(f)=m/h$, we find
> $$
> \begin{aligned}
> \nu_0(\omega_j)&=\nu_0(g_j)-n\\
> &=\frac{m+n}{h}-n
> =\nu_{\pi(\tau_j)}(f)-n\left(1-\frac1h\right).
> \end{aligned}
> $$
> This proves (3.8). In particular, rotational invariance gives $h\mid(m+n)$, explaining why the expression is integral despite the fractional normalized order of $f$.
>
> At a cusp, write $f[\delta_j^{-1}]_{2n}=g_j(q)$ with $q=e^{2\pi iz/h}$. By the normalized definition of cusp order, $\nu_0(g_j)=\nu_{\pi(s_j)}(f)$. Even weight makes $g_j$ meromorphic in this width variable even at an irregular cusp. Formula (3.7) now gives
> $$
> \nu_0(\omega_j)=\nu_0(g_j)-n
> =\nu_{\pi(s_j)}(f)-\frac k2,
> $$
> proving (3.9).
>
> For $f=0$, both corresponding differentials and all orders are zero-object orders $\infty$; with $\infty-a=\infty$ for finite $a$, the same formulas hold.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 83 / PDF 97. The solution above is independently derived.
- **Imported input:** The two local coefficients (3.6),(3.7), whose pullbacks are explicitly checked in Exercise 3.3.4, are used. The order arithmetic and integrality condition are derived here.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
