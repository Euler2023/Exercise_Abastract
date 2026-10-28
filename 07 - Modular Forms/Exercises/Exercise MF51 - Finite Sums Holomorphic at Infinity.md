---
title: "Exercise MF51: Finite Sums Holomorphic at Infinity"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.4, printed p. 168, PDF p. 182"
source_refs:
  - "S7/ch-5/sec-1/ex-4"
created: 2026-10-28
---

# Exercise MF51: Finite Sums Holomorphic at Infinity

## Problem Statement

> [!question] Original Exercise 5.1.4
> Show that if $g_1,\ldots,g_d:\mathcal H\longrightarrow\mathbb C$ are holomorphic at infinity, then so is their sum $g_1+\cdots+g_d$. (A hint for this exercise is at the end of the book.)
>
> **Meaning in the section, printed pp. 165–166 / PDF pp. 179–180.** Each $g_j$ has an expansion $g_j(z)=\sum_{n\geq0}a_n(g_j)e^{2\pi inz/h_j}$ with a positive integer period $h_j$.

## Hints

> [!hint]- Hint 1
> Put the expansions in a common parameter.

> [!hint]- Hint 2
> Take $H=\operatorname{lcm}(h_1,\ldots,h_d)$ and $q=e^{2\pi iz/H}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> There is a function $G_j$ holomorphic at zero with $g_j(z)=G_j(e^{2\pi iz/h_j})$. Let $H=\operatorname{lcm}(h_1,\ldots,h_d)$ and $m_j=H/h_j\in\mathbb Z_{>0}$. In the common parameter $q=e^{2\pi iz/H}$,
> $$
> \sum_jg_j(z)=\sum_jG_j(q^{m_j}).
> $$
> Each composition is holomorphic near $q=0$, so their finite sum extends holomorphically there. More explicitly, its expansion is
> $$
> \sum_{m\geq0}b_mq^m,\qquad
> b_m=\sum_{j:m_j\mid m}a_{m/m_j}(g_j).
> $$
> Only nonnegative exponents occur, and the formula is a finite sum of convergent power series. This proves holomorphy at infinity.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.4, printed p. 168 / PDF p. 182]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Period boundary:** The section uses positive integer periods, so a common multiple exists. No commensurability of arbitrary real periods is assumed. The common-period hint is in Appendix A, printed p. 421 / PDF p. 432.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
