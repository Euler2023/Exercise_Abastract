---
title: "Exercise R13: Discriminants of x^n + px + q"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, discriminant]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.4, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R13: Discriminants of $x^n+px+q$

## Problem Statement

> [!question] Exercise 2.4
> Determine the discriminants of (a) $x^3+px+q$, (b) $x^4+px+q$, and (c) $x^5+px+q$.

## Hints

> [!hint]- Hint 1
> Use $\operatorname{disc}(f)=(-1)^{n(n-1)/2}\operatorname{Res}(f,f')$.

## Solution

> [!success]- Solution
> The resultant calculation gives
> $$
> \operatorname{disc}(x^n+px+q)=(-1)^{n(n-1)/2}
> \left(n^nq^{n-1}+(-1)^{n-1}(n-1)^{n-1}p^n\right).
> $$
> Hence
> $$
> \begin{aligned}
> \operatorname{disc}(x^3+px+q)&=-4p^3-27q^2,\\
> \operatorname{disc}(x^4+px+q)&=256q^3-27p^4,\\
> \operatorname{disc}(x^5+px+q)&=256p^5+3125q^4.
> \end{aligned}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The standard resultant formula is an external input; the specialization is exact.
