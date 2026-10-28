---
title: "Exercise AG92: Degree One Meromorphic Functions and Genus"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.1, Exercise 6.1.3, printed p. 221, PDF p. 235"
source_refs:
  - "S7/ch-6/sec-1/ex-3"
created: 2026-10-28
---

# Exercise AG92: Degree One Meromorphic Functions and Genus

## Problem Statement

> [!question] Original Exercise 6.1.3
> Use the Riemann–Hurwitz formula from Section 3.1 to show that if $X$ has genus $g>0$ then there are no functions $f\in\mathbb C(X)$ of degree $1$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> A nonconstant meromorphic function is a holomorphic map to $\mathbb P^1(\mathbb C)$, which has genus zero.

> [!hint]- Hint 2
> For a map of degree one every ramification index is one. Substitute in Riemann–Hurwitz.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Suppose $f$ had degree one. It is a nonconstant holomorphic map $X\to\mathbb P^1(\mathbb C)$. The local mapping theorem gives positive local degrees $e_x$ with $\sum_{x\in f^{-1}(y)}e_x=\deg f=1$ for every $y$. Hence every fiber has one point with $e_x=1$, and the ramification sum is zero.
>
> Riemann–Hurwitz for a nonconstant holomorphic map between compact connected Riemann surfaces says
> $$
> 2g(X)-2=\deg(f)\bigl(2g(\mathbb P^1)-2\bigr)+\sum_{x\in X}(e_x-1).
> $$
> Since $g(\mathbb P^1)=0$, the right side is $-2$. Thus $2g(X)-2=-2$ and $g(X)=0$, contradicting $g>0$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Proof input:** Riemann–Hurwitz is the theorem explicitly requested by the exercise; it is not reproved here.
- **Boundary:** The conclusion concerns nonconstant meromorphic maps of degree one. A constant function has degree zero.
- **Routing:** Genus and ramification of curves determine the result.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
