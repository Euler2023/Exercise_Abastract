---
title: "Exercise MF91: The Quasiperiod and the Weight Two Eisenstein Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.3, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-3"
created: 2026-10-28
---

# Exercise MF91: The Quasiperiod and the Weight Two Eisenstein Series

## Problem Statement

> [!question] Original Exercise 4.8.3
> The actual formula for $\eta_2(\Lambda_\tau)$ in[Lan73] is
> $$
> \eta_2(\Lambda_\tau)=\frac{(2\pi i)^2}{12}\left(-1+24\sum_{m=1}^\infty\frac{mq^m}{1-q^m}\right).
> $$
> Prove that the right side is $G_2(\tau)$.

## Hints

> [!hint]- Hint 1
> Expand each geometric denominator and collect the coefficient of $q^n$.

> [!hint]- Hint 2
> The normalization here is $G_2=2\zeta(2)+2(2\pi i)^2\sum_{n\ge1}\sigma_1(n)q^n$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $|q|<1$, the double sum is absolutely convergent, since $\sum_{m\ge1}m|q|^m/(1-|q|^m)<\infty$. Therefore
> $$
> \sum_{m\ge1}\frac{mq^m}{1-q^m}=\sum_{m,r\ge1}m q^{mr}=\sum_{n\ge1}\left(\sum_{m\mid n}m\right)q^n=\sum_{n\ge1}\sigma_1(n)q^n.
> $$
> Since $(2\pi i)^2=-4\pi^2$, the constant term in the proposed expression is $\pi^2/3=2\zeta(2)$ and its nonconstant part is $2(2\pi i)^2\sum\sigma_1(n)q^n$. These are precisely the constant term and coefficients of the weight-two Eisenstein expansion established earlier. Thus the expression equals $G_2(\tau)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
