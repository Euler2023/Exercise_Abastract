---
title: "Exercise AG109: Local Expressions for Secant Slopes"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.7, printed p. 271, PDF p. 284"
source_refs:
  - "S7/ch-7/sec-2/ex-7"
created: 2026-10-28
---

# Exercise AG109: Local Expressions for Secant Slopes

## Problem Statement

> [!question] Original Exercise 7.2.7
> Derive the new expressions for $\lambda$ and $\mu$ in the section.

> **Context and notation.** Printed p. 267 / PDF p. 280 replaces $\lambda=(y-y_P)/(x-x_P)$ and $\mu=(xy_P-x_Py)/(x-x_P)$ by
> $$
> \lambda=\frac{4(x_P^2+x_Px+x^2)-g_2}{y_P+y},\qquad
> \mu=\frac{-4(x_P^2x+x_Px^2)-g_3+y_Py}{y_P+y}.
> $$

## Hints

> [!hint]- Hint 1
> Multiply the secant expressions by $y+y_P$ and use both cubic equations.

> [!hint]- Hint 2
> Factor $xf(x_P)-x_Pf(x)$ by $x-x_P$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Put $f(x)=4x^3-g_2x-g_3$ and write $P=(a,b)$, so $b^2=f(a)$ and $y^2=f(x)$. Starting with $\lambda=(y-b)/(x-a)$, multiply by $(y+b)/(y+b)$:
> $$
> \lambda=\frac{y^2-b^2}{(x-a)(y+b)}
> =\frac{f(x)-f(a)}{(x-a)(y+b)}
> =\frac{4(x^2+ax+a^2)-g_2}{y+b}.
> $$
> For $\mu=(xb-ay)/(x-a)$, the numerator after the same multiplication is
> $$
> (xb-ay)(y+b)
> =(x-a)by+xb^2-ay^2.
> $$
> Furthermore
> $$
> xf(a)-af(x)
> =(x-a)\bigl(-4ax(a+x)-g_3\bigr).
> $$
> Canceling $x-a$ gives
> $$
> \mu=\frac{by-4(a^2x+ax^2)-g_3}{y+b}.
> $$
> These are equalities in the function field, so canceling a nonzero polynomial is legitimate. At $x=a,y=b\ne0$, the formulas become
> $$
> \lambda=\frac{12a^2-g_2}{2b},\qquad
> \mu=\frac{b^2-8a^3-g_3}{2b}
> =\frac{-4a^3-g_2a-2g_3}{2b},
> $$
> the tangent slope and intercept. They extend the secant expressions across that point. They still cannot be used where $y=-b$; alternate expressions or local uniformizers handle those evaluations.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 271 / PDF p. 284. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
