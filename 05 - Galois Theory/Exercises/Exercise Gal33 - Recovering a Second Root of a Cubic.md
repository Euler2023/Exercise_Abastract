---
title: "Exercise Gal33: Recovering a Second Root of a Cubic"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cubic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 8, Ex. 8.5, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal33: Recovering a Second Root of a Cubic

## Problem Statement

> [!question] Exercise 8.5
> If $\alpha_i$ are the roots of $f(x)=x^3+px+q$, find a formula for $\alpha_2$ in terms of $\alpha_1$, the square root $\delta$ of the discriminant, and the coefficients.

## Hints

> [!hint]- Hint 1
> Factor by $x-\alpha_1$, use the quadratic formula, and express its discriminant through $\delta/f'(\alpha_1)$.

## Solution

> [!success]- Solution
> Division gives
> $$
> f(x)=(x-\alpha_1)(x^2+\alpha_1x+\alpha_1^2+p).
> $$
> Thus
> $$
> \alpha_{2,3}=\frac{-\alpha_1\pm\sqrt{-3\alpha_1^2-4p}}2.
> $$
> With $\delta=(\alpha_1-\alpha_2)(\alpha_1-\alpha_3)(\alpha_2-\alpha_3)$ and $f'(\alpha_1)=(\alpha_1-\alpha_2)(\alpha_1-\alpha_3)=3\alpha_1^2+p$, one has
> $$
> \alpha_2-\alpha_3=\frac{\delta}{3\alpha_1^2+p}.
> $$
> Hence, after orienting $\delta$,
> $$
> \boxed{\alpha_2=\frac12\left(-\alpha_1+\frac{\delta}{3\alpha_1^2+p}\right)},\qquad
> \alpha_3=\frac12\left(-\alpha_1-\frac{\delta}{3\alpha_1^2+p}\right).
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The formula assumes the cubic is separable, so $f'(\alpha_1)\ne0$.
