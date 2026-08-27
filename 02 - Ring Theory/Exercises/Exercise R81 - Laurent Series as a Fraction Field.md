---
title: "Exercise R81: Laurent Series as a Fraction Field"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - formal-power-series
  - fraction-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §7, Ex. 7.4, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R81: Laurent Series as a Fraction Field

## Problem Statement

> [!question] Exercise 7.4
> Prove that the field of fractions of $F[[x]]$ is obtained by inverting $x$. Give a neat description of its elements.

## Hints

> [!hint]- Hint 1
> Every nonzero power series is $x^n$ times a unit.

## Solution

> [!success]- Solution
> Every nonzero $g\in F[[x]]$ has a unique form $g=x^n u$, where $u$ has nonzero constant term and is therefore a unit. Thus for $f/g$,
>
> $$
> \frac fg=x^{-n}fu^{-1}.
> $$
>
> Hence it suffices to invert $x$. The resulting field consists of formal Laurent series
>
> $$
> F((x))=\left\{\sum_{k=N}^{\infty}a_kx^k:N\in\mathbb Z\right\},
> $$
>
> whose exponents are bounded below. Conversely, every such series is $x^N$ times a power series, so it belongs to the localization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Notation boundary:** $F((x))$ allows infinitely many nonnegative powers but only finitely many negative powers; it differs from the Laurent polynomial ring.
- **Source status:** The problem is from [S1, Ch. 11, §7, Ex. 7.4, printed p. 357, PDF p. 369]. The description is independent.
