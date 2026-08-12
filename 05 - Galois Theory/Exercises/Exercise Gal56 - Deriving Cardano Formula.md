---
title: "Exercise Gal56: Deriving Cardano's Formula"
topic: galois-theory
difficulty: advanced
status: in-progress
tags:
  - exercise
  - galois-theory
  - cubic-polynomials
  - solvability-by-radicals
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 11, Ex. 11.4, printed p. 510, PDF p. 522
created: 2026-08-12
---

# Exercise Gal56: Deriving Cardano's Formula

## Problem Statement

> [!question] Exercise 11.4
> Carry out the computation leading to Cardano's formula (16.13.3).

## Hints

> [!hint]- Hint 1
> Set $x=u+v$ and impose $3uv=-p$.

## Solution

> [!success]- Solution
> For $x^3+px+q=0$, put $x=u+v$. Then
> $$
> u^3+v^3+(3uv+p)(u+v)+q=0.
> $$
> Choose $uv=-p/3$. Now $U=u^3,V=v^3$ satisfy
> $$
> U+V=-q,\qquad UV=-\frac{p^3}{27}.
> $$
> Thus
> $$
> U,V=-\frac q2\pm\sqrt{\frac{q^2}{4}+\frac{p^3}{27}},
> $$
> and
> $$
> x=\sqrt[3]{-\frac q2+\sqrt{\frac{q^2}{4}+\frac{p^3}{27}}}
> +\sqrt[3]{-\frac q2-\sqrt{\frac{q^2}{4}+\frac{p^3}{27}}},
> $$
> with cube-root choices constrained by $uv=-p/3$. Multiplying one choice by $\omega$ and the other by $\omega^{-1}$ gives the other two roots.

## Related Concepts

- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]

## Notes

The compatibility of cube-root branches is part of the formula, not an optional convention.
