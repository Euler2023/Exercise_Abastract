---
title: "Exercise MF89: The Mellin Integral for Hurwitz Zeta"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.7, Exercise 4.7.4, printed p. 138, PDF p. 152"
source_refs:
  - "S7/ch-4/sec-7/ex-4"
created: 2026-10-28
---

# Exercise MF89: The Mellin Integral for Hurwitz Zeta

## Problem Statement

> [!question] Original Exercise 4.7.4
> Compute that $g_r(s)=\Gamma(s)\zeta(s,r)$ when $\operatorname{Re}s>1$.
>
> Here $0<r\le1$, $f_r(t)=e^{-rt}/(1-e^{-t})$, $g_r(s)=\int_0^\infty f_r(t)t^sdt/t$, and $\zeta(s,r)=\sum_{n=0}^\infty(r+n)^{-s}$.

## Hints

> [!hint]- Hint 1
> Expand $f_r$ as its geometric series and use Exercise 4.7.3 to interchange sum and integral.

> [!hint]- Hint 2
> In its $n$th integral substitute $u=(r+n)t$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $t>0$, $f_r(t)=\sum_{n\ge0}e^{-(r+n)t}$. The absolute-integral estimate
> $$
> \sum_{n\ge0}\int_0^\infty e^{-(r+n)t}t^{\operatorname{Re}s-1}dt=\Gamma(\operatorname{Re}s)\sum_{n\ge0}(r+n)^{-\operatorname{Re}s}<\infty
> $$
> justifies the interchange. Substitution $u=(r+n)t$ gives $dt/t=du/u$ and $t^s=(r+n)^{-s}u^s$, so
> $$
> \begin{aligned}
> g_r(s)&=\sum_{n\ge0}\int_0^\infty e^{-(r+n)t}t^s\frac{dt}{t}\\
> &=\sum_{n\ge0}(r+n)^{-s}\int_0^\infty e^{-u}u^s\frac{du}{u}\\
> &=\Gamma(s)\sum_{n\ge0}(r+n)^{-s}=\Gamma(s)\zeta(s,r).
> \end{aligned}
> $$
> All positive real powers are defined using their real logarithms. This proves the Mellin identity in its initial half-plane, including $r=1$, where it reduces to the Riemann-zeta identity.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.7.4, printed p. 138 / PDF p. 152]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** The definitions and requested identity are on printed pp.135–136/PDF pp.149–150. No analytic continuation is needed for this identity in $\operatorname{Re}s>1$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
