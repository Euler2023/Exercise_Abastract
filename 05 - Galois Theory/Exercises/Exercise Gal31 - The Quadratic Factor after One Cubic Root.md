---
title: "Exercise Gal31: The Quadratic Factor after One Cubic Root"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cubic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 8, Ex. 8.3, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal31: The Quadratic Factor after One Cubic Root

## Problem Statement

> [!question] Exercise 8.3
> Determine explicitly the quadratic $q(x)$ in (16.8.2), in terms of $\alpha_1$ and the coefficients of $f$.

## Hints

> [!hint]- Hint 1
> Divide $f(x)$ by $x-\alpha_1$.

## Solution

> [!success]- Solution
> For
> $$
> f(x)=x^3+a x^2+b x+c
> $$
> and $f(\alpha_1)=0$, synthetic division gives
> $$
> f(x)=(x-\alpha_1)\bigl(x^2+(a+\alpha_1)x+(b+a\alpha_1+\alpha_1^2)\bigr).
> $$
> Thus
> $$
> q(x)=x^2+(a+\alpha_1)x+b+a\alpha_1+\alpha_1^2.
> $$
> In Artin's alternating convention $x^3-s_1x^2+s_2x-s_3$, replace $a=-s_1,b=s_2$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

Direct polynomial division.
