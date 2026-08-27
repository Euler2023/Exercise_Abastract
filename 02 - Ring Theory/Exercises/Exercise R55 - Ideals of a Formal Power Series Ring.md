---
title: "Exercise R55: Ideals of a Formal Power Series Ring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - formal-power-series
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.10, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R55: Ideals of a Formal Power Series Ring

## Problem Statement

> [!question] Exercise 3.10
> Determine all ideals of the ring $F[[t]]$ of formal power series with coefficients in a field $F$.

## Hints

> [!hint]- Hint 1
> Every nonzero series is $t^n$ times a unit; choose the least order occurring in a nonzero ideal.

## Solution

> [!success]- Solution
> For a nonzero series $f$, let $\operatorname{ord}(f)$ be the least exponent with nonzero coefficient. Then
>
> $$
> f=t^{\operatorname{ord}(f)}u
> $$
>
> with $u$ a unit because its constant term is nonzero. Let $I\ne0$ and choose $f\in I$ of least order $n$. The factorization above gives $t^n=fu^{-1}\in I$, so $(t^n)\subseteq I$. Every $g\in I$ has order at least $n$, hence is divisible by $t^n$, so $I\subseteq(t^n)$. Therefore all ideals are
>
> $$
> (0),(1),(t),(t^2),(t^3),\ldots.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.10, printed p. 355, PDF p. 367]. The valuation-style proof is independent.

